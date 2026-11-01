import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, type Plugin } from "vitest/config";

const root = path.dirname(new URL(import.meta.url).pathname);

// Use React's and Emotion's dev builds even when a CI sets NODE_ENV=production.
// React's production build has no act(), which Testing Library needs.
process.env.NODE_ENV = "test";

const STATIC_IMAGE = /\.(png|jpe?g|gif|webp|avif|ico|svg)$/;

// Next turns static image imports into { src, width, height } objects.
// Vite would give a plain URL string, which next/image rejects without sizes.
function staticImages(): Plugin {
  return {
    name: "next-static-images",
    enforce: "pre",
    load(id) {
      const file = id.split("?")[0];
      if (!STATIC_IMAGE.test(file)) return null;
      const src = `/${path.relative(root, file)}`;
      return `export default ${JSON.stringify({ src, width: 64, height: 64 })};`;
    },
  };
}

export default defineConfig({
  plugins: [react(), staticImages()],
  resolve: {
    alias: { "@": root },
  },
  // Tests don't need Tailwind; skip loading postcss.config.mjs
  css: { postcss: { plugins: [] } },
  test: {
    environment: "jsdom",
    setupFiles: ["./test/setup.ts"],
    include: ["{app,lib,test}/**/*.test.{ts,tsx}"],
    restoreMocks: true,
    unstubEnvs: true,
    unstubGlobals: true,
    coverage: {
      provider: "v8",
      include: ["app/**/*.{ts,tsx}", "lib/**/*.{ts,tsx}"],
      exclude: ["**/*.test.{ts,tsx}", "lib/types/**"],
      reporter: ["text", "html", "lcov"],
      thresholds: {
        statements: 95,
        branches: 95,
        functions: 95,
        lines: 95,
      },
    },
  },
});
