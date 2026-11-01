import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrTitle } from "./BrTitle";

describe("BrTitle", () => {
  it("renders a single top-level heading", () => {
    render(<BrTitle />);

    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("shows initials on small screens", () => {
    render(<BrTitle />);

    expect(screen.getByText("BB")).toHaveClass("inline", "md:hidden");
  });

  it("shows the full name from md up, kept on one line", () => {
    render(<BrTitle />);

    const fullName = screen.getByText(/Berat.BAYRAM/);
    expect(fullName).toHaveClass("hidden", "md:inline");
    expect(fullName.textContent).toBe("Berat BAYRAM");
  });
});
