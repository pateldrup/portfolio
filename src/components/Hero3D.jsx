import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";

const AnimatedSphere = () => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Rotate slowly
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere args={[1, 100, 100]} scale={2.4} ref={meshRef}>
                <MeshDistortMaterial
                    color="#2563eb" // Blue-ish
                    attach="material"
                    distort={0.4} // Strength of distortion
                    speed={2} // Speed of distortion
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    );
};

export const Hero3D = () => {
    return (
        <div className="w-full h-[400px] md:h-[600px]">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} intensity={2} />
                <AnimatedSphere />
            </Canvas>
        </div>
    );
};
