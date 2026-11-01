import { PINNED } from "@/lib/const/GITHUB";
import { getKeywords } from "@/lib/const/SEO_KEYWORDS";
import type { GitHubRepo } from "@/lib/types/GitHub";
import { makeRepo } from "@/test/utils";
import { render, screen, within } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import ProjectsPage, { metadata } from "./page";

const API_URL =
  "https://api.github.com/users/beratbayram/repos?type=all&sort=updated&per_page=30";

const OLD = "2020-01-01T00:00:00Z";
const RECENT = "2025-06-01T00:00:00Z";

let fetchMock: Mock<typeof fetch>;

function respondWith(repos: GitHubRepo[]) {
  fetchMock.mockResolvedValue(Response.json(repos));
}

async function renderPage() {
  return render(await ProjectsPage());
}

function getSection(name: string) {
  const heading = screen.getByRole("heading", { level: 2, name });
  return heading.closest("section") as HTMLElement;
}

function projectNames(section: HTMLElement) {
  return within(section)
    .getAllByRole("heading", { level: 3 })
    .map((heading) => heading.textContent);
}

function silenceErrors() {
  return vi.spyOn(console, "error").mockImplementation(() => {});
}

describe("ProjectsPage", () => {
  beforeEach(() => {
    fetchMock = vi.fn<typeof fetch>();
    vi.stubGlobal("fetch", fetchMock);
  });

  it("exports page metadata", () => {
    expect(metadata.title).toBe(
      "Projects - UI Libraries, Web Components & Frontend Solutions",
    );
    expect(metadata.keywords).toEqual(getKeywords.page("projects"));
    expect(metadata.openGraph?.url).toBe("https://beratbayram.com/projects");
  });

  it("fetches the public repos from GitHub with a 30 day cache", async () => {
    respondWith([]);

    await renderPage();

    expect(fetchMock).toHaveBeenCalledExactlyOnceWith(API_URL, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "beratbayram-portfolio",
      },
      next: { revalidate: 60 * 60 * 24 * 30 },
    });
  });

  it("renders the page heading and intro", async () => {
    respondWith([makeRepo()]);

    await renderPage();

    expect(
      screen.getByRole("heading", { level: 1, name: "Projects" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/collection of my open source projects/),
    ).toBeInTheDocument();
  });

  describe("pinned projects", () => {
    it("follow the PINNED order, not the API order", async () => {
      respondWith(
        [...PINNED]
          .reverse()
          .map((name) => makeRepo({ name, updated_at: OLD })),
      );

      await renderPage();

      expect(projectNames(getSection("Pinned Projects"))).toEqual(PINNED);
    });

    it("skip pinned names the API did not return", async () => {
      respondWith([
        makeRepo({ name: PINNED[2] }),
        makeRepo({ name: PINNED[0] }),
      ]);

      await renderPage();

      expect(projectNames(getSection("Pinned Projects"))).toEqual([
        PINNED[0],
        PINNED[2],
      ]);
    });

    it("are never repeated in the other sections", async () => {
      respondWith([
        makeRepo({ name: PINNED[0], updated_at: RECENT, stargazers_count: 9 }),
        makeRepo({ name: PINNED[1], updated_at: OLD }),
        makeRepo({ name: "recent", updated_at: RECENT }),
        makeRepo({ name: "plain", updated_at: OLD }),
      ]);

      await renderPage();

      expect(projectNames(getSection("Featured Projects"))).toEqual(["recent"]);
      expect(projectNames(getSection("Other Projects"))).toEqual(["plain"]);
    });
  });

  describe("featured projects", () => {
    it("include repos updated after 2024, starred or forked", async () => {
      respondWith([
        makeRepo({ name: "recent", updated_at: RECENT }),
        makeRepo({ name: "starred", updated_at: OLD, stargazers_count: 1 }),
        makeRepo({ name: "forked", updated_at: OLD, forks_count: 1 }),
        makeRepo({ name: "plain", updated_at: OLD }),
      ]);

      await renderPage();

      expect(projectNames(getSection("Featured Projects"))).toEqual([
        "recent",
        "starred",
        "forked",
      ]);
      expect(projectNames(getSection("Other Projects"))).toEqual(["plain"]);
    });

    it("require an update strictly after 1 Jan 2024", async () => {
      respondWith([
        makeRepo({ name: "boundary", updated_at: "2024-01-01T00:00:00Z" }),
        makeRepo({ name: "after", updated_at: "2024-01-01T00:00:01Z" }),
      ]);

      await renderPage();

      expect(projectNames(getSection("Featured Projects"))).toEqual(["after"]);
      expect(projectNames(getSection("Other Projects"))).toEqual(["boundary"]);
    });

    it("are capped at six, overflowing into other projects", async () => {
      const names = Array.from({ length: 8 }, (_, i) => `recent-${i}`);
      respondWith(names.map((name) => makeRepo({ name, updated_at: RECENT })));

      await renderPage();

      expect(projectNames(getSection("Featured Projects"))).toEqual(
        names.slice(0, 6),
      );
      expect(projectNames(getSection("Other Projects"))).toEqual(
        names.slice(6),
      );
    });
  });

  it("drops private repos and the profile README repo", async () => {
    respondWith([
      makeRepo({ name: "secret", private: true, updated_at: RECENT }),
      makeRepo({ name: PINNED[0], private: true }),
      makeRepo({ name: "beratbayram", updated_at: RECENT }),
      makeRepo({ name: "public", updated_at: RECENT }),
    ]);

    await renderPage();

    expect(screen.queryByText("secret")).not.toBeInTheDocument();
    expect(screen.queryByText(PINNED[0])).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "beratbayram" }),
    ).not.toBeInTheDocument();
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  });

  it("links every card to its repository", async () => {
    respondWith([
      makeRepo({ name: PINNED[0] }),
      makeRepo({ name: "recent", updated_at: RECENT }),
      makeRepo({ name: "plain", updated_at: OLD }),
    ]);

    await renderPage();

    const hrefs = screen
      .getAllByRole("link")
      .map((link) => link.getAttribute("href"));
    expect(hrefs).toHaveLength(3);
    for (const href of hrefs) {
      expect(href).toMatch(/^https:\/\/github\.com\/beratbayram\//);
    }
  });

  it("hides sections that have no projects", async () => {
    respondWith([makeRepo({ name: PINNED[0], updated_at: OLD })]);

    await renderPage();

    expect(getSection("Pinned Projects")).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Featured Projects" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Other Projects" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Unable to load projects/),
    ).not.toBeInTheDocument();
  });

  describe("when there is nothing to show", () => {
    function expectFallback() {
      expect(
        screen.getByText(
          "Unable to load projects at the moment. Please try again later.",
        ),
      ).toBeInTheDocument();
      expect(screen.queryAllByRole("heading", { level: 2 })).toHaveLength(0);
    }

    it("shows a fallback for an empty response", async () => {
      respondWith([]);

      await renderPage();

      expectFallback();
    });

    it("shows a fallback when every repo is filtered out", async () => {
      respondWith([makeRepo({ private: true })]);

      await renderPage();

      expectFallback();
    });

    it("logs and shows a fallback on an API error", async () => {
      const consoleError = silenceErrors();
      fetchMock.mockResolvedValue(
        new Response("rate limited", { status: 403 }),
      );

      await renderPage();

      expect(consoleError).toHaveBeenCalledWith(
        "Failed to fetch GitHub projects:",
        new Error("GitHub API error: 403"),
      );
      expectFallback();
    });

    it("logs and shows a fallback on a network failure", async () => {
      const consoleError = silenceErrors();
      const failure = new TypeError("fetch failed");
      fetchMock.mockRejectedValue(failure);

      await renderPage();

      expect(consoleError).toHaveBeenCalledWith(
        "Failed to fetch GitHub projects:",
        failure,
      );
      expectFallback();
    });

    it("logs and shows a fallback on invalid JSON", async () => {
      const consoleError = silenceErrors();
      fetchMock.mockResolvedValue(new Response("<html>", { status: 200 }));

      await renderPage();

      expect(consoleError).toHaveBeenCalledOnce();
      expectFallback();
    });
  });
});
