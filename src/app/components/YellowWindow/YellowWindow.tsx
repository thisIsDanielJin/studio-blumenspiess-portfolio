"use client";

import { useState, useEffect, useRef } from "react";
import { Rnd } from "react-rnd";
import Image from "next/image";
import styles from "./YellowWindow.module.scss";

const MOBILE_BREAKPOINT = 768;

interface YellowWindowProps {
  boardSrc: string;
  boardWidth: number;
  boardHeight: number;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
}

export const YellowWindow = ({
  boardSrc,
  boardWidth,
  boardHeight,
  defaultPosition = { x: 420, y: 200 },
  defaultSize = { width: 320, height: 280 },
}: YellowWindowProps) => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const instanceRef = useRef(false);

  useEffect(() => {
    if (instanceRef.current) return;
    instanceRef.current = true;
    setMounted(true);
    return () => { instanceRef.current = false; };
  }, []);

  if (isMobile || !mounted) return null;

  return (
    <div className={styles.overlay}>
      <Rnd
        default={{
          x: defaultPosition.x,
          y: defaultPosition.y,
          width: defaultSize.width,
          height: defaultSize.height,
        }}
        minWidth={140}
        minHeight={100}
        className={styles.rndWrapper}
        style={{ cursor: "grab" }}
        resizeHandleComponent={{
          topLeft: <div className={`${styles.handle} ${styles.handleCorner}`} />,
          topRight: <div className={`${styles.handle} ${styles.handleCorner}`} />,
          bottomLeft: <div className={`${styles.handle} ${styles.handleCorner}`} />,
          bottomRight: <div className={`${styles.handle} ${styles.handleCorner}`} />,
          top: <div className={`${styles.handle} ${styles.handleEdge}`} />,
          right: <div className={`${styles.handle} ${styles.handleEdge}`} />,
          bottom: <div className={`${styles.handle} ${styles.handleEdge}`} />,
          left: <div className={`${styles.handle} ${styles.handleEdge}`} />,
        }}
      >
        <div className={styles.content}>
          <div className={styles.clipContainer}>
            <div className={styles.innerCanvas} style={{ width: boardWidth, height: boardHeight }}>
              <Image
                src={boardSrc}
                alt=""
                width={boardWidth}
                height={boardHeight}
                unoptimized
                draggable={false}
                style={{ pointerEvents: "none", display: "block" }}
              />
            </div>
          </div>
        </div>
      </Rnd>
    </div>
  );
};
