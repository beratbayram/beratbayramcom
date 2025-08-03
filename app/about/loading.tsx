export default function AboutLoading() {
  return (
    <div className="animate-pulse space-y-6 py-12">
      {/* Page title skeleton */}
      <div className="h-8 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

      {/* Content sections skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
      </div>

      <div className="space-y-4">
        <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
        <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
}
