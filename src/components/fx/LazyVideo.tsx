import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Bandwidth-friendly autoplaying background video.
 *
 * - SSR renders the poster <img> so first paint is instant and there is no
 *   layout shift (width/height drive the intrinsic ratio).
 * - The <video> is only mounted once it scrolls near the viewport
 *   (IntersectionObserver), and uses preload="none" so nothing downloads
 *   until then.
 * - With "prefers-reduced-motion", the video is never loaded — the poster
 *   stays, which also saves the full video payload on those devices.
 */
export function LazyVideo({
  src,
  poster,
  className,
  label,
  width = 1280,
  height = 720,
}: {
  src: string;
  poster: string;
  className?: string;
  label: string;
  width?: number;
  height?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (reduced) return;
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
  }, [reduced]);

  return (
    <div ref={ref} className={className}>
      {show ? (
        <video
          src={src}
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
        />
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
