interface BrWIPProps {
  title?: string;
  description?: string;
}

export function BrWIP({
  title = "Work in Progress",
  description = "This section is currently under construction. Check back soon!",
}: BrWIPProps) {
  return (
    <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
      <div className="mb-4 text-6xl">🚧</div>
      <h2 className="mb-2 text-2xl font-semibold text-gray-600">{title}</h2>
      <p className="text-gray-500">{description}</p>
    </div>
  );
}
