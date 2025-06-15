import { METADATA } from "@/lib/const/METADATA";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import CssBaseline from "@mui/material/CssBaseline";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import { BrHeader } from "@/lib/components/BrHeader";
import BgAnimation from "@/lib/components/BgAnimation";

export const metadata = METADATA;

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          <BrHeader />
          {children}
          <BgAnimation />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
