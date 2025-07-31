import BgAnimation from "@/lib/components/BgAnimation";
import { BrHeader } from "@/lib/components/BrHeader";
import { BrTheme } from "@/lib/components/BrTheme";
import { METADATA } from "@/lib/const/METADATA";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

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

// suppressHydrationWarning is needed because:
// https://mui.com/material-ui/react-init-color-scheme-script/

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={roboto.variable} suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <BrTheme>
          <div className="mx-auto max-w-4xl px-4">
            <BrHeader />
            <main>{children}</main>
          </div>
          <BgAnimation />
        </BrTheme>
      </body>
    </html>
  );
}
