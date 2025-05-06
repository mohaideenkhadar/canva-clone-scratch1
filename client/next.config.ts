import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Required for NextAuth.js on Netlify
  experimental: {
    serverComponentsExternalPackages: ["@next-auth/prisma-adapter"],
  },
  images: {
    domains: ["lh3.googleusercontent.com"], // For Google profile images
  },
};

export default nextConfig;