import { GitHubRepo } from "@/lib/types/GitHub";
import { BrLink } from "./BrLink";

interface ProjectCardProps {
  repo: GitHubRepo;
}

export function ProjectCard({ repo }: ProjectCardProps) {
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

  return (
    <BrLink
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-gray-700"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {repo.name}
            </h3>
          </div>

          <div className="mb-3 h-[5rem] overflow-hidden">
            <p className="line-clamp-3 text-sm leading-relaxed text-ellipsis text-gray-600 dark:text-gray-400">
              {repo.description || "No description available."}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
            {repo.language && (
              <div className="flex items-center gap-1">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: getLanguageColor(repo.language) }}
                />
                <span>{repo.language}</span>
              </div>
            )}

            {repo.stargazers_count > 0 && (
              <div className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{repo.stargazers_count}</span>
              </div>
            )}

            {repo.forks_count > 0 && (
              <div className="flex items-center gap-1">
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 8l3.707-3.707a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{repo.forks_count}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
        Updated {new Date(repo.updated_at).toLocaleDateString()}
      </div>
    </BrLink>
  );
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    Java: "#b07219",
    C: "#555555",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Yacc: "#4B6C4B",
    Shell: "#89e051",
  };
  return colors[language] || "#6b7280";
}
