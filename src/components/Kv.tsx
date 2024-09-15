'use client';
import { OrthographicCamera, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {
    Suspense,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import * as THREE from 'three';
import CanvasLoader from './CanvasLoader';

function Light() {
    const dirLight = useRef<THREE.DirectionalLight>(null);
    return (
        <>
            <directionalLight
                intensity={5}
                position={[10, 10, -10]}
                rotation={[0, 0, 0]}
                color="#ffffff"
            />
            <directionalLight
                intensity={5}
                position={[-10, 10, 10]}
                rotation={[0, 0, 0]}
                color="#ffffff"
                ref={dirLight}
            />
        </>
    );
}
const vertexShader = `
varying vec3 vNormal;
varying vec3 vPosition;
uniform float distortion;
uniform float maxDistortion;

void main() {
    vNormal = normal;

    vec3 distortedPosition = position + normal * distortion * 0.5;

    distortedPosition = position + clamp(distortedPosition - position, -maxDistortion, maxDistortion);

    vPosition = distortedPosition;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(distortedPosition, 1.0);
}
`;

const fragmentShader = `
varying vec3 vNormal;
varying vec3 vPosition;
uniform float scrollY;

void main() {
    vec3 baseColor = vec3(0.9); // 白に近いグレー
    float opacity = 0.3;
    vec3 color;

    color = baseColor;

    gl_FragColor = vec4(color, opacity);
}
`;

function Model({
    containerSize,
}: {
    containerSize: { width: number; height: number };
}) {
    const ref = useRef<THREE.Mesh>(null);
    const gltf = useMemo(() => useGLTF('/logo.glb'), []);

    const shaderMaterial = useMemo(
        () =>
            new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    distortion: { value: 0.0 },
                    maxDistortion: { value: 0.5 },
                    scrollY: { value: 0.0 },
                },
                side: THREE.DoubleSide,
                transparent: true,
            }),
        []
    );

    useEffect(() => {
        if (gltf.scene) {
            gltf.scene.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.material = shaderMaterial;
                }
            });
        }
    }, [gltf, shaderMaterial]);

    const updateScale = useCallback(() => {
        if (ref.current) {
            const scale =
                Math.min(containerSize.width, containerSize.height) * 0.7;
            ref.current.scale.set(scale, scale, scale);
        }
    }, [containerSize]);

    useEffect(() => {
        if (containerSize) {
            updateScale();
        }
    }, [containerSize, updateScale]);

    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y -= 0.0015;
        }
    });

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const scrollY = window.scrollY;
                const distortion = scrollY * 0.001;
                if (
                    ref.current &&
                    ref.current.material instanceof THREE.ShaderMaterial
                ) {
                    (
                        ref.current.material as THREE.ShaderMaterial
                    ).uniforms.distortion.value = distortion;
                    (
                        ref.current.material as THREE.ShaderMaterial
                    ).uniforms.scrollY.value = scrollY;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <mesh ref={ref} material={shaderMaterial} rotation={[0.25, 0, 0]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}


export default function Kv() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === containerRef.current) {
                    setContainerSize({
                        width: entry.contentRect.width,
                        height: entry.contentRect.height,
                    });
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, []);
    return (
        <div className="p-4 relative h-screen md:max-h-none max-h-[130vw] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full text-zinc-200/40 leading-none tracking-widest">
                <p className="text-[20vw] md:text-[13vw] absolute top-[5vw] md:top-0 left-0">
                    TS-PORT
                </p>
                <p className="text-[20vw] md:text-[13vw] absolute bottom-0 right-0 text-right md:translate-y-[30%]">
                    <span className="block md:inline">Life</span>{' '}
                    <span className="text-[10vw]">with</span> Creative
                </p>
            </div>
            <div
                ref={containerRef}
                id="canvas-container"
                className="md:ml-0 ml-auto md:mr-0 -mr-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ width: '100%', height: '100%' }}
            >
                <Canvas flat linear>
                    <Light />
                    <ambientLight intensity={10} color="#fcfcfc" />
                    <OrthographicCamera
                        makeDefault
                        position={[0, 0, 250]}
                        zoom={6}
                    />
                    <Suspense fallback={<CanvasLoader />}>
                        <Model containerSize={containerSize} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
