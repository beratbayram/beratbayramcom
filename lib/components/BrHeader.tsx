import { BrLinks } from "./BrLinks";
import { BrHeaderMobile } from "./BrHeaderMobile";
import { BrSocials } from "./BrSocials";

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
      <BrSocials />
    </header>
  );
}
