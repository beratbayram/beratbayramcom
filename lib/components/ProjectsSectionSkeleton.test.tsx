import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectsSectionSkeleton } from "./ProjectsSectionSkeleton";

function getCards(container: HTMLElement) {
  return container.querySelectorAll(".grid > .rounded-lg");
}

describe("ProjectsSectionSkeleton", () => {
  it("renders three cards by default", () => {
    const { container } = render(<ProjectsSectionSkeleton />);

    expect(getCards(container)).toHaveLength(3);
  });

  it.each([0, 1, 6])("renders %i cards when asked", (projectCount) => {
    const { container } = render(
      <ProjectsSectionSkeleton projectCount={projectCount} />,
    );

    expect(getCards(container)).toHaveLength(projectCount);
  });

  it("uses the default title width", () => {
    const { container } = render(<ProjectsSectionSkeleton />);

    const section = container.querySelector("section");
    expect(section?.firstElementChild).toHaveClass("w-1/4", "h-8");
  });

  it("applies a custom title width and section class", () => {
    const { container } = render(
      <ProjectsSectionSkeleton titleWidth="w-1/3" className="mb-12" />,
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("mb-12");
    expect(section?.firstElementChild).toHaveClass("w-1/3");
    expect(section?.firstElementChild).not.toHaveClass("w-1/4");
  });
});
