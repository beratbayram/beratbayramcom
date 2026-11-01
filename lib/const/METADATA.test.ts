import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { getKeywords } from "./SEO_KEYWORDS";

const PUBLIC_DIR = path.resolve(__dirname, "../../public");

async function loadMetadata(siteUrl?: string): Promise<Metadata> {
  vi.stubEnv("NEXT_PUBLIC_SITE_URL", siteUrl);
  vi.resetModules();
  return (await import("./METADATA")).METADATA;
}

function publicFile(url: string) {
  return path.join(PUBLIC_DIR, url);
}

describe("METADATA", () => {
  let metadata: Metadata;

  beforeEach(async () => {
    metadata = await loadMetadata(undefined);
  });

  describe("site URL", () => {
    it("defaults to beratbayram.com", () => {
      expect(String(metadata.metadataBase)).toBe("https://beratbayram.com/");
      expect(metadata.alternates?.canonical).toBe("https://beratbayram.com");
      expect(metadata.openGraph?.url).toBe("https://beratbayram.com");
      expect(metadata.authors).toEqual([
        { name: "Berat BAYRAM", url: "https://beratbayram.com" },
      ]);
    });

    it("uses NEXT_PUBLIC_SITE_URL when set", async () => {
      const custom = await loadMetadata("https://preview.example.com");

      expect(String(custom.metadataBase)).toBe("https://preview.example.com/");
      expect(custom.alternates?.canonical).toBe("https://preview.example.com");
      expect(custom.openGraph?.url).toBe("https://preview.example.com");
    });

    it("ignores an empty NEXT_PUBLIC_SITE_URL", async () => {
      const custom = await loadMetadata("");

      expect(String(custom.metadataBase)).toBe("https://beratbayram.com/");
    });
  });

  it("appends the name to page titles", () => {
    expect(metadata.title).toEqual({
      default: "Berat BAYRAM - Front-End Engineer & UI Library Architect",
      template: "%s | Berat BAYRAM",
    });
  });

  it("uses the core keywords", () => {
    expect(metadata.keywords).toEqual(getKeywords.core());
  });

  it("lets search engines index and follow everything", () => {
    expect(metadata.robots).toMatchObject({
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    });
  });

  it("shares a large Open Graph image", () => {
    expect(metadata.openGraph).toMatchObject({
      type: "website",
      locale: "en_US",
      siteName: "Berat BAYRAM Portfolio",
      images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    });
  });

  it("uses a large Twitter card with the same image", () => {
    expect(metadata.twitter).toMatchObject({
      card: "summary_large_image",
      images: ["/og-image.png"],
    });
  });

  it("keeps descriptions within search snippet limits", () => {
    const descriptions = [
      metadata.description,
      metadata.openGraph?.description,
      metadata.twitter?.description,
    ];

    for (const description of descriptions) {
      expect(description).toBeTruthy();
      expect(description!.length).toBeLessThanOrEqual(300);
    }
  });

  describe("static assets", () => {
    it("points at icons that exist in /public", () => {
      const icons = metadata.icons as {
        icon: string;
        apple: string;
        other: { url: string }[];
      };
      const urls = [icons.icon, icons.apple, ...icons.other.map((i) => i.url)];

      for (const url of urls) {
        expect(existsSync(publicFile(url)), url).toBe(true);
      }
    });

    it("points at a manifest and social image that exist in /public", () => {
      expect(existsSync(publicFile(metadata.manifest as string))).toBe(true);
      expect(existsSync(publicFile("/og-image.png"))).toBe(true);
    });
  });
});
