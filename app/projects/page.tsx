import { ProjectCard } from "@/lib/components/ProjectCard";
import { GitHubRepo } from "@/lib/types/GitHub";
import { Metadata } from "next";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";
import { PINNED } from "@/lib/const/GITHUB";

export const metadata: Metadata = {
  title: "Projects - UI Libraries, Web Components & Frontend Solutions",
  description:
    "Explore Berat BAYRAM's portfolio of projects including React UI libraries, Web Components built with Lit, Micro Front-End Architecture implementations, and Next.js applications. See the innovative frontend solutions developed at TÜBİTAK and beyond.",
  keywords: getKeywords.page("projects"),
  openGraph: {
    title: "Projects by Berat BAYRAM - Frontend Engineering Portfolio",
    description:
      "Portfolio showcasing UI libraries, Web Components, and architectural solutions by experienced Front-End Engineer Berat BAYRAM.",
    url: "https://beratbayram.com/projects",
  },
};

async function getGitHubProjects(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      "https://api.github.com/users/beratbayram/repos?type=all&sort=updated&per_page=30",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "beratbayram-portfolio",
        },
        next: { revalidate: 2_592_000 }, // Revalidate every month (30 days)
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();

    // Filter out private repos and repos without meaningful content
    return repos.filter(
      (repo: GitHubRepo) => !repo.private && repo.name !== "beratbayram", // Exclude profile README repo
    );
  } catch (error) {
    console.error("Failed to fetch GitHub projects:", error);
    return [];
  }
}

export default async function ProjectsPage() {
  const projects = await getGitHubProjects();

  // Get pinned projects
  const pinnedProjects = PINNED.map((name) =>
    projects.find((project) => project.name === name),
  ).filter(Boolean) as GitHubRepo[];

  // Separate featured projects (more recent and with more engagement, excluding pinned)
  const featuredProjects = projects
    .filter(
      (project) =>
        !PINNED.includes(project.name) &&
        (new Date(project.updated_at) > new Date("2024-01-01") ||
          project.stargazers_count > 0 ||
          project.forks_count > 0),
    )
    .slice(0, 6);

  const otherProjects = projects.filter(
    (project) =>
      !PINNED.includes(project.name) && !featuredProjects.includes(project),
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          A collection of my open source projects, experiments, and
          contributions to the developer community.
        </p>
      </div>

      {pinnedProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Pinned Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pinnedProjects.map((project) => (
              <ProjectCard key={project.id} repo={project} />
            ))}
          </div>
        </section>
      )}

      {featuredProjects.length > 0 && (
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} repo={project} />
            ))}
          </div>
        </section>
      )}

      {otherProjects.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
            Other Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <ProjectCard key={project.id} repo={project} />
            ))}
          </div>
        </section>
      )}

      {projects.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Unable to load projects at the moment. Please try again later.
          </p>
        </div>
      )}
    </div>
  );
}
