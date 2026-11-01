import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import BgAnimation from "./index";

describe("BgAnimation (lazy wrapper)", () => {
  it("loads and renders the animated background on the client", async () => {
    const { container } = render(<BgAnimation />);

    expect(await screen.findByTitle("Background Paths")).toBeInTheDocument();
    expect(container.querySelectorAll("path")).toHaveLength(36);
  });
});
