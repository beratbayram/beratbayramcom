import Image from "next/image";
import type { StaticImageData } from "next/image";

interface EducationItemProps {
  institution: string;
  degree: string;
  period: string;
  gpa?: number;
  logoSrc?: string | StaticImageData; // static import path (SVG/PNG/WebP)
  logoAlt?: string;
}

export default function EducationItem({
  institution,
  degree,
  period,
  gpa,
  logoSrc,
  logoAlt,
}: EducationItemProps) {
  return (
    <div className="mb-8 flex items-start gap-4">
      {logoSrc && (
        <div className="relative mt-1 size-12 shrink-0 overflow-hidden rounded-md">
          <Image
            src={logoSrc}
            alt={logoAlt ?? `${institution} logo`}
            fill
            sizes="48px"
            className="object-contain"
            priority={false}
          />
        </div>
      )}
      <div>
        <h3 className="text-xl font-semibold">{institution}</h3>
        <p className="mb-2 text-gray-600 dark:text-gray-400">{degree}</p>
        {gpa && (
          <p className="mb-2 text-gray-600 dark:text-gray-400">
            <strong>GPA:</strong> {gpa}
          </p>
        )}
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          <strong>{period}</strong>
        </p>
      </div>
    </div>
  );
}
