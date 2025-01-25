import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/test/" : undefined,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
