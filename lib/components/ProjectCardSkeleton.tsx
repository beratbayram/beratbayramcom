interface ProjectCardSkeletonProps {
  className?: string;
}

export function ProjectCardSkeleton({
  className = "",
}: ProjectCardSkeletonProps) {
  return (
    <div
      className={`space-y-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700 ${className}`}
    >
      {/* Project image placeholder */}
      <div className="h-48 rounded bg-gray-200 dark:bg-gray-700" />

      {/* Project title */}
      <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

      {/* Project description */}
      <div className="space-y-2">
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Tech stack tags */}
      <div className="flex gap-2">
        <div className="h-6 w-16 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-6 w-12 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      {/* Project links */}
      <div className="flex gap-2">
        <div className="h-8 w-20 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-8 w-16 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
}
