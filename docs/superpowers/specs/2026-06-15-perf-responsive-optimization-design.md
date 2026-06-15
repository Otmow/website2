# Otmow Site — Performance & Responsive Optimization

**Date:** 2026-06-15
**Status:** Approved (design)
**Scope:** Optimize the existing TanStack Start marketing site for load speed and all
viewports (mobile / tablet / desktop). No redesign. Plus required DOX `AGENTS.md`
hierarchy.

## Context

The site is a Brazilian-Portuguese fintech landing site (Ótmow — antecipação de
recebíveis do setor público), already built and polished by a prior LLM. Stack:

- TanStack Start (React 19) — SSR rendered per request as a Cloudflare Worker
- Tailwind CSS 4, shadcn/ui (Radix), lucide-react
- Two WebGL stacks: `three` (DottedSurfaceBlue) and `@paper-design/shaders-react`
  (WarpBackgroundBlue), plus a hand-written WebGL2 GridShader
- Routes: `/`, `/clientes`, `/gestores`, `/parceiros`, `/faq`, `/sobre`

SSR constraint: site code must never touch `window`/`document`/`navigator`/
`localStorage` at module top level or during render — only inside effects/handlers
or guarded with `typeof window !== "undefined"`.

## Problems (measured)

1. **~25 MB of autoplay video.** `public/img/blue/brasilia.mp4` (13 MB) +
   `brasilnetwork.mp4` (12 MB). `LazyVideo` defers them with IntersectionObserver,
   but once in view the full payload downloads. ~90% of page weight.
2. **Two WebGL libraries ship to the client.** `three` produces a 488 KB client
   chunk (`DottedSurfaceBlue`). `WarpBackgroundBlue` (paper-design) lives inside
   `FooterBlue`, so a WebGL shader runs on **every page** (footer chunk = 88 KB).
3. **Shaders never stop.** All three run `requestAnimationFrame` forever — including
   when scrolled off-screen and when the tab is hidden. None respect
   `prefers-reduced-motion` or device class. CSS handles reduced-motion for the
   `.reveal` animations only.
4. **Shaders run full-tilt on phones** despite an existing `use-mobile` hook that is
   not wired to them.
5. **Fonts:** 5 Inter weights + 4 Space Grotesk weights loaded from Google Fonts.

## Decisions (confirmed with user)

- **Video:** compress heavily; **skip video on mobile** (poster only). Desktop/tablet
  keep video.
- **Shaders:** code-split out of the initial bundle; **disable on mobile and
  reduced-motion** (CSS-gradient fallback); keep on capable desktops.
- **Scope:** performance + responsiveness + obvious fixes encountered. No redesign.
- Re-encode videos **in place**, keeping `*.orig.mp4` backups.
- **DOX `AGENTS.md` hierarchy is in scope.**

## Design

### 1. Media pipeline (largest win: ~25 MB → ~2–3 MB)

- Re-encode both MP4s with ffmpeg: scale to max 1280px wide, drop audio (`-an`),
  H.264 `-crf 28 -preset slow -movflags +faststart`. Produce a **VP9 WebM** sibling
  (`-crf 33 -b:v 0`). Keep originals as `brasilia.orig.mp4` / `brasilnetwork.orig.mp4`.
- Re-export posters at the displayed size (≤1280px) to shrink `brasilia.jpg`
  (204 KB) and `brasil-network.jpg` (140 KB).
- `LazyVideo`:
  - Accept `srcWebm` + `src` (mp4). Render `<video>` with `<source>` WebM then MP4.
  - On mobile (via the shared FX gate) render **only the poster `<img>`** — never
    mount `<video>`, never download. Keeps the existing reduced-motion poster path.
  - Keep SSR poster-first paint, `width`/`height`, `preload="none"`, IO at 200px.

### 2. Shader gating + code-split

- New hook `src/hooks/use-enable-heavy-fx.ts` — `useEnableHeavyFx(): boolean`.
  Returns `false` during SSR/first paint, then `true` only if: not mobile
  (`use-mobile`), not `prefers-reduced-motion` (`use-reduced-motion`), and
  `navigator.hardwareConcurrency >= 4` (when available). SSR-safe; resolves in an
  effect after mount.
- Lazy wrappers: convert `WarpBackgroundBlue`, `DottedSurfaceBlue`, `GridShader`
  call sites to `React.lazy` + `<Suspense fallback={<gradient/>}>`. The heavy WebGL
  module (and `three` / paper-design) loads only when the gate is `true`. When the
  gate is `false`, render the static CSS-gradient fallback and import nothing.
- Lifecycle fixes inside each shader effect:
  - Pause the RAF loop on `document.visibilitychange` (tab hidden) and resume on
    show.
  - Use an `IntersectionObserver` on the canvas container to stop rendering while
    off-screen.
  - These also implicitly honor reduced-motion because the gate prevents mount.

### 3. Responsiveness audit (browser harness, live)

Test `/` plus all 5 routes at **375 / 768 / 1280 px**. Fix any horizontal overflow,
cramped tap targets (<44px), and broken grid reflow. Known areas to verify: hero
3-col stat grid, `SimuladorAntecipacao`, footer 12-col grid, process 4-col grid.
Nav already has a working hamburger at the `lg` breakpoint.

### 4. Bundle & font hygiene

- Trim Google Fonts to weights actually used (audit `font-*` usage). Keep
  `display=swap` + existing preconnect.
- Add `build.rollupOptions.output.manualChunks` to isolate `three`, paper-design
  shaders, and React vendor into stable, cacheable chunks.
- Confirm `lucide-react` stays tree-shaken (named imports — already correct).

### 5. DOX `AGENTS.md` hierarchy

Per root `Claude.md` (DOX framework), the project must be indexed.

- Create root `AGENTS.md`: purpose, stack, SSR contract, global perf/responsive
  rules, and the Child DOX Index.
- Create `src/components/fx/AGENTS.md`: the perf-sensitive zone. Documents the
  shader gating contract (`useEnableHeavyFx`), RAF lifecycle rules (pause off-screen
  / tab-hidden), and the `LazyVideo` mobile/poster contract.
- Add other child docs only where a folder is a durable boundary needing local
  rules (likely `src/routes` is covered by an existing `README.md`; fold or
  reference it).

## Out of scope

- Visual redesign, copy rewrites, new pages/features.
- Replacing the shader aesthetic on desktop.
- CMS / backend / analytics changes.

## Verification

- `npm run build` before and after; compare `dist/client` chunk sizes (expect the
  initial route bundle to drop sharply; three/paper move to lazy chunks).
- Confirm video files dropped from ~25 MB to ~2–3 MB total.
- Browser-harness visual pass at 375 / 768 / 1280 px on all 6 pages — no overflow,
  effects degrade to gradients on a simulated mobile/reduced-motion context.
- `npm run lint` clean.

## Notes

- This directory is **not a git repository**, so the design doc cannot be committed.
  Left uncommitted by necessity; flagged to the user.
- Package manager: `npm` (no `bun` on PATH despite `bun.lock`).
