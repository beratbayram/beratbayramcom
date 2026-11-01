import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProjectsLoading from "./loading";

describe("ProjectsLoading", () => {
  it("mirrors the three project sections of the page", () => {
    const { container } = render(<ProjectsLoading />);

    expect(container.firstElementChild).toHaveClass("animate-pulse");
    const sections = container.querySelectorAll("section");
    expect(sections).toHaveLength(3);
    for (const section of sections) {
      expect(section.querySelectorAll(".grid > .rounded-lg")).toHaveLength(6);
    }
  });

  it("varies the section title widths", () => {
    const { container } = render(<ProjectsLoading />);

    const widths = [...container.querySelectorAll("section")].map(
      (section) => section.firstElementChild?.className.match(/w-\d\/\d/)?.[0],
    );
    expect(widths).toEqual(["w-1/4", "w-1/3", "w-1/4"]);
  });
});
