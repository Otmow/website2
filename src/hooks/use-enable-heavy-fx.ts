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
