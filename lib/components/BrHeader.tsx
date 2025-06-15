import Link from "next/link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BehanceIcon from "../assets/behance.svg";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import { BrLinks } from "./BrLinks";

export function BrHeader() {
  return (
    <header className="flex items-center justify-between p-4 gap-4">
      <h1 className="text-2xl font-bold flex items-center justify-start-safe flex-1">
        <Link href="/">Berat BAYRAM</Link>
      </h1>
      <nav className="flex space-x-4 w-1/2 flex-1 justify-center-safe *:text-lg *:hover:underline">
        <BrLinks />
      </nav>
      <nav className="flex space-x-4 w-1/2 flex-1 justify-end-safe">
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
              className="h-[24px]"
            />
          </IconButton>
        </Link>
      </nav>
    </header>
  );
}
