"use client";

import { Header } from "../Header/Header";
import { FooterWrapper } from "../Footer/FooterWrapper";
import { ProjectsProvider } from "@/app/context/ProjectsContext";
import { usePathname } from "next/navigation";

export const LayoutContent = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    const pathname = usePathname();
    const isLoadingPage = pathname === "/loading";
    return (
        <body className={className}>
            {!isLoadingPage && <Header />}
            <ProjectsProvider>
                <main className="flex-1">{children}</main>
            </ProjectsProvider>
            <FooterWrapper />
        </body>
    );
};
