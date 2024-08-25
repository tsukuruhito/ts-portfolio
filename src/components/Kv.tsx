'use client';
import { useFBX } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
export default function Kv() {
    const fbx = useFBX('logo.fbx');
    return(
        <div id="canvas-container" style={{width: '100vw', height: '750px'}}>
            <Canvas flat linear camera={{ fov: 100, near: 0.5, far: 500, position: [0, 0, -50] }}>
                <primitive object={fbx} />
            </Canvas>
        </div>
    )
}