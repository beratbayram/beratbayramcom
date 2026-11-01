import { getKeywords } from "@/lib/const/SEO_KEYWORDS";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Page, { metadata } from "./page";

describe("Home page", () => {
  it("exports page metadata", () => {
    expect(metadata.title).toBe(
      "Berat BAYRAM - Front-End Engineer & UI Library Architect",
    );
    expect(metadata.keywords).toEqual(getKeywords.page("home"));
    expect(metadata.openGraph?.url).toBe("https://beratbayram.com");
  });

  it("introduces the role", () => {
    render(<Page />);

    expect(
      screen.getByRole("heading", { level: 1, name: "Front-End Engineer" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/Hey, I.m a/)).toBeInTheDocument();
  });

  it("highlights the main technologies", () => {
    render(<Page />);

    const highlighted = [...document.querySelectorAll("header strong")].map(
      (el) => el.textContent,
    );
    expect(highlighted).toEqual(["React", "Next.js", "TypeScript", "Lit"]);
  });

  it("shows the profile photo", () => {
    render(<Page />);

    expect(
      screen.getByRole("img", {
        name: "Berat BAYRAM - Front-End Engineer and UI Library Architect",
      }),
    ).toBeInTheDocument();
  });

  it("lazy loads the technology logos", async () => {
    render(<Page />);

    const stack = screen.getByRole("region", { name: "Technology Stack" });
    expect(await within(stack).findAllByRole("link")).toHaveLength(4);
  });
});
