"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Rnd } from "react-rnd";
import Image from "next/image";
import { projects, homeBoard } from "@/app/data/projects";
import styles from "./YellowWindow.module.scss";

const MOBILE_BREAKPOINT = 768;

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

function useCurrentBoard() {
  const pathname = usePathname();

  if (pathname.startsWith("/projects/")) {
    const id = pathname.split("/")[2];
    const project = projects.find((p) => p.id === id);
    if (project?.board) return project.board;
  }

  return homeBoard;
}

export const YellowWindow = () => {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const instanceRef = useRef(false);
  const board = useCurrentBoard();

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
        dragHandleClassName={styles.content}
        default={{
          x: 420,
          y: 200,
          width: 320,
          height: 280,
        }}
        minWidth={140}
        minHeight={100}
        className={styles.rndWrapper}
        resizeHandleComponent={{
          topLeft: <div className={styles.handle} />,
          topRight: <div className={styles.handle} />,
          bottomLeft: <div className={styles.handle} />,
          bottomRight: <div className={styles.handle} />,
          top: <div className={styles.handle} />,
          right: <div className={styles.handle} />,
          bottom: <div className={styles.handle} />,
          left: <div className={styles.handle} />,
        }}
      >
        <div className={styles.content}>
          <div className={styles.indicatorBlue} />
          <div className={styles.indicatorYellow} />
          <div className={styles.indicatorRed} />
          <div className={styles.clipContainer}>
            <div className={styles.innerCanvas} style={{ width: board.width, height: board.height }}>
              <Image
                src={board.src}
                alt=""
                width={board.width}
                height={board.height}
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
