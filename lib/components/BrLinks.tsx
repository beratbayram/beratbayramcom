"use client";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrTitle } from "./BrTitle";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

interface BrLinksProps {
  orientation?: "horizontal" | "vertical";
}

export function BrLinks({ orientation }: BrLinksProps) {
  const pathname = usePathname();

  const variant = orientation === "vertical" ? "fullWidth" : "standard";

  return (
    <Tabs
      value={pathname}
      aria-label="tabs"
      orientation={orientation}
      variant={variant}
    >
      <Tab
        value={"/"}
        key={"/"}
        label={<BrTitle />}
        LinkComponent={Link}
        href={"/"}
      />
      {LINKS.map(({ href, label }) => (
        <Tab
          value={href}
          key={href}
          label={label}
          LinkComponent={Link}
          href={href}
        />
      ))}
    </Tabs>
  );

  return;
}
