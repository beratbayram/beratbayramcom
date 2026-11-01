import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PageHeader from "./PageHeader";

describe("PageHeader", () => {
  it("renders the title as a heading hidden in print", () => {
    render(<PageHeader title="About Me" />);

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("About Me");
    expect(heading).toHaveClass("print:hidden");
  });

  it("adds a print-only title when given", () => {
    render(<PageHeader title="About Me" printTitle="Berat BAYRAM" />);

    const printHeading = screen.getByRole("heading", {
      level: 1,
      name: "Berat BAYRAM",
      hidden: true,
    });
    expect(printHeading).toHaveClass("hidden", "print:block");
  });

  it("renders only one heading without a print title", () => {
    render(<PageHeader title="About Me" />);

    expect(screen.getAllByRole("heading", { hidden: true })).toHaveLength(1);
  });

  it("renders the description when given", () => {
    render(<PageHeader title="About Me" description="Front-End Engineer" />);

    expect(screen.getByText("Front-End Engineer").tagName).toBe("P");
  });

  it("renders no paragraph without a description", () => {
    const { container } = render(<PageHeader title="About Me" />);

    expect(container.querySelector("p")).toBeNull();
  });

  it("renders the action next to the title", () => {
    render(<PageHeader title="About Me" action={<button>Download</button>} />);

    expect(
      screen.getByRole("button", { name: "Download" }),
    ).toBeInTheDocument();
  });
});
