import BgAnimation from "@/lib/components/BgAnimation";
import { BrHeader } from "@/lib/components/BrHeader";
import { BrTheme } from "@/lib/components/BrTheme";
import { SkipToMain } from "@/lib/components/SkipToMain";
import { StructuredData } from "@/lib/components/StructuredData";
import { METADATA } from "@/lib/const/METADATA";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

export const metadata = METADATA;

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  preload: true,
});

interface RootLayoutProps {
  children: ReactNode;
}

// suppressHydrationWarning is needed because:
// https://mui.com/material-ui/react-init-color-scheme-script/

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <StructuredData />
        <SkipToMain />
        <BrTheme>
          <div className="mx-auto max-w-4xl px-4">
            <BrHeader />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </div>
          <BgAnimation />
        </BrTheme>
      </body>
    </html>
  );
}
