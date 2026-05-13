"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Rnd } from "react-rnd";
import Image from "next/image";
import { ProjectImage } from "@/app/data/projects";
import styles from "./ImageCanvas.module.scss";

const REFERENCE_WIDTH = 1000;
const MOBILE_BREAKPOINT = 768;

interface ImageCanvasProps {
  images: ProjectImage[];
}

interface ImageState {
  x: number;
  y: number;
  zIndex: number;
  isDragging: boolean;
  isVisible: boolean;
  visibleDelay: number;
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

export const ImageCanvas = ({ images }: ImageCanvasProps) => {
  const isMobile = useIsMobile();
  const maxZRef = useRef(images.length + 1);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLDivElement>(null);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const visibleCountRef = useRef(0);
  const [containerWidth, setContainerWidth] = useState(REFERENCE_WIDTH);
  const [imageStates, setImageStates] = useState<ImageState[]>(
    images.map((img, i) => ({
      x: img.x,
      y: img.y,
      zIndex: img.zIndex ?? i + 1,
      isDragging: false,
      isVisible: false,
      visibleDelay: 0,
    }))
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isMobile) return;
    const scrollParent = canvasRef.current?.closest("[data-scroll-panel]") as HTMLElement | null;
    if (!scrollParent) return;

    setContainerWidth(scrollParent.clientWidth);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    resizeObserver.observe(scrollParent);

    return () => resizeObserver.disconnect();
  }, [isMobile]);

  useEffect(() => {
    if (isMobile) return;
    const scrollParent = canvasRef.current?.closest("[data-scroll-panel]") as HTMLElement | null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              const delay = visibleCountRef.current * 80;
              visibleCountRef.current += 1;
              setImageStates((prev) =>
                prev.map((state, i) =>
                  i === index ? { ...state, isVisible: true, visibleDelay: delay } : state
                )
              );
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        root: scrollParent,
        threshold: 0.1,
        rootMargin: "50px 0px 0px 0px",
      }
    );

    sentinelRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [isMobile]);

  const handleDragStart = useCallback((index: number, x: number, y: number) => {
    dragStartRef.current = { x, y };
    setImageStates((prev) =>
      prev.map((state, i) => (i === index ? { ...state, isDragging: true } : state))
    );
  }, []);

  const handleDragStop = useCallback((index: number, pixelX: number, y: number) => {
    const wasDragged =
      Math.abs(pixelX - dragStartRef.current.x) > 3 ||
      Math.abs(y - dragStartRef.current.y) > 3;

    const containerW = canvasRef.current?.closest("[data-scroll-panel]")?.clientWidth || REFERENCE_WIDTH;
    const refX = (pixelX / containerW) * REFERENCE_WIDTH;

    maxZRef.current += 1;
    setImageStates((prev) =>
      prev.map((state, i) =>
        i === index
          ? { ...state, x: refX, y, zIndex: maxZRef.current, isDragging: false }
          : state
      )
    );

    if (!wasDragged) {
      setLightboxIndex(index);
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Mobile: simple vertical image stack
  if (isMobile) {
    return (
      <div className={styles.mobileStack}>
        {images.map((img, index) => (
          <div key={index} className={styles.mobileImageWrapper}>
            <Image
              src={img.src}
              alt=""
              width={img.width}
              height={img.height}
              className={styles.mobileImage}
              unoptimized
            />
          </div>
        ))}
      </div>
    );
  }

  // Desktop: draggable canvas
  const canvasHeight = Math.max(
    ...images.map((img) => img.y + img.height),
    800
  );

  return (
    <>
      <div ref={canvasRef} className={styles.canvas} style={{ height: canvasHeight }}>
        {images.map((img, index) => {
          const state = imageStates[index];
          const pixelX = (state.x / REFERENCE_WIDTH) * containerWidth;

          return (
            <div key={index}>
              <div
                ref={(el) => { sentinelRefs.current[index] = el; }}
                data-index={index}
                style={{
                  position: "absolute",
                  left: (img.x / REFERENCE_WIDTH) * containerWidth,
                  top: img.y,
                  width: img.width,
                  height: img.height,
                  pointerEvents: "none",
                }}
              />
              <Rnd
                position={{ x: pixelX, y: state.y }}
                size={{ width: img.width, height: img.height }}
                enableResizing={false}
                onDragStart={(_e, d) => {
                  handleDragStart(index, d.x, d.y);
                }}
                onDragStop={(_e, d) => {
                  handleDragStop(index, d.x, d.y);
                }}
                style={{
                  zIndex: state.zIndex,
                  opacity: state.isVisible ? (state.isDragging ? 0.6 : 1) : 0,
                  transition: state.isDragging
                    ? "none"
                    : `opacity 0.8s ease-out ${state.visibleDelay}ms`,
                  cursor: "grab",
                }}
              >
                <div
                  className={styles.imageInner}
                  style={{
                    transform: `translateY(${state.isVisible ? 0 : 40}px)${img.rotation ? ` rotate(${img.rotation}deg)` : ""}`,
                    transition: state.isDragging ? "none" : `transform 0.8s ease-out ${state.visibleDelay}ms`,
                  }}
                >
                  <Image
                    src={img.src}
                    alt=""
                    width={img.width}
                    height={img.height}
                    className={styles.image}
                    unoptimized
                    draggable={false}
                  />
                </div>
              </Rnd>
            </div>
          );
        })}
      </div>

      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <Image
            src={images[lightboxIndex].src}
            alt=""
            width={images[lightboxIndex].width * 2}
            height={images[lightboxIndex].height * 2}
            className={styles.lightboxImage}
            unoptimized
          />
        </div>
      )}
    </>
  );
};
