import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { BrLinks } from "./BrLinks";

vi.mock("next/navigation", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/navigation")>()),
  usePathname: vi.fn(),
}));

const mockedUsePathname = vi.mocked(usePathname);

describe("BrLinks", () => {
  beforeEach(() => {
    mockedUsePathname.mockReturnValue("/");
  });

  it("renders a tab for home and every page, in order", () => {
    render(<BrLinks />);

    const tabs = screen.getAllByRole("tab");
    expect(tabs.map((tab) => tab.getAttribute("href"))).toEqual([
      "/",
      "/about",
      "/projects",
      "/blog",
    ]);
    expect(tabs.slice(1).map((tab) => tab.textContent)).toEqual([
      "About",
      "Projects",
      "Blog",
    ]);
  });

  it("uses the site title as the home tab", () => {
    render(<BrLinks />);

    const [home] = screen.getAllByRole("tab");
    expect(home).toContainElement(screen.getByRole("heading", { level: 1 }));
  });

  it("labels the tab list", () => {
    render(<BrLinks />);

    expect(screen.getByRole("tablist")).toHaveAccessibleName("tabs");
  });

  it.each(["/", "/about", "/projects", "/blog"])(
    "selects the tab for %s",
    (pathname) => {
      mockedUsePathname.mockReturnValue(pathname);
      render(<BrLinks />);

      const selected = screen
        .getAllByRole("tab")
        .filter((tab) => tab.getAttribute("aria-selected") === "true");
      expect(selected).toHaveLength(1);
      expect(selected[0]).toHaveAttribute("href", pathname);
    },
  );

  it("selects nothing on a page without a tab, without MUI warnings", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    mockedUsePathname.mockReturnValue("/missing");
    render(<BrLinks />);

    for (const tab of screen.getAllByRole("tab")) {
      expect(tab).toHaveAttribute("aria-selected", "false");
    }
    expect(consoleError).not.toHaveBeenCalled();
  });

  it("is horizontal and content-sized by default", () => {
    render(<BrLinks />);

    expect(screen.getByRole("tablist")).not.toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
    for (const tab of screen.getAllByRole("tab")) {
      expect(tab).not.toHaveClass("MuiTab-fullWidth");
    }
  });

  it("stacks full-width tabs when vertical", () => {
    render(<BrLinks orientation="vertical" />);

    expect(screen.getByRole("tablist")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
    for (const tab of screen.getAllByRole("tab")) {
      expect(tab).toHaveClass("MuiTab-fullWidth");
    }
  });
});
