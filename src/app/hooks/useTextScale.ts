/**
 * Custom hook to dynamically scale text horizontally to fit its container
 * @returns {Object} Object containing refs for the container and text elements
 */
import { useEffect, useRef } from "react";

export const useTextScale = () => {
    const containerRef = useRef<HTMLAnchorElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const updateScale = () => {
            const container = containerRef.current;
            const text = textRef.current;

            if (!container || !text) return;

            // Reset scale to measure original width
            text.style.transform = "scaleX(1)";
            const textWidth = text.offsetWidth;
            const containerWidth = container.offsetWidth;

            // Calculate and apply new scale
            const scale = containerWidth / textWidth;
            text.style.transform = `scaleX(${scale})`;
        };

        // Initial scale
        updateScale();

        // Create ResizeObserver to handle container size changes
        const resizeObserver = new ResizeObserver(updateScale);
        resizeObserver.observe(containerRef.current);

        return () => {
            resizeObserver.disconnect();
        };
    }, []);

    return { containerRef, textRef };
};
