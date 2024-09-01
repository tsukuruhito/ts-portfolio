'use client';
import {
    OrbitControls,
    OrthographicCamera,
    shaderMaterial,
    useFBX,
    useGLTF,
    useHelper,
} from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';
import CanvasLoader from './CanvasLoader';

function Light() {
    const dirLight = useRef<THREE.DirectionalLight>(null);
    useHelper(dirLight, THREE.DirectionalLightHelper, 2, 'cyan');
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

function Model() {
    const ref = useRef<THREE.Mesh>(null);
    const gltf = useGLTF('/logo.glb');
    gltf.materials[''].transparent = true;
    gltf.materials[''].opacity = 0.3;
    gltf.materials[''].blendColor = new THREE.Color(0xffffff);

    useFrame(() => {
        if(ref.current)
        ref.current.rotation.y -= 0.01;
    });

    return (
        <mesh scale={[150, 150, 150]} ref={ref}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export default function Kv() {
    return (
        <div className="flex justify-center items-center">
            <div>
                <p>TS-PORT</p>
                <p>Life is Creative</p>
            </div>
            <div
                id="canvas-container"
                style={{ width: '30vw', height: '100%', aspectRatio: '1/1' }}
            >
                <Canvas flat linear>
                    <Light />
                    <ambientLight intensity={10} color="#fcfcfc" />
                    <OrthographicCamera
                        makeDefault
                        position={[0, 0, -50]}
                        zoom={10}
                    />
                    <OrbitControls />
                    <Suspense fallback={<CanvasLoader />}>
                        <Model />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
