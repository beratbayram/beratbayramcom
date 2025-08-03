import { ProjectsSectionSkeleton } from "@/lib/components/ProjectsSectionSkeleton";

export default function ProjectsLoading() {
  return (
    <div className="animate-pulse space-y-12 py-12">
      {/* Page header skeleton */}
      <div className="mb-12">
        <div className="mb-4 h-10 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-5 w-full rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Pinned Projects section */}
      <ProjectsSectionSkeleton titleWidth="w-1/4" projectCount={6} />

      {/* Featured Projects section */}
      <ProjectsSectionSkeleton titleWidth="w-1/3" projectCount={6} />

      {/* Other Projects section */}
      <ProjectsSectionSkeleton titleWidth="w-1/4" projectCount={6} />
    </div>
  );
}
