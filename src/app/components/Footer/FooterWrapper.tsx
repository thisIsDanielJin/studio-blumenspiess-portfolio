"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export const FooterWrapper = () => {
    const pathname = usePathname();
    const isLoadingPage = pathname === "/loading";

    if (isLoadingPage) {
        return null;
    }

    return <Footer />;
};
