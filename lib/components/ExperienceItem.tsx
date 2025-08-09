import { BrLink } from "./BrLink";

interface ExperienceItemProps {
  title: string;
  company?: string;
  location?: string;
  period: string;
  description?: string[];
  url?: string;
}

export default function ExperienceItem({
  title,
  company,
  location,
  period,
  description = [],
  url,
}: ExperienceItemProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      {company && (
        <p className="mb-2 text-gray-600 dark:text-gray-400">
          <strong>
            {company}
            {location && ` | ${location}`}
          </strong>
        </p>
      )}
      {url && (
        <p className="mb-2 text-gray-600 dark:text-gray-400">
          <BrLink
            href={url}
            className="text-black underline dark:text-white"
            target="_blank"
          >
            {url.replace(/^https?:\/\//, "")}
          </BrLink>
        </p>
      )}
      <p className="mb-4 text-gray-600 dark:text-gray-400">
        <strong>{period}</strong>
      </p>
      {description.length > 0 && (
        <ul
          className={`list-inside list-disc ${description.length > 1 ? "space-y-2" : ""}`}
        >
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
