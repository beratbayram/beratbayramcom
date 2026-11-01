import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrTechLogos } from "./BrTechLogos";

const LOGOS = [
  ["React", "https://react.dev/"],
  ["Nextjs", "https://nextjs.org/"],
  ["Typescript", "https://www.typescriptlang.org/"],
  ["Lit", "https://lit.dev/"],
] as const;

describe("BrTechLogos", () => {
  it("renders one link per technology, in order", () => {
    render(<BrTechLogos />);

    const links = screen.getAllByRole("link");
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      LOGOS.map(([, href]) => href),
    );
  });

  it.each(LOGOS)("links the %s logo to its site", (name, href) => {
    render(<BrTechLogos />);

    const link = screen.getByTitle(`Visit ${name} website`);
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(link).toContainElement(
      screen.getByRole("img", { name: `${name} Logo` }),
    );
  });

  it("inverts only the Next.js logo in dark mode", () => {
    render(<BrTechLogos />);

    for (const [name] of LOGOS) {
      const img = screen.getByRole("img", { name: `${name} Logo` });
      expect(img).toHaveClass("h-auto");
      if (name === "Nextjs") {
        expect(img).toHaveClass("dark:invert");
      } else {
        expect(img).not.toHaveClass("dark:invert");
      }
    }
  });

  it("renders every logo 60px tall", () => {
    render(<BrTechLogos />);

    for (const img of screen.getAllByRole("img")) {
      expect(img).toHaveAttribute("height", "60");
    }
  });
});
