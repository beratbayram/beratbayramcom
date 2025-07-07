"use client";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { usePathname, useRouter } from "next/navigation";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

interface BrLinksProps {
  children?: React.ReactNode;
}

export function BrLinks({ children }: BrLinksProps) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Tabs value={pathname} aria-label="tabs">
      <Tab
        value={"/"}
        key={"/"}
        label={children}
        onClick={() => {
          if ("/" === pathname) return;
          router.push("/");
        }}
      />
      {LINKS.map(({ href, label }) => (
        <Tab
          value={href}
          key={href}
          label={label}
          onClick={() => {
            if (href === pathname) return;
            router.push(href);
          }}
        />
      ))}
    </Tabs>
  );

  return;
}
