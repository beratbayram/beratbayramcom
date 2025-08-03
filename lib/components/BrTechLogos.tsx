import lit from "@/lib/assets/lit.svg";
import nextJS from "@/lib/assets/next.svg";
import react from "@/lib/assets/react.svg";
import TS from "@/lib/assets/ts.svg";
import Image from "next/image";
import { BrLink } from "./BrLink";

const LOGOS = Object.entries({
  react: { href: "https://react.dev/", src: react },
  nextjs: {
    href: "https://nextjs.org/",
    src: nextJS,
    classes: "dark:invert",
  },
  typescript: { href: "https://www.typescriptlang.org/", src: TS },
  lit: { href: "https://lit.dev/", src: lit },
}).map(([key, { href, src, classes = "" }]) => (
  <BrLink
    key={key}
    href={href}
    target="_blank"
    className="m-1 flex items-center justify-center transition-transform hover:scale-110"
    title={`Visit ${key.charAt(0).toUpperCase() + key.slice(1)} website`}
  >
    <Image
      src={src}
      alt={`${key.charAt(0).toUpperCase() + key.slice(1)} Logo`}
      className={`h-auto ${classes}`}
      height={60}
    />
  </BrLink>
));

export function BrTechLogos() {
  return (
    <div className="flex items-center justify-between gap-2 *:size-15">
      {LOGOS}
    </div>
  );
}
