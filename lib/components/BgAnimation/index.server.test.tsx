// @vitest-environment node
import { renderToString } from "react-dom/server";
import { describe, expect, it } from "vitest";
import BgAnimation from "./index";

describe("BgAnimation (lazy wrapper) on the server", () => {
  // Path durations use Math.random, so server HTML would never hydrate cleanly
  it("renders nothing during SSR", () => {
    expect(renderToString(<BgAnimation />)).toBe("");
  });
});
