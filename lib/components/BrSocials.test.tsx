import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrSocials } from "./BrSocials";

const PROFILES = [
  ["linkedin", "https://linkedin.com/in/berat-bayram/"],
  ["github", "https://github.com/beratbayram/"],
  ["behance", "https://behance.net/beratbayram"],
] as const;

describe("BrSocials", () => {
  it("wraps the links in an address element", () => {
    const { container } = render(<BrSocials />);

    const address = container.querySelector("address");
    expect(address).not.toBeNull();
    expect(within(address!).getAllByRole("link")).toHaveLength(3);
  });

  it("lists the profiles in order", () => {
    render(<BrSocials />);

    expect(
      screen.getAllByRole("link").map((link) => link.getAttribute("href")),
    ).toEqual(PROFILES.map(([, href]) => href));
  });

  it.each(PROFILES)("links to the %s profile", (name, href) => {
    render(<BrSocials />);

    const link = screen.getByRole("link", { name });
    expect(link).toHaveAttribute("href", href);
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("makes each icon a single link, not a button inside a link", () => {
    render(<BrSocials />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    for (const link of screen.getAllByRole("link")) {
      expect(link).toHaveClass("MuiIconButton-root");
    }
  });

  it("swaps the Behance logo for dark mode", () => {
    render(<BrSocials />);

    const [light, dark] = screen.getAllByRole("img", { name: "Behance" });
    expect(light.parentElement).toHaveClass("inline", "dark:hidden");
    expect(dark.parentElement).toHaveClass("hidden", "dark:inline");
    expect(light.getAttribute("src")).toContain("behance-black");
    expect(dark.getAttribute("src")).toContain("behance-white");
  });

  it("renders the Behance logos at icon size", () => {
    render(<BrSocials />);

    for (const img of screen.getAllByRole("img", { name: "Behance" })) {
      expect(img).toHaveAttribute("width", "24");
      expect(img).toHaveAttribute("height", "24");
    }
  });

  it("uses the theme text colour for the MUI icons", () => {
    render(<BrSocials />);

    for (const icon of [
      screen.getByTestId("LinkedInIcon"),
      screen.getByTestId("GitHubIcon"),
    ]) {
      // Check the declared value: jsdom 31+ resolves var() in computed styles,
      // and the variable is undefined without the theme provider.
      expect(icon.style.color).toBe("var(--mui-palette-text-primary)");
    }
  });
});
