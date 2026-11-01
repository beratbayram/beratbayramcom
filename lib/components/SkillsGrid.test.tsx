import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import SkillsGrid from "./SkillsGrid";

function getGrid() {
  return screen.getByText("React").parentElement;
}

describe("SkillsGrid", () => {
  it("renders the title and its children", () => {
    render(
      <SkillsGrid title="Hard Skills:">
        <span>React</span>
        <span>Lit</span>
      </SkillsGrid>,
    );

    expect(
      screen.getByRole("heading", { level: 3, name: "Hard Skills:" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Lit")).toBeInTheDocument();
  });

  it("uses the default responsive columns", () => {
    render(
      <SkillsGrid title="Hard Skills:">
        <span>React</span>
      </SkillsGrid>,
    );

    expect(getGrid()).toHaveClass(
      "grid",
      "grid-cols-2",
      "sm:grid-cols-3",
      "md:grid-cols-4",
      "gap-2",
    );
  });

  it("replaces the columns when given", () => {
    render(
      <SkillsGrid title="Soft Skills:" gridCols="grid-cols-1 md:grid-cols-3">
        <span>React</span>
      </SkillsGrid>,
    );

    const grid = getGrid();
    expect(grid).toHaveClass("grid", "grid-cols-1", "md:grid-cols-3");
    expect(grid).not.toHaveClass("grid-cols-2");
  });
});
