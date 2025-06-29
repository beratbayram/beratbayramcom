import Image from "next/image";
import pp from "@/lib/assets/pp.png";
import dynamic from "next/dynamic";

const BrTechLogos = dynamic(() =>
  import("@/lib/components/BrTechLogos").then((mod) => mod.BrTechLogos),
);

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-between gap-2 pt-10 sm:flex-row-reverse">
      <Image src={pp} alt="Profile Picture" className="size-3/5 sm:size-1/2" />
      <main className="flex flex-col gap-24">
        <div className="flex flex-col gap-2">
          <div className="text-md font-normal text-gray-500">
            Hey, I&apos;m a
          </div>
          <h1 className="text-4xl font-bold">Front-End Engineer</h1>
          <p className="text-md">
            with expertise in React, Next.js, TypeScript, and Lit. Built UI
            libraries, led architecture, and mentored teams. Strong in both
            scalable front-end systems and cross-team leadership.
          </p>
        </div>
        <BrTechLogos />
      </main>
    </div>
  );
}
