import { mockMatchMedia } from "@/test/utils";
import { useColorScheme } from "@mui/material/styles";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { BrTheme } from "./BrTheme";
import { BrThemeSwitcher } from "./BrThemeSwitcher";

vi.mock("@mui/material/styles", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@mui/material/styles")>();
  return { ...actual, useColorScheme: vi.fn(actual.useColorScheme) };
});

const mockedUseColorScheme = vi.mocked(useColorScheme);

type Mode = "light" | "dark" | "system" | undefined;

function mockMode(mode: Mode) {
  const setMode = vi.fn();
  mockedUseColorScheme.mockReturnValue({
    mode,
    setMode,
  } as unknown as ReturnType<typeof useColorScheme>);
  return setMode;
}

describe("BrThemeSwitcher", () => {
  it("is a labelled button", () => {
    mockMode("light");
    render(<BrThemeSwitcher />);

    expect(screen.getByRole("button")).toHaveAttribute("title", "Switch theme");
  });

  it.each([
    ["light", "LightModeIcon", "dark"],
    ["dark", "DarkModeIcon", "system"],
    ["system", "SettingsSuggestIcon", "light"],
    [undefined, "SettingsSuggestIcon", "light"],
  ] as const)(
    "in %s mode shows %s and switches to %s",
    async (mode, icon, next) => {
      const setMode = mockMode(mode);
      render(<BrThemeSwitcher />);

      expect(screen.getByTestId(icon)).toBeInTheDocument();

      await userEvent.click(screen.getByRole("button"));

      expect(setMode).toHaveBeenCalledExactlyOnceWith(next);
    },
  );

  describe("with the real theme provider", () => {
    afterEach(() => {
      localStorage.clear();
      document.documentElement.className = "";
    });

    it("cycles light, dark, system and back", async () => {
      const actual = await vi.importActual<
        typeof import("@mui/material/styles")
      >("@mui/material/styles");
      mockedUseColorScheme.mockImplementation(actual.useColorScheme);
      mockMatchMedia(false);
      localStorage.setItem("mui-mode", "light");
      const user = userEvent.setup();

      render(
        <BrTheme>
          <BrThemeSwitcher />
        </BrTheme>,
      );
      expect(await screen.findByTestId("LightModeIcon")).toBeInTheDocument();

      await user.click(screen.getByRole("button"));
      expect(await screen.findByTestId("DarkModeIcon")).toBeInTheDocument();
      expect(localStorage.getItem("mui-mode")).toBe("dark");
      expect(document.documentElement).toHaveClass("dark");

      await user.click(screen.getByRole("button"));
      expect(
        await screen.findByTestId("SettingsSuggestIcon"),
      ).toBeInTheDocument();
      expect(localStorage.getItem("mui-mode")).toBe("system");
      expect(document.documentElement).toHaveClass("light");

      await user.click(screen.getByRole("button"));
      expect(await screen.findByTestId("LightModeIcon")).toBeInTheDocument();
      expect(localStorage.getItem("mui-mode")).toBe("light");
    });
  });
});
