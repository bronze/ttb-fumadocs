# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A Fumadocs 16 (Next.js 16 App Router) site that republishes **Thompson Total Branding** (J. Walter Thompson's "Thompson Way of Total Branding" planning methodology). The original content survives only on the Web Archive (https://web.archive.org/web/20180716190000/http://jura.com.br/jwt/Fset001.htm) and has been fully converted into Markdown. `CONTENT-TRACKER.md` maps every archived page (`*.HTM`) to its local file and lists the pages that were never archived; update it when content changes. Doc content is in English; the home page is in Portuguese. Deployed on Vercel at ttb.carlosbronze.com.br.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`).

- `pnpm install` — also runs `fumadocs-mdx` (postinstall), which generates the `.source/` directory; `@/.source` is aliased to `.source/server.ts` in `tsconfig.json`
- `pnpm dev` — dev server (Turbopack is the default in Next 16) at http://localhost:3000
- `pnpm build` / `pnpm start`
- `pnpm lint` — ESLint 10 flat config (`eslint.config.mjs`, using `eslint-config-next`); `next lint` no longer exists
- There is no test suite.

If `@/.source` imports fail to resolve, rerun `pnpm exec fumadocs-mdx` (or start the dev server, which regenerates it).

TypeScript is pinned to 6.x because `typescript-eslint` does not support TS 7 yet; don't bump it until it does.

## Architecture

- **Content pipeline:** `source.config.ts` defines the `docs` collection over `content/docs`. `fumadocs-mdx` compiles it into `.source/` (gitignored). `src/lib/source.ts` wraps it with `loader()` at `baseUrl: "/docs"` and resolves frontmatter/`meta.json` `icon` names to `lucide-react` icons.
- **Routing:** `src/app/docs/[[...slug]]/page.tsx` renders every doc page from `source.getPage()` and statically generates all params. `src/app/(home)/` is the landing page. `src/app/api/search/route.ts` serves Fumadocs built-in search from the same source.
- **Navigation/ordering** is controlled by `meta.json` files in each content folder, not filenames. The root `content/docs/meta.json` uses `---Section---` separators, `"..."` for remaining pages, and `"!test"` to hide `test.mdx` (a component playground). New pages must be added to the relevant `meta.json` `pages` array if that folder lists pages explicitly.
- **Sections** follow the Planning Cycle questions: `where-are-we-now`, `why-are-we-there`, `where-could-we-be`, `how-can-we-get-there`, `are-we-getting-there`. Pages are mostly plain `.md`. Co-located images work with plain Markdown syntax (`![alt](./image.gif)`); use `.mdx` only when importing components. Topics with sub-pages are folders with an `index.md` plus a `meta.json`. Link between pages with relative file paths (`./other-page.md`) so `createRelativeLink` resolves them.
- **MDX components:** `src/mdx-components.tsx` extends `fumadocs-ui/mdx` defaults (Cards, Callout, etc. available without import). Relative links between doc files are resolved via `createRelativeLink`.
- **Layout:** shared nav config in `src/app/layout.config.tsx`; root layout wraps everything in a client `PostHogProvider` (`src/app/providers.tsx`, manual `$pageview` capture; needs `NEXT_PUBLIC_POSTHOG_KEY`, optional `NEXT_PUBLIC_POSTHOG_HOST`) and Fumadocs `RootProvider` (imported from `fumadocs-ui/provider/next`). OG/Twitter metadata comes from `createMetadata()` in `src/lib/metadata.ts`.
- **Styling:** Tailwind v4 via `@tailwindcss/postcss`; `src/app/global.css` imports Fumadocs neutral theme + preset. Fumadocs 16 no longer ships a `container` utility in its default preset, so use `mx-auto w-full px-4` (plus a `max-w-*`) instead. shadcn/ui is configured (`components.json`, new-york style) with components in `src/components/ui` and `cn()` in `src/lib/utils.ts`. Use `fd-*` color tokens (e.g. `text-fd-muted-foreground`) to match the Fumadocs theme.
