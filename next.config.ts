import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.highplainsraceway.com",
      },
    ],
  },
};

export default nextConfig;
