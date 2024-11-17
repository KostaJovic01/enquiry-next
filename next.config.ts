import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // Add other configurations here
    redirects: async () => [
        {
            source: '/',
            destination: '/me',
            permanent: true,
        },
    ],
};

export default nextConfig;
