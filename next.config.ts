import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don't expose "X-Powered-By: Next.js" header in production
  poweredByHeader: false,
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
