import { BrWIP } from "@/lib/components/BrWIP";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold">Blog</h1>
      <BrWIP description="This blog section is currently under construction. Check back soon for articles about front-end development, React, Next.js, and more!" />
    </div>
  );
}
