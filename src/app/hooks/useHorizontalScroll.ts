import { useEffect, RefObject } from "react";

/**
 * Hook to enable horizontal scrolling with mouse wheel
 * @param scrollRef - Reference to the scrollable container element
 */
export const useHorizontalScroll = (
    scrollRef: RefObject<HTMLDivElement | null>
) => {
    useEffect(() => {
        const scrollElement = scrollRef.current;

        if (!scrollElement) return;

        const handleWheel = (e: WheelEvent) => {
            // Check if we're at the edges of the scroll container
            const isAtLeftEdge = scrollElement.scrollLeft === 0;
            const isAtRightEdge =
                scrollElement.scrollLeft + scrollElement.clientWidth >=
                scrollElement.scrollWidth;

            // If we're at the edges and trying to scroll further, let the page scroll vertically
            if (
                (isAtLeftEdge && e.deltaX < 0) ||
                (isAtRightEdge && e.deltaX > 0)
            ) {
                return;
            }

            // Prevent default vertical scrolling when we're not at the edges
            e.preventDefault();

            // Use deltaX for horizontal scrolling, fallback to deltaY if deltaX is 0
            const scrollAmount = e.deltaX || e.deltaY;
            scrollElement.scrollLeft += scrollAmount;
        };

        scrollElement.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        return () => {
            scrollElement.removeEventListener("wheel", handleWheel);
        };
    }, [scrollRef]);
};
