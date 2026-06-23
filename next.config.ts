import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // ESLint is not configured in this project; keep type-checking on, skip lint-on-build.
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "svgl.app" },
      { protocol: "https", hostname: "d8j0ntlcm91z4.cloudfront.net" },
      { protocol: "https", hostname: "*.supabase.co" },
    ],
  },
  // Serve the immersive 3D landing (public/3d/index.html) at the site root.
  // beforeFiles runs before filesystem routing so it owns "/".
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/3d/index.html" }],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
