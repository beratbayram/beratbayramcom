import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { BrHeaderMobile } from "./BrHeaderMobile";

vi.mock("next/navigation", async (importOriginal) => ({
  ...(await importOriginal<typeof import("next/navigation")>()),
  usePathname: () => "/about",
}));

async function openDrawer() {
  const user = userEvent.setup();
  render(<BrHeaderMobile />);
  await user.click(screen.getByTitle("open drawer"));
  return user;
}

function expectDrawerClosed() {
  return waitFor(() =>
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument(),
  );
}

describe("BrHeaderMobile", () => {
  it("starts with the drawer closed", () => {
    render(<BrHeaderMobile />);

    expect(screen.getByTitle("open drawer")).toBeInTheDocument();
    expect(screen.queryByRole("tablist")).not.toBeInTheDocument();
  });

  it("links the site title home", () => {
    render(<BrHeaderMobile />);

    const title = screen.getByRole("heading", { level: 1 });
    expect(title.closest("a")).toHaveAttribute("href", "/");
  });

  it("opens a vertical menu from the toggle", async () => {
    await openDrawer();

    const tablist = screen.getByRole("tablist");
    expect(tablist).toHaveAttribute("aria-orientation", "vertical");
    expect(screen.getByRole("tab", { name: "About" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  });

  it("closes when the menu is clicked", async () => {
    const user = await openDrawer();

    await user.click(screen.getByRole("tablist"));

    await expectDrawerClosed();
  });

  it("closes on Escape", async () => {
    const user = await openDrawer();

    await user.keyboard("{Escape}");

    await expectDrawerClosed();
  });

  it("closes when the toggle is pressed again", async () => {
    const user = await openDrawer();

    await user.click(screen.getByTitle("open drawer"));

    await expectDrawerClosed();
  });
});
