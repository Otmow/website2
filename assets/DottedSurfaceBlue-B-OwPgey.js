const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/DottedSurfaceBlue.impl-Clpu058Q.js",
      "assets/vendor-react-DLnSei1N.js",
      "assets/FooterBlue-DXismSK9.js",
      "assets/index-pNzFXLul.js",
      "assets/vendor-three-CqD6NmA3.js",
      "assets/fx-lifecycle-C5H1zH4y.js",
    ]),
) => i.map((i) => d[i]);
import { _ as a } from "./index-pNzFXLul.js";
import { j as t, r as o } from "./vendor-react-DLnSei1N.js";
import { d as n, a as s } from "./FooterBlue-DXismSK9.js";
const l = o.lazy(() =>
  a(() => import("./DottedSurfaceBlue.impl-Clpu058Q.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])).then(
    (e) => ({ default: e.DottedSurfaceImpl }),
  ),
);
function c({ className: e, ...r }) {
  return n()
    ? t.jsx(o.Suspense, { fallback: null, children: t.jsx(l, { className: e, ...r }) })
    : t.jsx("div", {
        className: s("pointer-events-none absolute inset-0 overflow-hidden", e),
        ...r,
      });
}
export { c as D };
