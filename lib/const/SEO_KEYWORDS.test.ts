import { describe, expect, it } from "vitest";
import { getKeywords, SEO_KEYWORDS } from "./SEO_KEYWORDS";

const PAGES = Object.keys(SEO_KEYWORDS.pages) as Array<
  keyof typeof SEO_KEYWORDS.pages
>;

describe("getKeywords.core", () => {
  it("leads with the name and primary roles", () => {
    const core = getKeywords.core();

    expect(core.slice(0, 6)).toEqual([
      SEO_KEYWORDS.name,
      ...SEO_KEYWORDS.primary,
    ]);
  });

  it("includes only the top 6 technical skills", () => {
    const core = getKeywords.core();

    for (const skill of SEO_KEYWORDS.technical.slice(0, 6)) {
      expect(core).toContain(skill);
    }
    for (const skill of SEO_KEYWORDS.technical.slice(6)) {
      expect(core).not.toContain(skill);
    }
  });

  it("includes only the top 4 professional terms", () => {
    const core = getKeywords.core();

    expect(core).toEqual(
      expect.arrayContaining(SEO_KEYWORDS.professional.slice(0, 4)),
    );
    for (const term of SEO_KEYWORDS.professional.slice(4)) {
      expect(core).not.toContain(term);
    }
  });

  it("ends with the location and Portfolio", () => {
    const core = getKeywords.core();

    expect(core.slice(-4)).toEqual([...SEO_KEYWORDS.location, "Portfolio"]);
  });

  it("has 20 unique keywords", () => {
    const core = getKeywords.core();

    expect(core).toHaveLength(20);
    expect(new Set(core).size).toBe(core.length);
  });

  it("returns a fresh array each call", () => {
    const first = getKeywords.core();
    first.push("mutated");

    expect(getKeywords.core()).not.toContain("mutated");
  });
});

describe("getKeywords.page", () => {
  it.each(PAGES)("returns the %s page keywords", (page) => {
    expect(getKeywords.page(page)).toBe(SEO_KEYWORDS.pages[page]);
  });

  it("falls back to the home keywords for an unknown page", () => {
    const page = "contact" as keyof typeof SEO_KEYWORDS.pages;

    expect(getKeywords.page(page)).toBe(SEO_KEYWORDS.pages.home);
  });

  it.each(PAGES)("has unique keywords mentioning the name on %s", (page) => {
    const keywords = SEO_KEYWORDS.pages[page];

    expect(keywords.length).toBeGreaterThan(0);
    expect(new Set(keywords).size).toBe(keywords.length);
    expect(keywords.some((k) => k.includes(SEO_KEYWORDS.name))).toBe(true);
  });
});

describe("getKeywords category helpers", () => {
  it("return the matching keyword lists", () => {
    expect(getKeywords.technical()).toBe(SEO_KEYWORDS.technical);
    expect(getKeywords.professional()).toBe(SEO_KEYWORDS.professional);
    expect(getKeywords.location()).toBe(SEO_KEYWORDS.location);
  });
});

describe("SEO_KEYWORDS", () => {
  it("keeps the values other modules index into", () => {
    expect(SEO_KEYWORDS.primary[0]).toBe("Front-End Engineer");
    expect(SEO_KEYWORDS.professional[0]).toBe("TÜBİTAK");
    expect(SEO_KEYWORDS.location.slice(0, 2)).toEqual(["Ankara", "Turkey"]);
  });

  it.each([
    "primary",
    "technical",
    "professional",
    "location",
    "content",
  ] as const)("has no duplicate %s keywords", (group) => {
    const keywords = SEO_KEYWORDS[group];
    expect(new Set(keywords).size).toBe(keywords.length);
  });
});
