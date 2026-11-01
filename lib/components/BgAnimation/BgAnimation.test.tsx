import { render, screen } from "@testing-library/react";
import type { SVGProps } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { BgAnimation } from "./BgAnimation";

type MotionPathProps = SVGProps<SVGPathElement> & {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition: Record<string, unknown>;
};

const pathSpy = vi.hoisted(() => vi.fn());

// Swap motion.path for a plain path so the animation config can be inspected
vi.mock("motion/react", () => ({
  motion: {
    path: ({ initial, animate, transition, ...props }: MotionPathProps) => {
      pathSpy({ initial, animate, transition, ...props });
      return <path {...props} />;
    },
  },
}));

function renderPaths() {
  const { container } = render(<BgAnimation />);
  const props = pathSpy.mock.calls.map(([p]) => p as MotionPathProps);
  return { container, props };
}

const opacityFor = (i: number) => Math.min(1, 0.1 + i * 0.03);

describe("BgAnimation", () => {
  beforeEach(() => {
    pathSpy.mockClear();
  });

  it("renders a decorative svg behind the page", () => {
    const { container } = renderPaths();

    const wrapper = container.firstElementChild;
    expect(wrapper).toHaveClass(
      "pointer-events-none",
      "fixed",
      "z-[-1]",
      "print:hidden",
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).toHaveAttribute("viewBox", "0 0 696 316");
    expect(screen.getByTitle("Background Paths")).toBeInTheDocument();
  });

  it("draws 36 paths in the current text colour", () => {
    const { container } = renderPaths();

    const paths = container.querySelectorAll("path");
    expect(paths).toHaveLength(36);
    for (const path of paths) {
      expect(path).toHaveAttribute("stroke", "currentColor");
    }
  });

  it("offsets each path further than the last", () => {
    const { props } = renderPaths();

    expect(props[0].d).toBe(
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
    );
    expect(props[35].d).toBe(
      "M-380 -399C-380 -399 -312 6 152 133C616 260 684 665 684 665",
    );
    expect(new Set(props.map((p) => p.d)).size).toBe(36);
  });

  it("thickens the stroke for each path", () => {
    const { props } = renderPaths();

    props.forEach((p, i) => {
      expect(p.strokeWidth).toBeCloseTo(0.5 + i * 0.03);
    });
  });

  // Animating opacity on SVG runs through WAAPI and flickers in Chrome
  it("fades with strokeOpacity, never opacity", () => {
    const { props } = renderPaths();

    for (const p of props) {
      expect(p.initial).not.toHaveProperty("opacity");
      expect(p.animate).not.toHaveProperty("opacity");
      expect(p.initial).toHaveProperty("strokeOpacity");
      expect(p.animate).toHaveProperty("strokeOpacity");
    }
  });

  it("pulses each path's stroke opacity around its base value", () => {
    const { props } = renderPaths();

    props.forEach((p, i) => {
      const base = opacityFor(i);
      expect(p.initial.strokeOpacity).toBeCloseTo(base * 0.6);
      const [from, peak, to] = p.animate.strokeOpacity as number[];
      expect(from).toBeCloseTo(base * 0.3);
      expect(peak).toBeCloseTo(base * 0.6);
      expect(to).toBeCloseTo(base * 0.3);
    });
  });

  it("caps the base opacity at 1", () => {
    const { props } = renderPaths();

    const last = props[35];
    expect(last.initial.strokeOpacity).toBeCloseTo(0.6);
    expect((last.animate.strokeOpacity as number[])[1]).toBeCloseTo(0.6);
  });

  it("draws the path and slides it along itself", () => {
    const { props } = renderPaths();

    for (const p of props) {
      expect(p.initial.pathLength).toBe(0.3);
      expect(p.animate.pathLength).toBe(1);
      expect(p.animate.pathOffset).toEqual([0, 1, 0]);
    }
  });

  it("loops forever with a 20 to 30 second duration", () => {
    const { props } = renderPaths();

    for (const p of props) {
      expect(p.transition).toMatchObject({
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      });
      expect(p.transition.duration).toBeGreaterThanOrEqual(20);
      expect(p.transition.duration).toBeLessThan(30);
    }
  });

  it("keeps the same durations across renders", () => {
    const first = renderPaths().props.map((p) => p.transition.duration);
    pathSpy.mockClear();
    const second = renderPaths().props.map((p) => p.transition.duration);

    expect(second).toEqual(first);
  });
});
