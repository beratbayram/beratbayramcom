import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Section from "./Section";

describe("Section", () => {
  it("renders the title as a level 2 heading followed by its children", () => {
    render(
      <Section title="Education">
        <p>Ankara University</p>
      </Section>,
    );

    const heading = screen.getByRole("heading", {
      level: 2,
      name: "Education",
    });
    const content = screen.getByText("Ankara University");
    expect(heading.closest("section")).toContainElement(content);
  });

  it("uses a bottom margin by default", () => {
    render(<Section title="Education">content</Section>);

    const section = screen.getByRole("heading").closest("section");
    expect(section).toHaveClass("mb-12");
  });

  it("replaces the default class name", () => {
    render(
      <Section title="Education" className="mt-4">
        content
      </Section>,
    );

    const section = screen.getByRole("heading").closest("section");
    expect(section).toHaveClass("mt-4");
    expect(section).not.toHaveClass("mb-12");
  });
});
