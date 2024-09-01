import { Html, useProgress } from '@react-three/drei';

function CanvasLoader() {
    const { progress } = useProgress();
    return <Html center>{progress} % loaded</Html>;
}

export default CanvasLoader;
