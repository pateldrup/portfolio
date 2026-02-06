import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Text, Environment } from "@react-three/drei";
import * as THREE from "three";

// --- Holographic UI Panel ---
const HoloPanel = ({ position, rotation, width = 1, height = 0.7, children }) => {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            // Subtle float animation
            meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.05;
        }
    });

    return (
        <group ref={meshRef} position={position} rotation={rotation}>
            {/* Panel Background - Glass Effect */}
            <mesh>
                <planeGeometry args={[width, height]} />
                <meshPhysicalMaterial
                    color="#0a1628"
                    transparent
                    opacity={0.3}
                    roughness={0.1}
                    metalness={0.1}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Panel Border - Neon Glow */}
            <lineSegments>
                <edgesGeometry args={[new THREE.PlaneGeometry(width, height)]} />
                <lineBasicMaterial color="#0ea5e9" transparent opacity={0.8} />
            </lineSegments>

            {/* Code Lines Representation */}
            {[...Array(4)].map((_, i) => (
                <mesh key={i} position={[-width / 2 + 0.15, height / 2 - 0.15 - i * 0.12, 0.01]}>
                    <planeGeometry args={[0.3 + Math.random() * 0.3, 0.04]} />
                    <meshBasicMaterial color={i % 2 === 0 ? "#60a5fa" : "#a78bfa"} transparent opacity={0.6} />
                </mesh>
            ))}
        </group>
    );
};

// --- Robot Head - Geometric Faceplate ---
const RobotHead = () => {
    const headRef = useRef();

    useFrame((state) => {
        if (headRef.current) {
            // Subtle breathing motion
            headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
            headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
        }
    });

    return (
        <group ref={headRef} position={[0, 1.2, 0]}>
            {/* Main Head Shape */}
            <RoundedBox args={[0.6, 0.7, 0.5]} radius={0.1} smoothness={4}>
                <meshStandardMaterial
                    color="#1a1a2e"
                    metalness={0.8}
                    roughness={0.3}
                />
            </RoundedBox>

            {/* Face Visor */}
            <mesh position={[0, 0.05, 0.26]}>
                <planeGeometry args={[0.45, 0.2]} />
                <meshPhysicalMaterial
                    color="#0c4a6e"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.3}
                    metalness={0.9}
                    roughness={0.1}
                    transparent
                    opacity={0.9}
                />
            </mesh>

            {/* Eye Lights */}
            <mesh position={[-0.1, 0.05, 0.27]}>
                <circleGeometry args={[0.03, 16]} />
                <meshBasicMaterial color="#60a5fa" />
            </mesh>
            <mesh position={[0.1, 0.05, 0.27]}>
                <circleGeometry args={[0.03, 16]} />
                <meshBasicMaterial color="#60a5fa" />
            </mesh>
        </group>
    );
};

// --- Robot Torso ---
const RobotTorso = () => {
    return (
        <group position={[0, 0, 0]}>
            {/* Main Chest */}
            <RoundedBox args={[0.8, 1, 0.4]} radius={0.08} smoothness={4} position={[0, 0.3, 0]}>
                <meshStandardMaterial
                    color="#0f0f1a"
                    metalness={0.7}
                    roughness={0.4}
                />
            </RoundedBox>

            {/* Chest Light Panel */}
            <mesh position={[0, 0.5, 0.21]}>
                <boxGeometry args={[0.3, 0.15, 0.02]} />
                <meshStandardMaterial
                    color="#0c4a6e"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.5}
                />
            </mesh>

            {/* Shoulder Joints */}
            <mesh position={[-0.5, 0.7, 0]}>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.3} />
            </mesh>
            <mesh position={[0.5, 0.7, 0]}>
                <sphereGeometry args={[0.12, 16, 16]} />
                <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.3} />
            </mesh>

            {/* Left Arm (pointing toward panels) */}
            <group position={[-0.65, 0.5, 0.1]} rotation={[0, 0, 0.3]}>
                <mesh>
                    <cylinderGeometry args={[0.06, 0.05, 0.5, 16]} />
                    <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.4} />
                </mesh>
            </group>

            {/* Right Arm */}
            <group position={[0.65, 0.4, 0.15]} rotation={[0.5, 0, -0.5]}>
                <mesh>
                    <cylinderGeometry args={[0.06, 0.05, 0.5, 16]} />
                    <meshStandardMaterial color="#1a1a2e" metalness={0.7} roughness={0.4} />
                </mesh>
                {/* Hand Glow (interacting with hologram) */}
                <mesh position={[0, -0.3, 0]}>
                    <sphereGeometry args={[0.06, 16, 16]} />
                    <meshStandardMaterial
                        color="#0ea5e9"
                        emissive="#0ea5e9"
                        emissiveIntensity={0.8}
                    />
                </mesh>
            </group>
        </group>
    );
};

// --- Main Robot Entity Scene ---
const RobotScene = () => {
    const groupRef = useRef();
    const panelsRef = useRef();

    useFrame(({ mouse, clock }) => {
        if (groupRef.current) {
            // Mouse parallax
            groupRef.current.rotation.y = THREE.MathUtils.lerp(
                groupRef.current.rotation.y,
                mouse.x * 0.15 - 0.1, // Slight turn toward left (text side)
                0.05
            );
            groupRef.current.rotation.x = THREE.MathUtils.lerp(
                groupRef.current.rotation.x,
                mouse.y * 0.08,
                0.05
            );
        }

        if (panelsRef.current) {
            // Slow orbit of panels
            panelsRef.current.rotation.y = clock.elapsedTime * 0.1;
        }
    });

    return (
        <group ref={groupRef} position={[0, -0.3, 0]}>
            <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
                <RobotHead />
                <RobotTorso />
            </Float>

            {/* Floating Holographic Panels */}
            <group ref={panelsRef}>
                <HoloPanel position={[1.2, 0.8, 0.3]} rotation={[0, -0.4, 0]} width={0.8} height={0.6} />
                <HoloPanel position={[1.0, 0.2, -0.3]} rotation={[0, -0.5, 0.1]} width={0.6} height={0.5} />
                <HoloPanel position={[-1.1, 0.6, 0.2]} rotation={[0, 0.5, 0]} width={0.7} height={0.55} />
            </group>
        </group>
    );
};

// --- Exported Component ---
export const HeroObject3D = () => {
    return (
        <div className="w-full h-full min-h-[400px] md:min-h-[600px]">
            <Canvas
                camera={{ position: [0, 0.5, 4], fov: 40 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                {/* Lighting Setup */}
                <ambientLight intensity={0.15} />
                <directionalLight position={[-3, 3, 5]} intensity={0.6} color="#ffffff" />
                <pointLight position={[2, 2, 2]} intensity={0.4} color="#60a5fa" />
                <pointLight position={[-2, 1, 1]} intensity={0.2} color="#a78bfa" />

                {/* Rim Light */}
                <spotLight
                    position={[0, 3, -3]}
                    angle={0.5}
                    penumbra={1}
                    intensity={0.5}
                    color="#0ea5e9"
                />

                <Environment preset="night" />

                <RobotScene />
            </Canvas>
        </div>
    );
};

export default HeroObject3D;
