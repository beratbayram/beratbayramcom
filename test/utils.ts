import { vi } from "vitest";
import type { GitHubRepo } from "@/lib/types/GitHub";

// jsdom has no matchMedia, so MUI's useMediaQuery always reports desktop.
// Stubbing it lets a test pick which media queries match.
export function mockMatchMedia(
  matches: boolean | ((query: string) => boolean),
) {
  const test = typeof matches === "function" ? matches : () => matches;

  vi.stubGlobal(
    "matchMedia",
    vi.fn((query: string) => ({
      matches: test(query),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  );
}

let nextRepoId = 1;

export function makeRepo(overrides: Partial<GitHubRepo> = {}): GitHubRepo {
  const id = nextRepoId++;
  return {
    id,
    name: `repo-${id}`,
    full_name: `beratbayram/repo-${id}`,
    description: "A test repository",
    html_url: `https://github.com/beratbayram/repo-${id}`,
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    created_at: "2020-01-01T00:00:00Z",
    updated_at: "2020-01-01T00:00:00Z",
    pushed_at: "2020-01-01T00:00:00Z",
    private: false,
    ...overrides,
  };
}
