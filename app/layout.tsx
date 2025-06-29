import { METADATA } from "@/lib/const/METADATA";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";
import { BrHeader } from "@/lib/components/BrHeader";
import BgAnimation from "@/lib/components/BgAnimation";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { THEME } from "@/lib/const/THEME";
import { ReactNode } from "react";

export const metadata = METADATA;

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={THEME}>
            <div className="mx-auto max-w-4xl p-4">
              <CssBaseline enableColorScheme />
              <BrHeader />
              {children}
            </div>
            <BgAnimation />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
