import { r as t, j as F } from "./vendor-react-DLnSei1N.js";
function d({ end: r, duration: s = 2e3, prefix: m = "", suffix: f = "", decimals: o = 0 }) {
  const c = t.useRef(null),
    [p, l] = t.useState(0),
    i = t.useRef(!1);
  t.useEffect(() => {
    const e = c.current;
    if (!e) return;
    const n = new IntersectionObserver(
      (x) => {
        x.forEach((b) => {
          if (b.isIntersecting && !i.current) {
            i.current = !0;
            const g = performance.now(),
              a = (v) => {
                const u = Math.min((v - g) / s, 1),
                  E = 1 - Math.pow(1 - u, 3);
                (l(r * E), u < 1 && requestAnimationFrame(a));
              };
            (requestAnimationFrame(a), n.unobserve(e));
          }
        });
      },
      { threshold: 0.4 },
    );
    return (n.observe(e), () => n.disconnect());
  }, [r, s]);
  const h = p.toLocaleString("pt-BR", { minimumFractionDigits: o, maximumFractionDigits: o });
  return F.jsxs("span", { ref: c, children: [m, h, f] });
}
export { d as C };
