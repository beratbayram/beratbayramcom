import { existsSync } from "node:fs";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import sitemap from "./sitemap";

const NOW = new Date("2026-03-01T10:00:00Z");

describe("sitemap", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(NOW);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("lists every page with its crawl hints", () => {
    expect(sitemap()).toEqual([
      {
        url: "https://beratbayram.com",
        lastModified: NOW,
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: "https://beratbayram.com/about",
        lastModified: NOW,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: "https://beratbayram.com/projects",
        lastModified: NOW,
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: "https://beratbayram.com/blog",
        lastModified: NOW,
        changeFrequency: "weekly",
        priority: 0.7,
      },
    ]);
  });

  it("gives the home page the top priority", () => {
    const [home, ...rest] = sitemap();

    for (const entry of rest) {
      expect(entry.priority).toBeLessThan(home.priority!);
    }
  });

  it("only lists routes that exist in the app directory", () => {
    for (const { url } of sitemap()) {
      const route = new URL(url).pathname;
      const page = path.join(__dirname, route, "page.tsx");
      expect(existsSync(page), page).toBe(true);
    }
  });

  it("has no duplicate URLs", () => {
    const urls = sitemap().map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);
  });
});
