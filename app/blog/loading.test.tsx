import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BlogLoading from "./loading";

describe("BlogLoading", () => {
  it("renders a pulsing placeholder for three posts", () => {
    const { container } = render(<BlogLoading />);

    expect(container.firstElementChild).toHaveClass("animate-pulse");
    expect(container.querySelectorAll(".grid > .rounded-lg")).toHaveLength(3);
  });

  it("has no text content", () => {
    const { container } = render(<BlogLoading />);

    expect(container.textContent).toBe("");
  });
});
