import { OrbitControls } from "@react-three/drei";


export const Test = () => {


    return (
        <>
        <OrbitControls enableZoom={false} />
        <mesh>
        <boxGeometry/>
        <meshNormalMaterial/>
        </mesh>
        </>
    );

};