import { Divider } from "@mui/material";
import { BrHeaderMobile } from "./BrHeaderMobile";
import { BrLinks } from "./BrLinks";
import { BrSocials } from "./BrSocials";
import { BrThemeSwitcher } from "./BrThemeSwitcher";

export function BrHeader() {
  return (
    <header className="sticky top-0 right-0 left-0 z-10 flex items-center justify-between gap-4 bg-white pt-4 dark:bg-(--mui-palette-background-default) print:hidden">
      <nav className="flex justify-center-safe gap-4">
        <div className="inline sm:hidden">
          <BrHeaderMobile />
        </div>
        <div className="hidden sm:inline">
          <BrLinks />
        </div>
      </nav>
      <div className="flex items-center gap-2">
        <BrThemeSwitcher />
        <Divider orientation="vertical" flexItem />
        <BrSocials />
      </div>
    </header>
  );
}
