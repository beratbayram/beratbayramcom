import { BrWIP } from "@/lib/components/BrWIP";
import { Metadata } from "next";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";

export const metadata: Metadata = {
  title: "Projects - UI Libraries, Web Components & Frontend Solutions",
  description:
    "Explore Berat BAYRAM's portfolio of projects including React UI libraries, Web Components built with Lit, Micro Front-End Architecture implementations, and Next.js applications. See the innovative frontend solutions developed at TÜBİTAK and beyond.",
  keywords: getKeywords.page("projects"),
  openGraph: {
    title: "Projects by Berat BAYRAM - Frontend Engineering Portfolio",
    description:
      "Portfolio showcasing UI libraries, Web Components, and architectural solutions by experienced Front-End Engineer Berat BAYRAM.",
    url: "https://beratbayram.com/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Projects</h1>
      <BrWIP
        title="Work in Progress"
        description="I'm currently working on showcasing my projects. This section will feature my latest work and contributions soon!"
      />
    </div>
  );
}
