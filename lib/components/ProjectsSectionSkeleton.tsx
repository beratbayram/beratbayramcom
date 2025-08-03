import { ProjectCardSkeleton } from "./ProjectCardSkeleton";

interface ProjectsSectionSkeletonProps {
  titleWidth?: string;
  projectCount?: number;
  className?: string;
}

export function ProjectsSectionSkeleton({
  titleWidth = "w-1/4",
  projectCount = 3,
  className = "",
}: ProjectsSectionSkeletonProps) {
  return (
    <section className={className}>
      {/* Section title skeleton */}
      <div
        className={`h-8 rounded bg-gray-200 dark:bg-gray-700 ${titleWidth} mb-6`}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(projectCount)].map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
