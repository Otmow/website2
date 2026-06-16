const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/DottedSurfaceBlue.impl-ab_Mv5gQ.js",
      "assets/vendor-react-DLnSei1N.js",
      "assets/FooterBlue-C091Jo7C.js",
      "assets/index-CqBNPuiB.js",
      "assets/vendor-three-CqD6NmA3.js",
      "assets/fx-lifecycle-C5H1zH4y.js",
    ]),
) => i.map((i) => d[i]);
import { _ as n } from "./index-CqBNPuiB.js";
import { j as t, r as o } from "./vendor-react-DLnSei1N.js";
import { b as a, c as s } from "./FooterBlue-C091Jo7C.js";
const l = o.lazy(() =>
  n(() => import("./DottedSurfaceBlue.impl-ab_Mv5gQ.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5])).then(
    (e) => ({ default: e.DottedSurfaceImpl }),
  ),
);
function f({ className: e, ...r }) {
  return a()
    ? t.jsx(o.Suspense, { fallback: null, children: t.jsx(l, { className: e, ...r }) })
    : t.jsx("div", {
        className: s("pointer-events-none absolute inset-0 overflow-hidden", e),
        ...r,
      });
}
export { f as D };
