import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "links.papareact.com",
      },
      {
        protocol: "https",
        hostname: "www.gosee.news",
      },
    ],
  },
};

export default nextConfig;
