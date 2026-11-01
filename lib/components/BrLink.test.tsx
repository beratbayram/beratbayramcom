import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { BrLink } from "./BrLink";

const linkSpy = vi.hoisted(() => vi.fn());

vi.mock("next/link", async (importOriginal) => {
  const actual = await importOriginal<typeof import("next/link")>();
  const ActualLink = actual.default;
  return {
    default: (props: ComponentProps<typeof ActualLink>) => {
      linkSpy(props);
      return <ActualLink {...props} />;
    },
  };
});

describe("BrLink", () => {
  beforeEach(() => {
    linkSpy.mockClear();
  });

  it("renders an anchor with the given href and children", () => {
    render(<BrLink href="/about">About</BrLink>);

    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "/about");
  });

  it("adds a safe rel by default", () => {
    render(<BrLink href="https://example.com">External</BrLink>);

    expect(screen.getByRole("link")).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );
  });

  it("disables prefetching by default", () => {
    render(<BrLink href="/projects">Projects</BrLink>);

    expect(linkSpy).toHaveBeenCalledWith(
      expect.objectContaining({ prefetch: false, href: "/projects" }),
    );
  });

  it("lets callers override rel and prefetch", () => {
    render(
      <BrLink href="/blog" rel="me" prefetch>
        Blog
      </BrLink>,
    );

    expect(screen.getByRole("link")).toHaveAttribute("rel", "me");
    expect(linkSpy).toHaveBeenCalledWith(
      expect.objectContaining({ prefetch: true, rel: "me" }),
    );
  });

  it("forwards other anchor props", () => {
    render(
      <BrLink
        href="https://example.com"
        target="_blank"
        className="custom"
        title="Example"
      >
        Example
      </BrLink>,
    );

    const link = screen.getByRole("link", { name: "Example" });
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveClass("custom");
    expect(link).toHaveAttribute("title", "Example");
  });
});
