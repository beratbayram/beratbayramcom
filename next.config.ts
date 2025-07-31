import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable experimental features for better SEO
  experimental: {
    optimizePackageImports: ["@mui/material", "@mui/icons-material"],
  },
  // Compress responses
  compress: true,
  // Generate ETags for caching
  generateEtags: true,
  // Enable trailing slash for consistent URLs
  trailingSlash: false,
  // Disable x-powered-by header for security
  poweredByHeader: false,
};

export default nextConfig;
