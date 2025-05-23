import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ["./src/styles"],
    },
    images: {
        domains: [
            "picsum.photos",
            "studio-blumenspiess-cms-production.up.railway.app",
        ],
    },
};

export default nextConfig;
