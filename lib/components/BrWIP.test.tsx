import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrWIP } from "./BrWIP";

describe("BrWIP", () => {
  it("renders the default title and description", () => {
    render(<BrWIP />);

    expect(
      screen.getByRole("heading", { level: 2, name: "Work in Progress" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "This section is currently under construction. Check back soon!",
      ),
    ).toBeInTheDocument();
  });

  it("renders a custom title and description", () => {
    render(<BrWIP title="Coming soon" description="Posts are on the way." />);

    expect(
      screen.getByRole("heading", { name: "Coming soon" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Posts are on the way.")).toBeInTheDocument();
    expect(screen.queryByText("Work in Progress")).not.toBeInTheDocument();
  });

  it("shows the construction sign", () => {
    render(<BrWIP />);

    expect(screen.getByText("🚧")).toBeInTheDocument();
  });
});
