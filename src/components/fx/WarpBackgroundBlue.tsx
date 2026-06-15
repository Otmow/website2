import { useEffect, useState } from "react";
import { Warp } from "@paper-design/shaders-react";

export function WarpBackgroundBlue({ speed = 0.8 }: { speed?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) {
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
