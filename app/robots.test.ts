import { describe, expect, it } from "vitest";
import robots from "./robots";
import sitemap from "./sitemap";

describe("robots", () => {
  it("allows all crawlers on the whole site except /private/", () => {
    expect(robots().rules).toEqual({
      userAgent: "*",
      allow: "/",
      disallow: ["/private/"],
    });
  });

  it("points crawlers at the sitemap on the same origin", () => {
    const { sitemap: sitemapUrl } = robots();
    const [home] = sitemap();

    expect(sitemapUrl).toBe("https://beratbayram.com/sitemap.xml");
    expect(new URL(sitemapUrl as string).origin).toBe(new URL(home.url).origin);
  });
});
