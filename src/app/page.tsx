"use client";

import Image from "next/image";
import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import styles from "./Loading.module.scss";
import Link from "next/link";

const LoadingMessage: React.FC = () => {
  return (
    <mesh>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0} />
      <Html center style={{ color: "#000000", fontSize: "1.2rem" }}>
        Loading...
      </Html>
    </mesh>
  );
};

const getSRGBEncoding = (): number => {
  return (
    (THREE as unknown as { sRGBEncoding?: number }).sRGBEncoding ??
    (THREE as unknown as { ColorManagement?: { sRGBEncoding?: number } })
      .ColorManagement?.sRGBEncoding ??
    3001
  );
};

const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

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

  texture.mapping = THREE.EquirectangularReflectionMapping;
  // @ts-expect-error: encoding is a number property
  texture.encoding = getSRGBEncoding() as unknown as number;
  threeScene.environment = texture;

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
      const rotationSpeed = isMobile ? 0.3 : 0.5;
      modelRef.current.rotation.y += delta * rotationSpeed;
    }
  });

  return (
    <primitive ref={modelRef} object={scene} scale={isMobile ? 3.5 : 4.5} />
  );
};

export default function LoadingPage() {
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
            dpr={isMobile ? [1, 1.5] : [1, 2]}
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
            <pointLight position={[0, 0, 0]} intensity={isMobile ? 2 : 1.5} />
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
      <footer className={styles.footer}>
        <Link
          href="https://www.instagram.com/studio.blumenspiess/"
          className={styles.footerLink}
        >
          INSTAGRAM
        </Link>
        <Link
          href="mailto:info@studio-blumenspiess.de"
          className={styles.footerLink}
        >
          MAIL
        </Link>
      </footer>
    </div>
  );
}
