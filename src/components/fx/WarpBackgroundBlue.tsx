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
