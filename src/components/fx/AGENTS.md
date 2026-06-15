# AGENTS.md — Visual effects (fx) zone

## Purpose

Performance-sensitive visual effects: WebGL background shaders and autoplaying
background video. This is where the site's heaviest client cost lives, so the
rules below are strict.

## Ownership

Owns the gating/lifecycle contracts for shaders and video. Inherits all root rules
(SSR safety, performance budget, responsiveness) from `../../../AGENTS.md`.

## Local Contracts

### Shader gate / impl split

Every WebGL component is split in two:

- **Gate** (`WarpBackgroundBlue.tsx`, `DottedSurfaceBlue.tsx`, `GridShader.tsx`) —
  light, no heavy import. Calls `useEnableHeavyFx()`; renders a CSS-gradient
  fallback when it returns false; otherwise `React.lazy`-loads the impl inside a
  `<Suspense>` whose fallback is the same gradient.
- **Impl** (`*.impl.tsx`) — holds the heavy import (`three`,
  `@paper-design/shaders-react`, or raw WebGL2) and the render loop. Loaded only on
  capable desktop clients, so its dependency never enters the initial bundle.

The gate's public component name/props must stay identical to the impl's old API so
call sites don't change.

### RAF lifecycle

Animation loops in `*.impl.tsx` MUST be driven by `runManagedRaf(target, frame)`
from `fx-lifecycle.ts`. It pauses the loop when the target is off-screen
(IntersectionObserver) or the tab is hidden (visibilitychange), then resumes.
`frame(now)` must NOT schedule its own `requestAnimationFrame` — `runManagedRaf`
owns scheduling.

### Capability gate

`useEnableHeavyFx(opts?)` (`src/hooks/use-enable-heavy-fx.ts`) is the single source
of truth: false during SSR/first paint, then true when no reduced-motion
preference and `hardwareConcurrency >= 4`. By default it is also false on mobile.

- Heavy effects (three.js `DottedSurfaceBlue`, WebGL2 `GridShader`) use the default
  gate — **off on mobile**.
- The signature hero `WarpBackgroundBlue` is rendered with `allowMobile` (passes
  `{ allowMobile: true }`), so the lightest shader runs on phones too. Reduced-motion
  still forces the gradient fallback there.
- The footer `WarpBackgroundBlue` keeps the default gate (gradient on mobile).

### LazyVideo media contract

`LazyVideo` (`LazyVideo.tsx`):
- SSR-renders the poster `<img>` (no layout shift; `width`/`height` required).
- Mounts `<video preload="none">` only near the viewport (IntersectionObserver).
- Renders **poster only** (never downloads video) on mobile or reduced-motion.
- `<source>` order is WebM first, then MP4 fallback.

## Verification

- `npm run build`: confirm `three` / `@paper-design` appear only in lazy
  `*.impl-*.js` chunks, not in the route entry or `FooterBlue` chunk.
- On a mobile viewport / reduced-motion: shaders render the gradient (no `<canvas>`)
  and videos render the poster (no `<video>`).
