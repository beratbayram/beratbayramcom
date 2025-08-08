import Image from "next/image";
import pp from "@/lib/assets/pp.webp";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";

const BrTechLogos = dynamic(() =>
  import("@/lib/components/BrTechLogos").then((mod) => mod.BrTechLogos),
);

export const metadata: Metadata = {
  title: "Berat BAYRAM - Front-End Engineer & UI Library Architect",
  description:
    "Experienced Front-End Engineer specializing in React, Next.js, TypeScript, and Lit. Built scalable UI libraries, led Micro Front-End Architecture at TÜBİTAK, and mentored development teams. Expert in modern web technologies and cross-team leadership.",
  keywords: getKeywords.page("home"),
  openGraph: {
    title: "Berat BAYRAM - Front-End Engineer & UI Library Architect",
    description:
      "Experienced Front-End Engineer specializing in React, Next.js, TypeScript, and Lit. Built scalable UI libraries, led Micro Front-End Architecture at TÜBİTAK.",
    url: "https://beratbayram.com",
  },
};

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between gap-15 py-12 pt-10 sm:flex-row-reverse">
      <Image
        src={pp}
        priority
        alt="Berat BAYRAM - Front-End Engineer and UI Library Architect"
        className="size-3/5 sm:size-1/2"
      />
      <div className="flex flex-col gap-4 sm:gap-12">
        <header className="flex flex-col gap-2">
          <p className="text-md font-normal text-gray-500">Hey, I&apos;m a</p>
          <h1 className="text-4xl font-bold">Front-End Engineer</h1>
          <p className="text-md">
            with expertise in <strong>React</strong>, <strong>Next.js</strong>,{" "}
            <strong>TypeScript</strong>, and <strong>Lit</strong>. Built UI
            libraries, led architecture, and mentored teams. Strong in both
            scalable front-end systems and cross-team leadership.
          </p>
        </header>
        <section aria-label="Technology Stack">
          <BrTechLogos />
        </section>
      </div>
    </div>
  );
}
