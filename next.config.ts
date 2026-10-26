import type { NextConfig } from "next";

// Pofik (the game) is its own Vercel project, served here under /pofik.
const POFIK_ORIGIN = process.env.POFIK_ORIGIN ?? "https://pofik.vercel.app";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async rewrites() {
    return [
      { source: "/pofik", destination: `${POFIK_ORIGIN}/pofik` },
      { source: "/pofik/:path*", destination: `${POFIK_ORIGIN}/pofik/:path*` },
    ];
  },
};

export default nextConfig;
