import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  webpack: (config) => {
    const projectRoot = process.cwd();
    config.resolve.modules = [
      path.resolve(projectRoot, 'node_modules'),
      'node_modules',
    ];
    config.resolve.symlinks = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
