const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/WarpBackgroundBlue.impl-mBZX_2w2.js",
      "assets/vendor-react-DLnSei1N.js",
      "assets/vendor-shaders-BfWvw4XA.js",
    ]),
) => i.map((i) => d[i]);
import { r as x, j as s } from "./vendor-react-DLnSei1N.js";
import { L as I, _ as Xe } from "./index-DZjeoYlN.js";
function Re(e) {
  var r,
    o,
    t = "";
  if (typeof e == "string" || typeof e == "number") t += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var n = e.length;
      for (r = 0; r < n; r++) e[r] && (o = Re(e[r])) && (t && (t += " "), (t += o));
    } else for (o in e) e[o] && (t && (t += " "), (t += o));
  return t;
}
function He() {
  for (var e, r, o = 0, t = "", n = arguments.length; o < n; o++)
    (e = arguments[o]) && (r = Re(e)) && (t && (t += " "), (t += r));
  return t;
}
const Je = (e, r) => {
    const o = new Array(e.length + r.length);
    for (let t = 0; t < e.length; t++) o[t] = e[t];
    for (let t = 0; t < r.length; t++) o[e.length + t] = r[t];
    return o;
  },
  Ke = (e, r) => ({ classGroupId: e, validator: r }),
  Ie = (e = new Map(), r = null, o) => ({ nextPart: e, validators: r, classGroupId: o }),
  te = "-",
  ye = [],
  Qe = "arbitrary..",
  Ze = (e) => {
    const r = tt(e),
      { conflictingClassGroups: o, conflictingClassGroupModifiers: t } = e;
    return {
      getClassGroupId: (l) => {
        if (l.startsWith("[") && l.endsWith("]")) return et(l);
        const b = l.split(te),
          f = b[0] === "" && b.length > 1 ? 1 : 0;
        return Pe(b, f, r);
      },
      getConflictingClassGroupIds: (l, b) => {
        if (b) {
          const f = t[l],
            p = o[l];
          return f ? (p ? Je(p, f) : f) : p || ye;
        }
        return o[l] || ye;
      },
    };
  },
  Pe = (e, r, o) => {
    if (e.length - r === 0) return o.classGroupId;
    const n = e[r],
      c = o.nextPart.get(n);
    if (c) {
      const p = Pe(e, r + 1, c);
      if (p) return p;
    }
    const l = o.validators;
    if (l === null) return;
    const b = r === 0 ? e.join(te) : e.slice(r).join(te),
      f = l.length;
    for (let p = 0; p < f; p++) {
      const w = l[p];
      if (w.validator(b)) return w.classGroupId;
    }
  },
  et = (e) =>
    e.slice(1, -1).indexOf(":") === -1
      ? void 0
      : (() => {
          const r = e.slice(1, -1),
            o = r.indexOf(":"),
            t = r.slice(0, o);
          return t ? Qe + t : void 0;
        })(),
  tt = (e) => {
    const { theme: r, classGroups: o } = e;
    return ot(o, r);
  },
  ot = (e, r) => {
    const o = Ie();
    for (const t in e) {
      const n = e[t];
      me(n, o, t, r);
    }
    return o;
  },
  me = (e, r, o, t) => {
    const n = e.length;
    for (let c = 0; c < n; c++) {
      const l = e[c];
      rt(l, r, o, t);
    }
  },
  rt = (e, r, o, t) => {
    if (typeof e == "string") {
      st(e, r, o);
      return;
    }
    if (typeof e == "function") {
      nt(e, r, o, t);
      return;
    }
    at(e, r, o, t);
  },
  st = (e, r, o) => {
    const t = e === "" ? r : Fe(r, e);
    t.classGroupId = o;
  },
  nt = (e, r, o, t) => {
    if (it(e)) {
      me(e(t), r, o, t);
      return;
    }
    (r.validators === null && (r.validators = []), r.validators.push(Ke(o, e)));
  },
  at = (e, r, o, t) => {
    const n = Object.entries(e),
      c = n.length;
    for (let l = 0; l < c; l++) {
      const [b, f] = n[l];
      me(f, Fe(r, b), o, t);
    }
  },
  Fe = (e, r) => {
    let o = e;
    const t = r.split(te),
      n = t.length;
    for (let c = 0; c < n; c++) {
      const l = t[c];
      let b = o.nextPart.get(l);
      (b || ((b = Ie()), o.nextPart.set(l, b)), (o = b));
    }
    return o;
  },
  it = (e) => "isThemeGetter" in e && e.isThemeGetter === !0,
  lt = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let r = 0,
      o = Object.create(null),
      t = Object.create(null);
    const n = (c, l) => {
      ((o[c] = l), r++, r > e && ((r = 0), (t = o), (o = Object.create(null))));
    };
    return {
      get(c) {
        let l = o[c];
        if (l !== void 0) return l;
        if ((l = t[c]) !== void 0) return (n(c, l), l);
      },
      set(c, l) {
        c in o ? (o[c] = l) : n(c, l);
      },
    };
  },
  de = "!",
  ve = ":",
  ct = [],
  je = (e, r, o, t, n) => ({
    modifiers: e,
    hasImportantModifier: r,
    baseClassName: o,
    maybePostfixModifierPosition: t,
    isExternal: n,
  }),
  dt = (e) => {
    const { prefix: r, experimentalParseClassName: o } = e;
    let t = (n) => {
      const c = [];
      let l = 0,
        b = 0,
        f = 0,
        p;
      const w = n.length;
      for (let j = 0; j < w; j++) {
        const C = n[j];
        if (l === 0 && b === 0) {
          if (C === ve) {
            (c.push(n.slice(f, j)), (f = j + 1));
            continue;
          }
          if (C === "/") {
            p = j;
            continue;
          }
        }
        C === "[" ? l++ : C === "]" ? l-- : C === "(" ? b++ : C === ")" && b--;
      }
      const k = c.length === 0 ? n : n.slice(f);
      let L = k,
        S = !1;
      k.endsWith(de)
        ? ((L = k.slice(0, -1)), (S = !0))
        : k.startsWith(de) && ((L = k.slice(1)), (S = !0));
      const D = p && p > f ? p - f : void 0;
      return je(c, S, L, D);
    };
    if (r) {
      const n = r + ve,
        c = t;
      t = (l) => (l.startsWith(n) ? c(l.slice(n.length)) : je(ct, !1, l, void 0, !0));
    }
    if (o) {
      const n = t;
      t = (c) => o({ className: c, parseClassName: n });
    }
    return t;
  },
  mt = (e) => {
    const r = new Map();
    return (
      e.orderSensitiveModifiers.forEach((o, t) => {
        r.set(o, 1e6 + t);
      }),
      (o) => {
        const t = [];
        let n = [];
        for (let c = 0; c < o.length; c++) {
          const l = o[c],
            b = l[0] === "[",
            f = r.has(l);
          b || f ? (n.length > 0 && (n.sort(), t.push(...n), (n = [])), t.push(l)) : n.push(l);
        }
        return (n.length > 0 && (n.sort(), t.push(...n)), t);
      }
    );
  },
  pt = (e) => ({
    cache: lt(e.cacheSize),
    parseClassName: dt(e),
    sortModifiers: mt(e),
    postfixLookupClassGroupIds: ut(e),
    ...Ze(e),
  }),
  ut = (e) => {
    const r = Object.create(null),
      o = e.postfixLookupClassGroups;
    if (o) for (let t = 0; t < o.length; t++) r[o[t]] = !0;
    return r;
  },
  bt = /\s+/,
  ft = (e, r) => {
    const {
        parseClassName: o,
        getClassGroupId: t,
        getConflictingClassGroupIds: n,
        sortModifiers: c,
        postfixLookupClassGroupIds: l,
      } = r,
      b = [],
      f = e.trim().split(bt);
    let p = "";
    for (let w = f.length - 1; w >= 0; w -= 1) {
      const k = f[w],
        {
          isExternal: L,
          modifiers: S,
          hasImportantModifier: D,
          baseClassName: j,
          maybePostfixModifierPosition: C,
        } = o(k);
      if (L) {
        p = k + (p.length > 0 ? " " + p : p);
        continue;
      }
      let G = !!C,
        N;
      if (G) {
        const M = j.substring(0, C);
        N = t(M);
        const d = N && l[N] ? t(j) : void 0;
        d && d !== N && ((N = d), (G = !1));
      } else N = t(j);
      if (!N) {
        if (!G) {
          p = k + (p.length > 0 ? " " + p : p);
          continue;
        }
        if (((N = t(j)), !N)) {
          p = k + (p.length > 0 ? " " + p : p);
          continue;
        }
        G = !1;
      }
      const U = S.length === 0 ? "" : S.length === 1 ? S[0] : c(S).join(":"),
        T = D ? U + de : U,
        W = T + N;
      if (b.indexOf(W) > -1) continue;
      b.push(W);
      const V = n(N, G);
      for (let M = 0; M < V.length; ++M) {
        const d = V[M];
        b.push(T + d);
      }
      p = k + (p.length > 0 ? " " + p : p);
    }
    return p;
  },
  ht = (...e) => {
    let r = 0,
      o,
      t,
      n = "";
    for (; r < e.length; ) (o = e[r++]) && (t = Le(o)) && (n && (n += " "), (n += t));
    return n;
  },
  Le = (e) => {
    if (typeof e == "string") return e;
    let r,
      o = "";
    for (let t = 0; t < e.length; t++) e[t] && (r = Le(e[t])) && (o && (o += " "), (o += r));
    return o;
  },
  gt = (e, ...r) => {
    let o, t, n, c;
    const l = (f) => {
        const p = r.reduce((w, k) => k(w), e());
        return ((o = pt(p)), (t = o.cache.get), (n = o.cache.set), (c = b), b(f));
      },
      b = (f) => {
        const p = t(f);
        if (p) return p;
        const w = ft(f, o);
        return (n(f, w), w);
      };
    return ((c = l), (...f) => c(ht(...f)));
  },
  xt = [],
  h = (e) => {
    const r = (o) => o[e] || xt;
    return ((r.isThemeGetter = !0), r);
  },
  Ge = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
  _e = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
  wt = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
  kt = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  yt =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  vt = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
  jt = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Nt =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  P = (e) => wt.test(e),
  u = (e) => !!e && !Number.isNaN(Number(e)),
  E = (e) => !!e && Number.isInteger(Number(e)),
  ie = (e) => e.endsWith("%") && u(e.slice(0, -1)),
  R = (e) => kt.test(e),
  Be = () => !0,
  zt = (e) => yt.test(e) && !vt.test(e),
  pe = () => !1,
  Ct = (e) => jt.test(e),
  At = (e) => Nt.test(e),
  St = (e) => !a(e) && !i(e),
  Et = (e) =>
    e.startsWith("@container") &&
    ((e[10] === "/" && e[11] !== void 0) ||
      (e[11] === "s" && e[16] !== void 0 && e.startsWith("-size/", 10)) ||
      (e[11] === "n" && e[18] !== void 0 && e.startsWith("-normal/", 10))),
  Mt = (e) => F(e, We, pe),
  a = (e) => Ge.test(e),
  B = (e) => F(e, Ve, zt),
  Ne = (e) => F(e, Bt, u),
  Rt = (e) => F(e, qe, Be),
  It = (e) => F(e, $e, pe),
  ze = (e) => F(e, Oe, pe),
  Pt = (e) => F(e, Te, At),
  Z = (e) => F(e, De, Ct),
  i = (e) => _e.test(e),
  Y = (e) => O(e, Ve),
  Ft = (e) => O(e, $e),
  Ce = (e) => O(e, Oe),
  Lt = (e) => O(e, We),
  Gt = (e) => O(e, Te),
  ee = (e) => O(e, De, !0),
  _t = (e) => O(e, qe, !0),
  F = (e, r, o) => {
    const t = Ge.exec(e);
    return t ? (t[1] ? r(t[1]) : o(t[2])) : !1;
  },
  O = (e, r, o = !1) => {
    const t = _e.exec(e);
    return t ? (t[1] ? r(t[1]) : o) : !1;
  },
  Oe = (e) => e === "position" || e === "percentage",
  Te = (e) => e === "image" || e === "url",
  We = (e) => e === "length" || e === "size" || e === "bg-size",
  Ve = (e) => e === "length",
  Bt = (e) => e === "number",
  $e = (e) => e === "family-name",
  qe = (e) => e === "number" || e === "weight",
  De = (e) => e === "shadow",
  Ot = () => {
    const e = h("color"),
      r = h("font"),
      o = h("text"),
      t = h("font-weight"),
      n = h("tracking"),
      c = h("leading"),
      l = h("breakpoint"),
      b = h("container"),
      f = h("spacing"),
      p = h("radius"),
      w = h("shadow"),
      k = h("inset-shadow"),
      L = h("text-shadow"),
      S = h("drop-shadow"),
      D = h("blur"),
      j = h("perspective"),
      C = h("aspect"),
      G = h("ease"),
      N = h("animate"),
      U = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
      T = () => [
        "center",
        "top",
        "bottom",
        "left",
        "right",
        "top-left",
        "left-top",
        "top-right",
        "right-top",
        "bottom-right",
        "right-bottom",
        "bottom-left",
        "left-bottom",
      ],
      W = () => [...T(), i, a],
      V = () => ["auto", "hidden", "clip", "visible", "scroll"],
      M = () => ["auto", "contain", "none"],
      d = () => [i, a, f],
      z = () => [P, "full", "auto", ...d()],
      ue = () => [E, "none", "subgrid", i, a],
      be = () => ["auto", { span: ["full", E, i, a] }, E, i, a],
      X = () => [E, "auto", i, a],
      fe = () => ["auto", "min", "max", "fr", i, a],
      oe = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
        "baseline",
        "center-safe",
        "end-safe",
      ],
      $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"],
      A = () => ["auto", ...d()],
      _ = () => [
        P,
        "auto",
        "full",
        "dvw",
        "dvh",
        "lvw",
        "lvh",
        "svw",
        "svh",
        "min",
        "max",
        "fit",
        ...d(),
      ],
      re = () => [P, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...d()],
      se = () => [P, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...d()],
      m = () => [e, i, a],
      he = () => [...T(), Ce, ze, { position: [i, a] }],
      ge = () => ["no-repeat", { repeat: ["", "x", "y", "space", "round"] }],
      xe = () => ["auto", "cover", "contain", Lt, Mt, { size: [i, a] }],
      ne = () => [ie, Y, B],
      y = () => ["", "none", "full", p, i, a],
      v = () => ["", u, Y, B],
      H = () => ["solid", "dashed", "dotted", "double"],
      we = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      g = () => [u, ie, Ce, ze],
      ke = () => ["", "none", D, i, a],
      J = () => ["none", u, i, a],
      K = () => ["none", u, i, a],
      ae = () => [u, i, a],
      Q = () => [P, "full", ...d()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [R],
        breakpoint: [R],
        color: [Be],
        container: [R],
        "drop-shadow": [R],
        ease: ["in", "out", "in-out"],
        font: [St],
        "font-weight": [
          "thin",
          "extralight",
          "light",
          "normal",
          "medium",
          "semibold",
          "bold",
          "extrabold",
          "black",
        ],
        "inset-shadow": [R],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [R],
        shadow: [R],
        spacing: ["px", u],
        text: [R],
        "text-shadow": [R],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", P, a, i, C] }],
        container: ["container"],
        "container-type": [{ "@container": ["", "normal", "size", i, a] }],
        "container-named": [Et],
        columns: [{ columns: [u, a, i, b] }],
        "break-after": [{ "break-after": U() }],
        "break-before": [{ "break-before": U() }],
        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        sr: ["sr-only", "not-sr-only"],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
        "object-position": [{ object: W() }],
        overflow: [{ overflow: V() }],
        "overflow-x": [{ "overflow-x": V() }],
        "overflow-y": [{ "overflow-y": V() }],
        overscroll: [{ overscroll: M() }],
        "overscroll-x": [{ "overscroll-x": M() }],
        "overscroll-y": [{ "overscroll-y": M() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: z() }],
        "inset-x": [{ "inset-x": z() }],
        "inset-y": [{ "inset-y": z() }],
        start: [{ "inset-s": z(), start: z() }],
        end: [{ "inset-e": z(), end: z() }],
        "inset-bs": [{ "inset-bs": z() }],
        "inset-be": [{ "inset-be": z() }],
        top: [{ top: z() }],
        right: [{ right: z() }],
        bottom: [{ bottom: z() }],
        left: [{ left: z() }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: [E, "auto", i, a] }],
        basis: [{ basis: [P, "full", "auto", b, ...d()] }],
        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
        "flex-wrap": [{ flex: ["nowrap", "wrap", "wrap-reverse"] }],
        flex: [{ flex: [u, P, "auto", "initial", "none", a] }],
        grow: [{ grow: ["", u, i, a] }],
        shrink: [{ shrink: ["", u, i, a] }],
        order: [{ order: [E, "first", "last", "none", i, a] }],
        "grid-cols": [{ "grid-cols": ue() }],
        "col-start-end": [{ col: be() }],
        "col-start": [{ "col-start": X() }],
        "col-end": [{ "col-end": X() }],
        "grid-rows": [{ "grid-rows": ue() }],
        "row-start-end": [{ row: be() }],
        "row-start": [{ "row-start": X() }],
        "row-end": [{ "row-end": X() }],
        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
        "auto-cols": [{ "auto-cols": fe() }],
        "auto-rows": [{ "auto-rows": fe() }],
        gap: [{ gap: d() }],
        "gap-x": [{ "gap-x": d() }],
        "gap-y": [{ "gap-y": d() }],
        "justify-content": [{ justify: [...oe(), "normal"] }],
        "justify-items": [{ "justify-items": [...$(), "normal"] }],
        "justify-self": [{ "justify-self": ["auto", ...$()] }],
        "align-content": [{ content: ["normal", ...oe()] }],
        "align-items": [{ items: [...$(), { baseline: ["", "last"] }] }],
        "align-self": [{ self: ["auto", ...$(), { baseline: ["", "last"] }] }],
        "place-content": [{ "place-content": oe() }],
        "place-items": [{ "place-items": [...$(), "baseline"] }],
        "place-self": [{ "place-self": ["auto", ...$()] }],
        p: [{ p: d() }],
        px: [{ px: d() }],
        py: [{ py: d() }],
        ps: [{ ps: d() }],
        pe: [{ pe: d() }],
        pbs: [{ pbs: d() }],
        pbe: [{ pbe: d() }],
        pt: [{ pt: d() }],
        pr: [{ pr: d() }],
        pb: [{ pb: d() }],
        pl: [{ pl: d() }],
        m: [{ m: A() }],
        mx: [{ mx: A() }],
        my: [{ my: A() }],
        ms: [{ ms: A() }],
        me: [{ me: A() }],
        mbs: [{ mbs: A() }],
        mbe: [{ mbe: A() }],
        mt: [{ mt: A() }],
        mr: [{ mr: A() }],
        mb: [{ mb: A() }],
        ml: [{ ml: A() }],
        "space-x": [{ "space-x": d() }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": d() }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{ size: _() }],
        "inline-size": [{ inline: ["auto", ...re()] }],
        "min-inline-size": [{ "min-inline": ["auto", ...re()] }],
        "max-inline-size": [{ "max-inline": ["none", ...re()] }],
        "block-size": [{ block: ["auto", ...se()] }],
        "min-block-size": [{ "min-block": ["auto", ...se()] }],
        "max-block-size": [{ "max-block": ["none", ...se()] }],
        w: [{ w: [b, "screen", ..._()] }],
        "min-w": [{ "min-w": [b, "screen", "none", ..._()] }],
        "max-w": [{ "max-w": [b, "screen", "none", "prose", { screen: [l] }, ..._()] }],
        h: [{ h: ["screen", "lh", ..._()] }],
        "min-h": [{ "min-h": ["screen", "lh", "none", ..._()] }],
        "max-h": [{ "max-h": ["screen", "lh", ..._()] }],
        "font-size": [{ text: ["base", o, Y, B] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{ font: [t, _t, Rt] }],
        "font-stretch": [
          {
            "font-stretch": [
              "ultra-condensed",
              "extra-condensed",
              "condensed",
              "semi-condensed",
              "normal",
              "semi-expanded",
              "expanded",
              "extra-expanded",
              "ultra-expanded",
              ie,
              a,
            ],
          },
        ],
        "font-family": [{ font: [Ft, It, r] }],
        "font-features": [{ "font-features": [a] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{ tracking: [n, i, a] }],
        "line-clamp": [{ "line-clamp": [u, "none", i, Ne] }],
        leading: [{ leading: [c, ...d()] }],
        "list-image": [{ "list-image": ["none", i, a] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "list-style-type": [{ list: ["disc", "decimal", "none", i, a] }],
        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
        "placeholder-color": [{ placeholder: m() }],
        "text-color": [{ text: m() }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{ decoration: [...H(), "wavy"] }],
        "text-decoration-thickness": [{ decoration: [u, "from-font", "auto", i, B] }],
        "text-decoration-color": [{ decoration: m() }],
        "underline-offset": [{ "underline-offset": [u, "auto", i, a] }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: d() }],
        "tab-size": [{ tab: [E, i, a] }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              i,
              a,
            ],
          },
        ],
        whitespace: [
          { whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        wrap: [{ wrap: ["break-word", "anywhere", "normal"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", i, a] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: he() }],
        "bg-repeat": [{ bg: ge() }],
        "bg-size": [{ bg: xe() }],
        "bg-image": [
          {
            bg: [
              "none",
              {
                linear: [{ to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, E, i, a],
                radial: ["", i, a],
                conic: [E, i, a],
              },
              Gt,
              Pt,
            ],
          },
        ],
        "bg-color": [{ bg: m() }],
        "gradient-from-pos": [{ from: ne() }],
        "gradient-via-pos": [{ via: ne() }],
        "gradient-to-pos": [{ to: ne() }],
        "gradient-from": [{ from: m() }],
        "gradient-via": [{ via: m() }],
        "gradient-to": [{ to: m() }],
        rounded: [{ rounded: y() }],
        "rounded-s": [{ "rounded-s": y() }],
        "rounded-e": [{ "rounded-e": y() }],
        "rounded-t": [{ "rounded-t": y() }],
        "rounded-r": [{ "rounded-r": y() }],
        "rounded-b": [{ "rounded-b": y() }],
        "rounded-l": [{ "rounded-l": y() }],
        "rounded-ss": [{ "rounded-ss": y() }],
        "rounded-se": [{ "rounded-se": y() }],
        "rounded-ee": [{ "rounded-ee": y() }],
        "rounded-es": [{ "rounded-es": y() }],
        "rounded-tl": [{ "rounded-tl": y() }],
        "rounded-tr": [{ "rounded-tr": y() }],
        "rounded-br": [{ "rounded-br": y() }],
        "rounded-bl": [{ "rounded-bl": y() }],
        "border-w": [{ border: v() }],
        "border-w-x": [{ "border-x": v() }],
        "border-w-y": [{ "border-y": v() }],
        "border-w-s": [{ "border-s": v() }],
        "border-w-e": [{ "border-e": v() }],
        "border-w-bs": [{ "border-bs": v() }],
        "border-w-be": [{ "border-be": v() }],
        "border-w-t": [{ "border-t": v() }],
        "border-w-r": [{ "border-r": v() }],
        "border-w-b": [{ "border-b": v() }],
        "border-w-l": [{ "border-l": v() }],
        "divide-x": [{ "divide-x": v() }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": v() }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{ border: [...H(), "hidden", "none"] }],
        "divide-style": [{ divide: [...H(), "hidden", "none"] }],
        "border-color": [{ border: m() }],
        "border-color-x": [{ "border-x": m() }],
        "border-color-y": [{ "border-y": m() }],
        "border-color-s": [{ "border-s": m() }],
        "border-color-e": [{ "border-e": m() }],
        "border-color-bs": [{ "border-bs": m() }],
        "border-color-be": [{ "border-be": m() }],
        "border-color-t": [{ "border-t": m() }],
        "border-color-r": [{ "border-r": m() }],
        "border-color-b": [{ "border-b": m() }],
        "border-color-l": [{ "border-l": m() }],
        "divide-color": [{ divide: m() }],
        "outline-style": [{ outline: [...H(), "none", "hidden"] }],
        "outline-offset": [{ "outline-offset": [u, i, a] }],
        "outline-w": [{ outline: ["", u, Y, B] }],
        "outline-color": [{ outline: m() }],
        shadow: [{ shadow: ["", "none", w, ee, Z] }],
        "shadow-color": [{ shadow: m() }],
        "inset-shadow": [{ "inset-shadow": ["none", k, ee, Z] }],
        "inset-shadow-color": [{ "inset-shadow": m() }],
        "ring-w": [{ ring: v() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: m() }],
        "ring-offset-w": [{ "ring-offset": [u, B] }],
        "ring-offset-color": [{ "ring-offset": m() }],
        "inset-ring-w": [{ "inset-ring": v() }],
        "inset-ring-color": [{ "inset-ring": m() }],
        "text-shadow": [{ "text-shadow": ["none", L, ee, Z] }],
        "text-shadow-color": [{ "text-shadow": m() }],
        opacity: [{ opacity: [u, i, a] }],
        "mix-blend": [{ "mix-blend": [...we(), "plus-darker", "plus-lighter"] }],
        "bg-blend": [{ "bg-blend": we() }],
        "mask-clip": [
          { "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"] },
          "mask-no-clip",
        ],
        "mask-composite": [{ mask: ["add", "subtract", "intersect", "exclude"] }],
        "mask-image-linear-pos": [{ "mask-linear": [u] }],
        "mask-image-linear-from-pos": [{ "mask-linear-from": g() }],
        "mask-image-linear-to-pos": [{ "mask-linear-to": g() }],
        "mask-image-linear-from-color": [{ "mask-linear-from": m() }],
        "mask-image-linear-to-color": [{ "mask-linear-to": m() }],
        "mask-image-t-from-pos": [{ "mask-t-from": g() }],
        "mask-image-t-to-pos": [{ "mask-t-to": g() }],
        "mask-image-t-from-color": [{ "mask-t-from": m() }],
        "mask-image-t-to-color": [{ "mask-t-to": m() }],
        "mask-image-r-from-pos": [{ "mask-r-from": g() }],
        "mask-image-r-to-pos": [{ "mask-r-to": g() }],
        "mask-image-r-from-color": [{ "mask-r-from": m() }],
        "mask-image-r-to-color": [{ "mask-r-to": m() }],
        "mask-image-b-from-pos": [{ "mask-b-from": g() }],
        "mask-image-b-to-pos": [{ "mask-b-to": g() }],
        "mask-image-b-from-color": [{ "mask-b-from": m() }],
        "mask-image-b-to-color": [{ "mask-b-to": m() }],
        "mask-image-l-from-pos": [{ "mask-l-from": g() }],
        "mask-image-l-to-pos": [{ "mask-l-to": g() }],
        "mask-image-l-from-color": [{ "mask-l-from": m() }],
        "mask-image-l-to-color": [{ "mask-l-to": m() }],
        "mask-image-x-from-pos": [{ "mask-x-from": g() }],
        "mask-image-x-to-pos": [{ "mask-x-to": g() }],
        "mask-image-x-from-color": [{ "mask-x-from": m() }],
        "mask-image-x-to-color": [{ "mask-x-to": m() }],
        "mask-image-y-from-pos": [{ "mask-y-from": g() }],
        "mask-image-y-to-pos": [{ "mask-y-to": g() }],
        "mask-image-y-from-color": [{ "mask-y-from": m() }],
        "mask-image-y-to-color": [{ "mask-y-to": m() }],
        "mask-image-radial": [{ "mask-radial": [i, a] }],
        "mask-image-radial-from-pos": [{ "mask-radial-from": g() }],
        "mask-image-radial-to-pos": [{ "mask-radial-to": g() }],
        "mask-image-radial-from-color": [{ "mask-radial-from": m() }],
        "mask-image-radial-to-color": [{ "mask-radial-to": m() }],
        "mask-image-radial-shape": [{ "mask-radial": ["circle", "ellipse"] }],
        "mask-image-radial-size": [
          { "mask-radial": [{ closest: ["side", "corner"], farthest: ["side", "corner"] }] },
        ],
        "mask-image-radial-pos": [{ "mask-radial-at": T() }],
        "mask-image-conic-pos": [{ "mask-conic": [u] }],
        "mask-image-conic-from-pos": [{ "mask-conic-from": g() }],
        "mask-image-conic-to-pos": [{ "mask-conic-to": g() }],
        "mask-image-conic-from-color": [{ "mask-conic-from": m() }],
        "mask-image-conic-to-color": [{ "mask-conic-to": m() }],
        "mask-mode": [{ mask: ["alpha", "luminance", "match"] }],
        "mask-origin": [
          { "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"] },
        ],
        "mask-position": [{ mask: he() }],
        "mask-repeat": [{ mask: ge() }],
        "mask-size": [{ mask: xe() }],
        "mask-type": [{ "mask-type": ["alpha", "luminance"] }],
        "mask-image": [{ mask: ["none", i, a] }],
        filter: [{ filter: ["", "none", i, a] }],
        blur: [{ blur: ke() }],
        brightness: [{ brightness: [u, i, a] }],
        contrast: [{ contrast: [u, i, a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", S, ee, Z] }],
        "drop-shadow-color": [{ "drop-shadow": m() }],
        grayscale: [{ grayscale: ["", u, i, a] }],
        "hue-rotate": [{ "hue-rotate": [u, i, a] }],
        invert: [{ invert: ["", u, i, a] }],
        saturate: [{ saturate: [u, i, a] }],
        sepia: [{ sepia: ["", u, i, a] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none", i, a] }],
        "backdrop-blur": [{ "backdrop-blur": ke() }],
        "backdrop-brightness": [{ "backdrop-brightness": [u, i, a] }],
        "backdrop-contrast": [{ "backdrop-contrast": [u, i, a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": ["", u, i, a] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u, i, a] }],
        "backdrop-invert": [{ "backdrop-invert": ["", u, i, a] }],
        "backdrop-opacity": [{ "backdrop-opacity": [u, i, a] }],
        "backdrop-saturate": [{ "backdrop-saturate": [u, i, a] }],
        "backdrop-sepia": [{ "backdrop-sepia": ["", u, i, a] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": d() }],
        "border-spacing-x": [{ "border-spacing-x": d() }],
        "border-spacing-y": [{ "border-spacing-y": d() }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          { transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", i, a] },
        ],
        "transition-behavior": [{ transition: ["normal", "discrete"] }],
        duration: [{ duration: [u, "initial", i, a] }],
        ease: [{ ease: ["linear", "initial", G, i, a] }],
        delay: [{ delay: [u, i, a] }],
        animate: [{ animate: ["none", N, i, a] }],
        backface: [{ backface: ["hidden", "visible"] }],
        perspective: [{ perspective: [j, i, a] }],
        "perspective-origin": [{ "perspective-origin": W() }],
        rotate: [{ rotate: J() }],
        "rotate-x": [{ "rotate-x": J() }],
        "rotate-y": [{ "rotate-y": J() }],
        "rotate-z": [{ "rotate-z": J() }],
        scale: [{ scale: K() }],
        "scale-x": [{ "scale-x": K() }],
        "scale-y": [{ "scale-y": K() }],
        "scale-z": [{ "scale-z": K() }],
        "scale-3d": ["scale-3d"],
        skew: [{ skew: ae() }],
        "skew-x": [{ "skew-x": ae() }],
        "skew-y": [{ "skew-y": ae() }],
        transform: [{ transform: [i, a, "", "none", "gpu", "cpu"] }],
        "transform-origin": [{ origin: W() }],
        "transform-style": [{ transform: ["3d", "flat"] }],
        translate: [{ translate: Q() }],
        "translate-x": [{ "translate-x": Q() }],
        "translate-y": [{ "translate-y": Q() }],
        "translate-z": [{ "translate-z": Q() }],
        "translate-none": ["translate-none"],
        zoom: [{ zoom: [E, i, a] }],
        accent: [{ accent: m() }],
        appearance: [{ appearance: ["none", "auto"] }],
        "caret-color": [{ caret: m() }],
        "color-scheme": [
          { scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"] },
        ],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              i,
              a,
            ],
          },
        ],
        "field-sizing": [{ "field-sizing": ["fixed", "content"] }],
        "pointer-events": [{ "pointer-events": ["auto", "none"] }],
        resize: [{ resize: ["none", "", "y", "x"] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scrollbar-thumb-color": [{ "scrollbar-thumb": m() }],
        "scrollbar-track-color": [{ "scrollbar-track": m() }],
        "scrollbar-gutter": [{ "scrollbar-gutter": ["auto", "stable", "both"] }],
        "scrollbar-w": [{ scrollbar: ["auto", "thin", "none"] }],
        "scroll-m": [{ "scroll-m": d() }],
        "scroll-mx": [{ "scroll-mx": d() }],
        "scroll-my": [{ "scroll-my": d() }],
        "scroll-ms": [{ "scroll-ms": d() }],
        "scroll-me": [{ "scroll-me": d() }],
        "scroll-mbs": [{ "scroll-mbs": d() }],
        "scroll-mbe": [{ "scroll-mbe": d() }],
        "scroll-mt": [{ "scroll-mt": d() }],
        "scroll-mr": [{ "scroll-mr": d() }],
        "scroll-mb": [{ "scroll-mb": d() }],
        "scroll-ml": [{ "scroll-ml": d() }],
        "scroll-p": [{ "scroll-p": d() }],
        "scroll-px": [{ "scroll-px": d() }],
        "scroll-py": [{ "scroll-py": d() }],
        "scroll-ps": [{ "scroll-ps": d() }],
        "scroll-pe": [{ "scroll-pe": d() }],
        "scroll-pbs": [{ "scroll-pbs": d() }],
        "scroll-pbe": [{ "scroll-pbe": d() }],
        "scroll-pt": [{ "scroll-pt": d() }],
        "scroll-pr": [{ "scroll-pr": d() }],
        "scroll-pb": [{ "scroll-pb": d() }],
        "scroll-pl": [{ "scroll-pl": d() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", i, a] }],
        fill: [{ fill: ["none", ...m()] }],
        "stroke-w": [{ stroke: [u, Y, B, Ne] }],
        stroke: [{ stroke: ["none", ...m()] }],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        "container-named": ["container-type"],
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "inset-bs",
          "inset-be",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-x",
          "border-w-y",
          "border-w-s",
          "border-w-e",
          "border-w-bs",
          "border-w-be",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-x",
          "border-color-y",
          "border-color-s",
          "border-color-e",
          "border-color-bs",
          "border-color-be",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mbs",
          "scroll-mbe",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pbs",
          "scroll-pbe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
      postfixLookupClassGroups: ["container-type"],
      orderSensitiveModifiers: [
        "*",
        "**",
        "after",
        "backdrop",
        "before",
        "details-content",
        "file",
        "first-letter",
        "first-line",
        "marker",
        "placeholder",
        "selection",
      ],
    };
  },
  Tt = gt(Ot);
function Ue(...e) {
  return Tt(He(e));
}
const Ye = (...e) =>
  e
    .filter((r, o, t) => !!r && r.trim() !== "" && t.indexOf(r) === o)
    .join(" ")
    .trim();
const Wt = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const Vt = (e) =>
  e.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, o, t) => (t ? t.toUpperCase() : o.toLowerCase()));
const Ae = (e) => {
  const r = Vt(e);
  return r.charAt(0).toUpperCase() + r.slice(1);
};
var $t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const qt = (e) => {
  for (const r in e) if (r.startsWith("aria-") || r === "role" || r === "title") return !0;
  return !1;
};
const Dt = x.forwardRef(
  (
    {
      color: e = "currentColor",
      size: r = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: t,
      className: n = "",
      children: c,
      iconNode: l,
      ...b
    },
    f,
  ) =>
    x.createElement(
      "svg",
      {
        ref: f,
        ...$t,
        width: r,
        height: r,
        stroke: e,
        strokeWidth: t ? (Number(o) * 24) / Number(r) : o,
        className: Ye("lucide", n),
        ...(!c && !qt(b) && { "aria-hidden": "true" }),
        ...b,
      },
      [...l.map(([p, w]) => x.createElement(p, w)), ...(Array.isArray(c) ? c : [c])],
    ),
);
const q = (e, r) => {
  const o = x.forwardRef(({ className: t, ...n }, c) =>
    x.createElement(Dt, {
      ref: c,
      iconNode: r,
      className: Ye(`lucide-${Wt(Ae(e))}`, `lucide-${e}`, t),
      ...n,
    }),
  );
  return ((o.displayName = Ae(e)), o);
};
const Ut = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  Yt = q("arrow-up-right", Ut);
const Xt = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }],
  ],
  Ht = q("mail", Xt);
const Jt = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  Se = q("map-pin", Jt);
const Kt = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  Qt = q("menu", Kt);
const Zt = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  eo = q("phone", Zt);
const to = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  oo = q("x", to),
  Ee = [
    { to: "/sobre", label: "Sobre nós" },
    { to: "/clientes", label: "Para empresas" },
    { to: "/parceiros", label: "Seja parceiro" },
    { to: "/gestores", label: "Gestores" },
    { to: "/faq", label: "FAQ" },
  ];
function mo() {
  const [e, r] = x.useState(!1),
    [o, t] = x.useState(!1);
  return (
    x.useEffect(() => {
      const n = () => r(window.scrollY > 24);
      return (
        n(),
        window.addEventListener("scroll", n, { passive: !0 }),
        () => window.removeEventListener("scroll", n)
      );
    }, []),
    s.jsxs("header", {
      className: Ue(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        e ? "border-b border-white/10 bg-[#060d1f]/85 backdrop-blur-xl" : "bg-transparent",
      ),
      children: [
        s.jsxs("div", {
          className:
            "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[72px] md:px-8",
          children: [
            s.jsxs(I, {
              to: "/",
              className: "flex items-baseline gap-0.5",
              onClick: () => t(!1),
              children: [
                s.jsx("span", {
                  className: "font-display text-2xl font-bold tracking-tight text-white",
                  children: "Ótmow",
                }),
                s.jsx("span", {
                  className: "size-1.5 translate-y-[-2px] rounded-full bg-[#3674EF]",
                }),
              ],
            }),
            s.jsx("nav", {
              className: "hidden items-center gap-7 lg:flex",
              children: Ee.map((n) =>
                s.jsx(
                  I,
                  {
                    to: n.to,
                    className:
                      "text-[13px] font-medium tracking-wide text-slate-300 transition-colors hover:text-white [&.active]:text-[#4EB7FF]",
                    children: n.label,
                  },
                  n.to,
                ),
              ),
            }),
            s.jsx("div", {
              className: "hidden items-center gap-3 lg:flex",
              children: s.jsx("a", {
                href: "https://app.otmow.com/pt-BR/loan/intake/details",
                target: "_blank",
                rel: "noreferrer",
                className:
                  "rounded-full bg-[#3674EF] px-5 py-2.5 text-[13px] font-semibold text-white transition-all hover:scale-[1.03] hover:bg-[#2f63d6]",
                children: "Antecipe agora",
              }),
            }),
            s.jsx("button", {
              className: "text-white lg:hidden",
              onClick: () => t(!o),
              "aria-label": "Menu",
              children: o ? s.jsx(oo, { className: "size-6" }) : s.jsx(Qt, { className: "size-6" }),
            }),
          ],
        }),
        o &&
          s.jsx("div", {
            className:
              "border-t border-white/10 bg-[#060d1f]/95 px-5 py-6 backdrop-blur-xl lg:hidden",
            children: s.jsxs("nav", {
              className: "flex flex-col gap-4",
              children: [
                Ee.map((n) =>
                  s.jsx(
                    I,
                    {
                      to: n.to,
                      onClick: () => t(!1),
                      className: "text-base font-medium text-slate-200 hover:text-white",
                      children: n.label,
                    },
                    n.to,
                  ),
                ),
                s.jsx("a", {
                  href: "https://app.otmow.com/pt-BR/loan/intake/details",
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: () => t(!1),
                  className:
                    "mt-2 rounded-full bg-[#3674EF] px-5 py-3 text-center text-sm font-semibold text-white",
                  children: "Antecipe agora",
                }),
              ],
            }),
          }),
      ],
    })
  );
}
const le = 768;
function ro() {
  const [e, r] = x.useState(void 0);
  return (
    x.useEffect(() => {
      const o = window.matchMedia(`(max-width: ${le - 1}px)`),
        t = () => {
          r(window.innerWidth < le);
        };
      return (
        o.addEventListener("change", t),
        r(window.innerWidth < le),
        () => o.removeEventListener("change", t)
      );
    }, []),
    !!e
  );
}
function so() {
  const [e, r] = x.useState(!1);
  return (
    x.useEffect(() => {
      if (typeof window > "u" || !window.matchMedia) return;
      const o = window.matchMedia("(prefers-reduced-motion: reduce)");
      r(o.matches);
      const t = () => r(o.matches);
      return (o.addEventListener("change", t), () => o.removeEventListener("change", t));
    }, []),
    e
  );
}
function no(e) {
  const r = ro(),
    o = so(),
    [t, n] = x.useState(!1);
  x.useEffect(() => {
    const l =
      typeof navigator < "u" && navigator.hardwareConcurrency ? navigator.hardwareConcurrency : 8;
    n(l >= 4);
  }, []);
  const c = e?.allowMobile || !r;
  return t && c && !o;
}
const ao = x.lazy(() =>
  Xe(() => import("./WarpBackgroundBlue.impl-mBZX_2w2.js"), __vite__mapDeps([0, 1, 2])).then(
    (e) => ({ default: e.WarpImpl }),
  ),
);
function Me() {
  return s.jsx("div", {
    className: "absolute inset-0",
    style: {
      background:
        "linear-gradient(135deg, hsl(222,75%,9%) 0%, hsl(218,80%,18%) 50%, hsl(210,85%,22%) 100%)",
    },
  });
}
function io({ speed: e = 0.8, allowMobile: r = !1 }) {
  return no({ allowMobile: r })
    ? s.jsx(x.Suspense, { fallback: s.jsx(Me, {}), children: s.jsx(ao, { speed: e }) })
    : s.jsx(Me, {});
}
function ce({ children: e, className: r, delay: o = 0 }) {
  const t = x.useRef(null);
  return (
    x.useEffect(() => {
      const n = t.current;
      if (!n) return;
      const c = new IntersectionObserver(
        (l) => {
          l.forEach((b) => {
            b.isIntersecting && (n.classList.add("is-visible"), c.unobserve(n));
          });
        },
        { threshold: 0.12 },
      );
      return (c.observe(n), () => c.disconnect());
    }, []),
    s.jsx("div", {
      ref: t,
      className: Ue("reveal", r),
      style: o ? { transitionDelay: `${o}ms` } : void 0,
      children: e,
    })
  );
}
function po() {
  return s.jsxs("footer", {
    className: "relative overflow-hidden",
    children: [
      s.jsxs("div", {
        className: "relative",
        children: [
          s.jsx(io, { speed: 0.45 }),
          s.jsx("div", { className: "absolute inset-0 bg-[#040a1c]/55" }),
          s.jsxs("div", {
            className: "relative z-10 mx-auto max-w-5xl px-5 py-24 text-center md:py-32",
            children: [
              s.jsx(ce, {
                children: s.jsxs("h2", {
                  className:
                    "font-display text-balance text-3xl font-bold leading-tight text-white md:text-5xl",
                  children: [
                    "Não dependa do prazo do governo.",
                    s.jsx("br", {}),
                    s.jsx("span", {
                      className: "text-[#4EB7FF]",
                      children: "Antecipe seus recebíveis públicos.",
                    }),
                  ],
                }),
              }),
              s.jsx(ce, {
                delay: 120,
                children: s.jsx("p", {
                  className: "mx-auto mt-6 max-w-2xl text-base text-slate-200/90 md:text-lg",
                  children:
                    "Antecipar os valores das suas notas fiscais de contratos públicos é a forma mais eficiente de manter o caixa saudável e garantir o ritmo do seu negócio.",
                }),
              }),
              s.jsx(ce, {
                delay: 220,
                children: s.jsxs("div", {
                  className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
                  children: [
                    s.jsxs("a", {
                      href: "https://app.otmow.com/pt-BR/loan/intake/details",
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#06122b] transition-transform duration-300 hover:scale-105",
                      children: [
                        "Faça seu cadastro aqui",
                        s.jsx(Yt, {
                          className:
                            "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                        }),
                      ],
                    }),
                    s.jsx(I, {
                      to: "/faq",
                      className:
                        "rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20",
                      children: "Tire suas dúvidas",
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      s.jsx("div", {
        className: "border-t border-white/10 bg-[#04091a]",
        children: s.jsxs("div", {
          className: "mx-auto max-w-7xl px-5 py-16 md:px-8",
          children: [
            s.jsxs("div", {
              className: "grid gap-12 md:grid-cols-12",
              children: [
                s.jsxs("div", {
                  className: "md:col-span-4",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-baseline gap-0.5",
                      children: [
                        s.jsx("span", {
                          className: "font-display text-3xl font-bold text-white",
                          children: "Ótmow",
                        }),
                        s.jsx("span", { className: "size-1.5 rounded-full bg-[#4EB7FF]" }),
                      ],
                    }),
                    s.jsx("p", {
                      className: "mt-4 max-w-xs text-sm leading-relaxed text-slate-400",
                      children: "Liquidez inteligente para quem vende ao setor público.",
                    }),
                    s.jsxs("div", {
                      className: "mt-6 space-y-3 text-sm text-slate-400",
                      children: [
                        s.jsxs("p", {
                          className: "flex items-start gap-2",
                          children: [
                            s.jsx(Ht, { className: "mt-0.5 size-4 shrink-0 text-[#4EB7FF]" }),
                            "comercial@otmow.com",
                          ],
                        }),
                        s.jsxs("p", {
                          className: "flex items-start gap-2",
                          children: [
                            s.jsx(eo, { className: "mt-0.5 size-4 shrink-0 text-[#4EB7FF]" }),
                            "+55 (11) 5051-4249 · WhatsApp +55 (11) 97310-6054",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "md:col-span-3",
                  children: [
                    s.jsx("h4", {
                      className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500",
                      children: "Navegação",
                    }),
                    s.jsxs("ul", {
                      className: "mt-4 space-y-3 text-sm",
                      children: [
                        s.jsx("li", {
                          children: s.jsx(I, {
                            to: "/sobre",
                            className: "text-slate-300 hover:text-[#4EB7FF]",
                            children: "Sobre a Ótmow",
                          }),
                        }),
                        s.jsx("li", {
                          children: s.jsx(I, {
                            to: "/clientes",
                            className: "text-slate-300 hover:text-[#4EB7FF]",
                            children: "Para empresas",
                          }),
                        }),
                        s.jsx("li", {
                          children: s.jsx(I, {
                            to: "/parceiros",
                            className: "text-slate-300 hover:text-[#4EB7FF]",
                            children: "Programa de parceria",
                          }),
                        }),
                        s.jsx("li", {
                          children: s.jsx(I, {
                            to: "/gestores",
                            className: "text-slate-300 hover:text-[#4EB7FF]",
                            children: "Gestores de relacionamento",
                          }),
                        }),
                        s.jsx("li", {
                          children: s.jsx(I, {
                            to: "/faq",
                            className: "text-slate-300 hover:text-[#4EB7FF]",
                            children: "Perguntas frequentes",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "md:col-span-5",
                  children: [
                    s.jsx("h4", {
                      className: "text-xs font-semibold uppercase tracking-[0.2em] text-slate-500",
                      children: "Escritórios",
                    }),
                    s.jsxs("div", {
                      className: "mt-4 grid gap-6 sm:grid-cols-2",
                      children: [
                        s.jsxs("div", {
                          className: "rounded-lg border border-white/10 bg-white/[0.03] p-5",
                          children: [
                            s.jsxs("p", {
                              className: "flex items-center gap-2 text-sm font-semibold text-white",
                              children: [
                                s.jsx(Se, { className: "size-4 text-[#4EB7FF]" }),
                                " Brasil",
                              ],
                            }),
                            s.jsxs("p", {
                              className: "mt-2 text-sm leading-relaxed text-slate-400",
                              children: [
                                "R. Joaquim Floriano, 72",
                                s.jsx("br", {}),
                                "Itaim Bibi – São Paulo, SP",
                                s.jsx("br", {}),
                                "04534-000",
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "rounded-lg border border-white/10 bg-white/[0.03] p-5",
                          children: [
                            s.jsxs("p", {
                              className: "flex items-center gap-2 text-sm font-semibold text-white",
                              children: [
                                s.jsx(Se, { className: "size-4 text-[#4EB7FF]" }),
                                " Estados Unidos",
                              ],
                            }),
                            s.jsxs("p", {
                              className: "mt-2 text-sm leading-relaxed text-slate-400",
                              children: [
                                "614 N. DuPont Highway",
                                s.jsx("br", {}),
                                "Dover, DE 19901",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row",
              children: [
                s.jsx("p", {
                  className: "text-xs text-slate-500",
                  children: "©2025 Ótmow Securitizadora S.A. Todos os direitos reservados.",
                }),
                s.jsx("p", {
                  className: "text-xs text-slate-600",
                  children: "Operações em conformidade com COAF e LGPD.",
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
export {
  Yt as A,
  po as F,
  Ht as M,
  mo as N,
  eo as P,
  ce as R,
  io as W,
  Ue as a,
  ro as b,
  q as c,
  no as d,
  so as u,
};
