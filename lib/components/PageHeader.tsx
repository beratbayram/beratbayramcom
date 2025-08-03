import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  printTitle?: string;
  description?: string;
  action?: ReactNode;
}

export default function PageHeader({
  title,
  printTitle,
  description,
  action,
}: PageHeaderProps) {
  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold print:hidden">{title}</h1>
          {printTitle && (
            <h1 className="hidden text-4xl font-bold print:block">
              {printTitle}
            </h1>
          )}
        </div>
        {action}
      </div>

      {description && <p className="mb-8">{description}</p>}
    </>
  );
}
