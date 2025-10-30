import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Projectscard.module.scss";
import { Projekt } from "@/app/types";
import { getStrapiMedia } from "@/app/utils/getStrapiMedia";

interface ProjectsCardProps {
    project: Projekt;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
    const router = useRouter();
    const cutoutLayerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [imageData, setImageData] = useState<ImageData | null>(null);

    useEffect(() => {
        const img = new window.Image();
        img.src = "/img/Cut_Schwarz.svg";

        img.onload = () => {
            const canvas = canvasRef.current;
            if (canvas) {
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    // Set canvas size to match SVG
                    canvas.width = 600;
                    canvas.height = 800;
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const data = ctx.getImageData(
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                    setImageData(data);
                }
            }
        };
    }, []);

    const handleImageClick = () => {
        router.push(`/projects/${project.Name}`);
    };

    const handleCutoutLayerClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!imageData || !cutoutLayerRef.current) {
            // Fallback: navigate to project if canvas not loaded
            handleImageClick();
            return;
        }

        const rect = cutoutLayerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Convert click coordinates to canvas coordinates
        const scaleX = canvasRef.current!.width / rect.width;
        const scaleY = canvasRef.current!.height / rect.height;
        const canvasX = Math.floor(x * scaleX);
        const canvasY = Math.floor(y * scaleY);

        // Get pixel at click position
        const index = (canvasY * imageData.width + canvasX) * 4;
        const alpha = imageData.data[index + 3];

        // If alpha is high (opaque black pixel), it's the cutout
        // If alpha is low (transparent), navigate to project
        if (alpha > 128) {
            console.log(`Cutout of project ${project.Name} clicked`);
        } else {
            // Transparent area - navigate to project
            handleImageClick();
        }
    };

    return (
        <div className={styles.projectCard}>
            <div className={styles.cardWrapper}>
                <h3 className={styles.projectTitle}>{project.Name}</h3>
                <div className={styles.imageContainer}>
                    {/* Bottom layer: clickable image */}
                    <div
                        className={styles.imageLayer}
                        onClick={handleImageClick}
                    >
                        <Image
                            src={getStrapiMedia(
                                project.Titelbild.formats.large.url
                            )}
                            alt={project.Name}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className={styles.projectImage}
                        />
                    </div>
                    {/* Top layer: SVG cutout */}
                    <div
                        ref={cutoutLayerRef}
                        className={styles.cutoutLayer}
                        onClick={handleCutoutLayerClick}
                    >
                        <img
                            src="/img/Cut_Schwarz.svg"
                            alt=""
                            className={styles.cutOverlay}
                        />
                    </div>
                    <canvas ref={canvasRef} style={{ display: "none" }} />
                </div>
            </div>
        </div>
    );
};
