import { useFrame } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import * as THREE from 'three';

// フラグメントシェーダー
const fragmentShader = `
  uniform float time;
  uniform float roughness;
  uniform vec3 directionalLightDirection; // 光源の方向を追加
  uniform vec3 directionalLightColor; // 光源の色を追加
  uniform float opacity; // 透明度を追加
  
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  
  // カスタムハッシュ関数（名前を変更）
  float customHash(vec3 p) {
    p  = fract( p*0.3183099+.1 );
    p *= 17.0;
    return fract( p.x*p.y*p.z*(p.x+p.y+p.z) );
  }
  
  // ノイズ関数（カスタムハッシュ関数を使用）
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(customHash(i + vec3(0, 0, 0)), 
                       customHash(i + vec3(1, 0, 0)), f.x),
                   mix(customHash(i + vec3(0, 1, 0)), 
                       customHash(i + vec3(1, 1, 0)), f.x), f.y),
               mix(mix(customHash(i + vec3(0, 0, 1)), 
                       customHash(i + vec3(1, 0, 1)), f.x),
                   mix(customHash(i + vec3(0, 1, 1)), 
                       customHash(i + vec3(1, 1, 1)), f.x), f.y), f.z);
  }
  
  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    
    // ノイズを使用して法線を変更
    vec3 noiseCoord = normal * 10.0 + time * 0.1;
    float noiseValue = noise(noiseCoord) * 2.0 - 1.0;
    normal += noiseValue * roughness;
    normal = normalize(normal);
    
    // フレネル効果
    float fresnel = pow(1.0 - dot(viewDir, normal), 5.0);
    
    // Directional Lightの影響を計算
    float lightIntensity = max(dot(normal, directionalLightDirection), 0.0);
    vec3 lightEffect = directionalLightColor * lightIntensity;
    
    // 最終的な色
    vec3 baseColor = mix(vec3(0.9, 0.9, 0.9), vec3(1.0), fresnel);
    vec3 finalColor = baseColor * lightEffect;
    
    gl_FragColor = vec4(finalColor, opacity); // 透明度を反映
  }
`;

// バーテックスシェーダー
const vertexShader = `
  varying vec3 vNormal;
  varying vec3 vViewPosition;
  
  void main() {
    vNormal = normalize(normalMatrix * normal);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// シェーダーマテリアルの作成
const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    transparent: true, // 透明を有効にする
    uniforms: {
        time: { value: 1.0 },
        roughness: { value: 0.1 },
        directionalLightDirection: {
            value: new THREE.Vector3(10, 10, 10).normalize(),
        },
        directionalLightColor: { value: new THREE.Color(0xffffff) },
        opacity: { value: 0.5 }, // 透明度の初期値
    },
});

function FrostedGlassModel({
    object,
}: {
    object: THREE.Group<THREE.Object3DEventMap>;
}) {
    const materialRef = useRef<THREE.Material>(null);
    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.01;
        }
    });
    useEffect(() => {
        object.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
                const mesh = child as THREE.Mesh;
                mesh.material = material;
                materialRef.current = mesh.material;
            }
        });
    }, [object]);

    return <primitive object={object} ref={ref} />;
}
