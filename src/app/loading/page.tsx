"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Loading.module.scss";
import { LoadingFooter } from "./LoadingFooter";

/**
 * Helper to detect mobile devices
 */
const isMobile = typeof window !== 'undefined' && /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

/**
 * LoadingMessage Component
 * Displays a loading message while the 3D model is being loaded
 * Uses Three.js Text component for proper rendering within Canvas
 * @returns The rendered loading message component
 */
const LoadingMessage: React.FC = () => {
    return (
        <mesh>
            <planeGeometry args={[2, 1]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0} />
            <Html
                center
                style={{
                    color: "#000000",
                    fontSize: "1.2rem",
                    fontFamily: "var(--font-geist-sans)",
                }}
            >
                Loading...
            </Html>
        </mesh>
    );
};

/**
 * Helper function to get sRGBEncoding in a type-safe way
 * @returns The sRGBEncoding value
 */
const getSRGBEncoding = (): number => {
    // Try to get sRGBEncoding from THREE, fallback to 3001 if not found
    return (
        (THREE as unknown as { sRGBEncoding?: number }).sRGBEncoding ??
        (THREE as unknown as { ColorManagement?: { sRGBEncoding?: number } })
            .ColorManagement?.sRGBEncoding ??
        3001
    );
};

/**
 * Model Component
 * Renders the 3D model using React Three Fiber with continuous rotation and chrome material
 * Uses a custom environment map for realistic chrome reflections
 * @returns The rendered 3D model component
 */
const Model: React.FC = () => {
    const { scene } = useGLTF("/models/Chrome_Logo_Blas.gltf");
    const modelRef = useRef<THREE.Group>(null);
    const texture = useLoader(
        THREE.TextureLoader,
        "/img/Panorama_Chrome_Edit.jpg"
    );
    const { scene: threeScene } = useThree();

    // Set up the environment map
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // @ts-expect-error: encoding is a number property, workaround for type issues
    texture.encoding = getSRGBEncoding() as unknown as number;
    threeScene.environment = texture;

    // Apply chrome material to all meshes in the scene
    scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                metalness: 1,
                roughness: 0.0,
                clearcoat: 1.5,
                clearcoatRoughness: 0.0,
                reflectivity: 1.5,
                envMap: texture,
                envMapIntensity: 1.2,
            });
        }
    });

    useFrame((_state, delta) => {
        if (modelRef.current) {
            // Rotate 30 degrees per second (0.5 radians per second)
            modelRef.current.rotation.y += delta * 0.5;
        }
    });

    return <primitive ref={modelRef} object={scene} scale={4.5} />;
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
                    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                        <color attach="background" args={["#fff"]} />
                        <ambientLight intensity={1.5} />
                        <directionalLight intensity={1.5} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                        />
                        <spotLight
                            position={[-10, -10, -10]}
                            angle={0.15}
                            penumbra={1}
                            intensity={2}
                        />
                        <pointLight position={[0, 0, 0]} intensity={1.5} />
                        <Suspense fallback={<LoadingMessage />}>
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
