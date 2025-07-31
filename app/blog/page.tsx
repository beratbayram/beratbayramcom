import { BrWIP } from "@/lib/components/BrWIP";
import { Metadata } from "next";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";

export const metadata: Metadata = {
  title: "Blog - Frontend Development Insights & Tutorials",
  description:
    "Read Berat BAYRAM's insights on frontend development, React best practices, TypeScript tips, UI library architecture, and Micro Frontend patterns. Learn from real-world experience at TÜBİTAK and industry expertise.",
  keywords: getKeywords.page("blog"),
  openGraph: {
    title: "Frontend Development Blog by Berat BAYRAM",
    description:
      "Expert insights on React, TypeScript, UI architecture, and modern frontend development from experienced engineer Berat BAYRAM.",
    url: "https://beratbayram.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <BrWIP description="This blog section is currently under construction. Check back soon for articles about front-end development, React, Next.js, and more!" />
    </div>
  );
}
