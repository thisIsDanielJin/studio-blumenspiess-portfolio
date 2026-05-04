"use client";

import { useState, useCallback, useRef } from "react";
import { Rnd } from "react-rnd";
import Image from "next/image";
import { ProjectImage } from "@/app/data/projects";
import styles from "./ImageCanvas.module.scss";

interface ImageCanvasProps {
  images: ProjectImage[];
}

interface ImageState {
  x: number;
  y: number;
  zIndex: number;
  isDragging: boolean;
}

export const ImageCanvas = ({ images }: ImageCanvasProps) => {
  const maxZRef = useRef(images.length + 1);
  const [imageStates, setImageStates] = useState<ImageState[]>(
    images.map((img, i) => ({
      x: img.x,
      y: img.y,
      zIndex: img.zIndex ?? i + 1,
      isDragging: false,
    }))
  );
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handleDragStart = useCallback((index: number) => {
    setImageStates((prev) =>
      prev.map((state, i) => (i === index ? { ...state, isDragging: true } : state))
    );
  }, []);

  const handleDragStop = useCallback((index: number, x: number, y: number) => {
    maxZRef.current += 1;
    setImageStates((prev) =>
      prev.map((state, i) =>
        i === index
          ? { ...state, x, y, zIndex: maxZRef.current, isDragging: false }
          : state
      )
    );
  }, []);

  const handleClick = useCallback((index: number, wasDragged: boolean) => {
    if (!wasDragged) {
      setLightboxIndex(index);
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const canvasHeight = Math.max(
    ...images.map((img) => img.y + img.height),
    800
  );

  return (
    <>
      <div className={styles.canvas} style={{ height: canvasHeight }}>
        {images.map((img, index) => {
          const state = imageStates[index];
          let dragStartPos = { x: 0, y: 0 };

          return (
            <Rnd
              key={index}
              position={{ x: state.x, y: state.y }}
              size={{ width: img.width, height: img.height }}
              enableResizing={false}
              onDragStart={(_e, d) => {
                dragStartPos = { x: d.x, y: d.y };
                handleDragStart(index);
              }}
              onDragStop={(_e, d) => {
                const wasDragged =
                  Math.abs(d.x - dragStartPos.x) > 3 ||
                  Math.abs(d.y - dragStartPos.y) > 3;
                handleDragStop(index, d.x, d.y);
                handleClick(index, wasDragged);
              }}
              style={{
                zIndex: state.zIndex,
                opacity: state.isDragging ? 0.6 : 1,
                transform: img.rotation ? `rotate(${img.rotation}deg)` : undefined,
                transition: state.isDragging ? "none" : "opacity 0.2s",
                cursor: "grab",
              }}
              bounds="parent"
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
            </Rnd>
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
