import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import BehanceBlackIcon from "../assets/behance-black.svg";
import BehanceWhiteIcon from "../assets/behance-white.svg";
import { BrLink } from "./BrLink";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";

const ICON_STYLE = {
  color: "var(--mui-palette-text-primary)",
};

const BEHANCE_PROPS = {
  width: 24,
  height: 24,
  className: "h-[24px]",
};

export function BrSocials() {
  return (
    <address className="flex flex-1 justify-end-safe gap-1" style={ICON_STYLE}>
      <BrLink href="https://linkedin.com/in/berat-bayram/">
        <IconButton aria-label="linkedin">
          <LinkedInIcon style={ICON_STYLE} />
        </IconButton>
      </BrLink>
      <BrLink href="https://github.com/beratbayram/">
        <IconButton aria-label="github">
          <GitHubIcon style={ICON_STYLE} />
        </IconButton>
      </BrLink>
      <BrLink
        href="https://behance.net/beratbayram"
        className="flex items-center"
      >
        <IconButton aria-label="behance">
          <span className="inline dark:hidden">
            <Image src={BehanceBlackIcon} alt="Behance" {...BEHANCE_PROPS} />
          </span>
          <span className="hidden dark:inline">
            <Image src={BehanceWhiteIcon} alt="Behance" {...BEHANCE_PROPS} />
          </span>
        </IconButton>
      </BrLink>
    </address>
  );
}
