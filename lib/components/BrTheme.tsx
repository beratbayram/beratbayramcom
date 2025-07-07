"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: {
          main: "#ffffff",
        },
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: "class",
  },
});

interface BrThemeProps {
  children: ReactNode;
}

export function BrTheme({ children }: BrThemeProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
