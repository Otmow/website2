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
