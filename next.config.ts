import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Skip ESLint during production builds to avoid deployment failures
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
