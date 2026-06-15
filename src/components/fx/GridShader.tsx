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
