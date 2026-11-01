import Button from "@mui/material/Button";
import { useTheme, type CssVarsTheme, type Theme } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BrTheme } from "./BrTheme";

function captureTheme() {
  let theme: (Theme & CssVarsTheme) | undefined;
  function Probe() {
    theme = useTheme<Theme & CssVarsTheme>();
    return null;
  }
  render(
    <BrTheme>
      <Probe />
    </BrTheme>,
  );
  if (!theme) throw new Error("Theme was not provided");
  return theme;
}

describe("BrTheme", () => {
  it("renders its children", () => {
    render(
      <BrTheme>
        <p>Hello</p>
      </BrTheme>,
    );

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("uses a near-black primary colour in light mode", () => {
    const theme = captureTheme();

    expect(theme.colorSchemes.light?.palette.primary.main).toBe(
      "rgba(0, 0, 0, 0.87)",
    );
  });

  it("uses a white primary colour in dark mode", () => {
    const theme = captureTheme();

    expect(theme.colorSchemes.dark?.palette.mode).toBe("dark");
    expect(theme.colorSchemes.dark?.palette.primary.main).toBe("#ffffff");
  });

  it("uses the Roboto font variable", () => {
    expect(captureTheme().typography.fontFamily).toBe("var(--font-roboto)");
  });

  it("centres button ripples", () => {
    const theme = captureTheme();

    expect(theme.components?.MuiButtonBase?.defaultProps).toEqual({
      centerRipple: true,
    });
  });

  it("exposes palette colours as CSS variables", () => {
    const theme = captureTheme();

    expect(theme.vars.palette.primary.main).toMatch(
      /^var\(--mui-palette-primary-main/,
    );
  });

  it("styles components through the App Router emotion cache", () => {
    render(
      <BrTheme>
        <Button>Themed</Button>
      </BrTheme>,
    );

    const className = screen.getByRole("button", { name: "Themed" }).className;
    expect(className).toMatch(/(^|\s)mui-[\w-]+MuiButton-root/);
  });

  it("injects the baseline styles with the colour scheme", () => {
    render(
      <BrTheme>
        <p>Hello</p>
      </BrTheme>,
    );

    const css = [...document.head.querySelectorAll("style")]
      .map((style) => style.textContent)
      .join("\n");
    expect(css).toContain("color-scheme");
  });
});
