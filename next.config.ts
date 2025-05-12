import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: ["./src/styles"],
    },
    images: {
        domains: ["picsum.photos"],
    },
};

export default nextConfig;
