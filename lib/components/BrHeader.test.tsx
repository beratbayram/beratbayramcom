import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { BrHeader } from "./BrHeader";
import { BrTheme } from "./BrTheme";

vi.mock("next/navigation", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/navigation")>()),
  usePathname: () => "/projects",
}));

function renderHeader() {
  return render(
    <BrTheme>
      <BrHeader />
    </BrTheme>,
  );
}

describe("BrHeader", () => {
  it("renders a sticky banner hidden in print", () => {
    renderHeader();

    const header = screen.getByRole("banner");
    expect(header).toHaveClass("sticky", "top-0", "print:hidden");
  });

  it("shows the drawer toggle on mobile only", () => {
    renderHeader();

    const toggle = screen.getByTitle("open drawer");
    expect(toggle.closest(".sm\\:hidden")).not.toBeNull();
  });

  it("shows the tabs from sm up", () => {
    renderHeader();

    const nav = screen.getByRole("navigation");
    const tablist = within(nav).getByRole("tablist");
    expect(tablist.closest(".sm\\:inline")).toHaveClass("hidden");
    expect(
      within(tablist).getByRole("tab", { name: "Projects" }),
    ).toHaveAttribute("aria-selected", "true");
  });

  it("renders the theme switcher and social links outside the nav", () => {
    renderHeader();

    const nav = screen.getByRole("navigation");
    const themeButton = screen.getByTitle("Switch theme");
    const github = screen.getByRole("link", { name: "github" });

    expect(nav).not.toContainElement(themeButton);
    expect(nav).not.toContainElement(github);
    expect(screen.getByRole("banner")).toContainElement(themeButton);
  });
});
