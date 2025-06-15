export default function BlogPage() {
  return (
    <div className="mx-auto max-w-xl py-12">
      <h1 className="mb-4 text-4xl font-bold">Blog</h1>
      <p className="mb-6 text-lg text-gray-700">
        Welcome to my blog! Here are some recent posts:
      </p>
      <ul className="space-y-3">
        <li className="rounded bg-gray-100 p-4">
          How I built my portfolio with Next.js
        </li>
        <li className="rounded bg-gray-100 p-4">
          Tips for effective remote work
        </li>
      </ul>
    </div>
  );
}
