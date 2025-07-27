import { BrWIP } from "@/lib/components/BrWIP";

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
