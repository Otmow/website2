import { Warp } from "@paper-design/shaders-react";

export function WarpImpl({ speed = 0.8 }: { speed?: number }) {
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
