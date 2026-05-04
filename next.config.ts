import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ["./src/styles"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: "/\\+\\+\\+",
                destination: "/relations",
            },
        ];
    },
};

export default nextConfig;
