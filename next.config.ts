import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/dylan-mazurek-com" : undefined,
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
