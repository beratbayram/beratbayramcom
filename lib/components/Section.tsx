import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function Section({
  title,
  children,
  className = "mb-12",
}: SectionProps) {
  return (
    <section className={className}>
      <h2 className="mb-6 text-3xl font-bold">{title}</h2>
      {children}
    </section>
  );
}
