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
import { useTheme } from 'next-themes';

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
varying vec2 vUv;
uniform float scrollY;
uniform bool isDarkMode;

void main() {
    vec3 baseColor;
    float opacity = 0.3;
    vec3 color;

    if (isDarkMode) {
        baseColor = vec3(0.3);
    } else {
        baseColor = vec3(0.9);
    }

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
    const { resolvedTheme } = useTheme();

    const shaderMaterial = useMemo(
        () =>
            new THREE.ShaderMaterial({
                vertexShader,
                fragmentShader,
                uniforms: {
                    distortion: { value: 0.0 },
                    maxDistortion: { value: 0.15 },
                    scrollY: { value: 0.0 },
                    isDarkMode: {
                        value: resolvedTheme === 'dark',
                    },
                },
                side: THREE.DoubleSide,
                transparent: true,
            }),
        [resolvedTheme]
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
            ref.current.rotation.y -= 0.001;
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

export default function ModelContainer() {
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
        <div
            ref={containerRef}
            id="canvas-container"
            className="md:ml-0 ml-auto md:mr-0 -mr-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
            style={{ width: '100%', height: '100svh' }}
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
    );
}
