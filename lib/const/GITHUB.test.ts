import { describe, expect, it } from "vitest";
import { PINNED } from "./GITHUB";

describe("PINNED", () => {
  it("fits GitHub's six pinned repository slots", () => {
    expect(PINNED.length).toBeGreaterThan(0);
    expect(PINNED.length).toBeLessThanOrEqual(6);
  });

  it("has no duplicates", () => {
    expect(new Set(PINNED).size).toBe(PINNED.length);
  });

  it("uses valid repository names", () => {
    for (const name of PINNED) {
      expect(name).toMatch(/^[\w.-]+$/);
    }
  });

  it("does not pin the profile README repository", () => {
    expect(PINNED).not.toContain("beratbayram");
  });
});
