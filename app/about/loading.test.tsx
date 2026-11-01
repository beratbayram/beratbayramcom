import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutLoading from "./loading";

describe("AboutLoading", () => {
  it("renders a pulsing title and two paragraph groups", () => {
    const { container } = render(<AboutLoading />);

    const root = container.firstElementChild!;
    expect(root).toHaveClass("animate-pulse");
    expect(root.children).toHaveLength(3);
    expect(root.querySelectorAll(".space-y-4 > div")).toHaveLength(6);
  });

  it("has no text content", () => {
    const { container } = render(<AboutLoading />);

    expect(container.textContent).toBe("");
  });
});
