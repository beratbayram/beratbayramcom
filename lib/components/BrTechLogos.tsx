import react from "@/lib/assets/react.svg";
import nextJS from "@/lib/assets/next.svg";
import TS from "@/lib/assets/ts.svg";
import lit from "@/lib/assets/lit.svg";
import Image from "next/image";

export function BrTechLogos() {
  return (
    <div className="flex items-center justify-between gap-2 *:size-15">
      <Image src={react} alt="React Logo" />
      <Image src={nextJS} alt="Next.js Logo" />
      <Image src={TS} alt="TypeScript Logo" />
      <Image src={lit} alt="Lit Logo" />
    </div>
  );
}
