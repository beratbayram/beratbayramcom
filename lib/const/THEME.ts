"use client";
import { createTheme } from "@mui/material/styles";

export const THEME = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    dark: true,
  },
  cssVariables: {
    colorSchemeSelector: "data",
  },
});
