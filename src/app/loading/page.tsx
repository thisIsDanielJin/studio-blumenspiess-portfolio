"use client";

import Image from "next/image";
import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Loading.module.scss";
import { LoadingFooter } from "./LoadingFooter";

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
 * Utility function to detect if the user is on a mobile device
 * @returns boolean indicating if the device is mobile
 */
const isMobileDevice = (): boolean => {
    if (typeof window === "undefined") return false;
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
};

/**
 * Model Component
 * Renders the 3D model using React Three Fiber with continuous rotation and chrome material
 * Uses a custom environment map for realistic chrome reflections
 * Optimizes quality for mobile devices
 * @returns The rendered 3D model component
 */
const Model: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const { scene } = useGLTF("/models/Chrome_Logo_Blas.gltf");
    const modelRef = useRef<THREE.Group>(null);
    const texture = useLoader(
        THREE.TextureLoader,
        "/img/Panorama_Chrome_Edit.jpg"
    );
    const { scene: threeScene } = useThree();

    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);

    // Set up the environment map
    texture.mapping = THREE.EquirectangularReflectionMapping;
    // @ts-expect-error: encoding is a number property, workaround for type issues
    texture.encoding = getSRGBEncoding() as unknown as number;
    threeScene.environment = texture;

    // Apply chrome material to all meshes in the scene with mobile optimizations
    scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
            (child as THREE.Mesh).material = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                metalness: isMobile ? 0.8 : 1,
                roughness: isMobile ? 0.2 : 0.0,
                clearcoat: isMobile ? 1.0 : 1.5,
                clearcoatRoughness: isMobile ? 0.1 : 0.0,
                reflectivity: isMobile ? 1.0 : 1.5,
                envMap: texture,
                envMapIntensity: isMobile ? 0.8 : 1.2,
            });
        }
    });

    useFrame((_state, delta) => {
        if (modelRef.current) {
            // Slower rotation on mobile for better performance
            const rotationSpeed = isMobile ? 0.3 : 0.5;
            modelRef.current.rotation.y += delta * rotationSpeed;
        }
    });

    return (
        <primitive ref={modelRef} object={scene} scale={isMobile ? 3.5 : 4.5} />
    );
};

/**
 * LoadingPage Component
 * Displays a loading screen with a 3D model and a button to enter the main application
 * @returns The rendered loading page component
 */
const LoadingPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(isMobileDevice());
    }, []);

    return (
        <div className={styles.loadingPage}>
            <div className={styles.content}>
                <div className={styles.modelContainer}>
                    <Canvas
                        camera={{
                            position: [0, 0, isMobile ? 6 : 5],
                            fov: isMobile ? 35 : 45,
                        }}
                        dpr={isMobile ? [1, 1.5] : [1, 2]} // Limit pixel ratio on mobile
                    >
                        <color attach="background" args={["#fff"]} />
                        <ambientLight intensity={isMobile ? 2 : 1.5} />
                        <directionalLight intensity={isMobile ? 2 : 1.5} />
                        {!isMobile && (
                            <>
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
                            </>
                        )}
                        <pointLight
                            position={[0, 0, 0]}
                            intensity={isMobile ? 2 : 1.5}
                        />
                        <Suspense fallback={<LoadingMessage />}>
                            <Model />
                        </Suspense>
                        <OrbitControls
                            enableZoom={false}
                            enableDamping={!isMobile}
                            dampingFactor={0.05}
                        />
                    </Canvas>
                </div>
                <Image
                    src="/img/STUDIO_BLUMENSPIESS_Blas_Cropped.png"
                    alt="Studio Blumenspieß Logo"
                    width={1000}
                    height={100}
                    className={styles.logo}
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                />
                <div className={styles.underText}>Under Construction ...</div>
            </div>
            <LoadingFooter />
        </div>
    );
};

export default LoadingPage;
