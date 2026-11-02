# AGENTS.md

This file provides guidance to coding agents when working with code in this repository.

Personal portfolio site for beratbayram.com: Next.js 16 App Router, React 19, TypeScript, MUI 9
(Emotion) with Tailwind CSS 4, deployed on Vercel. Package manager is pnpm, Node 24.x.

## Commands

```bash
pnpm dev                    # kills ports 3000-3002, then next dev --turbopack
pnpm build                  # next build
pnpm lint                   # tsc --noEmit && eslint .
pnpm test                   # vitest run
pnpm test app/page.test.tsx # one file
pnpm test:coverage          # fails under 95% statements/branches/functions/lines
```

Vercel runs `pnpm vercel-build` (`next typegen`, lint, test, build), so lint and test failures block
a deploy. The pre-commit hook runs lint-staged: Prettier on everything, `pnpm lint` on TS files.

## Architecture

- `app/` holds the four routes (`/`, `/about`, `/projects`, `/blog`), each with a `loading.tsx`,
  plus `not-found.tsx`, `robots.ts` and `sitemap.ts`. `app/layout.tsx` wires the theme, header,
  skip link, JSON-LD (`StructuredData`), the background animation and Vercel Analytics.
- Every page exports its own `metadata`. Shared defaults live in `lib/const/METADATA.ts`, keywords
  come from `getKeywords.page(<name>)` in `lib/const/SEO_KEYWORDS.ts`. Keep page titles,
  descriptions and Open Graph URLs in that pattern when adding a route, and add the route to
  `sitemap.ts`.
- `/projects` fetches public repos from the GitHub REST API on the server with
  `revalidate: 2_592_000` (30 days). Pinned order comes from `PINNED` in `lib/const/GITHUB.ts`,
  which is maintained by hand (the GraphQL query to refresh it is in the comment there). The
  `beratbayram` profile repo is filtered out.
- Theming: `BrTheme` creates the MUI theme with CSS variables and a class-based color scheme
  selector; `InitColorSchemeScript` in the layout avoids a flash, which is why `<html>` has
  `suppressHydrationWarning`. `BrThemeSwitcher` toggles it.
- Components in `lib/components/` prefixed `Br` are site chrome (header, links, theme, buttons);
  the rest (`ExperienceItem`, `ProjectCard`, `Section`, ...) are page building blocks.
- `next.config.ts` sets `images.unoptimized`, so `next/image` serves files as-is.
- The resume PDF is an external Google Drive link, the default `url` in `BrPdfDownloadButton`.

## Testing

- Every source file has a co-located `*.test.ts(x)`. Coverage thresholds are 95%, so new code
  needs tests in the same change.
- Vitest uses jsdom with the `vmThreads` pool. `vitest.config.mts` forces `NODE_ENV=test` and
  replaces static image imports with `{ src, width, height }` objects to mimic Next.
- `test/utils.ts` has `mockMatchMedia` (jsdom has no `matchMedia`, which MUI's `useMediaQuery`
  needs) and `makeRepo` for GitHub repo fixtures.

## Conventions

- Prettier defaults plus `prettier-plugin-tailwindcss` for class ordering.
- Import from the root with the `@/` alias (`@/lib/components/...`).
- `@types/react` and `@types/react-dom` are pinned through `overrides` in `pnpm-workspace.yaml`;
  Dependabot ignores them on purpose.
- Comments are short English notes that explain why, matching existing code.
