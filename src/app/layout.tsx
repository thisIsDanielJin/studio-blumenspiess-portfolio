import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProjectsProvider } from "@/app/context/ProjectsContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "studio.blumenspiess",
    description: "Portfolio website for Studio Blumenspiess",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                <Header />
                <ProjectsProvider>
                    <main className="flex-1">{children}</main>
                </ProjectsProvider>
                <Footer />
            </body>
        </html>
    );
}
