# AGENTS.md — Otmow marketing site (root DOX)

## Purpose

Marketing/landing site for Ótmow (antecipação de recebíveis do setor público,
pt-BR). Server-rendered React app deployed as a Cloudflare Worker.

## Ownership

This root doc owns project-wide rules: stack, the SSR contract, the performance
and responsiveness budget, and the Child DOX Index. Domain-specific rules live in
child docs (see index).

## Stack

- TanStack Start (React 19) — SSR per request, built to a Cloudflare Worker
  (`dist/server/server.js` = `export default { fetch }`) plus `dist/client`.
- Vite 7, Tailwind CSS 4, shadcn/ui (Radix) in `src/components/ui`.
- WebGL effects: `three` and `@paper-design/shaders-react` (both lazy — see fx doc).
- Package manager: **npm** (a `bun.lock` exists but bun is not used here).

## Local Contracts

- **SSR safety:** never touch `window` / `document` / `navigator` / `localStorage`
  at module top level or during render. Use them only inside effects/handlers or
  guard with `typeof window !== "undefined"`. SSR runs in a Worker — there is no
  Node `node_modules` at runtime; the Vite config bundles deps for `build`.
- **Performance budget:**
  - No heavy WebGL or autoplay video on mobile or when `prefers-reduced-motion`.
    Gate every expensive effect with `useEnableHeavyFx()` (`src/hooks`).
  - Videos ship compressed (≤ ~2.5 MB), with both WebM and MP4 sources and a
    poster; keep originals as `*.orig.*`. Re-encode with ffmpeg, max 1280px wide,
    no audio, `+faststart`.
  - Keep `three` / `@paper-design` out of the initial route bundle (lazy chunks).
- **Responsiveness:** every page must render cleanly at 375 / 768 / 1280 px — no
  horizontal overflow, grids reflow to fewer columns, tap targets ≥ 44px. Use
  Tailwind `sm:`/`md:`/`lg:` breakpoints; default (unprefixed) styles are mobile.

## Work Guidance

- Match existing patterns (route files in `src/routes`, shadcn primitives in
  `src/components/ui`, site sections in `src/components/site`).
- Run `npm run format` before committing — eslint runs prettier as a rule.

## Verification

- `npm run build` — must succeed; confirm `three`/`@paper-design` stay in lazy
  chunks and `vendor-react-*.js` is split out.
- `npm run lint` — must exit 0 (pre-existing `react-refresh` _warnings_ in
  `src/components/ui/*` are acceptable; errors are not).
- Responsive/visual pass at 375 / 768 / 1280 px (browser harness) on all routes.

## Child DOX Index

- `src/components/fx/AGENTS.md` — visual effects zone: shader gating, RAF
  lifecycle, and the LazyVideo media contract (the performance-sensitive code).
