import { useEffect, RefObject } from "react";

//TODO: adjust this
export const useHorizontalScroll = (
    scrollRef: RefObject<HTMLDivElement | null>
) => {
    useEffect(() => {
        const scrollElement = scrollRef.current;

        if (!scrollElement) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY === 0) return;

            e.preventDefault();

            scrollElement.scrollLeft += e.deltaY;
        };

        scrollElement.addEventListener("wheel", handleWheel, {
            passive: false,
        });

        return () => {
            scrollElement.removeEventListener("wheel", handleWheel);
        };
    }, [scrollRef]);
};
