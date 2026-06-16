import { r as e, j as n } from "./vendor-react-DLnSei1N.js";
import { W as l } from "./vendor-shaders-BfWvw4XA.js";
function u({ speed: s = 0.8 }) {
  const t = e.useRef(null),
    [i, c] = e.useState(0);
  return (
    e.useEffect(() => {
      const r = t.current;
      if (!r) return;
      const o = new IntersectionObserver(([a]) => c(a.isIntersecting ? s : 0), {
        rootMargin: "120px",
      });
      return (o.observe(r), () => o.disconnect());
    }, [s]),
    n.jsx("div", {
      ref: t,
      className: "absolute inset-0",
      children: n.jsx(l, {
        style: { height: "100%", width: "100%" },
        proportion: 0.45,
        softness: 1,
        distortion: 0.25,
        swirl: 0.8,
        swirlIterations: 10,
        shape: "checks",
        shapeScale: 0.1,
        scale: 1,
        rotation: 0,
        speed: i,
        colors: [
          "hsl(222, 85%, 11%)",
          "hsl(210, 95%, 62%)",
          "hsl(224, 80%, 24%)",
          "hsl(205, 100%, 72%)",
        ],
      }),
    })
  );
}
export { u as WarpImpl };
