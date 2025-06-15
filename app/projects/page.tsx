export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-12">
      <h1 className="mb-4 text-4xl font-bold">Projects</h1>
      <ul className="space-y-3">
        <li className="rounded bg-gray-100 p-4">
          <span className="font-semibold">Personal Portfolio</span> – My own
          website built with Next.js and Tailwind CSS.
        </li>
        <li className="rounded bg-gray-100 p-4">
          <span className="font-semibold">Open Source Contributions</span> –
          Various PRs to open source projects.
        </li>
      </ul>
    </div>
  );
}
