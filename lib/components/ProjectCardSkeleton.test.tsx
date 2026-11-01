import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectCardSkeleton } from "./ProjectCardSkeleton";

describe("ProjectCardSkeleton", () => {
  it("renders a bordered card with placeholder blocks", () => {
    const { container } = render(<ProjectCardSkeleton />);

    const card = container.firstElementChild;
    expect(card).toHaveClass("rounded-lg", "border");
    expect(card?.querySelectorAll(".bg-gray-200").length).toBeGreaterThan(0);
  });

  it("appends a custom class name", () => {
    const { container } = render(
      <ProjectCardSkeleton className="opacity-50" />,
    );

    expect(container.firstElementChild).toHaveClass("rounded-lg", "opacity-50");
  });

  it("has no text content", () => {
    const { container } = render(<ProjectCardSkeleton />);

    expect(container.textContent).toBe("");
  });
});
