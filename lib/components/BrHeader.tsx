import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BehanceBlackIcon from "../assets/behance-black.svg";
import BehanceWhiteIcon from "../assets/behance-white.svg";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";

const ICON_STYLE = {
  color: "var(--mui-palette-text-primary)",
};

const BEHANCE_PROPS = {
  width: 24,
  height: 24,
  className: "h-[24px]",
  alt: "Behance",
};

export function BrHeader() {
  return (
    <header className="sticky top-0 right-0 left-0 z-10 flex items-center justify-between gap-4 bg-white py-4 dark:bg-(--mui-palette-background-default)">
      <h1 className="justify-start-safe flex flex-1 items-center text-2xl font-bold">
        <Link href="/">
          <span className="inline sm:hidden">BB</span>
          <span className="hidden sm:inline">Berat&nbsp;BAYRAM</span>
        </Link>
      </h1>
      <nav className="flex flex-1 justify-end-safe gap-1" style={ICON_STYLE}>
        <Link href="https://linkedin.com/in/berat-bayram/">
          <IconButton aria-label="linkedin">
            <LinkedInIcon style={ICON_STYLE} />
          </IconButton>
        </Link>
        <Link href="https://github.com/beratbayram">
          <IconButton aria-label="github">
            <GitHubIcon style={ICON_STYLE} />
          </IconButton>
        </Link>
        <Link
          href="https://behance.net/beratbayram"
          className="flex items-center"
        >
          <IconButton aria-label="behance">
            <span className="inline dark:hidden">
              <Image src={BehanceBlackIcon} {...BEHANCE_PROPS} />
            </span>
            <span className="hidden dark:inline">
              <Image src={BehanceWhiteIcon} {...BEHANCE_PROPS} />
            </span>
          </IconButton>
        </Link>
      </nav>
    </header>
  );
}
