"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Loading.module.scss";
import { LoadingFooter } from "./LoadingFooter";

/**
 * Model Component
 * Renders the 3D model using React Three Fiber with continuous rotation and chrome material
 * @returns The rendered 3D model component
 */
const Model = () => {
    const { scene } = useGLTF("/models/Chrome_Logo_Blas.gltf");
    const modelRef = useRef<THREE.Group>(null);

    // Apply chrome material to all meshes in the scene
    scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                metalness: 1,
                roughness: 0.1,
                clearcoat: 1,
                clearcoatRoughness: 0.1,
                reflectivity: 1,
                envMapIntensity: 1,
            });
        }
    });

    useFrame((state, delta) => {
        if (modelRef.current) {
            // Rotate 30 degrees per second (0.5 radians per second)
            modelRef.current.rotation.y += delta * 0.5;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={3.5} />;
};

/**
 * LoadingPage Component
 * Displays a loading screen with a 3D model and a button to enter the main application
 * @returns The rendered loading page component
 */
const LoadingPage = () => {
    return (
        <div className={styles.loadingPage}>
            <div className={styles.content}>
                <div className={styles.modelContainer}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                        <color attach="background" args={["#fff"]} />
                        <ambientLight intensity={0.5} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={1}
                        />
                        <spotLight
                            position={[-10, -10, -10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={0.5}
                        />
                        <Environment preset="city" />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <OrbitControls enableZoom={false} />
                    </Canvas>
                </div>
                <div className={styles.titleText} aria-label="Enter site">
                    STUDIO BLUMENSPIESS
                </div>
                <div className={styles.underText}>Under Construction ...</div>
            </div>
            <LoadingFooter />
        </div>
    );
};

export default LoadingPage;
