import { ReactNode } from "react";

interface SkillsGridProps {
  title: string;
  children: ReactNode;
  gridCols?: string;
}

export default function SkillsGrid({
  title,
  children,
  gridCols = "grid-cols-2 sm:grid-cols-3 md:grid-cols-4",
}: SkillsGridProps) {
  return (
    <div className="mb-6">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <div className={`grid ${gridCols} gap-2`}>{children}</div>
    </div>
  );
}
