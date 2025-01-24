import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        clsx: "clsx",
        tailwindcss: "tailwind-merge",
      };
    }

    return config;
  },
};

export default nextConfig;
