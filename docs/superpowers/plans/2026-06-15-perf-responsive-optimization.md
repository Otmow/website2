# Otmow Performance & Responsive Optimization — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cut the Otmow site's load weight from ~25 MB to ~2–3 MB and make every page render correctly on mobile/tablet/desktop, without redesigning it.

**Architecture:** Re-encode the hero videos with ffmpeg; gate all WebGL shaders and videos behind a shared capability hook so phones and reduced-motion users get lightweight CSS fallbacks; code-split `three`/paper-design out of the initial bundle via `React.lazy`; pause animation loops when off-screen or backgrounded; verify responsiveness live in a real browser. Finish with the required DOX `AGENTS.md` hierarchy.

**Tech Stack:** TanStack Start (React 19, SSR→Cloudflare Worker), Tailwind 4, Vite 7, three.js, @paper-design/shaders-react, ffmpeg (local), npm.

**Verification model:** No unit-test framework exists and adding one is out of scope. Each task is verified by a concrete check: `npm run build` chunk-size diff, `npm run lint`, file-size inspection, or a browser-harness screenshot at 375/768/1280px. "Commit" steps assume the local git repo from Task 0; if git init is declined, treat commits as manual checkpoints (skip the command).

---

## File Structure

**Create:**

- `src/hooks/use-enable-heavy-fx.ts` — shared capability gate (mobile + reduced-motion + core count)
- `src/components/fx/WarpBackgroundBlue.impl.tsx` — heavy paper-design Warp + lifecycle (moved out of public file)
- `src/components/fx/DottedSurfaceBlue.impl.tsx` — heavy three.js surface + lifecycle (moved out)
- `src/components/fx/GridShader.impl.tsx` — heavy WebGL2 grid + lifecycle (moved out)
- `src/components/fx/fx-lifecycle.ts` — small helper: run a RAF loop that pauses off-screen / tab-hidden
- `AGENTS.md` (root) — DOX index
- `src/components/fx/AGENTS.md` — FX zone contracts

**Modify:**

- `src/components/fx/WarpBackgroundBlue.tsx` — becomes the light gate+lazy wrapper (public API unchanged)
- `src/components/fx/DottedSurfaceBlue.tsx` — light gate+lazy wrapper
- `src/components/fx/GridShader.tsx` — light gate+lazy wrapper
- `src/components/fx/LazyVideo.tsx` — add WebM source + mobile poster-only gate
- `src/routes/index.tsx` — pass `srcWebm` to the two `LazyVideo` uses
- `vite.config.ts` — add `build.rollupOptions.output.manualChunks`
- `src/routes/__root.tsx` — trim Google Font weights (only if audit finds unused)
- `public/img/blue/*` — re-encoded media (originals kept as `*.orig.*`)

The public API of the three shader components stays identical, so call sites in `index.tsx` and `FooterBlue.tsx` need no changes for the gating work.

---

## Task 0: Initialize local git for checkpointing (optional)

**Files:** repo root

- [ ] **Step 1: Check git state**

Run: `git status`
Expected: "fatal: not a git repository" (confirms none exists).

- [ ] **Step 2: Initialize and make a baseline commit**

```bash
git init
git add -A
git commit -m "chore: baseline before perf/responsive optimization

Co-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>"
```

Expected: a baseline commit. `.gitignore` already excludes `node_modules`/`dist`.
If the user declined git, skip this task and ignore all later `git commit` steps.

---

## Task 1: Re-encode hero videos with ffmpeg

**Files:**

- Modify: `public/img/blue/brasilia.mp4`, `public/img/blue/brasilnetwork.mp4`
- Create: `public/img/blue/brasilia.webm`, `public/img/blue/brasilnetwork.webm`
- Create (backups): `public/img/blue/brasilia.orig.mp4`, `public/img/blue/brasilnetwork.orig.mp4`

- [ ] **Step 1: Record baseline sizes**

Run: `du -h public/img/blue/*.mp4`
Expected: ~13M and ~12M.

- [ ] **Step 2: Back up originals**

```bash
cd "public/img/blue"
cp brasilia.mp4 brasilia.orig.mp4
cp brasilnetwork.mp4 brasilnetwork.orig.mp4
```

- [ ] **Step 3: Re-encode H.264 MP4 (max 1280px wide, no audio, faststart)**

```bash
ffmpeg -y -i brasilia.orig.mp4 -an -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart brasilia.mp4
ffmpeg -y -i brasilnetwork.orig.mp4 -an -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart brasilnetwork.mp4
```

- [ ] **Step 4: Encode VP9 WebM siblings**

```bash
ffmpeg -y -i brasilia.orig.mp4 -an -vf "scale='min(1280,iw)':-2" \
  -c:v libvpx-vp9 -crf 33 -b:v 0 -row-mt 1 brasilia.webm
ffmpeg -y -i brasilnetwork.orig.mp4 -an -vf "scale='min(1280,iw)':-2" \
  -c:v libvpx-vp9 -crf 33 -b:v 0 -row-mt 1 brasilnetwork.webm
```

- [ ] **Step 5: Verify the size win**

Run: `du -h public/img/blue/brasilia.mp4 public/img/blue/brasilia.webm public/img/blue/brasilnetwork.mp4 public/img/blue/brasilnetwork.webm`
Expected: each output ≤ ~2.5 MB (down from 12–13 MB). If any is still > 3 MB, re-run that file with `-crf 30`.

- [ ] **Step 6: Spot-check playback**

Open `public/img/blue/brasilia.mp4` in a player (or `ffprobe`) and confirm it's intact, ~720p or smaller, no audio track.
Run: `ffprobe -v error -show_entries stream=codec_type,width -of csv brasilia.mp4`
Expected: one `video` line, width ≤ 1280, no `audio` line.

- [ ] **Step 7: Commit**

```bash
git add public/img/blue
git commit -m "perf: re-encode hero videos (25MB -> ~3MB), add WebM, keep originals"
```

---

## Task 2: Shared FX capability gate hook

**Files:**

- Create: `src/hooks/use-enable-heavy-fx.ts`

- [ ] **Step 1: Write the hook**

```ts
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Single source of truth for "should we run expensive WebGL effects?".
 *
 * Returns false during SSR and first client paint (so markup matches and we
 * never block hydration on WebGL), then resolves to true only on capable
 * clients: not mobile, no reduced-motion preference, and >= 4 logical cores.
 * Callers render a CSS-gradient fallback whenever this is false, and only then
 * lazy-load the heavy shader module.
 */
export function useEnableHeavyFx(): boolean {
  const isMobile = useIsMobile();
  const reduced = usePrefersReducedMotion();
  const [capable, setCapable] = useState(false);

  useEffect(() => {
    const cores =
      typeof navigator !== "undefined" && navigator.hardwareConcurrency
        ? navigator.hardwareConcurrency
        : 8; // assume capable if the browser won't say
    setCapable(cores >= 4);
  }, []);

  return capable && !isMobile && !reduced;
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors referencing `use-enable-heavy-fx.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/hooks/use-enable-heavy-fx.ts
git commit -m "feat: add useEnableHeavyFx capability gate for WebGL effects"
```

---

## Task 3: RAF lifecycle helper (pause off-screen / tab-hidden)

**Files:**

- Create: `src/components/fx/fx-lifecycle.ts`

- [ ] **Step 1: Write the helper**

```ts
/**
 * Drives a requestAnimationFrame loop that automatically pauses when the
 * target element is off-screen (IntersectionObserver) or the tab is hidden
 * (visibilitychange), then resumes. Returns a disposer.
 *
 * `frame(now)` is called each animation frame while active. The loop never
 * runs on the server (guarded by callers, which only invoke this in effects).
 */
export function runManagedRaf(target: Element, frame: (now: number) => void): () => void {
  let rafId = 0;
  let onScreen = true;
  let visible = typeof document === "undefined" ? true : !document.hidden;
  let running = false;

  const loop = (now: number) => {
    if (!running) return;
    frame(now);
    rafId = requestAnimationFrame(loop);
  };

  const sync = () => {
    const shouldRun = onScreen && visible;
    if (shouldRun && !running) {
      running = true;
      rafId = requestAnimationFrame(loop);
    } else if (!shouldRun && running) {
      running = false;
      cancelAnimationFrame(rafId);
    }
  };

  const io = new IntersectionObserver(
    (entries) => {
      onScreen = entries.some((e) => e.isIntersecting);
      sync();
    },
    { rootMargin: "120px" },
  );
  io.observe(target);

  const onVisibility = () => {
    visible = !document.hidden;
    sync();
  };
  document.addEventListener("visibilitychange", onVisibility);

  sync();

  return () => {
    running = false;
    cancelAnimationFrame(rafId);
    io.disconnect();
    document.removeEventListener("visibilitychange", onVisibility);
  };
}
```

- [ ] **Step 2: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors referencing `fx-lifecycle.ts`.

- [ ] **Step 3: Commit**

```bash
git add src/components/fx/fx-lifecycle.ts
git commit -m "feat: add runManagedRaf — pauses RAF off-screen and when tab hidden"
```

---

## Task 4: Split WarpBackgroundBlue into gate + lazy impl

**Files:**

- Create: `src/components/fx/WarpBackgroundBlue.impl.tsx`
- Modify: `src/components/fx/WarpBackgroundBlue.tsx` (full rewrite to gate)

- [ ] **Step 1: Create the heavy impl** (`WarpBackgroundBlue.impl.tsx`)

```tsx
import { Warp } from "@paper-design/shaders-react";

export function WarpImpl({ speed = 0.8 }: { speed?: number }) {
  return (
    <div className="absolute inset-0">
      <Warp
        style={{ height: "100%", width: "100%" }}
        proportion={0.45}
        softness={1}
        distortion={0.25}
        swirl={0.8}
        swirlIterations={10}
        shape="checks"
        shapeScale={0.1}
        scale={1}
        rotation={0}
        speed={speed}
        colors={[
          "hsl(222, 85%, 11%)",
          "hsl(210, 95%, 62%)",
          "hsl(224, 80%, 24%)",
          "hsl(205, 100%, 72%)",
        ]}
      />
    </div>
  );
}
```

- [ ] **Step 2: Rewrite the public file as a light gate** (`WarpBackgroundBlue.tsx`)

```tsx
import { lazy, Suspense } from "react";
import { useEnableHeavyFx } from "@/hooks/use-enable-heavy-fx";

const WarpImpl = lazy(() =>
  import("./WarpBackgroundBlue.impl").then((m) => ({ default: m.WarpImpl })),
);

/** Static gradient shown on SSR, mobile, reduced-motion, and low-power devices. */
function GradientFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, hsl(222,75%,9%) 0%, hsl(218,80%,18%) 50%, hsl(210,85%,22%) 100%)",
      }}
    />
  );
}

export function WarpBackgroundBlue({ speed = 0.8 }: { speed?: number }) {
  const enabled = useEnableHeavyFx();
  if (!enabled) return <GradientFallback />;
  return (
    <Suspense fallback={<GradientFallback />}>
      <WarpImpl speed={speed} />
    </Suspense>
  );
}
```

- [ ] **Step 3: Build and confirm paper-design left the initial chunk**

Run: `npm run build`
Expected: build succeeds. In the output file list, `@paper-design` code now lives in a separate lazy chunk (e.g. `WarpBackgroundBlue.impl-*.js`), and the per-route `index`/`FooterBlue` client chunks shrink. Record the new `dist/client/assets/FooterBlue-*.js` size (was 88K — expect a sharp drop).

- [ ] **Step 4: Commit**

```bash
git add src/components/fx/WarpBackgroundBlue.tsx src/components/fx/WarpBackgroundBlue.impl.tsx
git commit -m "perf: gate + lazy-load Warp shader; gradient fallback on mobile/reduced-motion"
```

---

## Task 5: Split + lifecycle-fix DottedSurfaceBlue (three.js)

**Files:**

- Create: `src/components/fx/DottedSurfaceBlue.impl.tsx`
- Modify: `src/components/fx/DottedSurfaceBlue.tsx` (full rewrite to gate)

- [ ] **Step 1: Create the heavy impl** (`DottedSurfaceBlue.impl.tsx`)

Move the existing three.js component here, replacing the manual `requestAnimationFrame` loop with `runManagedRaf` so it pauses off-screen / tab-hidden.

```tsx
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { runManagedRaf } from "./fx-lifecycle";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref">;

export function DottedSurfaceImpl({ className, ...props }: DottedSurfaceProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const SEPARATION = 150;
    const AMOUNTX = 40;
    const AMOUNTY = 60;

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a1228, 2000, 10000);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / Math.max(container.clientHeight, 1),
      1,
      10000,
    );
    camera.position.set(0, 355, 1220);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const positions: number[] = [];
    const colors: number[] = [];
    const geometry = new THREE.BufferGeometry();
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        positions.push(
          ix * SEPARATION - (AMOUNTX * SEPARATION) / 2,
          0,
          iy * SEPARATION - (AMOUNTY * SEPARATION) / 2,
        );
        colors.push(0.3, 0.55, 0.95);
      }
    }
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 8,
      vertexColors: true,
      transparent: true,
      opacity: 0.55,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let count = 0;
    const positionAttribute = geometry.attributes.position;
    const pos = positionAttribute.array as Float32Array;

    const stopRaf = runManagedRaf(container, () => {
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          pos[i * 3 + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
          i++;
        }
      }
      positionAttribute.needsUpdate = true;
      renderer.render(scene, camera);
      count += 0.1;
    });

    const handleResize = () => {
      camera.aspect = container.clientWidth / Math.max(container.clientHeight, 1);
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      stopRaf();
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      {...props}
    />
  );
}
```

- [ ] **Step 2: Rewrite the public file as a gate** (`DottedSurfaceBlue.tsx`)

```tsx
import { lazy, Suspense } from "react";
import type React from "react";
import { cn } from "@/lib/utils";
import { useEnableHeavyFx } from "@/hooks/use-enable-heavy-fx";

type DottedSurfaceProps = Omit<React.ComponentProps<"div">, "ref">;

const DottedSurfaceImpl = lazy(() =>
  import("./DottedSurfaceBlue.impl").then((m) => ({ default: m.DottedSurfaceImpl })),
);

export function DottedSurfaceBlue({ className, ...props }: DottedSurfaceProps) {
  const enabled = useEnableHeavyFx();
  if (!enabled) {
    // No dots needed as a fallback — the section already has a dark background.
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        {...props}
      />
    );
  }
  return (
    <Suspense fallback={null}>
      <DottedSurfaceImpl className={className} {...props} />
    </Suspense>
  );
}
```

- [ ] **Step 3: Build and confirm three.js left the initial chunk**

Run: `npm run build`
Expected: succeeds; `three` now sits in a lazy `DottedSurfaceBlue.impl-*.js` chunk, and `dist/client/assets/index-*.js` (was 348K) drops substantially.

- [ ] **Step 4: Commit**

```bash
git add src/components/fx/DottedSurfaceBlue.tsx src/components/fx/DottedSurfaceBlue.impl.tsx
git commit -m "perf: gate + lazy-load three.js dotted surface; pause RAF off-screen"
```

---

## Task 6: Split + lifecycle-fix GridShader (WebGL2)

**Files:**

- Create: `src/components/fx/GridShader.impl.tsx`
- Modify: `src/components/fx/GridShader.tsx` (full rewrite to gate)

- [ ] **Step 1: Create the heavy impl** (`GridShader.impl.tsx`)

Copy the entire current `GridShader.tsx` content into `GridShader.impl.tsx`, rename the exported function `GridShader` → `GridImpl`, and replace its bespoke RAF loop with `runManagedRaf(canvas, tick)`. Specifically:

- Add `import { runManagedRaf } from "./fx-lifecycle";`
- Remove `rafRef`, `startRef` reset logic stays, and the manual `requestAnimationFrame(tick)` calls.
- Replace the `tick(now)` self-scheduling tail (`rafRef.current = requestAnimationFrame(tick)`) — `runManagedRaf` schedules frames, so `tick` must NOT re-schedule itself. Change signature to `const frame = (now: number) => { ...body without the trailing requestAnimationFrame... }`.
- In the effect, after setup, call `const stop = runManagedRaf(canvas, frame);` and in cleanup call `stop();` instead of `cancelAnimationFrame(rafRef.current)`.
- Keep `startRef.current = performance.now()` so `iTime` is relative to start.

Resulting frame body (uniforms + draw, no self-schedule):

```tsx
const frame = (now: number) => {
  if (gl!.isContextLost()) return;
  const t = (now - startRef.current) / 1000;
  frameRef.current += 1;
  try {
    gl!.useProgram(program!);
    if (resizeScheduled) applySize();
    const dpr = getDpr();
    const w = canvas.width,
      h = canvas.height;
    if (uResolution) gl!.uniform3f(uResolution, w, h, dpr);
    if (uTime) gl!.uniform1f(uTime, t);
    if (uFrame) gl!.uniform1i(uFrame, frameRef.current);
    if (uMouse) {
      const m = mouseRef.current;
      gl!.uniform4f(uMouse, m.x * dpr, m.y * dpr, m.l, m.r);
    }
    gl!.bindVertexArray(vao);
    gl!.drawArrays(gl!.TRIANGLES, 0, 3);
  } catch (err) {
    drawError(gl!, (err as Error)?.message ?? String(err));
  }
};
const stop = runManagedRaf(canvas, frame);
```

And cleanup:

```tsx
return () => {
  disposed = true;
  stop();
  canvas.removeEventListener("mousemove", onMove);
  if (ro) {
    try {
      ro.disconnect();
    } catch {
      /* noop */
    }
    ro = null;
  }
  try {
    if (vbo) gl.deleteBuffer(vbo);
  } catch {
    /* noop */
  }
  try {
    if (vao) gl.deleteVertexArray(vao);
  } catch {
    /* noop */
  }
  try {
    if (program) gl.deleteProgram(program);
  } catch {
    /* noop */
  }
};
```

- [ ] **Step 2: Rewrite the public file as a gate** (`GridShader.tsx`)

```tsx
import { lazy, Suspense } from "react";
import { useEnableHeavyFx } from "@/hooks/use-enable-heavy-fx";

const GridImpl = lazy(() => import("./GridShader.impl").then((m) => ({ default: m.GridImpl })));

/** CSS mesh-gradient stand-in for the WebGL grid on low-power / mobile. */
function GridFallback() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(120% 120% at 20% 10%, hsl(222,70%,12%) 0%, hsl(224,75%,8%) 60%, hsl(222,80%,6%) 100%)",
      }}
    />
  );
}

export function GridShader({ pixelRatio }: { pixelRatio?: number }) {
  const enabled = useEnableHeavyFx();
  if (!enabled) return <GridFallback />;
  return (
    <Suspense fallback={<GridFallback />}>
      <GridImpl pixelRatio={pixelRatio} />
    </Suspense>
  );
}
```

- [ ] **Step 3: Build + lint**

Run: `npm run build && npm run lint`
Expected: both clean. `GridShader.impl` is its own lazy chunk.

- [ ] **Step 4: Commit**

```bash
git add src/components/fx/GridShader.tsx src/components/fx/GridShader.impl.tsx
git commit -m "perf: gate + lazy-load WebGL2 grid shader; pause RAF off-screen"
```

---

## Task 7: LazyVideo — WebM source + mobile poster-only

**Files:**

- Modify: `src/components/fx/LazyVideo.tsx`
- Modify: `src/routes/index.tsx` (pass `srcWebm`)

- [ ] **Step 1: Rewrite LazyVideo**

```tsx
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Bandwidth-friendly autoplaying background video.
 * - SSR renders the poster <img> so first paint is instant, no layout shift.
 * - <video> mounts only when near the viewport (IntersectionObserver), preload="none".
 * - On mobile, or with prefers-reduced-motion, the video never loads — the poster
 *   stays, saving the entire video payload on the devices that need it most.
 */
export function LazyVideo({
  src,
  srcWebm,
  poster,
  className,
  label,
  width = 1280,
  height = 720,
}: {
  src: string;
  srcWebm?: string;
  poster: string;
  className?: string;
  label: string;
  width?: number;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);

  const allowVideo = !reduced && !isMobile;

  useEffect(() => {
    if (!allowVideo) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          obs.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [allowVideo]);

  return (
    <div ref={ref} className={className}>
      {allowVideo && show ? (
        <video
          poster={poster}
          width={width}
          height={height}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          className="block h-auto w-full"
        >
          {srcWebm ? <source src={srcWebm} type="video/webm" /> : null}
          <source src={src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={poster}
          width={width}
          height={height}
          alt={label}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      )}
    </div>
  );
}
```

- [ ] **Step 2: Pass WebM sources in `index.tsx`**

Find the two `LazyVideo` usages and add `srcWebm`:

- `brasilia` block: add `srcWebm="/img/blue/brasilia.webm"` next to `src="/img/blue/brasilia.mp4"`.
- `brasilnetwork` block: add `srcWebm="/img/blue/brasilnetwork.webm"` next to `src="/img/blue/brasilnetwork.mp4"`.

- [ ] **Step 3: Build + lint**

Run: `npm run build && npm run lint`
Expected: clean.

- [ ] **Step 4: Commit**

```bash
git add src/components/fx/LazyVideo.tsx src/routes/index.tsx
git commit -m "perf: LazyVideo serves WebM+MP4 and skips video entirely on mobile"
```

---

## Task 8: Vite manual chunks + font weight trim

**Files:**

- Modify: `vite.config.ts`
- Modify: `src/routes/__root.tsx` (fonts — only if audit shows unused weights)

- [ ] **Step 1: Audit font-weight usage**

Run: `grep -rEo "font-(light|normal|medium|semibold|bold)" src | sort | uniq -c`
Record which weights actually appear. Inter weight map: light=300, normal=400, medium=500, semibold=600, bold=700. Space Grotesk is the `font-display`/heading face (400–700). Keep only weights in use; drop the rest from the Google Fonts URL in `__root.tsx`. If all five appear, leave the URL unchanged and note that.

- [ ] **Step 2: Add manualChunks to vite.config.ts**

Inside the existing `defineConfig(({ command }) => ({ ... }))`, add a `build` key alongside `ssr` and `plugins`:

```ts
build: {
  rollupOptions: {
    output: {
      manualChunks(id) {
        if (id.includes("node_modules")) {
          if (id.includes("three")) return "vendor-three";
          if (id.includes("@paper-design")) return "vendor-shaders";
          if (id.includes("react-dom") || id.includes("/react/")) return "vendor-react";
        }
      },
    },
  },
},
```

- [ ] **Step 3: Build and inspect chunking**

Run: `npm run build`
Expected: succeeds. `dist/client/assets` shows `vendor-three-*.js` and `vendor-shaders-*.js` as separate cacheable chunks; they are NOT imported by the initial route entry (only by the lazy `.impl` chunks).

- [ ] **Step 4: Commit**

```bash
git add vite.config.ts src/routes/__root.tsx
git commit -m "perf: split vendor chunks (three/shaders/react); trim unused font weights"
```

---

## Task 9: Responsive audit + fixes (browser harness)

**Files:** any route/component needing a fix; likely none-to-few.

- [ ] **Step 1: Start the dev server**

Run: `npm run dev` (note the local URL, typically http://localhost:3000).

- [ ] **Step 2: Screenshot every page at 3 widths**

Use the browser-harness to load each of `/`, `/clientes`, `/gestores`, `/parceiros`, `/faq`, `/sobre` at viewport widths **375, 768, 1280** and capture a full-page screenshot each (18 shots). For each: set viewport, `new_tab(url)` (first) / `goto_url` for subsequent, `wait_for_load()`, then `capture_screenshot()`.

- [ ] **Step 3: Inspect for defects**

For each screenshot check: no horizontal scroll/overflow, text not clipped, grids reflow to fewer columns, CTAs/tap targets ≥ 44px, hero stat grid (`grid-cols-3`) readable at 375px, `SimuladorAntecipacao` controls usable, footer 12-col grid stacks. List every defect with page + width.

- [ ] **Step 4: Fix defects**

Apply minimal Tailwind responsive-class fixes (e.g. `grid-cols-3` → `grid-cols-1 sm:grid-cols-3`, padding/text-size adjustments). Re-screenshot the affected page/width to confirm. Keep changes surgical — no redesign.

- [ ] **Step 5: Verify shader fallback on mobile**

At 375px width, confirm hero/footer render the CSS gradient (not a WebGL canvas) — `useEnableHeavyFx` returns false on mobile. Confirm hero/section videos show the poster image, not a `<video>` element (inspect DOM via `js(...)`).

- [ ] **Step 6: Commit (if any fixes were made)**

```bash
git add -A
git commit -m "fix: responsive layout corrections across routes (375/768/1280)"
```

---

## Task 10: Final build verification

**Files:** none (verification only)

- [ ] **Step 1: Clean build + lint**

Run: `npm run build && npm run lint`
Expected: both pass with no errors.

- [ ] **Step 2: Confirm the wins**

- Run: `du -sh public/img/blue/*.mp4 public/img/blue/*.webm` — total active media ≤ ~5 MB (excluding `*.orig.mp4` backups).
- Inspect `dist/client/assets`: the initial route entry no longer bundles `three` or `@paper-design`; those are in `vendor-three`/`vendor-shaders`/`.impl` lazy chunks. Record before/after sizes of `index-*.js` and `FooterBlue-*.js` in the plan's closeout note.

- [ ] **Step 3: Commit any final touch-ups**

```bash
git add -A
git commit -m "chore: final verification pass"
```

---

## Task 11: DOX AGENTS.md hierarchy

**Files:**

- Create: `AGENTS.md` (root)
- Create: `src/components/fx/AGENTS.md`

- [ ] **Step 1: Write root `AGENTS.md`**

Follow the DOX shape from `Claude.md`. Sections: Purpose, Ownership, Local Contracts (SSR safety rule; perf budget: no heavy WebGL/video on mobile or reduced-motion; videos must ship compressed MP4+WebM with poster), Work Guidance (responsive at 375/768/1280; gate effects via `useEnableHeavyFx`), Verification (`npm run build`, `npm run lint`, browser-harness viewport pass), Child DOX Index (→ `src/components/fx/AGENTS.md`). Replace the placeholder "not yet indexed" message in `Claude.md`'s Child DOX Index section with a pointer to root `AGENTS.md`.

- [ ] **Step 2: Write `src/components/fx/AGENTS.md`**

Sections: Purpose (visual FX: shaders + video), Local Contracts:

- Every WebGL component is split into a light `*.tsx` gate (uses `useEnableHeavyFx`, renders a CSS fallback, `React.lazy`-loads the impl) and a heavy `*.impl.tsx`.
- Impl RAF loops MUST use `runManagedRaf` (`fx-lifecycle.ts`) so they pause off-screen and when the tab is hidden.
- `LazyVideo` renders poster-only on mobile/reduced-motion and serves WebM before MP4.
  Verification: build shows `three`/paper-design only in lazy chunks.

- [ ] **Step 3: Commit**

```bash
git add AGENTS.md src/components/fx/AGENTS.md Claude.md
git commit -m "docs: add DOX AGENTS.md hierarchy (root + fx zone)"
```

---

## Self-Review (completed during planning)

- **Spec coverage:** Media pipeline → T1,T7. Shader gate+code-split → T2,T4,T5,T6. RAF lifecycle → T3,T5,T6. Responsiveness → T9. Bundle/font hygiene → T8. DOX → T11. All spec sections mapped.
- **Placeholders:** none — every code step has full code; the one audit-dependent step (font trim, T8.1) is explicit about its decision rule.
- **Type consistency:** gate files import `{ WarpImpl }`/`{ DottedSurfaceImpl }`/`{ GridImpl }` matching the impl exports; `runManagedRaf(target, frame)` signature consistent across T3/T5/T6; `useEnableHeavyFx()` used identically everywhere; `LazyVideo` gains `srcWebm?: string`, consumed in T7.2.
