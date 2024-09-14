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

function Model({
    containerSize,
}: {
    containerSize: { width: number; height: number };
}) {
    const ref = useRef<THREE.Mesh>(null);
    const gltf = useMemo(() => useGLTF('/logo.glb'), []);
    gltf.materials[''].transparent = true;
    gltf.materials[''].opacity = 0.2;
    gltf.materials[''].blendColor = new THREE.Color(0xffffff);

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
            ref.current.rotation.y -= 0.01;
        }
    });

    return (
        <mesh ref={ref} rotation={[0.25, 0, 0]}>
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
        <div className="p-4 relative h-screen overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full text-zinc-100 leading-none tracking-widest">
                <p className="text-[20rem] absolute top-0 left-0">
                    TS-PORT
                </p>
                <p className="text-[17rem] absolute bottom-0 right-0 translate-y-[30%]">
                    Life with Creative
                </p>
            </div>
            <div
                ref={containerRef}
                id="canvas-container"
                className="w-[70vw] md:ml-0 ml-auto md:mr-0 -mr-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ height: '100%', aspectRatio: '1/1' }}
            >
                <Canvas flat linear>
                    <Light />
                    <ambientLight intensity={10} color="#fcfcfc" />
                    <OrthographicCamera
                        makeDefault
                        position={[0, 0, 150]}
                        zoom={5}
                    />
                    <Suspense fallback={<CanvasLoader />}>
                        <Model containerSize={containerSize} />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
