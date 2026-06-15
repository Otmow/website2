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
