# beratbayram.com

My personal site and portfolio, live at [beratbayram.com](https://beratbayram.com).

It has four pages:

- **Home**: short intro and the tech I work with.
- **About**: experience, education, certificates and skills, with a PDF resume link and a print button.
- **Projects**: my public GitHub repos, fetched from the GitHub API at build time and revalidated every 30 days. Pinned repos come first.
- **Blog**: placeholder for now.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack in dev) and React 19
- TypeScript
- [MUI 9](https://mui.com) with Emotion, plus Tailwind CSS 4 for layout utilities
- [Motion](https://motion.dev) for the background animation
- Vitest and Testing Library
- Deployed on Vercel, with Vercel Web Analytics

## Getting started

Requires Node 24 and pnpm.

```bash
pnpm install
pnpm dev
```

Then open [http://localhost:3000](http://localhost:3000). `pnpm dev` frees ports 3000 to 3002 before starting.

## Scripts

| Command              | What it does                                        |
| -------------------- | --------------------------------------------------- |
| `pnpm dev`           | Dev server with Turbopack                           |
| `pnpm build`         | Production build                                    |
| `pnpm start`         | Serve the production build                          |
| `pnpm lint`          | Type check (`tsc --noEmit`) and ESLint              |
| `pnpm test`          | Run the test suite once                             |
| `pnpm test:watch`    | Tests in watch mode                                 |
| `pnpm test:coverage` | Tests with coverage (95% threshold on every metric) |
| `pnpm vercel-build`  | What Vercel runs: typegen, lint, test, then build   |

## Project structure

```
app/            routes (home, about, projects, blog), robots, sitemap, loading and 404 pages
lib/components/ UI components (Br* are the shared site pieces)
lib/const/      metadata, SEO keywords, pinned repos, social links
lib/assets/     logos and images imported by components
lib/types/      GitHub API types
test/           Vitest setup and helpers
public/         favicons, web manifest, Open Graph image
```

## Deployment

Pushes to `main` deploy on Vercel. The build command is `pnpm vercel-build`, so a lint error or failing test stops the deploy. Dependabot opens grouped dependency updates weekly.

`TODOs.md` tracks planned improvements.
