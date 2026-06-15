import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { usePrefersReducedMotion } from "@/hooks/use-reduced-motion";

/**
 * Single source of truth for "should we run a WebGL effect?".
 *
 * Returns false during SSR and first client paint (so markup matches and we
 * never block hydration on WebGL), then resolves to true on capable clients.
 *
 * By default heavy effects are disabled on mobile. Pass `{ allowMobile: true }`
 * for a light, signature effect (e.g. the hero shader) that should still run on
 * phones. Reduced-motion is ALWAYS respected regardless of `allowMobile`, and a
 * minimum core count still gates very low-power devices.
 *
 * Callers render a CSS-gradient fallback whenever this is false, and only then
 * lazy-load the heavy shader module.
 */
export function useEnableHeavyFx(opts?: { allowMobile?: boolean }): boolean {
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

  const mobileOk = opts?.allowMobile || !isMobile;
  return capable && mobileOk && !reduced;
}
