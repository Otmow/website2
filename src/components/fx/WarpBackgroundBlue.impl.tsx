import { useEffect, useRef, useState } from "react";
import { Warp } from "@paper-design/shaders-react";

export function WarpImpl({ speed = 0.8 }: { speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // Pause the shader (speed 0) while off-screen. The library already pauses on
  // tab-hidden, but has no IntersectionObserver, so a background section would
  // otherwise keep animating at full rate after the user scrolls past it.
  const [activeSpeed, setActiveSpeed] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActiveSpeed(entry.isIntersecting ? speed : 0),
      { rootMargin: "120px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [speed]);

  return (
    <div ref={ref} className="absolute inset-0">
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
        speed={activeSpeed}
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
