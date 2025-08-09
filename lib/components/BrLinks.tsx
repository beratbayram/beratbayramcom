"use client";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { usePathname } from "next/navigation";
import { BrTitle } from "./BrTitle";
import { BrLink } from "./BrLink";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
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
      sx={{
        "& .MuiTab-root": {
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            color: "primary.main",
            transform: "translateY(-1px)",
          },
          "&:hover:not(.Mui-selected)": {
            opacity: 0.6,
          },
        },
      }}
    >
      <Tab
        value={"/"}
        key={"/"}
        label={<BrTitle />}
        LinkComponent={BrLink}
        href={"/"}
      />
      {LINKS.map(({ href, label }) => (
        <Tab
          value={href}
          key={href}
          label={label}
          LinkComponent={BrLink}
          href={href}
        />
      ))}
    </Tabs>
  );
}
