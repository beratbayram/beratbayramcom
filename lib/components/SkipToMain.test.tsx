import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { SkipToMain } from "./SkipToMain";

function renderWithMain() {
  render(
    <>
      <SkipToMain />
      <main id="main-content" tabIndex={-1}>
        Content
      </main>
    </>,
  );
  const main = screen.getByRole("main");
  const scrollIntoView = vi.fn();
  main.scrollIntoView = scrollIntoView;
  return { main, scrollIntoView };
}

describe("SkipToMain", () => {
  it("renders a skip link pointing at the main content", () => {
    render(<SkipToMain />);

    const link = screen.getByRole("link", { name: "Skip to main content" });
    expect(link).toHaveAttribute("href", "#main-content");
    expect(link).toHaveClass("skip-link");
  });

  it("moves focus to the main content and scrolls to it", () => {
    const { main, scrollIntoView } = renderWithMain();

    fireEvent.click(screen.getByRole("link"));

    expect(main).toHaveFocus();
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });

  it("does not change the URL hash", () => {
    renderWithMain();

    const notCancelled = fireEvent.click(screen.getByRole("link"));

    expect(notCancelled).toBe(false);
  });

  it("does nothing when the page has no main content", () => {
    render(<SkipToMain />);
    const link = screen.getByRole("link");

    expect(() => fireEvent.click(link)).not.toThrow();
    expect(document.activeElement).toBe(document.body);
  });
});
