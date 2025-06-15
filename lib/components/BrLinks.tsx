"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function BrLinks() {
  const pathname = usePathname();

  const isActive = (href: string) => (pathname === href ? "text-bold" : "");

  return (
    <>
      {LINKS.map(({ href, label }) => (
        <Link key={href} href={href} className={isActive(href)}>
          {label}
        </Link>
      ))}
    </>
  );
}
