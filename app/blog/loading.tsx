export default function BlogLoading() {
  return (
    <div className="animate-pulse space-y-8 py-12">
      {/* Page title skeleton */}
      <div className="h-8 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />

      {/* Blog posts skeleton */}
      <div className="grid gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="space-y-3 rounded-lg border border-gray-200 p-6 dark:border-gray-700"
          >
            {/* Post title */}
            <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />

            {/* Post meta */}
            <div className="h-4 w-1/4 rounded bg-gray-200 dark:bg-gray-700" />

            {/* Post excerpt */}
            <div className="space-y-2">
              <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
              <div className="h-4 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
            </div>

            {/* Read more link */}
            <div className="h-4 w-1/5 rounded bg-gray-200 dark:bg-gray-700" />
          </div>
        ))}
      </div>
    </div>
  );
}
