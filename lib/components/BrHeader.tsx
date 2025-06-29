import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BehanceIcon from "../assets/behance.svg";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import { BrLinks } from "./BrLinks";

const ENABLE_LINKS = false;

export function BrHeader() {
  return (
    <header className="sticky top-0 right-0 left-0 z-10 flex items-center justify-between gap-4 bg-white py-4 dark:bg-gray-900">
      <h1 className="justify-start-safe flex flex-1 items-center text-2xl font-bold">
        <Link href="/">Berat BAYRAM</Link>
      </h1>
      {ENABLE_LINKS && (
        <nav className="flex flex-1 justify-center-safe space-x-4 *:text-lg *:hover:underline">
          <BrLinks />
        </nav>
      )}
      <nav className="flex flex-1 justify-end-safe space-x-4">
        <Link href="https://linkedin.com/in/berat-bayram/">
          <IconButton aria-label="linkedin" color="inherit">
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link href="https://github.com/beratbayram">
          <IconButton aria-label="github" color="inherit">
            <GitHubIcon />
          </IconButton>
        </Link>
        <Link
          href="https://behance.net/beratbayram"
          className="flex items-center"
        >
          <IconButton aria-label="behance" color="inherit">
            <Image
              src={BehanceIcon}
              alt="Behance"
              width={24}
              height={24}
              className="h-[24px] dark:invert"
            />
          </IconButton>
        </Link>
      </nav>
    </header>
  );
}
