import { getKeywords } from "@/lib/const/SEO_KEYWORDS";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BlogPage, { metadata } from "./page";

describe("BlogPage", () => {
  it("exports page metadata", () => {
    expect(metadata.title).toBe(
      "Blog - Frontend Development Insights & Tutorials",
    );
    expect(metadata.keywords).toEqual(getKeywords.page("blog"));
    expect(metadata.openGraph?.url).toBe("https://beratbayram.com/blog");
  });

  it("renders the heading and a work in progress notice", () => {
    render(<BlogPage />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Blog" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { level: 2, name: "Work in Progress" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/This blog section is currently under construction/),
    ).toBeInTheDocument();
  });
});
