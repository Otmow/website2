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
