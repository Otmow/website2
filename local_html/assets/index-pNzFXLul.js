const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/sobre-Bds6Vzt1.js",
      "assets/vendor-react-DLnSei1N.js",
      "assets/FooterBlue-DXismSK9.js",
      "assets/DottedSurfaceBlue-B-OwPgey.js",
      "assets/GridShader-cLbM9S5E.js",
      "assets/CountUp-CnNs-zEX.js",
      "assets/trending-up-But44bYr.js",
      "assets/parceiros-C9X6ZKEx.js",
      "assets/shield-check-9S1Mk0kz.js",
      "assets/lock-DAB4V-ym.js",
      "assets/gestores-fFw5jyt2.js",
      "assets/faq-BszyD9ft.js",
      "assets/LiteYouTube-Dhb8mDLJ.js",
      "assets/clientes-DGc009Sf.js",
      "assets/SimuladorAntecipacao-TJ0clFGO.js",
      "assets/index-BKjET-WM.js",
    ]),
) => i.map((i) => d[i]);
import { r as I, j as x, R as Xe, a as Bn, b as go, c as yo } from "./vendor-react-DLnSei1N.js";
var vo = "__TSS_CONTEXT",
  ir = Symbol.for("TSS_SERVER_FUNCTION"),
  wo = "application/x-tss-framed",
  te = { JSON: 0, CHUNK: 1, END: 2, ERROR: 3 },
  bo = /;\s*v=(\d+)/;
function So(e) {
  const t = e.match(bo);
  return t ? parseInt(t[1], 10) : void 0;
}
function xo(e) {
  const t = So(e);
  if (t !== void 0 && t !== 1)
    throw new Error(
      `Incompatible framed protocol version: server=${t}, client=1. Please ensure client and server are using compatible versions.`,
    );
}
var Un = () => window.__TSS_START_OPTIONS__;
const $n = !1;
function Ze(e) {
  return e[e.length - 1];
}
function Po(e) {
  return typeof e == "function";
}
function be(e, t) {
  return Po(e) ? e(t) : e;
}
const zn = Object.prototype.hasOwnProperty,
  zr = Object.prototype.propertyIsEnumerable;
function qn(e) {
  for (const t in e) if (zn.call(e, t)) return !0;
  return !1;
}
const Ro = () => Object.create(null),
  we = (e, t) => Se(e, t, Ro);
function Se(e, t, r = () => ({}), n = 0) {
  if (e === t) return e;
  if (n > 500) return t;
  const s = t,
    o = Vr(e) && Vr(s);
  if (!o && !(Ct(e) && Ct(s))) return s;
  const i = o ? e : qr(e);
  if (!i) return s;
  const c = o ? s : qr(s);
  if (!c) return s;
  const a = i.length,
    l = c.length,
    f = o ? new Array(l) : r();
  let u = 0;
  for (let h = 0; h < l; h++) {
    const p = o ? h : c[h],
      g = e[p],
      v = s[p];
    if (g === v) {
      ((f[p] = g), (o ? h < a : zn.call(e, p)) && u++);
      continue;
    }
    if (g === null || v === null || typeof g != "object" || typeof v != "object") {
      f[p] = v;
      continue;
    }
    const m = Se(g, v, r, n + 1);
    ((f[p] = m), m === g && u++);
  }
  return a === l && u === a ? e : f;
}
function qr(e) {
  const t = Object.getOwnPropertyNames(e);
  for (const s of t) if (!zr.call(e, s)) return !1;
  const r = Object.getOwnPropertySymbols(e);
  if (r.length === 0) return t;
  const n = t;
  for (const s of r) {
    if (!zr.call(e, s)) return !1;
    n.push(s);
  }
  return n;
}
function Ct(e) {
  if (!Hr(e)) return !1;
  const t = e.constructor;
  if (typeof t > "u") return !0;
  const r = t.prototype;
  return !(!Hr(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Hr(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Vr(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function q(e, t, r) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length) return !1;
    for (let n = 0, s = e.length; n < s; n++) if (!q(e[n], t[n], r)) return !1;
    return !0;
  }
  if (Ct(e) && Ct(t)) {
    const n = r?.ignoreUndefined ?? !0;
    if (r?.partial) {
      for (const i in t) if ((!n || t[i] !== void 0) && !q(e[i], t[i], r)) return !1;
      return !0;
    }
    let s = 0;
    if (!n) s = Object.keys(e).length;
    else for (const i in e) e[i] !== void 0 && s++;
    let o = 0;
    for (const i in t) if ((!n || t[i] !== void 0) && (o++, o > s || !q(e[i], t[i], r))) return !1;
    return s === o;
  }
  return !1;
}
function Ce(e) {
  let t, r;
  const n = new Promise((s, o) => {
    ((t = s), (r = o));
  });
  return (
    (n.status = "pending"),
    (n.resolve = (s) => {
      ((n.status = "resolved"), (n.value = s), t(s), e?.(s));
    }),
    (n.reject = (s) => {
      ((n.status = "rejected"), r(s));
    }),
    n
  );
}
function _o(e) {
  return typeof e?.message != "string"
    ? !1
    : e.message.startsWith("Failed to fetch dynamically imported module") ||
        e.message.startsWith("error loading dynamically imported module") ||
        e.message.startsWith("Importing a module script failed");
}
function et(e) {
  return !!(e && typeof e == "object" && typeof e.then == "function");
}
function Co(e) {
  return e.replace(/[\x00-\x1f\x7f]/g, "");
}
function Wr(e) {
  let t;
  try {
    t = decodeURI(e);
  } catch {
    t = e.replaceAll(/%[0-9A-F]{2}/gi, (r) => {
      try {
        return decodeURI(r);
      } catch {
        return r;
      }
    });
  }
  return Co(t);
}
const Eo = ["http:", "https:", "mailto:", "tel:"];
function Et(e, t) {
  if (!e) return !1;
  try {
    const r = new URL(e);
    return !t.has(r.protocol);
  } catch {
    return !1;
  }
}
const Io = {
    "&": "\\u0026",
    ">": "\\u003e",
    "<": "\\u003c",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
  },
  Lo = /[&><\u2028\u2029]/g;
function Mo(e) {
  return e.replace(Lo, (t) => Io[t]);
}
function We(e) {
  if (!e) return { path: e, handledProtocolRelativeURL: !1 };
  if (!/[%\\\x00-\x1f\x7f]/.test(e) && !e.startsWith("//"))
    return { path: e, handledProtocolRelativeURL: !1 };
  const t = /%25|%5C/gi;
  let r = 0,
    n = "",
    s;
  for (; (s = t.exec(e)) !== null; ) ((n += Wr(e.slice(r, s.index)) + s[0]), (r = t.lastIndex));
  n = n + Wr(r ? e.slice(r) : e);
  let o = !1;
  return (
    n.startsWith("//") && ((o = !0), (n = "/" + n.replace(/^\/+/, ""))),
    { path: n, handledProtocolRelativeURL: o }
  );
}
function To(e) {
  return /\s|[^\u0000-\u007F]/.test(e) ? e.replace(/\s|[^\u0000-\u007F]/gu, encodeURIComponent) : e;
}
function Ao(e, t) {
  if (e === t) return !0;
  if (e.length !== t.length) return !1;
  for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
  return !0;
}
function Q() {
  throw new Error("Invariant failed");
}
function tt(e) {
  const t = new Map();
  let r, n;
  const s = (o) => {
    o.next &&
      (o.prev
        ? ((o.prev.next = o.next),
          (o.next.prev = o.prev),
          (o.next = void 0),
          n && ((n.next = o), (o.prev = n)))
        : ((o.next.prev = void 0),
          (r = o.next),
          (o.next = void 0),
          n && ((o.prev = n), (n.next = o))),
      (n = o));
  };
  return {
    get(o) {
      const i = t.get(o);
      if (i) return (s(i), i.value);
    },
    set(o, i) {
      if (t.size >= e && r) {
        const a = r;
        (t.delete(a.key),
          a.next && ((r = a.next), (a.next.prev = void 0)),
          a === n && (n = void 0));
      }
      const c = t.get(o);
      if (c) ((c.value = i), s(c));
      else {
        const a = { key: o, value: i, prev: n };
        (n && (n.next = a), (n = a), r || (r = a), t.set(o, a));
      }
    },
    clear() {
      (t.clear(), (r = void 0), (n = void 0));
    },
  };
}
const ue = 4,
  Hn = 5;
function Oo(e) {
  const t = e.indexOf("{");
  if (t === -1) return null;
  const r = e.indexOf("}", t);
  return r === -1 || t + 1 >= e.length ? null : [t, r];
}
function Vn(e, t, r = new Uint16Array(6)) {
  const n = e.indexOf("/", t),
    s = n === -1 ? e.length : n,
    o = e.substring(t, s);
  if (!o || !o.includes("$"))
    return ((r[0] = 0), (r[1] = t), (r[2] = t), (r[3] = s), (r[4] = s), (r[5] = s), r);
  if (o === "$") {
    const c = e.length;
    return ((r[0] = 2), (r[1] = t), (r[2] = t), (r[3] = c), (r[4] = c), (r[5] = c), r);
  }
  if (o.charCodeAt(0) === 36)
    return ((r[0] = 1), (r[1] = t), (r[2] = t + 1), (r[3] = s), (r[4] = s), (r[5] = s), r);
  const i = Oo(o);
  if (i) {
    const [c, a] = i,
      l = o.charCodeAt(c + 1);
    if (l === 45) {
      if (c + 2 < o.length && o.charCodeAt(c + 2) === 36) {
        const f = c + 3,
          u = a;
        if (f < u)
          return (
            (r[0] = 3),
            (r[1] = t + c),
            (r[2] = t + f),
            (r[3] = t + u),
            (r[4] = t + a + 1),
            (r[5] = s),
            r
          );
      }
    } else if (l === 36) {
      const f = c + 1,
        u = c + 2;
      return u === a
        ? ((r[0] = 2),
          (r[1] = t + c),
          (r[2] = t + f),
          (r[3] = t + u),
          (r[4] = t + a + 1),
          (r[5] = e.length),
          r)
        : ((r[0] = 1),
          (r[1] = t + c),
          (r[2] = t + u),
          (r[3] = t + a),
          (r[4] = t + a + 1),
          (r[5] = s),
          r);
    }
  }
  return ((r[0] = 0), (r[1] = t), (r[2] = t), (r[3] = s), (r[4] = s), (r[5] = s), r);
}
function Ft(e, t, r, n, s, o, i) {
  i?.(r);
  let c = n;
  {
    const a = r.fullPath ?? r.from,
      l = a.length,
      f = r.options?.caseSensitive ?? e,
      u = r.options?.params?.parse ?? r.options?.parseParams;
    for (; c < l; ) {
      const p = Vn(a, c, t);
      let g;
      const v = c,
        m = p[5];
      switch (((c = m + 1), o++, p[0])) {
        case 0: {
          const y = a.substring(p[2], p[3]);
          if (f) {
            const w = s.static?.get(y);
            if (w) g = w;
            else {
              s.static ??= new Map();
              const S = xe(r.fullPath ?? r.from);
              ((S.parent = s), (S.depth = o), (g = S), s.static.set(y, S));
            }
          } else {
            const w = y.toLowerCase(),
              S = s.staticInsensitive?.get(w);
            if (S) g = S;
            else {
              s.staticInsensitive ??= new Map();
              const b = xe(r.fullPath ?? r.from);
              ((b.parent = s), (b.depth = o), (g = b), s.staticInsensitive.set(w, b));
            }
          }
          break;
        }
        case 1: {
          const y = a.substring(v, p[1]),
            w = a.substring(p[4], m),
            S = f && !!(y || w),
            b = y ? (S ? y : y.toLowerCase()) : void 0,
            R = w ? (S ? w : w.toLowerCase()) : void 0,
            C =
              !u &&
              s.dynamic?.find(
                (P) => !P.parse && P.caseSensitive === S && P.prefix === b && P.suffix === R,
              );
          if (C) g = C;
          else {
            const P = Kt(1, r.fullPath ?? r.from, S, b, R);
            ((g = P), (P.depth = o), (P.parent = s), (s.dynamic ??= []), s.dynamic.push(P));
          }
          break;
        }
        case 3: {
          const y = a.substring(v, p[1]),
            w = a.substring(p[4], m),
            S = f && !!(y || w),
            b = y ? (S ? y : y.toLowerCase()) : void 0,
            R = w ? (S ? w : w.toLowerCase()) : void 0,
            C =
              !u &&
              s.optional?.find(
                (P) => !P.parse && P.caseSensitive === S && P.prefix === b && P.suffix === R,
              );
          if (C) g = C;
          else {
            const P = Kt(3, r.fullPath ?? r.from, S, b, R);
            ((g = P), (P.parent = s), (P.depth = o), (s.optional ??= []), s.optional.push(P));
          }
          break;
        }
        case 2: {
          const y = a.substring(v, p[1]),
            w = a.substring(p[4], m),
            S = f && !!(y || w),
            b = y ? (S ? y : y.toLowerCase()) : void 0,
            R = w ? (S ? w : w.toLowerCase()) : void 0,
            C = Kt(2, r.fullPath ?? r.from, S, b, R);
          ((g = C), (C.parent = s), (C.depth = o), (s.wildcard ??= []), s.wildcard.push(C));
        }
      }
      s = g;
    }
    if (u && r.children && !r.isRoot && r.id && r.id.charCodeAt(r.id.lastIndexOf("/") + 1) === 95) {
      const p = xe(r.fullPath ?? r.from);
      ((p.kind = Hn),
        (p.parent = s),
        o++,
        (p.depth = o),
        (s.pathless ??= []),
        s.pathless.push(p),
        (s = p));
    }
    const h = (r.path || !r.children) && !r.isRoot;
    if (h && a.endsWith("/")) {
      const p = xe(r.fullPath ?? r.from);
      ((p.kind = ue), (p.parent = s), o++, (p.depth = o), (s.index = p), (s = p));
    }
    ((s.parse = u ?? null),
      (s.priority = r.options?.params?.priority ?? 0),
      h && !s.route && ((s.route = r), (s.fullPath = r.fullPath ?? r.from)));
  }
  if (r.children) for (const a of r.children) Ft(e, t, a, c, s, o, i);
}
function Wt(e, t) {
  if (e.parse && !t.parse) return -1;
  if (!e.parse && t.parse) return 1;
  if (e.parse && t.parse && (e.priority || t.priority)) return t.priority - e.priority;
  if (e.prefix && t.prefix && e.prefix !== t.prefix) {
    if (e.prefix.startsWith(t.prefix)) return -1;
    if (t.prefix.startsWith(e.prefix)) return 1;
  }
  if (e.suffix && t.suffix && e.suffix !== t.suffix) {
    if (e.suffix.endsWith(t.suffix)) return -1;
    if (t.suffix.endsWith(e.suffix)) return 1;
  }
  return e.prefix && !t.prefix
    ? -1
    : !e.prefix && t.prefix
      ? 1
      : e.suffix && !t.suffix
        ? -1
        : !e.suffix && t.suffix
          ? 1
          : e.caseSensitive && !t.caseSensitive
            ? -1
            : !e.caseSensitive && t.caseSensitive
              ? 1
              : 0;
}
function ae(e) {
  if (e.pathless) for (const t of e.pathless) ae(t);
  if (e.static) for (const t of e.static.values()) ae(t);
  if (e.staticInsensitive) for (const t of e.staticInsensitive.values()) ae(t);
  if (e.dynamic?.length) {
    e.dynamic.sort(Wt);
    for (const t of e.dynamic) ae(t);
  }
  if (e.optional?.length) {
    e.optional.sort(Wt);
    for (const t of e.optional) ae(t);
  }
  if (e.wildcard?.length) {
    e.wildcard.sort(Wt);
    for (const t of e.wildcard) ae(t);
  }
}
function xe(e) {
  return {
    kind: 0,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: e,
    parent: null,
    parse: null,
    priority: 0,
  };
}
function Kt(e, t, r, n, s) {
  return {
    kind: e,
    depth: 0,
    pathless: null,
    index: null,
    static: null,
    staticInsensitive: null,
    dynamic: null,
    optional: null,
    wildcard: null,
    route: null,
    fullPath: t,
    parent: null,
    parse: null,
    priority: 0,
    caseSensitive: r,
    prefix: n,
    suffix: s,
  };
}
function ko(e, t) {
  const r = xe("/"),
    n = new Uint16Array(6);
  for (const s of e) Ft(!1, n, s, 1, r, 0);
  (ae(r), (t.masksTree = r), (t.flatCache = tt(1e3)));
}
function Fo(e, t) {
  e ||= "/";
  const r = t.flatCache.get(e);
  if (r) return r;
  const n = br(e, t.masksTree);
  return (t.flatCache.set(e, n), n);
}
function jo(e, t, r, n, s) {
  ((e ||= "/"), (n ||= "/"));
  const o = t ? `case\0${e}` : e;
  let i = s.singleCache.get(o);
  return (
    i || ((i = xe("/")), Ft(t, new Uint16Array(6), { from: e }, 1, i, 0), s.singleCache.set(o, i)),
    br(n, i, r)
  );
}
function Do(e, t, r = !1) {
  const n = r ? e : `nofuzz\0${e}`,
    s = t.matchCache.get(n);
  if (s !== void 0) return s;
  e ||= "/";
  let o;
  try {
    o = br(e, t.segmentTree, r);
  } catch (i) {
    if (i instanceof URIError) o = null;
    else throw i;
  }
  return (o && (o.branch = Kn(o.route)), t.matchCache.set(n, o), o);
}
function No(e) {
  return e === "/" ? e : e.replace(/\/{1,}$/, "");
}
function Bo(e, t = !1, r) {
  const n = xe(e.fullPath),
    s = new Uint16Array(6),
    o = {},
    i = {};
  let c = 0;
  return (
    Ft(t, s, e, 1, n, 0, (a) => {
      if ((r?.(a, c), a.id in o && Q(), (o[a.id] = a), c !== 0 && a.path)) {
        const l = No(a.fullPath);
        (!i[l] || a.fullPath.endsWith("/")) && (i[l] = a);
      }
      c++;
    }),
    ae(n),
    {
      processedTree: {
        segmentTree: n,
        singleCache: tt(1e3),
        matchCache: tt(1e3),
        flatCache: null,
        masksTree: null,
      },
      routesById: o,
      routesByPath: i,
    }
  );
}
function br(e, t, r = !1) {
  const n = e.split("/"),
    s = $o(e, n, t, r);
  if (!s) return null;
  const [o] = Wn(e, n, s);
  return { route: s.node.route, rawParams: o };
}
function Wn(e, t, r) {
  const n = Uo(r.node);
  let s = null;
  const o = Object.create(null);
  let i = r.extract?.part ?? 0,
    c = r.extract?.node ?? 0,
    a = r.extract?.path ?? 0,
    l = r.extract?.segment ?? 0;
  for (; c < n.length; i++, c++, a++, l++) {
    const f = n[c];
    if (f.kind === ue) break;
    if (f.kind === Hn) {
      (l--, i--, a--);
      continue;
    }
    const u = t[i],
      h = a;
    if ((u && (a += u.length), f.kind === 1)) {
      s ??= r.node.fullPath.split("/");
      const p = s[l],
        g = f.prefix?.length ?? 0;
      if (p.charCodeAt(g) === 123) {
        const v = f.suffix?.length ?? 0,
          m = p.substring(g + 2, p.length - v - 1),
          y = u.substring(g, u.length - v);
        o[m] = decodeURIComponent(y);
      } else {
        const v = p.substring(1);
        o[v] = decodeURIComponent(u);
      }
    } else if (f.kind === 3) {
      if (r.skipped & (1 << c)) {
        (i--, (a = h - 1));
        continue;
      }
      s ??= r.node.fullPath.split("/");
      const p = s[l],
        g = f.prefix?.length ?? 0,
        v = f.suffix?.length ?? 0,
        m = p.substring(g + 3, p.length - v - 1),
        y = f.suffix || f.prefix ? u.substring(g, u.length - v) : u;
      y && (o[m] = decodeURIComponent(y));
    } else if (f.kind === 2) {
      const p = f,
        g = e.substring(h + (p.prefix?.length ?? 0), e.length - (p.suffix?.length ?? 0)),
        v = decodeURIComponent(g);
      ((o["*"] = v), (o._splat = v));
      break;
    }
  }
  return (
    r.rawParams && Object.assign(o, r.rawParams),
    [o, { part: i, node: c, path: a, segment: l }]
  );
}
function Kn(e) {
  const t = [e];
  for (; e.parentRoute; ) ((e = e.parentRoute), t.push(e));
  return (t.reverse(), t);
}
function Uo(e) {
  const t = Array(e.depth + 1);
  do ((t[e.depth] = e), (e = e.parent));
  while (e);
  return t;
}
function $o(e, t, r, n) {
  if (e === "/" && r.index) return { node: r.index, skipped: 0 };
  const s = !Ze(t),
    o = s && e !== "/",
    i = t.length - (s ? 1 : 0),
    c = [{ node: r, index: 1, skipped: 0, depth: 1, statics: 0, dynamics: 0, optionals: 0 }];
  let a = null,
    l = null;
  for (; c.length; ) {
    const f = c.pop(),
      { node: u, index: h, skipped: p, depth: g, statics: v, dynamics: m, optionals: y } = f;
    let { extract: w, rawParams: S } = f;
    if (u.kind === 2 && u.route && !ht(l, f)) continue;
    if (u.parse) {
      if (!Kr(e, t, f)) continue;
      ((S = f.rawParams), (w = f.extract));
    }
    n && u.route && u.kind !== ue && ht(a, f) && (a = f);
    const b = h === i;
    if (
      b &&
      (u.route && (!o || u.kind === ue || u.kind === 2) && ht(l, f) && (l = f),
      !u.optional && !u.wildcard && !u.index && !u.pathless)
    )
      continue;
    const R = b ? void 0 : t[h];
    let C;
    if (b && u.index) {
      const P = {
        node: u.index,
        index: h,
        skipped: p,
        depth: g + 1,
        statics: v,
        dynamics: m,
        optionals: y,
        extract: w,
        rawParams: S,
      };
      let _ = !0;
      if ((u.index.parse && (Kr(e, t, P) || (_ = !1)), _)) {
        if (!m && !y && !p && zo(v, i)) return P;
        ht(l, P) && (l = P);
      }
    }
    if (u.wildcard)
      for (let P = u.wildcard.length - 1; P >= 0; P--) {
        const _ = u.wildcard[P],
          { prefix: E, suffix: M } = _;
        if (!(E && (b || !(_.caseSensitive ? R : (C ??= R.toLowerCase())).startsWith(E)))) {
          if (M) {
            if (b) continue;
            const L = t.slice(h).join("/").slice(-M.length);
            if ((_.caseSensitive ? L : L.toLowerCase()) !== M) continue;
          }
          c.push({
            node: _,
            index: i,
            skipped: p,
            depth: g + 1,
            statics: v,
            dynamics: m,
            optionals: y,
            extract: w,
            rawParams: S,
          });
        }
      }
    if (u.optional) {
      const P = p | (1 << g),
        _ = g + 1;
      for (let E = u.optional.length - 1; E >= 0; E--) {
        const M = u.optional[E];
        c.push({
          node: M,
          index: h,
          skipped: P,
          depth: _,
          statics: v,
          dynamics: m,
          optionals: y,
          extract: w,
          rawParams: S,
        });
      }
      if (!b)
        for (let E = u.optional.length - 1; E >= 0; E--) {
          const M = u.optional[E],
            { prefix: L, suffix: A } = M;
          if (L || A) {
            const J = M.caseSensitive ? R : (C ??= R.toLowerCase());
            if ((L && !J.startsWith(L)) || (A && !J.endsWith(A))) continue;
          }
          c.push({
            node: M,
            index: h + 1,
            skipped: p,
            depth: _,
            statics: v,
            dynamics: m,
            optionals: y + dt(i, h),
            extract: w,
            rawParams: S,
          });
        }
    }
    if (!b && u.dynamic && R)
      for (let P = u.dynamic.length - 1; P >= 0; P--) {
        const _ = u.dynamic[P],
          { prefix: E, suffix: M } = _;
        if (E || M) {
          const L = _.caseSensitive ? R : (C ??= R.toLowerCase());
          if ((E && !L.startsWith(E)) || (M && !L.endsWith(M))) continue;
        }
        c.push({
          node: _,
          index: h + 1,
          skipped: p,
          depth: g + 1,
          statics: v,
          dynamics: m + dt(i, h),
          optionals: y,
          extract: w,
          rawParams: S,
        });
      }
    if (!b && u.staticInsensitive) {
      const P = u.staticInsensitive.get((C ??= R.toLowerCase()));
      P &&
        c.push({
          node: P,
          index: h + 1,
          skipped: p,
          depth: g + 1,
          statics: v + dt(i, h),
          dynamics: m,
          optionals: y,
          extract: w,
          rawParams: S,
        });
    }
    if (!b && u.static) {
      const P = u.static.get(R);
      P &&
        c.push({
          node: P,
          index: h + 1,
          skipped: p,
          depth: g + 1,
          statics: v + dt(i, h),
          dynamics: m,
          optionals: y,
          extract: w,
          rawParams: S,
        });
    }
    if (u.pathless) {
      const P = g + 1;
      for (let _ = u.pathless.length - 1; _ >= 0; _--) {
        const E = u.pathless[_];
        c.push({
          node: E,
          index: h,
          skipped: p,
          depth: P,
          statics: v,
          dynamics: m,
          optionals: y,
          extract: w,
          rawParams: S,
        });
      }
    }
  }
  if (l) return l;
  if (n && a) {
    let f = a.index;
    for (let h = 0; h < a.index; h++) f += t[h].length;
    const u = f === e.length ? "/" : e.slice(f);
    return ((a.rawParams ??= Object.create(null)), (a.rawParams["**"] = decodeURIComponent(u)), a);
  }
  return null;
}
function dt(e, t) {
  return 2 ** (e - t - 1);
}
function zo(e, t) {
  return e === 2 ** (t - 1) - 1;
}
function Kr(e, t, r) {
  let n, s;
  try {
    [n, s] = Wn(e, t, r);
  } catch {
    return null;
  }
  if (((r.rawParams = n), (r.extract = s), !r.node.parse)) return !0;
  try {
    if (r.node.parse(n) === !1) return null;
  } catch {}
  return !0;
}
function ht(e, t) {
  return e
    ? t.statics > e.statics ||
        (t.statics === e.statics &&
          (t.dynamics > e.dynamics ||
            (t.dynamics === e.dynamics &&
              (t.optionals > e.optionals ||
                (t.optionals === e.optionals &&
                  ((t.node.kind === ue) > (e.node.kind === ue) ||
                    ((t.node.kind === ue) == (e.node.kind === ue) && t.depth > e.depth)))))))
    : !0;
}
function St(e) {
  return Sr(e.filter((t) => t !== void 0).join("/"));
}
function Sr(e) {
  return e.replace(/\/{2,}/g, "/");
}
function Qn(e) {
  return e === "/" ? e : e.replace(/^\/{1,}/, "");
}
function re(e) {
  const t = e.length;
  return t > 1 && e[t - 1] === "/" ? e.replace(/\/{1,}$/, "") : e;
}
function Gn(e) {
  return re(Qn(e));
}
function It(e, t) {
  return e?.endsWith("/") && e !== "/" && e !== `${t}/` ? e.slice(0, -1) : e;
}
function qo(e, t, r) {
  return It(e, r) === It(t, r);
}
function Ho({ base: e, to: t, trailingSlash: r = "never", cache: n }) {
  const s = t.startsWith("/"),
    o = !s && t === ".";
  let i;
  if (n) {
    i = s ? t : o ? e : e + "\0" + t;
    const l = n.get(i);
    if (l) return l;
  }
  let c;
  if (o) c = e.split("/");
  else if (s) c = t.split("/");
  else {
    for (c = e.split("/"); c.length > 1 && Ze(c) === ""; ) c.pop();
    const l = t.split("/");
    for (let f = 0, u = l.length; f < u; f++) {
      const h = l[f];
      h === ""
        ? f
          ? f === u - 1 && c.push(h)
          : (c = [h])
        : h === ".."
          ? c.pop()
          : h === "." || c.push(h);
    }
  }
  c.length > 1 && (Ze(c) === "" ? r === "never" && c.pop() : r === "always" && c.push(""));
  const a = Sr(c.join("/")) || "/";
  return (i && n && n.set(i, a), a);
}
function Vo(e) {
  const t = new Map(e.map((s) => [encodeURIComponent(s), s])),
    r = Array.from(t.keys())
      .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|"),
    n = new RegExp(r, "g");
  return (s) => s.replace(n, (o) => t.get(o) ?? o);
}
function Qt(e, t, r) {
  const n = t[e];
  return typeof n != "string"
    ? n
    : e === "_splat"
      ? /^[a-zA-Z0-9\-._~!/]*$/.test(n)
        ? n
        : n
            .split("/")
            .map((s) => Gr(s, r))
            .join("/")
      : Gr(n, r);
}
function Qr({ path: e, params: t, decoder: r, ...n }) {
  let s = !1;
  const o = Object.create(null);
  if (!e || e === "/") return { interpolatedPath: "/", usedParams: o, isMissingParams: s };
  if (!e.includes("$")) return { interpolatedPath: e, usedParams: o, isMissingParams: s };
  const i = e.length;
  let c = 0,
    a,
    l = "";
  for (; c < i; ) {
    const f = c;
    a = Vn(e, f, a);
    const u = a[5];
    if (((c = u + 1), f === u)) continue;
    const h = a[0];
    if (h === 0) {
      l += "/" + e.substring(f, u);
      continue;
    }
    if (h === 2) {
      const p = t._splat;
      ((o._splat = p), (o["*"] = p));
      const g = e.substring(f, a[1]),
        v = e.substring(a[4], u);
      if (!p) {
        ((s = !0), (g || v) && (l += "/" + g + v));
        continue;
      }
      const m = Qt("_splat", t, r);
      l += "/" + g + m + v;
      continue;
    }
    if (h === 1) {
      const p = e.substring(a[2], a[3]);
      (!s && !(p in t) && (s = !0), (o[p] = t[p]));
      const g = e.substring(f, a[1]),
        v = e.substring(a[4], u),
        m = Qt(p, t, r) ?? "undefined";
      l += "/" + g + m + v;
      continue;
    }
    if (h === 3) {
      const p = e.substring(a[2], a[3]),
        g = t[p];
      if (g == null) continue;
      o[p] = g;
      const v = e.substring(f, a[1]),
        m = e.substring(a[4], u),
        y = Qt(p, t, r) ?? "";
      l += "/" + v + y + m;
      continue;
    }
  }
  return (
    e.endsWith("/") && (l += "/"),
    { usedParams: o, interpolatedPath: l || "/", isMissingParams: s }
  );
}
function Gr(e, t) {
  const r = encodeURIComponent(e);
  return t?.(r) ?? r;
}
function U(e) {
  return e?.isNotFound === !0;
}
function Yn(e, t = String) {
  const r = new URLSearchParams();
  for (const n in e) {
    const s = e[n];
    s !== void 0 && r.set(n, t(s));
  }
  return r.toString();
}
function Gt(e) {
  return e ? (e === "false" ? !1 : e === "true" ? !0 : +e * 0 === 0 && +e + "" === e ? +e : e) : "";
}
function Wo(e) {
  const t = new URLSearchParams(e),
    r = Object.create(null);
  for (const [n, s] of t.entries()) {
    const o = r[n];
    o == null ? (r[n] = Gt(s)) : Array.isArray(o) ? o.push(Gt(s)) : (r[n] = [o, Gt(s)]);
  }
  return r;
}
const Ko = Go(JSON.parse),
  Qo = Yo(JSON.stringify, JSON.parse);
function Go(e) {
  return (t) => {
    t[0] === "?" && (t = t.substring(1));
    const r = Wo(t);
    for (const n in r) {
      const s = r[n];
      if (typeof s == "string")
        try {
          r[n] = e(s);
        } catch {}
    }
    return r;
  };
}
function Yo(e, t) {
  const r = typeof t == "function";
  function n(s) {
    if (typeof s == "object" && s !== null)
      try {
        return e(s);
      } catch {}
    else if (r && typeof s == "string")
      try {
        return (t(s), e(s));
      } catch {}
    return s;
  }
  return (s) => {
    const o = Yn(s, n);
    return o ? `?${o}` : "";
  };
}
const Re = "__root__";
function Jn(e) {
  if (
    ((e.statusCode = e.statusCode || e.code || 307),
    !e._builtLocation && !e.reloadDocument && typeof e.href == "string")
  )
    try {
      (new URL(e.href), (e.reloadDocument = !0));
    } catch {}
  const t = new Headers(e.headers);
  e.href && t.get("Location") === null && t.set("Location", e.href);
  const r = new Response(null, { status: e.statusCode, headers: t });
  if (((r.options = e), e.throw)) throw r;
  return r;
}
function K(e) {
  return e instanceof Response && !!e.options;
}
function Jo(e) {
  if (e !== null && typeof e == "object" && e.isSerializedRedirect) return Jn(e);
}
const ar = (e) => {
    if (!e.rendered) return ((e.rendered = !0), e.onReady?.());
  },
  Xo = (e) =>
    e.stores.matchesId.get().some((t) => e.stores.matchStores.get(t)?.get()._forcePending),
  jt = (e, t) => !!(e.preload && !e.router.stores.matchStores.has(t)),
  _e = (e, t, r = !0) => {
    const n = { ...(e.router.options.context ?? {}) },
      s = r ? t : t - 1;
    for (let o = 0; o <= s; o++) {
      const i = e.matches[o];
      if (!i) continue;
      const c = e.router.getMatch(i.id);
      c && Object.assign(n, c.__routeContext, c.__beforeLoadContext);
    }
    return n;
  },
  Yr = (e, t) => {
    if (!e.matches.length) return;
    const r = t.routeId,
      n = e.matches.findIndex((i) => i.routeId === e.router.routeTree.id),
      s = n >= 0 ? n : 0;
    let o = r
      ? e.matches.findIndex((i) => i.routeId === r)
      : (e.firstBadMatchIndex ?? e.matches.length - 1);
    o < 0 && (o = s);
    for (let i = o; i >= 0; i--) {
      const c = e.matches[i];
      if (e.router.looseRoutesById[c.routeId].options.notFoundComponent) return i;
    }
    return r ? o : s;
  },
  le = (e, t, r) => {
    if (!(!K(r) && !U(r)))
      throw (
        (K(r) && r.redirectHandled && !r.options.reloadDocument) ||
          (t &&
            (t._nonReactive.beforeLoadPromise?.resolve(),
            t._nonReactive.loaderPromise?.resolve(),
            (t._nonReactive.beforeLoadPromise = void 0),
            (t._nonReactive.loaderPromise = void 0),
            (t._nonReactive.error = r),
            e.updateMatch(t.id, (n) => ({
              ...n,
              status: K(r)
                ? "redirected"
                : U(r)
                  ? "notFound"
                  : n.status === "pending"
                    ? "success"
                    : n.status,
              context: _e(e, t.index),
              isFetching: !1,
              error: r,
            })),
            U(r) && !r.routeId && (r.routeId = t.routeId),
            t._nonReactive.loadPromise?.resolve()),
          K(r) &&
            ((e.rendered = !0),
            (r.options._fromLocation = e.location),
            (r.redirectHandled = !0),
            (r = e.router.resolveRedirect(r)))),
        r
      );
  },
  Xn = (e, t) => {
    const r = e.router.getMatch(t);
    return !!(!r || r._nonReactive.dehydrated);
  },
  Jr = (e, t, r) => {
    const n = _e(e, r);
    e.updateMatch(t, (s) => ({ ...s, context: n }));
  },
  Ke = (e, t, r) => {
    const { id: n, routeId: s } = e.matches[t],
      o = e.router.looseRoutesById[s];
    if (r instanceof Promise) throw r;
    ((e.firstBadMatchIndex ??= t), le(e, e.router.getMatch(n), r));
    try {
      o.options.onError?.(r);
    } catch (i) {
      ((r = i), le(e, e.router.getMatch(n), r));
    }
    (e.updateMatch(
      n,
      (i) => (
        i._nonReactive.beforeLoadPromise?.resolve(),
        (i._nonReactive.beforeLoadPromise = void 0),
        i._nonReactive.loadPromise?.resolve(),
        {
          ...i,
          error: r,
          status: "error",
          isFetching: !1,
          updatedAt: Date.now(),
          abortController: new AbortController(),
        }
      ),
    ),
      !e.preload && !K(r) && !U(r) && (e.serialError ??= r));
  },
  Zn = (e, t, r, n) => {
    if (n._nonReactive.pendingTimeout !== void 0) return;
    const s = r.options.pendingMs ?? e.router.options.defaultPendingMs;
    if (
      e.onReady &&
      !jt(e, t) &&
      (r.options.loader || r.options.beforeLoad || ts(r)) &&
      typeof s == "number" &&
      s !== 1 / 0 &&
      (r.options.pendingComponent ?? e.router.options?.defaultPendingComponent)
    ) {
      const o = setTimeout(() => {
        ar(e);
      }, s);
      n._nonReactive.pendingTimeout = o;
    }
  },
  Zo = (e, t, r) => {
    const n = e.router.getMatch(t);
    if (!n._nonReactive.beforeLoadPromise && !n._nonReactive.loaderPromise) return;
    Zn(e, t, r, n);
    const s = () => {
      const o = e.router.getMatch(t);
      o.preload && (o.status === "redirected" || o.status === "notFound") && le(e, o, o.error);
    };
    return n._nonReactive.beforeLoadPromise ? n._nonReactive.beforeLoadPromise.then(s) : s();
  },
  ei = (e, t, r, n) => {
    const s = e.router.getMatch(t);
    let o = s._nonReactive.loadPromise;
    s._nonReactive.loadPromise = Ce(() => {
      (o?.resolve(), (o = void 0));
    });
    const { paramsError: i, searchError: c } = s;
    (i && Ke(e, r, i), c && Ke(e, r, c), Zn(e, t, n, s));
    const a = new AbortController();
    let l = !1;
    const f = () => {
        l ||
          ((l = !0),
          e.updateMatch(t, (b) => ({
            ...b,
            isFetching: "beforeLoad",
            fetchCount: b.fetchCount + 1,
            abortController: a,
          })));
      },
      u = () => {
        (s._nonReactive.beforeLoadPromise?.resolve(),
          (s._nonReactive.beforeLoadPromise = void 0),
          e.updateMatch(t, (b) => ({ ...b, isFetching: !1 })));
      };
    if (!n.options.beforeLoad) {
      e.router.batch(() => {
        (f(), u());
      });
      return;
    }
    s._nonReactive.beforeLoadPromise = Ce();
    const h = { ..._e(e, r, !1), ...s.__routeContext },
      { search: p, params: g, cause: v } = s,
      m = jt(e, t),
      y = {
        search: p,
        abortController: a,
        params: g,
        preload: m,
        context: h,
        location: e.location,
        navigate: (b) => e.router.navigate({ ...b, _fromLocation: e.location }),
        buildLocation: e.router.buildLocation,
        cause: m ? "preload" : v,
        matches: e.matches,
        routeId: n.id,
        ...e.router.options.additionalContext,
      },
      w = (b) => {
        if (b === void 0) {
          e.router.batch(() => {
            (f(), u());
          });
          return;
        }
        ((K(b) || U(b)) && (f(), Ke(e, r, b)),
          e.router.batch(() => {
            (f(), e.updateMatch(t, (R) => ({ ...R, __beforeLoadContext: b })), u());
          }));
      };
    let S;
    try {
      if (((S = n.options.beforeLoad(y)), et(S)))
        return (
          f(),
          S.catch((b) => {
            Ke(e, r, b);
          }).then(w)
        );
    } catch (b) {
      (f(), Ke(e, r, b));
    }
    w(S);
  },
  ti = (e, t) => {
    const { id: r, routeId: n } = e.matches[t],
      s = e.router.looseRoutesById[n],
      o = () => c(),
      i = () => ei(e, r, t, s),
      c = () => {
        if (Xn(e, r)) return;
        const a = Zo(e, r, s);
        return et(a) ? a.then(i) : i();
      };
    return o();
  },
  ri = (e, t, r) => {
    const n = e.router.getMatch(t);
    if (!n || (!r.options.head && !r.options.scripts && !r.options.headers)) return;
    const s = {
      ssr: e.router.options.ssr,
      matches: e.matches,
      match: n,
      params: n.params,
      loaderData: n.loaderData,
    };
    return Promise.all([r.options.head?.(s), r.options.scripts?.(s), r.options.headers?.(s)]).then(
      ([o, i, c]) => ({
        meta: o?.meta,
        links: o?.links,
        headScripts: o?.scripts,
        headers: c,
        scripts: i,
        styles: o?.styles,
      }),
    );
  },
  es = (e, t, r, n, s) => {
    const o = t[n - 1],
      { params: i, loaderDeps: c, abortController: a, cause: l } = e.router.getMatch(r),
      f = _e(e, n),
      u = jt(e, r);
    return {
      params: i,
      deps: c,
      preload: !!u,
      parentMatchPromise: o,
      abortController: a,
      context: f,
      location: e.location,
      navigate: (h) => e.router.navigate({ ...h, _fromLocation: e.location }),
      cause: u ? "preload" : l,
      route: s,
      ...e.router.options.additionalContext,
    };
  },
  Xr = async (e, t, r, n, s) => {
    try {
      const o = e.router.getMatch(r);
      try {
        (!($n ?? e.router.isServer) || o.ssr === !0) && rt(s);
        const i = s.options.loader,
          c = typeof i == "function" ? i : i?.handler,
          a = c?.(es(e, t, r, n, s)),
          l = !!c && et(a);
        if (
          ((l ||
            s._lazyPromise ||
            s._componentsPromise ||
            s.options.head ||
            s.options.scripts ||
            s.options.headers ||
            o._nonReactive.minPendingPromise) &&
            e.updateMatch(r, (u) => ({ ...u, isFetching: "loader" })),
          c)
        ) {
          const u = l ? await a : a;
          (le(e, e.router.getMatch(r), u),
            u !== void 0 && e.updateMatch(r, (h) => ({ ...h, loaderData: u })));
        }
        s._lazyPromise && (await s._lazyPromise);
        const f = o._nonReactive.minPendingPromise;
        (f && (await f),
          s._componentsPromise && (await s._componentsPromise),
          e.updateMatch(r, (u) => ({
            ...u,
            error: void 0,
            context: _e(e, n),
            status: "success",
            isFetching: !1,
            updatedAt: Date.now(),
          })));
      } catch (i) {
        let c = i;
        if (c?.name === "AbortError") {
          if (o.abortController.signal.aborted) {
            (o._nonReactive.loaderPromise?.resolve(), (o._nonReactive.loaderPromise = void 0));
            return;
          }
          e.updateMatch(r, (l) => ({
            ...l,
            status: l.status === "pending" ? "success" : l.status,
            isFetching: !1,
            context: _e(e, n),
          }));
          return;
        }
        const a = o._nonReactive.minPendingPromise;
        (a && (await a),
          U(i) && (await s.options.notFoundComponent?.preload?.()),
          le(e, e.router.getMatch(r), i));
        try {
          s.options.onError?.(i);
        } catch (l) {
          ((c = l), le(e, e.router.getMatch(r), l));
        }
        (!K(c) && !U(c) && (await rt(s, ["errorComponent"])),
          e.updateMatch(r, (l) => ({
            ...l,
            error: c,
            context: _e(e, n),
            status: "error",
            isFetching: !1,
          })));
      }
    } catch (o) {
      const i = e.router.getMatch(r);
      (i && (i._nonReactive.loaderPromise = void 0), le(e, i, o));
    }
  },
  ni = async (e, t, r) => {
    async function n(p, g, v, m, y) {
      const w = Date.now() - g.updatedAt,
        S = p
          ? (y.options.preloadStaleTime ?? e.router.options.defaultPreloadStaleTime ?? 3e4)
          : (y.options.staleTime ?? e.router.options.defaultStaleTime ?? 0),
        b = y.options.shouldReload,
        R = typeof b == "function" ? b(es(e, t, s, r, y)) : b,
        { status: C, invalid: P } = m,
        _ = w >= S && (!!e.forceStaleReload || m.cause === "enter" || (v !== void 0 && v !== m.id));
      ((i = C === "success" && (P || (R ?? _))),
        (p && y.options.preload === !1) ||
          (i && !e.sync && f
            ? ((c = !0),
              (async () => {
                try {
                  await Xr(e, t, s, r, y);
                  const E = e.router.getMatch(s);
                  (E._nonReactive.loaderPromise?.resolve(),
                    E._nonReactive.loadPromise?.resolve(),
                    (E._nonReactive.loaderPromise = void 0),
                    (E._nonReactive.loadPromise = void 0));
                } catch (E) {
                  K(E) && (await e.router.navigate(E.options));
                }
              })())
            : C !== "success" || i
              ? await Xr(e, t, s, r, y)
              : Jr(e, s, r)));
    }
    const { id: s, routeId: o } = e.matches[r];
    let i = !1,
      c = !1;
    const a = e.router.looseRoutesById[o],
      l = a.options.loader,
      f =
        ((typeof l == "function" ? void 0 : l?.staleReloadMode) ??
          e.router.options.defaultStaleReloadMode) !== "blocking";
    if (Xn(e, s)) {
      if (!e.router.getMatch(s)) return e.matches[r];
      Jr(e, s, r);
    } else {
      const p = e.router.getMatch(s),
        g = e.router.stores.matchesId.get()[r],
        v =
          ((g && e.router.stores.matchStores.get(g)) || null)?.routeId === o
            ? g
            : e.router.stores.matches.get().find((y) => y.routeId === o)?.id,
        m = jt(e, s);
      if (p._nonReactive.loaderPromise) {
        if (p.status === "success" && !e.sync && !p.preload && f) return p;
        await p._nonReactive.loaderPromise;
        const y = e.router.getMatch(s),
          w = y._nonReactive.error || y.error;
        (w && le(e, y, w), y.status === "pending" && (await n(m, p, v, y, a)));
      } else {
        const y = m && !e.router.stores.matchStores.has(s),
          w = e.router.getMatch(s);
        ((w._nonReactive.loaderPromise = Ce()),
          y !== w.preload && e.updateMatch(s, (S) => ({ ...S, preload: y })),
          await n(m, p, v, w, a));
      }
    }
    const u = e.router.getMatch(s);
    (c ||
      (u._nonReactive.loaderPromise?.resolve(),
      u._nonReactive.loadPromise?.resolve(),
      (u._nonReactive.loadPromise = void 0)),
      clearTimeout(u._nonReactive.pendingTimeout),
      (u._nonReactive.pendingTimeout = void 0),
      c || (u._nonReactive.loaderPromise = void 0),
      (u._nonReactive.dehydrated = void 0));
    const h = c ? u.isFetching : !1;
    return h !== u.isFetching || u.invalid !== !1
      ? (e.updateMatch(s, (p) => ({ ...p, isFetching: h, invalid: !1 })), e.router.getMatch(s))
      : u;
  };
async function Zr(e) {
  const t = e,
    r = [];
  Xo(t.router) && ar(t);
  let n;
  for (let h = 0; h < t.matches.length; h++) {
    try {
      const p = ti(t, h);
      et(p) && (await p);
    } catch (p) {
      if (K(p)) throw p;
      if (U(p)) n = p;
      else if (!t.preload) throw p;
      break;
    }
    if (t.serialError || t.firstBadMatchIndex != null) break;
  }
  const s = t.firstBadMatchIndex ?? t.matches.length,
    o = n && !t.preload ? Yr(t, n) : void 0,
    i = n && t.preload ? 0 : o !== void 0 ? Math.min(o + 1, s) : s;
  let c, a;
  for (let h = 0; h < i; h++) r.push(ni(t, r, h));
  try {
    await Promise.all(r);
  } catch {
    const h = await Promise.allSettled(r);
    for (const p of h) {
      if (p.status !== "rejected") continue;
      const g = p.reason;
      if (K(g)) throw g;
      U(g) ? (c ??= g) : (a ??= g);
    }
    if (a !== void 0) throw a;
  }
  const l = c ?? (n && !t.preload ? n : void 0);
  let f = t.firstBadMatchIndex !== void 0 ? t.firstBadMatchIndex : t.matches.length - 1;
  if (!l && n && t.preload) return t.matches;
  if (l) {
    const h = Yr(t, l);
    h === void 0 && Q();
    const p = t.matches[h],
      g = t.router.looseRoutesById[p.routeId],
      v = t.router.options?.defaultNotFoundComponent;
    (!g.options.notFoundComponent && v && (g.options.notFoundComponent = v),
      (l.routeId = p.routeId));
    const m = p.routeId === t.router.routeTree.id;
    (t.updateMatch(p.id, (y) => ({
      ...y,
      ...(m
        ? { status: "success", globalNotFound: !0, error: void 0 }
        : { status: "notFound", error: l }),
      isFetching: !1,
    })),
      (f = h),
      await rt(g, ["notFoundComponent"]));
  } else if (!t.preload) {
    const h = t.matches[0];
    h.globalNotFound ||
      (t.router.getMatch(h.id)?.globalNotFound &&
        t.updateMatch(h.id, (p) => ({ ...p, globalNotFound: !1, error: void 0 })));
  }
  if (t.serialError && t.firstBadMatchIndex !== void 0) {
    const h = t.router.looseRoutesById[t.matches[t.firstBadMatchIndex].routeId];
    await rt(h, ["errorComponent"]);
  }
  for (let h = 0; h <= f; h++) {
    const { id: p, routeId: g } = t.matches[h],
      v = t.router.looseRoutesById[g];
    try {
      const m = ri(t, p, v);
      if (m) {
        const y = await m;
        t.updateMatch(p, (w) => ({ ...w, ...y }));
      }
    } catch (m) {
      console.error(`Error executing head for route ${g}:`, m);
    }
  }
  const u = ar(t);
  if ((et(u) && (await u), l)) throw l;
  if (t.serialError && !t.preload && !t.onReady) throw t.serialError;
  return t.matches;
}
function en(e, t) {
  const r = t.map((n) => e.options[n]?.preload?.()).filter(Boolean);
  if (r.length !== 0) return Promise.all(r);
}
function rt(e, t = xt) {
  !e._lazyLoaded &&
    e._lazyPromise === void 0 &&
    (e.lazyFn
      ? (e._lazyPromise = e.lazyFn().then((n) => {
          const { id: s, ...o } = n.options;
          (Object.assign(e.options, o), (e._lazyLoaded = !0), (e._lazyPromise = void 0));
        }))
      : (e._lazyLoaded = !0));
  const r = () =>
    e._componentsLoaded
      ? void 0
      : t === xt
        ? (() => {
            if (e._componentsPromise === void 0) {
              const n = en(e, xt);
              n
                ? (e._componentsPromise = n.then(() => {
                    ((e._componentsLoaded = !0), (e._componentsPromise = void 0));
                  }))
                : (e._componentsLoaded = !0);
            }
            return e._componentsPromise;
          })()
        : en(e, t);
  return e._lazyPromise ? e._lazyPromise.then(r) : r();
}
function ts(e) {
  for (const t of xt) if (e.options[t]?.preload) return !0;
  return !1;
}
const xt = ["component", "errorComponent", "pendingComponent", "notFoundComponent"];
function si(e) {
  return {
    input: ({ url: t }) => {
      for (const r of e) t = cr(r, t);
      return t;
    },
    output: ({ url: t }) => {
      for (let r = e.length - 1; r >= 0; r--) t = rs(e[r], t);
      return t;
    },
  };
}
function oi(e) {
  const t = Gn(e.basepath),
    r = `/${t}`,
    n = e.caseSensitive ? r : r.toLowerCase(),
    s = `${n}/`;
  return {
    input: ({ url: o }) => {
      const i = e.caseSensitive ? o.pathname : o.pathname.toLowerCase();
      return (
        i === n ? (o.pathname = "/") : i.startsWith(s) && (o.pathname = o.pathname.slice(r.length)),
        o
      );
    },
    output: ({ url: o }) => ((o.pathname = St(["/", t, o.pathname])), o),
  };
}
function cr(e, t) {
  const r = e?.input?.({ url: t });
  if (r) {
    if (typeof r == "string") return new URL(r);
    if (r instanceof URL) return r;
  }
  return t;
}
function rs(e, t) {
  const r = e?.output?.({ url: t });
  if (r) {
    if (typeof r == "string") return new URL(r);
    if (r instanceof URL) return r;
  }
  return t;
}
function ii(e, t) {
  const { createMutableStore: r, createReadonlyStore: n, batch: s, init: o } = t,
    i = new Map(),
    c = new Map(),
    a = new Map(),
    l = r(e.status),
    f = r(e.loadedAt),
    u = r(e.isLoading),
    h = r(e.isTransitioning),
    p = r(e.location),
    g = r(e.resolvedLocation),
    v = r(e.statusCode),
    m = r(e.redirect),
    y = r([]),
    w = r([]),
    S = r([]),
    b = n(() => Yt(i, y.get())),
    R = n(() => Yt(c, w.get())),
    C = n(() => Yt(a, S.get())),
    P = n(() => y.get()[0]),
    _ = n(() => y.get().some((G) => i.get(G)?.get().status === "pending")),
    E = n(() => ({
      locationHref: p.get().href,
      resolvedLocationHref: g.get()?.href,
      status: l.get(),
    })),
    M = n(() => ({
      status: l.get(),
      loadedAt: f.get(),
      isLoading: u.get(),
      isTransitioning: h.get(),
      matches: b.get(),
      location: p.get(),
      resolvedLocation: g.get(),
      statusCode: v.get(),
      redirect: m.get(),
    })),
    L = tt(64);
  function A(G) {
    let ze = L.get(G);
    return (
      ze ||
        ((ze = n(() => {
          const Ar = y.get();
          for (const Or of Ar) {
            const Ie = i.get(Or);
            if (Ie && Ie.routeId === G) return Ie.get();
          }
        })),
        L.set(G, ze)),
      ze
    );
  }
  const J = {
    status: l,
    loadedAt: f,
    isLoading: u,
    isTransitioning: h,
    location: p,
    resolvedLocation: g,
    statusCode: v,
    redirect: m,
    matchesId: y,
    pendingIds: w,
    cachedIds: S,
    matches: b,
    pendingMatches: R,
    cachedMatches: C,
    firstId: P,
    hasPending: _,
    matchRouteDeps: E,
    matchStores: i,
    pendingMatchStores: c,
    cachedMatchStores: a,
    __store: M,
    getRouteMatchStore: A,
    setMatches: V,
    setPending: ee,
    setCached: ut,
  };
  (V(e.matches), o?.(J));
  function V(G) {
    Jt(G, i, y, r, s);
  }
  function ee(G) {
    Jt(G, c, w, r, s);
  }
  function ut(G) {
    Jt(G, a, S, r, s);
  }
  return J;
}
function Yt(e, t) {
  const r = [];
  for (const n of t) {
    const s = e.get(n);
    s && r.push(s.get());
  }
  return r;
}
function Jt(e, t, r, n, s) {
  const o = e.map((c) => c.id),
    i = new Set(o);
  s(() => {
    for (const c of t.keys()) i.has(c) || t.delete(c);
    for (const c of e) {
      const a = t.get(c.id);
      if (!a) {
        const l = n(c);
        ((l.routeId = c.routeId), t.set(c.id, l));
        continue;
      }
      ((a.routeId = c.routeId), a.get() !== c && a.set(c));
    }
    Ao(r.get(), o) || r.set(o);
  });
}
var fe = "__TSR_index",
  tn = "popstate",
  rn = "beforeunload";
function ai(e) {
  let t = e.getLocation();
  const r = new Set(),
    n = (i) => {
      ((t = e.getLocation()), r.forEach((c) => c({ location: t, action: i })));
    },
    s = (i) => {
      (e.notifyOnIndexChange ?? !0) ? n(i) : (t = e.getLocation());
    },
    o = async ({ task: i, navigateOpts: c, ...a }) => {
      if (c?.ignoreBlocker ?? !1) {
        i();
        return;
      }
      const l = e.getBlockers?.() ?? [],
        f = a.type === "PUSH" || a.type === "REPLACE";
      if (typeof document < "u" && l.length && f)
        for (const u of l) {
          const h = Lt(a.path, a.state);
          if (await u.blockerFn({ currentLocation: t, nextLocation: h, action: a.type })) {
            e.onBlocked?.();
            return;
          }
        }
      i();
    };
  return {
    get location() {
      return t;
    },
    get length() {
      return e.getLength();
    },
    subscribers: r,
    subscribe: (i) => (
      r.add(i),
      () => {
        r.delete(i);
      }
    ),
    push: (i, c, a) => {
      const l = t.state[fe];
      ((c = nn(l + 1, c)),
        o({
          task: () => {
            (e.pushState(i, c), n({ type: "PUSH" }));
          },
          navigateOpts: a,
          type: "PUSH",
          path: i,
          state: c,
        }));
    },
    replace: (i, c, a) => {
      const l = t.state[fe];
      ((c = nn(l, c)),
        o({
          task: () => {
            (e.replaceState(i, c), n({ type: "REPLACE" }));
          },
          navigateOpts: a,
          type: "REPLACE",
          path: i,
          state: c,
        }));
    },
    go: (i, c) => {
      o({
        task: () => {
          (e.go(i), s({ type: "GO", index: i }));
        },
        navigateOpts: c,
        type: "GO",
      });
    },
    back: (i) => {
      o({
        task: () => {
          (e.back(i?.ignoreBlocker ?? !1), s({ type: "BACK" }));
        },
        navigateOpts: i,
        type: "BACK",
      });
    },
    forward: (i) => {
      o({
        task: () => {
          (e.forward(i?.ignoreBlocker ?? !1), s({ type: "FORWARD" }));
        },
        navigateOpts: i,
        type: "FORWARD",
      });
    },
    canGoBack: () => t.state[fe] !== 0,
    createHref: (i) => e.createHref(i),
    block: (i) => {
      if (!e.setBlockers) return () => {};
      const c = e.getBlockers?.() ?? [];
      return (
        e.setBlockers([...c, i]),
        () => {
          const a = e.getBlockers?.() ?? [];
          e.setBlockers?.(a.filter((l) => l !== i));
        }
      );
    },
    flush: () => e.flush?.(),
    destroy: () => e.destroy?.(),
    notify: n,
  };
}
function nn(e, t) {
  t || (t = {});
  const r = xr();
  return { ...t, key: r, __TSR_key: r, [fe]: e };
}
function ci(e) {
  const t = typeof document < "u" ? window : void 0,
    r = t.history.pushState,
    n = t.history.replaceState;
  let s = [];
  const o = () => s,
    i = (_) => (s = _),
    c = (_) => _,
    a = () => Lt(`${t.location.pathname}${t.location.search}${t.location.hash}`, t.history.state);
  if (!t.history.state?.__TSR_key && !t.history.state?.key) {
    const _ = xr();
    t.history.replaceState({ [fe]: 0, key: _, __TSR_key: _ }, "");
  }
  let l = a(),
    f,
    u = !1,
    h = !1,
    p = !1,
    g = !1;
  const v = () => l;
  let m, y;
  const w = () => {
      m &&
        ((P._ignoreSubscribers = !0),
        (m.isPush ? t.history.pushState : t.history.replaceState)(m.state, "", m.href),
        (P._ignoreSubscribers = !1),
        (m = void 0),
        (y = void 0),
        (f = void 0));
    },
    S = (_, E, M) => {
      const L = c(E);
      (y || (f = l),
        (l = Lt(E, M)),
        (m = { href: L, state: M, isPush: m?.isPush || _ === "push" }),
        y || (y = Promise.resolve().then(() => w())));
    },
    b = (_) => {
      ((l = a()), P.notify({ type: _ }));
    },
    R = async () => {
      if (h) {
        h = !1;
        return;
      }
      const _ = a(),
        E = _.state[fe] - l.state[fe],
        M = E === 1,
        L = E === -1,
        A = (!M && !L) || u;
      u = !1;
      const J = A ? "GO" : L ? "BACK" : "FORWARD",
        V = A ? { type: "GO", index: E } : { type: L ? "BACK" : "FORWARD" };
      if (p) p = !1;
      else {
        const ee = o();
        if (typeof document < "u" && ee.length) {
          for (const ut of ee)
            if (await ut.blockerFn({ currentLocation: l, nextLocation: _, action: J })) {
              ((h = !0), t.history.go(1), P.notify(V));
              return;
            }
        }
      }
      ((l = a()), P.notify(V));
    },
    C = (_) => {
      if (g) {
        g = !1;
        return;
      }
      let E = !1;
      const M = o();
      if (typeof document < "u" && M.length)
        for (const L of M) {
          const A = L.enableBeforeUnload ?? !0;
          if (A === !0) {
            E = !0;
            break;
          }
          if (typeof A == "function" && A() === !0) {
            E = !0;
            break;
          }
        }
      if (E) return (_.preventDefault(), (_.returnValue = ""));
    },
    P = ai({
      getLocation: v,
      getLength: () => t.history.length,
      pushState: (_, E) => S("push", _, E),
      replaceState: (_, E) => S("replace", _, E),
      back: (_) => (_ && (p = !0), (g = !0), t.history.back()),
      forward: (_) => {
        (_ && (p = !0), (g = !0), t.history.forward());
      },
      go: (_) => {
        ((u = !0), t.history.go(_));
      },
      createHref: (_) => c(_),
      flush: w,
      destroy: () => {
        ((t.history.pushState = r),
          (t.history.replaceState = n),
          t.removeEventListener(rn, C, { capture: !0 }),
          t.removeEventListener(tn, R));
      },
      onBlocked: () => {
        f && l !== f && (l = f);
      },
      getBlockers: o,
      setBlockers: i,
      notifyOnIndexChange: !1,
    });
  return (
    t.addEventListener(rn, C, { capture: !0 }),
    t.addEventListener(tn, R),
    (t.history.pushState = function (..._) {
      const E = r.apply(t.history, _);
      return (P._ignoreSubscribers || b("PUSH"), E);
    }),
    (t.history.replaceState = function (..._) {
      const E = n.apply(t.history, _);
      return (P._ignoreSubscribers || b("REPLACE"), E);
    }),
    P
  );
}
function ui(e) {
  let t = e.replace(/[\x00-\x1f\x7f]/g, "");
  return (t.startsWith("//") && (t = "/" + t.replace(/^\/+/, "")), t);
}
function Lt(e, t) {
  const r = ui(e),
    n = r.indexOf("#"),
    s = r.indexOf("?"),
    o = xr();
  return {
    href: r,
    pathname: r.substring(0, n > 0 ? (s > 0 ? Math.min(n, s) : n) : s > 0 ? s : r.length),
    hash: n > -1 ? r.substring(n) : "",
    search: s > -1 ? r.slice(s, n === -1 ? void 0 : n) : "",
    state: t || { [fe]: 0, key: o, __TSR_key: o },
  };
}
function xr() {
  return (Math.random() + 1).toString(36).substring(7);
}
function li(e) {
  return e instanceof Error ? { name: e.name, message: e.message } : { data: e };
}
function je(e, t) {
  const r = t,
    n = e;
  return {
    fromLocation: r,
    toLocation: n,
    pathChanged: r?.pathname !== n.pathname,
    hrefChanged: r?.href !== n.href,
    hashChanged: r?.hash !== n.hash,
  };
}
const ur = new WeakMap();
var fi = class {
    constructor(e, t) {
      ((this.tempLocationKey = `${Math.round(Math.random() * 1e7)}`),
        (this._scroll = { next: !0 }),
        (this.shouldViewTransition = void 0),
        (this.isViewTransitionTypesSupported = void 0),
        (this.subscribers = new Set()),
        (this.routeBranchCache = new WeakMap()),
        (this.startTransition = (r) => r()),
        (this.update = (r) => {
          const n = this.options,
            s = this.basepath ?? n?.basepath ?? "/",
            o = this.basepath === void 0,
            i = n?.rewrite;
          if (
            ((this.options = { ...n, ...r }),
            (this.isServer = this.options.isServer ?? typeof document > "u"),
            (this.protocolAllowlist = new Set(this.options.protocolAllowlist)),
            this.options.pathParamsAllowedCharacters &&
              (this.pathParamsDecoder = Vo(this.options.pathParamsAllowedCharacters)),
            (!this.history || (this.options.history && this.options.history !== this.history)) &&
              (this.options.history
                ? (this.history = this.options.history)
                : (this.history = ci())),
            (this.origin = this.options.origin),
            this.origin ||
              (window?.origin && window.origin !== "null"
                ? (this.origin = window.origin)
                : (this.origin = "http://localhost")),
            this.history && this.updateLatestLocation(),
            this.options.routeTree !== this.routeTree)
          ) {
            this.routeTree = this.options.routeTree;
            let f;
            ((this.resolvePathCache = tt(1e3)), (f = this.buildRouteTree()), this.setRoutes(f));
          }
          if (!this.stores && this.latestLocation) {
            const f = this.getStoreConfig(this);
            ((this.batch = f.batch), (this.stores = ii(hi(this.latestLocation), f)), Ri(this));
          }
          let c = !1;
          const a = this.options.basepath ?? "/",
            l = this.options.rewrite;
          if (o || s !== a || i !== l) {
            this.basepath = a;
            const f = [],
              u = Gn(a);
            (u && u !== "/" && f.push(oi({ basepath: a })),
              l && f.push(l),
              (this.rewrite = f.length === 0 ? void 0 : f.length === 1 ? f[0] : si(f)),
              this.history && this.updateLatestLocation(),
              (c = !0));
          }
          (c && this.stores && this.stores.location.set(this.latestLocation),
            typeof window < "u" &&
              "CSS" in window &&
              typeof window.CSS?.supports == "function" &&
              (this.isViewTransitionTypesSupported = window.CSS.supports(
                "selector(:active-view-transition-type(a))",
              )));
        }),
        (this.updateLatestLocation = () => {
          this.latestLocation = this.parseLocation(this.history.location, this.latestLocation);
        }),
        (this.buildRouteTree = () => {
          const r = Bo(this.routeTree, this.options.caseSensitive, (n, s) => {
            n.init({ originalIndex: s });
          });
          return (this.options.routeMasks && ko(this.options.routeMasks, r.processedTree), r);
        }),
        (this.subscribe = (r, n) => {
          const s = { eventType: r, fn: n };
          return (
            this.subscribers.add(s),
            () => {
              this.subscribers.delete(s);
            }
          );
        }),
        (this.emit = (r) => {
          this.subscribers.forEach((n) => {
            n.eventType === r.type && n.fn(r);
          });
        }),
        (this.parseLocation = (r, n) => {
          const s = ({ pathname: a, search: l, hash: f, href: u, state: h }) => {
              if (!this.rewrite && !/[ \x00-\x1f\x7f\u0080-\uffff]/.test(a)) {
                const y = this.options.parseSearch(l),
                  w = this.options.stringifySearch(y);
                return {
                  href: a + w + f,
                  publicHref: a + w + f,
                  pathname: We(a).path,
                  external: !1,
                  searchStr: w,
                  search: we(n?.search, y),
                  hash: We(f.slice(1)).path,
                  state: Se(n?.state, h),
                };
              }
              const p = new URL(u, this.origin),
                g = cr(this.rewrite, p),
                v = this.options.parseSearch(g.search),
                m = this.options.stringifySearch(v);
              return (
                (g.search = m),
                {
                  href: g.href.replace(g.origin, ""),
                  publicHref: u,
                  pathname: We(g.pathname).path,
                  external: !!this.rewrite && g.origin !== this.origin,
                  searchStr: m,
                  search: we(n?.search, v),
                  hash: We(g.hash.slice(1)).path,
                  state: Se(n?.state, h),
                }
              );
            },
            o = s(r),
            { __tempLocation: i, __tempKey: c } = o.state;
          if (i && (!c || c === this.tempLocationKey)) {
            const a = s(i);
            return (
              (a.state.key = o.state.key),
              (a.state.__TSR_key = o.state.__TSR_key),
              delete a.state.__tempLocation,
              { ...a, maskedLocation: o }
            );
          }
          return o;
        }),
        (this.resolvePathWithBase = (r, n) =>
          Ho({
            base: r,
            to: n.includes("//") ? Sr(n) : n,
            trailingSlash: this.options.trailingSlash,
            cache: this.resolvePathCache,
          })),
        (this.matchRoutes = (r, n, s) =>
          typeof r == "string"
            ? this.matchRoutesInternal({ pathname: r, search: n }, s)
            : this.matchRoutesInternal(r, n)),
        (this.getMatchedRoutes = (r) =>
          pi({ pathname: r, routesById: this.routesById, processedTree: this.processedTree })),
        (this.cancelMatch = (r) => {
          const n = this.getMatch(r);
          n &&
            (n.abortController.abort(),
            clearTimeout(n._nonReactive.pendingTimeout),
            (n._nonReactive.pendingTimeout = void 0));
        }),
        (this.cancelMatches = () => {
          (this.stores.pendingIds.get().forEach((r) => {
            this.cancelMatch(r);
          }),
            this.stores.matchesId.get().forEach((r) => {
              if (this.stores.pendingMatchStores.has(r)) return;
              const n = this.stores.matchStores.get(r)?.get();
              n && (n.status === "pending" || n.isFetching === "loader") && this.cancelMatch(r);
            }));
        }),
        (this.buildLocation = (r) => {
          const n = (o = {}) => {
              const i = o._fromLocation || this.pendingBuiltLocation || this.latestLocation,
                c = this.matchRoutesLightweight(i);
              o.from;
              const a = o.unsafeRelative === "path" ? i.pathname : (o.from ?? c.fullPath),
                l = o.to ? `${o.to}` : void 0,
                f = c.search,
                u = Object.assign(Object.create(null), c.params),
                h = l?.charCodeAt(0) === 47 ? "/" : this.resolvePathWithBase(a, "."),
                p = l ? this.resolvePathWithBase(h, l) : h,
                g =
                  o.params === !1 || o.params === null
                    ? Object.create(null)
                    : (o.params ?? !0) === !0
                      ? u
                      : Object.assign(u, be(o.params, u)),
                v = this.routesByPath[re(p)];
              let m;
              if (v) m = this.getRouteBranch(v);
              else if (p.includes("$")) m = [];
              else {
                const L = this.getMatchedRoutes(p);
                ((m = L.matchedRoutes),
                  this.options.notFoundRoute &&
                    (!L.foundRoute || (L.foundRoute.path !== "/" && L.routeParams["**"])) &&
                    (m = [...m, this.options.notFoundRoute]));
              }
              if (m.length && qn(g))
                for (const L of m) {
                  const A = L.options.params?.stringify ?? L.options.stringifyParams;
                  if (A)
                    try {
                      Object.assign(g, A(g));
                    } catch {}
                }
              const y = r.leaveParams
                ? p
                : We(
                    Qr({
                      path: p,
                      params: g,
                      decoder: this.pathParamsDecoder,
                      server: this.isServer,
                    }).interpolatedPath,
                  ).path;
              let w = f;
              if (r._includeValidateSearch && this.options.search?.strict) {
                const L = {};
                (m.forEach((A) => {
                  if (A.options.validateSearch)
                    try {
                      Object.assign(L, Pt(A.options.validateSearch, { ...L, ...w }));
                    } catch {}
                }),
                  (w = L));
              }
              ((w = mi({
                search: w,
                dest: o,
                destRoutes: m,
                _includeValidateSearch: r._includeValidateSearch,
              })),
                (w = we(f, w)));
              const S = this.options.stringifySearch(w),
                b = o.hash === !0 ? i.hash : o.hash ? be(o.hash, i.hash) : void 0,
                R = b ? `#${b}` : "";
              let C = o.state === !0 ? i.state : o.state ? be(o.state, i.state) : {};
              C = Se(i.state, C);
              const P = `${y}${S}${R}`;
              let _,
                E,
                M = !1;
              if (this.rewrite) {
                const L = new URL(P, this.origin),
                  A = rs(this.rewrite, L);
                ((_ = L.href.replace(L.origin, "")),
                  A.origin !== this.origin
                    ? ((E = A.href), (M = !0))
                    : (E = A.pathname + A.search + A.hash));
              } else ((_ = To(P)), (E = _));
              return {
                publicHref: E,
                href: _,
                pathname: y,
                search: w,
                searchStr: S,
                state: C,
                hash: b ?? "",
                external: M,
                unmaskOnReload: o.unmaskOnReload,
              };
            },
            s = (o = {}, i) => {
              const c = n(o);
              let a = i ? n(i) : void 0;
              if (!a) {
                const l = Object.create(null);
                if (this.options.routeMasks) {
                  const f = Fo(c.pathname, this.processedTree);
                  if (f) {
                    Object.assign(l, f.rawParams);
                    const { from: u, params: h, ...p } = f.route,
                      g =
                        h === !1 || h === null
                          ? Object.create(null)
                          : (h ?? !0) === !0
                            ? l
                            : Object.assign(l, be(h, l));
                    ((i = { from: r.from, ...p, params: g }), (a = n(i)));
                  }
                }
              }
              return (a && (c.maskedLocation = a), c);
            };
          return r.mask ? s(r, { from: r.from, ...r.mask }) : s(r);
        }),
        (this.commitLocation = async ({ viewTransition: r, ignoreBlocker: n, ...s }) => {
          let o;
          const i = () => {
              const l = ["key", "__TSR_key", "__TSR_index", "__hashScrollIntoViewOptions"];
              l.forEach((u) => {
                s.state[u] = this.latestLocation.state[u];
              });
              const f = q(s.state, this.latestLocation.state);
              return (
                l.forEach((u) => {
                  delete s.state[u];
                }),
                f
              );
            },
            c = re(this.latestLocation.href) === re(s.href);
          let a = this.commitLocationPromise;
          if (
            ((this.commitLocationPromise = Ce(() => {
              (a?.resolve(), (a = void 0));
            })),
            c && i())
          )
            this.load();
          else {
            let { maskedLocation: l, hashScrollIntoView: f, ...u } = s;
            (l &&
              ((u = {
                ...l,
                state: {
                  ...l.state,
                  __tempKey: void 0,
                  __tempLocation: {
                    ...u,
                    search: u.searchStr,
                    state: {
                      ...u.state,
                      __tempKey: void 0,
                      __tempLocation: void 0,
                      __TSR_key: void 0,
                      key: void 0,
                    },
                  },
                },
              }),
              (u.unmaskOnReload ?? this.options.unmaskOnReload ?? !1) &&
                (u.state.__tempKey = this.tempLocationKey)),
              (u.state.__hashScrollIntoViewOptions =
                f ?? this.options.defaultHashScrollIntoView ?? !0),
              (this.shouldViewTransition = r),
              (o = s.replace ? "REPLACE" : "PUSH"),
              this.history[o === "REPLACE" ? "replace" : "push"](u.publicHref, u.state, {
                ignoreBlocker: n,
              }));
          }
          return (
            (this._scroll.next = s.resetScroll ?? !0),
            this.history.subscribers.size || this.load(o ? { action: { type: o } } : void 0),
            this.commitLocationPromise
          );
        }),
        (this.buildAndCommitLocation = ({
          replace: r,
          resetScroll: n,
          hashScrollIntoView: s,
          viewTransition: o,
          ignoreBlocker: i,
          href: c,
          ...a
        } = {}) => {
          if (c) {
            const u = this.history.location.state.__TSR_index,
              h = Lt(c, { __TSR_index: r ? u : u + 1 }),
              p = new URL(h.pathname, this.origin);
            ((a.to = cr(this.rewrite, p).pathname),
              (a.search = this.options.parseSearch(h.search)),
              (a.hash = h.hash.slice(1)));
          }
          const l = this.buildLocation({ ...a, _includeValidateSearch: !0 });
          this.pendingBuiltLocation = l;
          const f = this.commitLocation({
            ...l,
            viewTransition: o,
            replace: r,
            resetScroll: n,
            hashScrollIntoView: s,
            ignoreBlocker: i,
          });
          return (
            Promise.resolve().then(() => {
              this.pendingBuiltLocation === l && (this.pendingBuiltLocation = void 0);
            }),
            f
          );
        }),
        (this.navigate = async ({ to: r, reloadDocument: n, href: s, publicHref: o, ...i }) => {
          let c = !1;
          if (s)
            try {
              (new URL(`${s}`), (c = !0));
            } catch {}
          if ((c && !n && (n = !0), n)) {
            if (r !== void 0 || !s) {
              const l = this.buildLocation({ to: r, ...i });
              ((s = s ?? l.publicHref), (o = o ?? l.publicHref));
            }
            const a = !c && o ? o : s;
            if (Et(a, this.protocolAllowlist)) return Promise.resolve();
            if (!i.ignoreBlocker) {
              const l = this.history.getBlockers?.() ?? [];
              for (const f of l)
                if (
                  f?.blockerFn &&
                  (await f.blockerFn({
                    currentLocation: this.latestLocation,
                    nextLocation: this.latestLocation,
                    action: "PUSH",
                  }))
                )
                  return Promise.resolve();
            }
            return (
              i.replace ? window.location.replace(a) : (window.location.href = a),
              Promise.resolve()
            );
          }
          return this.buildAndCommitLocation({ ...i, href: s, to: r, _isNavigate: !0 });
        }),
        (this.beforeLoad = () => {
          (this.cancelMatches(), this.updateLatestLocation());
          const r = this.matchRoutes(this.latestLocation),
            n = this.stores.cachedMatches.get().filter((s) => !r.some((o) => o.id === s.id));
          this.batch(() => {
            (this.stores.status.set("pending"),
              this.stores.statusCode.set(200),
              this.stores.isLoading.set(!0),
              this.stores.location.set(this.latestLocation),
              this.stores.setPending(r),
              this.stores.setCached(n));
          });
        }),
        (this.load = async (r) => {
          const n = r?.action?.type;
          let s, o, i;
          const c = this.stores.resolvedLocation.get() ?? this.stores.location.get();
          for (
            i = new Promise((l) => {
              this.startTransition(async () => {
                try {
                  (this.beforeLoad(),
                    n ? ur.set(this.latestLocation, n) : ur.delete(this.latestLocation));
                  const f = this.latestLocation,
                    u = je(f, this.stores.resolvedLocation.get());
                  (this.stores.redirect.get() || this.emit({ type: "onBeforeNavigate", ...u }),
                    this.emit({ type: "onBeforeLoad", ...u }),
                    await Zr({
                      router: this,
                      sync: r?.sync,
                      forceStaleReload: c.href === f.href,
                      matches: this.stores.pendingMatches.get(),
                      location: f,
                      updateMatch: this.updateMatch,
                      onReady: async () => {
                        this.startTransition(() => {
                          this.startViewTransition(async () => {
                            let h = null,
                              p = null,
                              g = null,
                              v = null;
                            this.batch(() => {
                              const m = this.stores.pendingMatches.get(),
                                y = m.length,
                                w = this.stores.matches.get();
                              h = y
                                ? w.filter((R) => !this.stores.pendingMatchStores.has(R.id))
                                : null;
                              const S = new Set();
                              for (const R of this.stores.pendingMatchStores.values())
                                R.routeId && S.add(R.routeId);
                              const b = new Set();
                              for (const R of this.stores.matchStores.values())
                                R.routeId && b.add(R.routeId);
                              ((p = y ? w.filter((R) => !S.has(R.routeId)) : null),
                                (g = y ? m.filter((R) => !b.has(R.routeId)) : null),
                                (v = y ? m.filter((R) => b.has(R.routeId)) : w),
                                this.stores.isLoading.set(!1),
                                this.stores.loadedAt.set(Date.now()),
                                y &&
                                  (this.stores.setMatches(m),
                                  this.stores.setPending([]),
                                  this.stores.setCached([
                                    ...this.stores.cachedMatches.get(),
                                    ...h.filter(
                                      (R) =>
                                        R.status !== "error" &&
                                        R.status !== "notFound" &&
                                        R.status !== "redirected",
                                    ),
                                  ]),
                                  this.clearExpiredCache()));
                            });
                            for (const [m, y] of [
                              [p, "onLeave"],
                              [g, "onEnter"],
                              [v, "onStay"],
                            ])
                              if (m)
                                for (const w of m) this.looseRoutesById[w.routeId].options[y]?.(w);
                          });
                        });
                      },
                    }));
                } catch (f) {
                  K(f)
                    ? ((s = f), this.navigate({ ...s.options, replace: !0, ignoreBlocker: !0 }))
                    : U(f) && (o = f);
                  const u = s
                    ? s.status
                    : o
                      ? 404
                      : this.stores.matches.get().some((h) => h.status === "error")
                        ? 500
                        : 200;
                  this.batch(() => {
                    (this.stores.statusCode.set(u), this.stores.redirect.set(s));
                  });
                }
                (this.latestLoadPromise === i &&
                  (this.commitLocationPromise?.resolve(),
                  (this.latestLoadPromise = void 0),
                  (this.commitLocationPromise = void 0)),
                  l());
              });
            }),
              this.latestLoadPromise = i,
              await i;
            this.latestLoadPromise && i !== this.latestLoadPromise;
          )
            await this.latestLoadPromise;
          let a;
          (this.hasNotFoundMatch()
            ? (a = 404)
            : this.stores.matches.get().some((l) => l.status === "error") && (a = 500),
            a !== void 0 && this.stores.statusCode.set(a));
        }),
        (this.startViewTransition = (r) => {
          const n = this.shouldViewTransition ?? this.options.defaultViewTransition;
          if (
            ((this.shouldViewTransition = void 0),
            n &&
              typeof document < "u" &&
              "startViewTransition" in document &&
              typeof document.startViewTransition == "function")
          ) {
            let s;
            if (typeof n == "object" && this.isViewTransitionTypesSupported) {
              const o = this.latestLocation,
                i = this.stores.resolvedLocation.get(),
                c = typeof n.types == "function" ? n.types(je(o, i)) : n.types;
              if (c === !1) {
                r();
                return;
              }
              s = { update: r, types: c };
            } else s = r;
            document.startViewTransition(s);
          } else r();
        }),
        (this.updateMatch = (r, n) => {
          this.startTransition(() => {
            const s = this.stores.pendingMatchStores.get(r);
            if (s) {
              s.set(n);
              return;
            }
            const o = this.stores.matchStores.get(r);
            if (o) {
              o.set(n);
              return;
            }
            const i = this.stores.cachedMatchStores.get(r);
            if (i) {
              const c = n(i.get());
              c.status === "redirected"
                ? this.stores.cachedMatchStores.delete(r) &&
                  this.stores.cachedIds.set((a) => a.filter((l) => l !== r))
                : i.set(c);
            }
          });
        }),
        (this.getMatch = (r) =>
          this.stores.cachedMatchStores.get(r)?.get() ??
          this.stores.pendingMatchStores.get(r)?.get() ??
          this.stores.matchStores.get(r)?.get()),
        (this.invalidate = (r) => {
          const n = (s) =>
            (r?.filter?.(s) ?? !0)
              ? {
                  ...s,
                  invalid: !0,
                  ...(r?.forcePending || s.status === "error" || s.status === "notFound"
                    ? { status: "pending", error: void 0 }
                    : void 0),
                }
              : s;
          return (
            this.batch(() => {
              (this.stores.setMatches(this.stores.matches.get().map(n)),
                this.stores.setCached(this.stores.cachedMatches.get().map(n)),
                this.stores.setPending(this.stores.pendingMatches.get().map(n)));
            }),
            (this.shouldViewTransition = !1),
            this.load({ sync: r?.sync })
          );
        }),
        (this.getParsedLocationHref = (r) => r.publicHref || "/"),
        (this.resolveRedirect = (r) => {
          const n = r.headers.get("Location");
          if (!r.options.href || r.options._builtLocation) {
            const s = r.options._builtLocation ?? this.buildLocation(r.options),
              o = this.getParsedLocationHref(s);
            ((r.options.href = o), r.headers.set("Location", o));
          } else if (n)
            try {
              const s = new URL(n);
              if (this.origin && s.origin === this.origin) {
                const o = s.pathname + s.search + s.hash;
                ((r.options.href = o), r.headers.set("Location", o));
              }
            } catch {}
          if (
            r.options.href &&
            !r.options._builtLocation &&
            Et(r.options.href, this.protocolAllowlist)
          )
            throw new Error("Redirect blocked: unsafe protocol");
          return (r.headers.get("Location") || r.headers.set("Location", r.options.href), r);
        }),
        (this.clearCache = (r) => {
          const n = r?.filter;
          n !== void 0
            ? this.stores.setCached(this.stores.cachedMatches.get().filter((s) => !n(s)))
            : this.stores.setCached([]);
        }),
        (this.clearExpiredCache = () => {
          const r = Date.now(),
            n = (s) => {
              const o = this.looseRoutesById[s.routeId];
              if (!o.options.loader) return !0;
              const i =
                (s.preload
                  ? (o.options.preloadGcTime ?? this.options.defaultPreloadGcTime)
                  : (o.options.gcTime ?? this.options.defaultGcTime)) ?? 300 * 1e3;
              return s.status === "error" ? !0 : r - s.updatedAt >= i;
            };
          this.clearCache({ filter: n });
        }),
        (this.loadRouteChunk = rt),
        (this.preloadRoute = async (r) => {
          const n = r._builtLocation ?? this.buildLocation(r);
          let s = this.matchRoutes(n, { throwOnError: !0, preload: !0, dest: r });
          const o = new Set([...this.stores.matchesId.get(), ...this.stores.pendingIds.get()]),
            i = new Set([...o, ...this.stores.cachedIds.get()]),
            c = s.filter((a) => !i.has(a.id));
          if (c.length) {
            const a = this.stores.cachedMatches.get();
            this.stores.setCached([...a, ...c]);
          }
          try {
            return (
              (s = await Zr({
                router: this,
                matches: s,
                location: n,
                preload: !0,
                updateMatch: (a, l) => {
                  o.has(a) ? (s = s.map((f) => (f.id === a ? l(f) : f))) : this.updateMatch(a, l);
                },
              })),
              s
            );
          } catch (a) {
            if (K(a))
              return a.options.reloadDocument
                ? void 0
                : await this.preloadRoute({ ...a.options, _fromLocation: n });
            U(a) || console.error(a);
            return;
          }
        }),
        (this.matchRoute = (r, n) => {
          const s = {
              ...r,
              to: r.to ? this.resolvePathWithBase(r.from || "", r.to) : void 0,
              params: r.params || {},
              leaveParams: !0,
            },
            o = this.buildLocation(s);
          if (n?.pending && this.stores.status.get() !== "pending") return !1;
          const i = (n?.pending === void 0 ? !this.stores.isLoading.get() : n.pending)
              ? this.latestLocation
              : this.stores.resolvedLocation.get() || this.stores.location.get(),
            c = jo(
              o.pathname,
              n?.caseSensitive ?? !1,
              n?.fuzzy ?? !1,
              i.pathname,
              this.processedTree,
            );
          return !c || (r.params && !q(c.rawParams, r.params, { partial: !0 }))
            ? !1
            : (n?.includeSearch ?? !0)
              ? q(i.search, o.search, { partial: !0 })
                ? c.rawParams
                : !1
              : c.rawParams;
        }),
        (this.hasNotFoundMatch = () =>
          this.stores.matches.get().some((r) => r.status === "notFound" || r.globalNotFound)),
        (this.getStoreConfig = t),
        this.update({
          defaultPreloadDelay: 50,
          defaultPendingMs: 1e3,
          defaultPendingMinMs: 500,
          context: void 0,
          ...e,
          caseSensitive: e.caseSensitive ?? !1,
          notFoundMode: e.notFoundMode ?? "fuzzy",
          stringifySearch: e.stringifySearch ?? Qo,
          parseSearch: e.parseSearch ?? Ko,
          protocolAllowlist: e.protocolAllowlist ?? Eo,
        }),
        typeof document < "u" && (self.__TSR_ROUTER__ = this));
    }
    isShell() {
      return !!this.options.isShell;
    }
    isPrerendering() {
      return !!this.options.isPrerendering;
    }
    get state() {
      return this.stores.__store.get();
    }
    setRoutes({ routesById: e, routesByPath: t, processedTree: r }) {
      ((this.routesById = e), (this.routesByPath = t), (this.processedTree = r));
      const n = this.options.notFoundRoute;
      n && (n.init({ originalIndex: 99999999999 }), (this.routesById[n.id] = n));
    }
    getRouteBranch(e) {
      let t = this.routeBranchCache.get(e);
      return (t || ((t = Kn(e)), this.routeBranchCache.set(e, t)), t);
    }
    get looseRoutesById() {
      return this.routesById;
    }
    getParentContext(e) {
      return e?.id
        ? (e.context ?? this.options.context ?? void 0)
        : (this.options.context ?? void 0);
    }
    matchRoutesInternal(e, t) {
      const r = this.getMatchedRoutes(e.pathname),
        { foundRoute: n, routeParams: s } = r;
      let { matchedRoutes: o } = r,
        i = !1;
      (n ? n.path !== "/" && s["**"] : re(e.pathname)) &&
        (this.options.notFoundRoute ? (o = [...o, this.options.notFoundRoute]) : (i = !0));
      const c = i ? yi(this.options.notFoundMode, o) : void 0,
        a = new Array(o.length),
        l = new Map();
      for (const f of this.stores.matchStores.values()) f.routeId && l.set(f.routeId, f.get());
      for (let f = 0; f < o.length; f++) {
        const u = o[f],
          h = a[f - 1];
        let p, g, v;
        {
          const A = h?.search ?? e.search,
            J = h?._strictSearch ?? void 0;
          try {
            const V = Pt(u.options.validateSearch, { ...A }) ?? void 0;
            ((p = { ...A, ...V }), (g = { ...J, ...V }), (v = void 0));
          } catch (V) {
            let ee = V;
            if ((V instanceof Mt || (ee = new Mt(V.message, { cause: V })), t?.throwOnError))
              throw ee;
            ((p = A), (g = {}), (v = ee));
          }
        }
        const m = u.options.loaderDeps?.({ search: p }) ?? "",
          y = m ? JSON.stringify(m) : "",
          { interpolatedPath: w, usedParams: S } = Qr({
            path: u.fullPath,
            params: s,
            decoder: this.pathParamsDecoder,
            server: this.isServer,
          }),
          b = u.id + w + y,
          R = this.getMatch(b),
          C = l.get(u.id),
          P = R?._strictParams ?? S;
        let _;
        if (!R)
          try {
            sn(u, P);
          } catch (A) {
            if ((U(A) || K(A) ? (_ = A) : (_ = new di(A.message, { cause: A })), t?.throwOnError))
              throw _;
          }
        Object.assign(s, P);
        const E = C ? "stay" : "enter";
        let M;
        if (R)
          M = {
            ...R,
            cause: E,
            params: C?.params ?? s,
            _strictParams: P,
            search: we(C ? C.search : R.search, p),
            _strictSearch: g,
          };
        else {
          const A =
            u.options.loader || u.options.beforeLoad || u.lazyFn || ts(u) ? "pending" : "success";
          M = {
            id: b,
            ssr: u.options.ssr,
            index: f,
            routeId: u.id,
            params: C?.params ?? s,
            _strictParams: P,
            pathname: w,
            updatedAt: Date.now(),
            search: C ? we(C.search, p) : p,
            _strictSearch: g,
            searchError: void 0,
            status: A,
            isFetching: !1,
            error: void 0,
            paramsError: _,
            __routeContext: void 0,
            _nonReactive: { loadPromise: Ce() },
            __beforeLoadContext: void 0,
            context: {},
            abortController: new AbortController(),
            fetchCount: 0,
            cause: E,
            loaderDeps: C ? Se(C.loaderDeps, m) : m,
            invalid: !1,
            preload: !1,
            links: void 0,
            scripts: void 0,
            headScripts: void 0,
            meta: void 0,
            staticData: u.options.staticData || {},
            fullPath: u.fullPath,
          };
        }
        (t?.preload || (M.globalNotFound = c === u.id), (M.searchError = v));
        const L = this.getParentContext(h);
        ((M.context = { ...L, ...M.__routeContext, ...M.__beforeLoadContext }), (a[f] = M));
      }
      for (let f = 0; f < a.length; f++) {
        const u = a[f],
          h = this.looseRoutesById[u.routeId],
          p = this.getMatch(u.id),
          g = l.get(u.routeId);
        if (((u.params = g ? we(g.params, s) : s), !p)) {
          const v = a[f - 1],
            m = this.getParentContext(v);
          if (h.options.context) {
            const y = {
              deps: u.loaderDeps,
              params: u.params,
              context: m ?? {},
              location: e,
              navigate: (w) => this.navigate({ ...w, _fromLocation: e }),
              buildLocation: this.buildLocation,
              cause: u.cause,
              abortController: u.abortController,
              preload: !!u.preload,
              matches: a,
              routeId: h.id,
            };
            u.__routeContext = h.options.context(y) ?? void 0;
          }
          u.context = { ...m, ...u.__routeContext, ...u.__beforeLoadContext };
        }
      }
      return a;
    }
    matchRoutesLightweight(e) {
      const { matchedRoutes: t, routeParams: r } = this.getMatchedRoutes(e.pathname),
        n = Ze(t),
        s = { ...e.search };
      for (const l of t)
        try {
          Object.assign(s, Pt(l.options.validateSearch, s));
        } catch {}
      const o = Ze(this.stores.matchesId.get()),
        i = o && this.stores.matchStores.get(o)?.get(),
        c = i && i.routeId === n.id && i.pathname === e.pathname;
      let a;
      if (c) a = i.params;
      else {
        const l = Object.assign(Object.create(null), r);
        for (const f of t)
          try {
            sn(f, l);
          } catch {}
        a = l;
      }
      return { matchedRoutes: t, fullPath: n.fullPath, search: s, params: a };
    }
  },
  Mt = class extends Error {},
  di = class extends Error {};
function hi(e) {
  return {
    loadedAt: 0,
    isLoading: !1,
    isTransitioning: !1,
    status: "idle",
    resolvedLocation: void 0,
    location: e,
    matches: [],
    statusCode: 200,
  };
}
function Pt(e, t) {
  if (e == null) return {};
  if ("~standard" in e) {
    const r = e["~standard"].validate(t);
    if (r instanceof Promise) throw new Mt("Async validation not supported");
    if (r.issues) throw new Mt(JSON.stringify(r.issues, void 0, 2), { cause: r });
    return r.value;
  }
  return "parse" in e ? e.parse(t) : typeof e == "function" ? e(t) : {};
}
function pi({ pathname: e, routesById: t, processedTree: r }) {
  const n = Object.create(null),
    s = re(e);
  let o;
  const i = Do(s, r, !0);
  return (
    i && ((o = i.route), Object.assign(n, i.rawParams)),
    { matchedRoutes: i?.branch || [t.__root__], routeParams: n, foundRoute: o }
  );
}
function mi({ search: e, dest: t, destRoutes: r, _includeValidateSearch: n }) {
  return gi(r)(e, t, n ?? !1);
}
function gi(e) {
  let t, r;
  const n = [];
  for (const o of e) {
    const i = o.options;
    if ("search" in i) i.search?.middlewares && n.push(...i.search.middlewares);
    else if (i.preSearchFilters || i.postSearchFilters) {
      const a = ({ search: l, next: f }) => {
        const u = f(i.preSearchFilters ? i.preSearchFilters.reduce((h, p) => p(h), l) : l);
        return i.postSearchFilters ? i.postSearchFilters.reduce((h, p) => p(h), u) : u;
      };
      n.push(a);
    }
    const c = i.validateSearch;
    if (c) {
      const a = ({ search: l, next: f, meta: u }) => {
        const h = f(l);
        if (r)
          try {
            const p = Pt(c, h);
            if (u && p) for (const g in p) g in h || (u.defaulted ||= new Map()).set(g, p[g]);
            return { ...h, ...p };
          } catch {}
        return h;
      };
      n.push(a);
    }
  }
  const s = (o, i, c) => {
    if (o >= n.length) {
      if (!t.search) return {};
      if (t.search === !0) return i;
      const l = be(t.search, i);
      return (c && (c.explicit = l), l);
    }
    const a = (l, f) => {
      if (f) {
        const u = c || {};
        return { search: s(o + 1, l, u), meta: u };
      }
      return s(o + 1, l, c);
    };
    return n[o]({ search: i, next: a, meta: c });
  };
  return function (i, c, a) {
    return ((t = c), (r = a), s(0, i));
  };
}
function yi(e, t) {
  if (e !== "root")
    for (let r = t.length - 1; r >= 0; r--) {
      const n = t[r];
      if (n.children) return n.id;
    }
  return Re;
}
function sn(e, t) {
  const r = e.options.params?.parse ?? e.options.parseParams;
  if (r) {
    const n = r(t);
    if (n === !1) throw new Error("Route params.parse returned false for a matched route");
    Object.assign(t, n);
  }
}
function vi() {
  try {
    return sessionStorage;
  } catch {
    return;
  }
}
const wi = "tsr-scroll-restoration-v1_3",
  ns = vi();
function bi() {
  try {
    return JSON.parse(ns?.getItem("tsr-scroll-restoration-v1_3") || "{}");
  } catch {
    return {};
  }
}
function Si() {
  try {
    ns?.setItem(wi, JSON.stringify(Te));
  } catch {}
}
const Te = bi(),
  on = "data-scroll-restoration-id",
  xi = (e) => e.state.__TSR_key || e.href;
function Pi(e) {
  const t = e.getAttribute(on);
  if (t) return `[${on}="${t}"]`;
  let r = "",
    n = e,
    s;
  for (; (s = n.parentNode); ) {
    let o = 1,
      i = n;
    for (; (i = i.previousElementSibling); ) o++;
    const c = `${n.localName}:nth-child(${o})`;
    ((r = r ? `${c} > ${r}` : c), (n = s));
  }
  return r;
}
let pt = !1;
const Ae = "window";
function lr(e) {
  try {
    return typeof e == "function" ? e() : document.querySelector(e);
  } catch {}
}
function an(e) {
  const t = [];
  for (const r of e) {
    if (r === Ae) continue;
    const n = lr(r);
    n && t.push(n);
  }
  return t;
}
function Ri(e, t) {
  const r = e.options.scrollRestoration,
    n = e._scroll;
  r && (n.restoring = !0);
  const s = e.options.getScrollRestorationKey || xi,
    o = new Map(),
    i = (l, f, u) => {
      const h = o.get(l) || {};
      ((h.scrollX = f), (h.scrollY = u), o.set(l, h));
    },
    c = (l) => {
      if (!(pt || !n.restoring))
        if (l.target === document) i(Ae, scrollX, scrollY);
        else {
          const f = l.target;
          i(f, f.scrollLeft, f.scrollTop);
        }
    },
    a = (l) => {
      if (!n.restoring) return;
      const f = (Te[l] ||= {});
      for (const [u, h] of o) u === Ae ? (f[Ae] = h) : u.isConnected && (f[Pi(u)] = h);
    };
  (r &&
    !n.restoration &&
    ((n.restoration = !0),
    (pt = !1),
    (history.scrollRestoration = "manual"),
    document.addEventListener("scroll", c, !0),
    e.subscribe("onBeforeLoad", (l) => {
      (l.fromLocation && a(s(l.fromLocation)), o.clear());
    }),
    addEventListener("pagehide", () => {
      (a(s(e.stores.resolvedLocation.get() ?? e.stores.location.get())), Si());
    })),
    !n.reset &&
      ((n.reset = !0),
      e.subscribe("onRendered", (l) => {
        const f = e.options.scrollRestorationBehavior,
          u = e.options.scrollToTopSelectors,
          h = n.next;
        let p;
        if (
          (o.clear(),
          h || (n.next = !0),
          typeof e.options.scrollRestoration == "function" &&
            !e.options.scrollRestoration({ location: e.latestLocation }))
        )
          return;
        const g = s(l.toLocation),
          v = l.fromLocation && s(l.fromLocation);
        if (n.restoring && v && v !== g) {
          const m = Te[v];
          if (m) {
            let y = Te[g];
            for (const w in m) {
              if (w === Ae) {
                if (h) continue;
              } else {
                const S = lr(w);
                if (!S || (h && u && ((p ??= an(u)), p.includes(S)))) continue;
              }
              (y || (y = Te[g] = {}), (y[w] ??= m[w]));
            }
          }
        }
        pt = !0;
        try {
          const m = l.toLocation.hash,
            y = l.toLocation.state.__hashScrollIntoViewOptions ?? !0;
          let w = !1;
          if (h) {
            const S = ur.get(l.toLocation),
              b = m && y && (S === "PUSH" || S === "REPLACE"),
              R = n.restoring ? Te[g] : void 0;
            if (R)
              for (const C in R) {
                const { scrollX: P, scrollY: _ } = R[C];
                if (C === Ae) {
                  if (b) continue;
                  (scrollTo({ top: _, left: P, behavior: f }), (w = !0));
                } else {
                  const E = lr(C);
                  E && ((E.scrollLeft = P), (E.scrollTop = _));
                }
              }
            if (!w && !m) {
              const C = { top: 0, left: 0, behavior: f };
              if ((scrollTo(C), u)) {
                p ??= an(u);
                for (const P of p) P.scrollTo(C);
              }
            }
          }
          !w && m && y && document.getElementById(m)?.scrollIntoView(y);
        } finally {
          pt = !1;
        }
      })));
}
const Z = Symbol.for("TSR_DEFERRED_PROMISE");
function _i(e, t) {
  const r = e;
  return (
    r[Z] ||
      ((r[Z] = { status: "pending" }),
      r
        .then((n) => {
          ((r[Z].status = "success"), (r[Z].data = n));
        })
        .catch((n) => {
          ((r[Z].status = "error"), (r[Z].error = { data: li(n), __isServerError: !0 }));
        })),
    r
  );
}
const Ci = "Error preloading route! ☝️";
function ss(e, t) {
  if (e) return typeof e == "string" ? e : e[t];
}
function Ei(e) {
  return e?.scriptFormat ?? "module";
}
function Ii(e, t, r) {
  const n = Li(t),
    s = ss(r, "script") ?? n.crossOrigin;
  return {
    ...(Ei(e) === "iife" ? { rel: "preload", as: "script" } : { rel: "modulepreload" }),
    href: n.href,
    ...(s ? { crossOrigin: s } : {}),
  };
}
function Li(e) {
  return typeof e == "string" ? { href: e, crossOrigin: void 0 } : e;
}
function mt(e, t) {
  if (t.length === 0) return;
  if (t.length === 1) {
    e.push(t[0]);
    return;
  }
  const r = new Set();
  for (const n of t) {
    const s = JSON.stringify(n);
    r.has(s) || (r.add(s), e.push(n));
  }
}
function Mi(e) {
  return typeof e == "string" ? { href: e, crossOrigin: void 0 } : e;
}
var os = class {
    get to() {
      return this._to;
    }
    get id() {
      return this._id;
    }
    get path() {
      return this._path;
    }
    get fullPath() {
      return this._fullPath;
    }
    constructor(e) {
      if (
        ((this.init = (t) => {
          this.originalIndex = t.originalIndex;
          const r = this.options,
            n = !r?.path && !r?.id;
          ((this.parentRoute = this.options.getParentRoute?.()),
            n ? (this._path = Re) : this.parentRoute || Q());
          let s = n ? Re : r?.path;
          s && s !== "/" && (s = Qn(s));
          const o = r?.id || s;
          let i = n ? Re : St([this.parentRoute.id === "__root__" ? "" : this.parentRoute.id, o]);
          (s === "__root__" && (s = "/"), i !== "__root__" && (i = St(["/", i])));
          const c = i === "__root__" ? "/" : St([this.parentRoute.fullPath, s]);
          ((this._path = s), (this._id = i), (this._fullPath = c), (this._to = re(c)));
        }),
        (this.addChildren = (t) => this._addFileChildren(t)),
        (this._addFileChildren = (t) => (
          Array.isArray(t) && (this.children = t),
          typeof t == "object" && t !== null && (this.children = Object.values(t)),
          this
        )),
        (this._addFileTypes = () => this),
        (this.updateLoader = (t) => (Object.assign(this.options, t), this)),
        (this.update = (t) => (Object.assign(this.options, t), this)),
        (this.lazy = (t) => ((this.lazyFn = t), this)),
        (this.redirect = (t) => Jn({ from: this.fullPath, ...t })),
        (this.options = e || {}),
        (this.isRoot = !e?.getParentRoute),
        e?.id && e?.path)
      )
        throw new Error("Route cannot have both an 'id' and a 'path' option.");
    }
  },
  Ti = class extends os {
    constructor(e) {
      super(e);
    }
  },
  Ai = ((e) => (
    (e[(e.AggregateError = 1)] = "AggregateError"),
    (e[(e.ArrowFunction = 2)] = "ArrowFunction"),
    (e[(e.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (e[(e.ObjectAssign = 8)] = "ObjectAssign"),
    (e[(e.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    (e[(e.RegExp = 32)] = "RegExp"),
    e
  ))(Ai || {}),
  gt = "__SEROVAL_REFS__",
  yt = new Map();
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, gt, {
      value: yt,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
    ? Object.defineProperty(window, gt, {
        value: yt,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < "u"
      ? Object.defineProperty(self, gt, {
          value: yt,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < "u" &&
        Object.defineProperty(global, gt, {
          value: yt,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
var Oi = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, r) => {
        ((e.s = t), (e.f = r));
      })),
      e
    );
  },
  ki = (e, t) => {
    (e.s(t), (e.p.s = 1), (e.p.v = t));
  },
  Fi = (e, t) => {
    (e.f(t), (e.p.s = 2), (e.p.v = t));
  };
Oi.toString();
ki.toString();
Fi.toString();
var ji = () => {
    let e = [],
      t = [],
      r = !0,
      n = !1,
      s = 0,
      o = (a, l, f) => {
        for (f = 0; f < s; f++) t[f] && t[f][l](a);
      },
      i = (a, l, f, u) => {
        for (l = 0, f = e.length; l < f; l++)
          ((u = e[l]), !r && l === f - 1 ? a[n ? "return" : "throw"](u) : a.next(u));
      },
      c = (a, l) => (
        r && ((l = s++), (t[l] = a)),
        i(a),
        () => {
          r && ((t[l] = t[s]), (t[s--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (a) => c(a),
      next: (a) => {
        r && (e.push(a), o(a, "next"));
      },
      throw: (a) => {
        r && (e.push(a), o(a, "throw"), (r = !1), (n = !1), (t.length = 0));
      },
      return: (a) => {
        r && (e.push(a), o(a, "return"), (r = !1), (n = !0), (t.length = 0));
      },
    };
  },
  Di = (e) => {
    let t = atob(e),
      r = t.length,
      n = new Uint8Array(r);
    for (let s = 0; s < r; s++) n[s] = t.charCodeAt(s);
    return n.buffer;
  };
Di.toString();
function it() {
  return ji();
}
var Ni = ((e) => ((e[(e.Vanilla = 1)] = "Vanilla"), (e[(e.Cross = 2)] = "Cross"), e))(Ni || {});
var Bi = () => T;
Bi.toString();
function Ui(e) {
  return {
    tag: "$TSR/t/" + e.key,
    test: e.test,
    parse: {
      sync(t, r, n) {
        return { v: r.parse(e.toSerializable(t)) };
      },
      async async(t, r, n) {
        return { v: await r.parse(e.toSerializable(t)) };
      },
      stream(t, r, n) {
        return { v: r.parse(e.toSerializable(t)) };
      },
    },
    serialize: void 0,
    deserialize(t, r, n) {
      return e.fromSerializable(r.deserialize(t.v));
    },
  };
}
var $i = class {
  constructor(e, t) {
    ((this.stream = e), (this.hint = t?.hint ?? "binary"));
  }
};
const Tt = globalThis.Buffer,
  is = !!Tt && typeof Tt.from == "function";
function as(e) {
  if (e.length === 0) return "";
  if (is) return Tt.from(e).toString("base64");
  const t = 32768,
    r = [];
  for (let n = 0; n < e.length; n += t) {
    const s = e.subarray(n, n + t);
    r.push(String.fromCharCode.apply(null, s));
  }
  return btoa(r.join(""));
}
function cs(e) {
  if (e.length === 0) return new Uint8Array(0);
  if (is) {
    const n = Tt.from(e, "base64");
    return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
  }
  const t = atob(e),
    r = new Uint8Array(t.length);
  for (let n = 0; n < t.length; n++) r[n] = t.charCodeAt(n);
  return r;
}
const Qe = Object.create(null),
  Ge = Object.create(null),
  zi = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(r) {
            try {
              t.enqueue(cs(r));
            } catch {}
          },
          throw(r) {
            t.error(r);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  qi = new TextEncoder(),
  Hi = (e) =>
    new ReadableStream({
      start(t) {
        e.on({
          next(r) {
            try {
              typeof r == "string" ? t.enqueue(qi.encode(r)) : t.enqueue(cs(r.$b64));
            } catch {}
          },
          throw(r) {
            t.error(r);
          },
          return() {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Vi =
    "(s=>new ReadableStream({start(c){s.on({next(b){try{const d=atob(b),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}catch(_){}},throw(e){c.error(e)},return(){try{c.close()}catch(_){}}})}}))",
  Wi =
    "(s=>{const e=new TextEncoder();return new ReadableStream({start(c){s.on({next(v){try{if(typeof v==='string'){c.enqueue(e.encode(v))}else{const d=atob(v.$b64),a=new Uint8Array(d.length);for(let i=0;i<d.length;i++)a[i]=d.charCodeAt(i);c.enqueue(a)}}catch(_){}},throw(x){c.error(x)},return(){try{c.close()}catch(_){}}})}})})";
function cn(e) {
  const t = it(),
    r = e.getReader();
  return (
    (async () => {
      try {
        for (;;) {
          const { done: n, value: s } = await r.read();
          if (n) {
            t.return(void 0);
            break;
          }
          t.next(as(s));
        }
      } catch (n) {
        t.throw(n);
      } finally {
        r.releaseLock();
      }
    })(),
    t
  );
}
function un(e) {
  const t = it(),
    r = e.getReader(),
    n = new TextDecoder("utf-8", { fatal: !0 });
  return (
    (async () => {
      try {
        for (;;) {
          const { done: s, value: o } = await r.read();
          if (s) {
            try {
              const i = n.decode();
              i.length > 0 && t.next(i);
            } catch {}
            t.return(void 0);
            break;
          }
          try {
            const i = n.decode(o, { stream: !0 });
            i.length > 0 && t.next(i);
          } catch {
            t.next({ $b64: as(o) });
          }
        }
      } catch (s) {
        t.throw(s);
      } finally {
        r.releaseLock();
      }
    })(),
    t
  );
}
const Ki = {
  tag: "tss/RawStream",
  extends: [
    {
      tag: "tss/RawStreamFactory",
      test(e) {
        return e === Qe;
      },
      parse: {
        sync(e, t, r) {
          return {};
        },
        async async(e, t, r) {
          return {};
        },
        stream(e, t, r) {
          return {};
        },
      },
      serialize(e, t, r) {
        return Vi;
      },
      deserialize(e, t, r) {
        return Qe;
      },
    },
    {
      tag: "tss/RawStreamFactoryText",
      test(e) {
        return e === Ge;
      },
      parse: {
        sync(e, t, r) {
          return {};
        },
        async async(e, t, r) {
          return {};
        },
        stream(e, t, r) {
          return {};
        },
      },
      serialize(e, t, r) {
        return Wi;
      },
      deserialize(e, t, r) {
        return Ge;
      },
    },
  ],
  test(e) {
    return e instanceof $i;
  },
  parse: {
    sync(e, t, r) {
      const n = e.hint === "text" ? Ge : Qe;
      return { hint: t.parse(e.hint), factory: t.parse(n), stream: t.parse(it()) };
    },
    async async(e, t, r) {
      const n = e.hint === "text" ? Ge : Qe,
        s = e.hint === "text" ? un(e.stream) : cn(e.stream);
      return { hint: await t.parse(e.hint), factory: await t.parse(n), stream: await t.parse(s) };
    },
    stream(e, t, r) {
      const n = e.hint === "text" ? Ge : Qe,
        s = e.hint === "text" ? un(e.stream) : cn(e.stream);
      return { hint: t.parse(e.hint), factory: t.parse(n), stream: t.parse(s) };
    },
  },
  serialize(e, t, r) {
    return "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")";
  },
  deserialize(e, t, r) {
    const n = t.deserialize(e.stream);
    return t.deserialize(e.hint) === "text" ? Hi(n) : zi(n);
  },
};
function Qi(e) {
  return {
    tag: "tss/RawStream",
    test: () => !1,
    parse: {},
    serialize() {
      throw new Error(
        "RawStreamDeserializePlugin.serialize should not be called. Client only deserializes.",
      );
    },
    deserialize(t, r, n) {
      return e(typeof r?.deserialize == "function" ? r.deserialize(t.streamId) : t.streamId);
    },
  };
}
const Gi = {
  tag: "$TSR/Error",
  test(e) {
    return e instanceof Error;
  },
  parse: {
    sync(e, t) {
      return { message: t.parse(e.message) };
    },
    async async(e, t) {
      return { message: await t.parse(e.message) };
    },
    stream(e, t) {
      return { message: t.parse(e.message) };
    },
  },
  serialize(e, t) {
    return "new Error(" + t.serialize(e.message) + ")";
  },
  deserialize(e, t) {
    return new Error(t.deserialize(e.message));
  },
};
var ce = {},
  us = (e) =>
    new ReadableStream({
      start: (t) => {
        e.on({
          next: (r) => {
            try {
              t.enqueue(r);
            } catch {}
          },
          throw: (r) => {
            t.error(r);
          },
          return: () => {
            try {
              t.close();
            } catch {}
          },
        });
      },
    }),
  Yi = {
    tag: "seroval-plugins/web/ReadableStreamFactory",
    test(e) {
      return e === ce;
    },
    parse: {
      sync() {
        return ce;
      },
      async async() {
        return await Promise.resolve(ce);
      },
      stream() {
        return ce;
      },
    },
    serialize() {
      return us.toString();
    },
    deserialize() {
      return ce;
    },
  };
function ln(e) {
  let t = it(),
    r = e.getReader();
  async function n() {
    try {
      let s = await r.read();
      s.done ? t.return(s.value) : (t.next(s.value), await n());
    } catch (s) {
      t.throw(s);
    }
  }
  return (n().catch(() => {}), t);
}
var Ji = {
    tag: "seroval/plugins/web/ReadableStream",
    extends: [Yi],
    test(e) {
      return typeof ReadableStream > "u" ? !1 : e instanceof ReadableStream;
    },
    parse: {
      sync(e, t) {
        return { factory: t.parse(ce), stream: t.parse(it()) };
      },
      async async(e, t) {
        return { factory: await t.parse(ce), stream: await t.parse(ln(e)) };
      },
      stream(e, t) {
        return { factory: t.parse(ce), stream: t.parse(ln(e)) };
      },
    },
    serialize(e, t) {
      return "(" + t.serialize(e.factory) + ")(" + t.serialize(e.stream) + ")";
    },
    deserialize(e, t) {
      let r = t.deserialize(e.stream);
      return us(r);
    },
  },
  Xi = Ji;
const Zi = [Gi, Ki, Xi];
function ea() {
  return [...(Un()?.serializationAdapters?.map(Ui) ?? []), ...Zi];
}
var fn = new TextDecoder(),
  ta = new Uint8Array(0),
  dn = 16 * 1024 * 1024,
  hn = 32 * 1024 * 1024,
  pn = 1024,
  mn = 1e5;
function ra(e) {
  const t = new Map(),
    r = new Map(),
    n = new Set();
  let s = !1,
    o = null,
    i = 0,
    c;
  const a = new ReadableStream({
    start(u) {
      c = u;
    },
    cancel() {
      s = !0;
      try {
        o?.cancel();
      } catch {}
      (t.forEach((u) => {
        try {
          u.error(new Error("Framed response cancelled"));
        } catch {}
      }),
        t.clear(),
        r.clear(),
        n.clear());
    },
  });
  function l(u) {
    const h = r.get(u);
    if (h) return h;
    if (n.has(u))
      return new ReadableStream({
        start(g) {
          g.close();
        },
      });
    if (r.size >= pn) throw new Error(`Too many raw streams in framed response (max ${pn})`);
    const p = new ReadableStream({
      start(g) {
        t.set(u, g);
      },
      cancel() {
        (n.add(u), t.delete(u), r.delete(u));
      },
    });
    return (r.set(u, p), p);
  }
  function f(u) {
    return (l(u), t.get(u));
  }
  return (
    (async () => {
      const u = e.getReader();
      o = u;
      const h = [];
      let p = 0;
      function g() {
        if (p < 9) return null;
        const m = h[0];
        if (m.length >= 9)
          return {
            type: m[0],
            streamId: ((m[1] << 24) | (m[2] << 16) | (m[3] << 8) | m[4]) >>> 0,
            length: ((m[5] << 24) | (m[6] << 16) | (m[7] << 8) | m[8]) >>> 0,
          };
        const y = new Uint8Array(9);
        let w = 0,
          S = 9;
        for (let b = 0; b < h.length && S > 0; b++) {
          const R = h[b],
            C = Math.min(R.length, S);
          (y.set(R.subarray(0, C), w), (w += C), (S -= C));
        }
        return {
          type: y[0],
          streamId: ((y[1] << 24) | (y[2] << 16) | (y[3] << 8) | y[4]) >>> 0,
          length: ((y[5] << 24) | (y[6] << 16) | (y[7] << 8) | y[8]) >>> 0,
        };
      }
      function v(m) {
        if (m === 0) return ta;
        const y = new Uint8Array(m);
        let w = 0,
          S = m;
        for (; S > 0 && h.length > 0; ) {
          const b = h[0];
          if (!b) break;
          const R = Math.min(b.length, S);
          (y.set(b.subarray(0, R), w),
            (w += R),
            (S -= R),
            R === b.length ? h.shift() : (h[0] = b.subarray(R)));
        }
        return ((p -= m), y);
      }
      try {
        for (;;) {
          const { done: m, value: y } = await u.read();
          if (s || m) break;
          if (y) {
            if (p + y.length > hn) throw new Error(`Framed response buffer exceeded ${hn} bytes`);
            for (h.push(y), p += y.length; ; ) {
              const w = g();
              if (!w) break;
              const { type: S, streamId: b, length: R } = w;
              if (S !== te.JSON && S !== te.CHUNK && S !== te.END && S !== te.ERROR)
                throw new Error(`Unknown frame type: ${S}`);
              if (S === te.JSON) {
                if (b !== 0) throw new Error("Invalid JSON frame streamId (expected 0)");
              } else if (b === 0) throw new Error("Invalid raw frame streamId (expected non-zero)");
              if (R > dn) throw new Error(`Frame payload too large: ${R} bytes (max ${dn})`);
              const C = 9 + R;
              if (p < C) break;
              if (++i > mn) throw new Error(`Too many frames in framed response (max ${mn})`);
              v(9);
              const P = v(R);
              switch (S) {
                case te.JSON:
                  try {
                    c.enqueue(fn.decode(P));
                  } catch {}
                  break;
                case te.CHUNK: {
                  const _ = f(b);
                  _ && _.enqueue(P);
                  break;
                }
                case te.END: {
                  const _ = f(b);
                  if ((n.add(b), _)) {
                    try {
                      _.close();
                    } catch {}
                    t.delete(b);
                  }
                  break;
                }
                case te.ERROR: {
                  const _ = f(b);
                  if ((n.add(b), _)) {
                    const E = fn.decode(P);
                    (_.error(new Error(E)), t.delete(b));
                  }
                  break;
                }
              }
            }
          }
        }
        if (p !== 0) throw new Error("Incomplete frame at end of framed response");
        try {
          c.close();
        } catch {}
        (t.forEach((m) => {
          try {
            m.close();
          } catch {}
        }),
          t.clear());
      } catch (m) {
        try {
          c.error(m);
        } catch {}
        (t.forEach((y) => {
          try {
            y.error(m);
          } catch {}
        }),
          t.clear());
      } finally {
        try {
          u.releaseLock();
        } catch {}
        o = null;
      }
    })(),
    { getOrCreateStream: l, jsonChunks: a }
  );
}
var na = ((e) => (
    (e[(e.AggregateError = 1)] = "AggregateError"),
    (e[(e.ArrowFunction = 2)] = "ArrowFunction"),
    (e[(e.ErrorPrototypeStack = 4)] = "ErrorPrototypeStack"),
    (e[(e.ObjectAssign = 8)] = "ObjectAssign"),
    (e[(e.BigIntTypedArray = 16)] = "BigIntTypedArray"),
    (e[(e.RegExp = 32)] = "RegExp"),
    e
  ))(na || {}),
  ne = Symbol.asyncIterator,
  ls = Symbol.hasInstance,
  De = Symbol.isConcatSpreadable,
  se = Symbol.iterator,
  fs = Symbol.match,
  ds = Symbol.matchAll,
  hs = Symbol.replace,
  ps = Symbol.search,
  ms = Symbol.species,
  gs = Symbol.split,
  ys = Symbol.toPrimitive,
  Ne = Symbol.toStringTag,
  vs = Symbol.unscopables,
  ws = {
    [ne]: 0,
    [ls]: 1,
    [De]: 2,
    [se]: 3,
    [fs]: 4,
    [ds]: 5,
    [hs]: 6,
    [ps]: 7,
    [ms]: 8,
    [gs]: 9,
    [ys]: 10,
    [Ne]: 11,
    [vs]: 12,
  },
  sa = {
    0: ne,
    1: ls,
    2: De,
    3: se,
    4: fs,
    5: ds,
    6: hs,
    7: ps,
    8: ms,
    9: gs,
    10: ys,
    11: Ne,
    12: vs,
  },
  d = void 0,
  oa = {
    2: !0,
    3: !1,
    1: d,
    0: null,
    4: -0,
    5: Number.POSITIVE_INFINITY,
    6: Number.NEGATIVE_INFINITY,
    7: Number.NaN,
  },
  ia = {
    0: "Error",
    1: "EvalError",
    2: "RangeError",
    3: "ReferenceError",
    4: "SyntaxError",
    5: "TypeError",
    6: "URIError",
  },
  aa = {
    0: Error,
    1: EvalError,
    2: RangeError,
    3: ReferenceError,
    4: SyntaxError,
    5: TypeError,
    6: URIError,
  };
function O(e, t, r, n, s, o, i, c, a, l, f, u) {
  return { t: e, i: t, s: r, c: n, m: s, p: o, e: i, a: c, f: a, b: l, o: f, l: u };
}
function de(e) {
  return O(2, d, e, d, d, d, d, d, d, d, d, d);
}
var bs = de(2),
  Ss = de(3),
  ca = de(1),
  ua = de(0),
  la = de(4),
  fa = de(5),
  da = de(6),
  ha = de(7);
function pa(e) {
  switch (e) {
    case '"':
      return '\\"';
    case "\\":
      return "\\\\";
    case `
`:
      return "\\n";
    case "\r":
      return "\\r";
    case "\b":
      return "\\b";
    case "	":
      return "\\t";
    case "\f":
      return "\\f";
    case "<":
      return "\\x3C";
    case "\u2028":
      return "\\u2028";
    case "\u2029":
      return "\\u2029";
    default:
      return d;
  }
}
function he(e) {
  let t = "",
    r = 0,
    n;
  for (let s = 0, o = e.length; s < o; s++)
    ((n = pa(e[s])), n && ((t += e.slice(r, s) + n), (r = s + 1)));
  return (r === 0 ? (t = e) : (t += e.slice(r)), t);
}
function ma(e) {
  switch (e) {
    case "\\\\":
      return "\\";
    case '\\"':
      return '"';
    case "\\n":
      return `
`;
    case "\\r":
      return "\r";
    case "\\b":
      return "\b";
    case "\\t":
      return "	";
    case "\\f":
      return "\f";
    case "\\x3C":
      return "<";
    case "\\u2028":
      return "\u2028";
    case "\\u2029":
      return "\u2029";
    default:
      return e;
  }
}
function pe(e) {
  return e.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g, ma);
}
var vt = "__SEROVAL_REFS__",
  xs = new Map(),
  ke = new Map();
function Ps(e) {
  return xs.has(e);
}
function ga(e) {
  return ke.has(e);
}
function ya(e) {
  if (Ps(e)) return xs.get(e);
  throw new Qa(e);
}
function va(e) {
  if (ga(e)) return ke.get(e);
  throw new Ga(e);
}
typeof globalThis < "u"
  ? Object.defineProperty(globalThis, vt, {
      value: ke,
      configurable: !0,
      writable: !1,
      enumerable: !1,
    })
  : typeof window < "u"
    ? Object.defineProperty(window, vt, {
        value: ke,
        configurable: !0,
        writable: !1,
        enumerable: !1,
      })
    : typeof self < "u"
      ? Object.defineProperty(self, vt, {
          value: ke,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        })
      : typeof global < "u" &&
        Object.defineProperty(global, vt, {
          value: ke,
          configurable: !0,
          writable: !1,
          enumerable: !1,
        });
function Pr(e) {
  return e instanceof EvalError
    ? 1
    : e instanceof RangeError
      ? 2
      : e instanceof ReferenceError
        ? 3
        : e instanceof SyntaxError
          ? 4
          : e instanceof TypeError
            ? 5
            : e instanceof URIError
              ? 6
              : 0;
}
function wa(e) {
  let t = ia[Pr(e)];
  return e.name !== t
    ? { name: e.name }
    : e.constructor.name !== t
      ? { name: e.constructor.name }
      : {};
}
function Rs(e, t) {
  let r = wa(e),
    n = Object.getOwnPropertyNames(e);
  for (let s = 0, o = n.length, i; s < o; s++)
    ((i = n[s]),
      i !== "name" &&
        i !== "message" &&
        (i === "stack" ? t & 4 && ((r = r || {}), (r[i] = e[i])) : ((r = r || {}), (r[i] = e[i]))));
  return r;
}
function _s(e) {
  return Object.isFrozen(e) ? 3 : Object.isSealed(e) ? 2 : Object.isExtensible(e) ? 0 : 1;
}
function ba(e) {
  switch (e) {
    case Number.POSITIVE_INFINITY:
      return fa;
    case Number.NEGATIVE_INFINITY:
      return da;
  }
  return e !== e ? ha : Object.is(e, -0) ? la : O(0, d, e, d, d, d, d, d, d, d, d, d);
}
function Cs(e) {
  return O(1, d, he(e), d, d, d, d, d, d, d, d, d);
}
function Sa(e) {
  return O(3, d, "" + e, d, d, d, d, d, d, d, d, d);
}
function xa(e) {
  return O(4, e, d, d, d, d, d, d, d, d, d, d);
}
function Pa(e, t) {
  let r = t.valueOf();
  return O(5, e, r !== r ? "" : t.toISOString(), d, d, d, d, d, d, d, d, d);
}
function Ra(e, t) {
  return O(6, e, d, he(t.source), t.flags, d, d, d, d, d, d, d);
}
function _a(e, t) {
  return O(17, e, ws[t], d, d, d, d, d, d, d, d, d);
}
function Ca(e, t) {
  return O(18, e, he(ya(t)), d, d, d, d, d, d, d, d, d);
}
function Ea(e, t, r) {
  return O(25, e, r, he(t), d, d, d, d, d, d, d, d);
}
function Ia(e, t, r) {
  return O(9, e, d, d, d, d, d, r, d, d, _s(t), d);
}
function La(e, t) {
  return O(21, e, d, d, d, d, d, d, t, d, d, d);
}
function Ma(e, t, r) {
  return O(15, e, d, t.constructor.name, d, d, d, d, r, t.byteOffset, d, t.length);
}
function Ta(e, t, r) {
  return O(16, e, d, t.constructor.name, d, d, d, d, r, t.byteOffset, d, t.byteLength);
}
function Aa(e, t, r) {
  return O(20, e, d, d, d, d, d, d, r, t.byteOffset, d, t.byteLength);
}
function Oa(e, t, r) {
  return O(13, e, Pr(t), d, he(t.message), r, d, d, d, d, d, d);
}
function ka(e, t, r) {
  return O(14, e, Pr(t), d, he(t.message), r, d, d, d, d, d, d);
}
function Fa(e, t) {
  return O(7, e, d, d, d, d, d, t, d, d, d, d);
}
function ja(e, t) {
  return O(28, d, d, d, d, d, d, [e, t], d, d, d, d);
}
function Da(e, t) {
  return O(30, d, d, d, d, d, d, [e, t], d, d, d, d);
}
function Na(e, t, r) {
  return O(31, e, d, d, d, d, d, r, t, d, d, d);
}
function Ba(e, t) {
  return O(32, e, d, d, d, d, d, d, t, d, d, d);
}
function Ua(e, t) {
  return O(33, e, d, d, d, d, d, d, t, d, d, d);
}
function $a(e, t) {
  return O(34, e, d, d, d, d, d, d, t, d, d, d);
}
function za(e, t, r, n) {
  return O(35, e, r, d, d, d, d, t, d, d, d, n);
}
var qa = { parsing: 1, serialization: 2, deserialization: 3 };
function Ha(e) {
  return `Seroval Error (step: ${qa[e]})`;
}
var Va = (e, t) => Ha(e),
  Es = class extends Error {
    constructor(e, t) {
      (super(Va(e)), (this.cause = t));
    }
  },
  gn = class extends Es {
    constructor(e) {
      super("parsing", e);
    }
  },
  Wa = class extends Es {
    constructor(e) {
      super("deserialization", e);
    }
  };
function oe(e) {
  return `Seroval Error (specific: ${e})`;
}
var Dt = class extends Error {
    constructor(e) {
      (super(oe(1)), (this.value = e));
    }
  },
  Is = class extends Error {
    constructor(e) {
      super(oe(2));
    }
  },
  Ka = class extends Error {
    constructor(e) {
      super(oe(3));
    }
  },
  at = class extends Error {
    constructor(e) {
      super(oe(4));
    }
  },
  Qa = class extends Error {
    constructor(e) {
      (super(oe(5)), (this.value = e));
    }
  },
  Ga = class extends Error {
    constructor(e) {
      super(oe(6));
    }
  },
  Ya = class extends Error {
    constructor(e) {
      super(oe(7));
    }
  },
  ie = class extends Error {
    constructor(e) {
      super(oe(8));
    }
  },
  Ja = class extends Error {
    constructor(e) {
      super(oe(9));
    }
  },
  Xa = class {
    constructor(e, t) {
      ((this.value = e), (this.replacement = t));
    }
  },
  Nt = () => {
    let e = { p: 0, s: 0, f: 0 };
    return (
      (e.p = new Promise((t, r) => {
        ((e.s = t), (e.f = r));
      })),
      e
    );
  },
  Za = (e, t) => {
    (e.s(t), (e.p.s = 1), (e.p.v = t));
  },
  ec = (e, t) => {
    (e.f(t), (e.p.s = 2), (e.p.v = t));
  };
Nt.toString();
Za.toString();
ec.toString();
var tc = () => {
    let e = [],
      t = [],
      r = !0,
      n = !1,
      s = 0,
      o = (a, l, f) => {
        for (f = 0; f < s; f++) t[f] && t[f][l](a);
      },
      i = (a, l, f, u) => {
        for (l = 0, f = e.length; l < f; l++)
          ((u = e[l]), !r && l === f - 1 ? a[n ? "return" : "throw"](u) : a.next(u));
      },
      c = (a, l) => (
        r && ((l = s++), (t[l] = a)),
        i(a),
        () => {
          r && ((t[l] = t[s]), (t[s--] = void 0));
        }
      );
    return {
      __SEROVAL_STREAM__: !0,
      on: (a) => c(a),
      next: (a) => {
        r && (e.push(a), o(a, "next"));
      },
      throw: (a) => {
        r && (e.push(a), o(a, "throw"), (r = !1), (n = !1), (t.length = 0));
      },
      return: (a) => {
        r && (e.push(a), o(a, "return"), (r = !1), (n = !0), (t.length = 0));
      },
    };
  },
  rc = (e) => (t) => () => {
    let r = 0,
      n = {
        [e]: () => n,
        next: () => {
          if (r > t.d) return { done: !0, value: void 0 };
          let s = r++,
            o = t.v[s];
          if (s === t.t) throw o;
          return { done: s === t.d, value: o };
        },
      };
    return n;
  },
  nc = (e, t) => (r) => () => {
    let n = 0,
      s = -1,
      o = !1,
      i = [],
      c = [],
      a = (f = 0, u = c.length) => {
        for (; f < u; f++) c[f].s({ done: !0, value: void 0 });
      };
    r.on({
      next: (f) => {
        let u = c.shift();
        (u && u.s({ done: !1, value: f }), i.push(f));
      },
      throw: (f) => {
        let u = c.shift();
        (u && u.f(f), a(), (s = i.length), (o = !0), i.push(f));
      },
      return: (f) => {
        let u = c.shift();
        (u && u.s({ done: !0, value: f }), a(), (s = i.length), i.push(f));
      },
    });
    let l = {
      [e]: () => l,
      next: () => {
        if (s === -1) {
          let h = n++;
          if (h >= i.length) {
            let p = t();
            return (c.push(p), p.p);
          }
          return { done: !1, value: i[h] };
        }
        if (n > s) return { done: !0, value: void 0 };
        let f = n++,
          u = i[f];
        if (f !== s) return { done: !1, value: u };
        if (o) throw u;
        return { done: !0, value: u };
      },
    };
    return l;
  },
  Ls = (e) => {
    let t = atob(e),
      r = t.length,
      n = new Uint8Array(r);
    for (let s = 0; s < r; s++) n[s] = t.charCodeAt(s);
    return n.buffer;
  };
Ls.toString();
function sc(e) {
  return "__SEROVAL_SEQUENCE__" in e;
}
function Ms(e, t, r) {
  return { __SEROVAL_SEQUENCE__: !0, v: e, t, d: r };
}
function oc(e) {
  let t = [],
    r = -1,
    n = -1,
    s = e[se]();
  for (;;)
    try {
      let o = s.next();
      if ((t.push(o.value), o.done)) {
        n = t.length - 1;
        break;
      }
    } catch (o) {
      ((r = t.length), t.push(o));
    }
  return Ms(t, r, n);
}
var ic = rc(se);
function ac(e) {
  return ic(e);
}
var cc = {},
  uc = {},
  lc = { 0: {}, 1: {}, 2: {}, 3: {}, 4: {}, 5: {} };
function fc(e) {
  return "__SEROVAL_STREAM__" in e;
}
function Ts() {
  return tc();
}
function dc(e) {
  let t = Ts(),
    r = e[ne]();
  async function n() {
    try {
      let s = await r.next();
      s.done ? t.return(s.value) : (t.next(s.value), await n());
    } catch (s) {
      t.throw(s);
    }
  }
  return (n().catch(() => {}), t);
}
var hc = nc(ne, Nt);
function pc(e) {
  return hc(e);
}
async function mc(e) {
  try {
    return [1, await e];
  } catch (t) {
    return [0, t];
  }
}
function gc(e, t) {
  return {
    plugins: t.plugins,
    mode: e,
    marked: new Set(),
    features: 63 ^ (t.disabledFeatures || 0),
    refs: t.refs || new Map(),
    depthLimit: t.depthLimit || 1e3,
  };
}
function Rt(e, t) {
  e.marked.add(t);
}
function yc(e, t) {
  let r = e.refs.size;
  return (e.refs.set(t, r), r);
}
function Bt(e, t) {
  let r = e.refs.get(t);
  return r != null ? (Rt(e, r), { type: 1, value: xa(r) }) : { type: 0, value: yc(e, t) };
}
function Rr(e, t) {
  let r = Bt(e, t);
  return r.type === 1 ? r : Ps(t) ? { type: 2, value: Ca(r.value, t) } : r;
}
function Pe(e, t) {
  let r = Rr(e, t);
  if (r.type !== 0) return r.value;
  if (t in ws) return _a(r.value, t);
  throw new Dt(t);
}
function Ut(e, t) {
  let r = Bt(e, lc[t]);
  return r.type === 1 ? r.value : O(26, r.value, t, d, d, d, d, d, d, d, d, d);
}
function vc(e) {
  let t = Bt(e, cc);
  return t.type === 1 ? t.value : O(27, t.value, d, d, d, d, d, d, Pe(e, se), d, d, d);
}
function wc(e) {
  let t = Bt(e, uc);
  return t.type === 1 ? t.value : O(29, t.value, d, d, d, d, d, [Ut(e, 1), Pe(e, ne)], d, d, d, d);
}
function bc(e, t, r, n) {
  return O(r ? 11 : 10, e, d, d, d, n, d, d, d, d, _s(t), d);
}
function Sc(e, t, r, n) {
  return O(8, t, d, d, d, d, { k: r, v: n }, d, Ut(e, 0), d, d, d);
}
function xc(e, t, r) {
  let n = new Uint8Array(r),
    s = "";
  for (let o = 0, i = n.length; o < i; o++) s += String.fromCharCode(n[o]);
  return O(19, t, he(btoa(s)), d, d, d, d, d, Ut(e, 5), d, d, d);
}
function Pc(e, t) {
  return { base: gc(e, t), child: void 0 };
}
var Rc = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  parse(e) {
    return N(this._p, this.depth, e);
  }
};
async function _c(e, t, r) {
  let n = [];
  for (let s = 0, o = r.length; s < o; s++) s in r ? (n[s] = await N(e, t, r[s])) : (n[s] = 0);
  return n;
}
async function Cc(e, t, r, n) {
  return Ia(r, n, await _c(e, t, n));
}
async function _r(e, t, r) {
  let n = Object.entries(r),
    s = [],
    o = [];
  for (let i = 0, c = n.length; i < c; i++) (s.push(he(n[i][0])), o.push(await N(e, t, n[i][1])));
  return (
    se in r && (s.push(Pe(e.base, se)), o.push(ja(vc(e.base), await N(e, t, oc(r))))),
    ne in r && (s.push(Pe(e.base, ne)), o.push(Da(wc(e.base), await N(e, t, dc(r))))),
    Ne in r && (s.push(Pe(e.base, Ne)), o.push(Cs(r[Ne]))),
    De in r && (s.push(Pe(e.base, De)), o.push(r[De] ? bs : Ss)),
    { k: s, v: o }
  );
}
async function Xt(e, t, r, n, s) {
  return bc(r, n, s, await _r(e, t, n));
}
async function Ec(e, t, r, n) {
  return La(r, await N(e, t, n.valueOf()));
}
async function Ic(e, t, r, n) {
  return Ma(r, n, await N(e, t, n.buffer));
}
async function Lc(e, t, r, n) {
  return Ta(r, n, await N(e, t, n.buffer));
}
async function Mc(e, t, r, n) {
  return Aa(r, n, await N(e, t, n.buffer));
}
async function yn(e, t, r, n) {
  let s = Rs(n, e.base.features);
  return Oa(r, n, s ? await _r(e, t, s) : d);
}
async function Tc(e, t, r, n) {
  let s = Rs(n, e.base.features);
  return ka(r, n, s ? await _r(e, t, s) : d);
}
async function Ac(e, t, r, n) {
  let s = [],
    o = [];
  for (let [i, c] of n.entries()) (s.push(await N(e, t, i)), o.push(await N(e, t, c)));
  return Sc(e.base, r, s, o);
}
async function Oc(e, t, r, n) {
  let s = [];
  for (let o of n.keys()) s.push(await N(e, t, o));
  return Fa(r, s);
}
async function As(e, t, r, n) {
  let s = e.base.plugins;
  if (s)
    for (let o = 0, i = s.length; o < i; o++) {
      let c = s[o];
      if (c.parse.async && c.test(n))
        return Ea(r, c.tag, await c.parse.async(n, new Rc(e, t), { id: r }));
    }
  return d;
}
async function kc(e, t, r, n) {
  let [s, o] = await mc(n);
  return O(12, r, s, d, d, d, d, d, await N(e, t, o), d, d, d);
}
function Fc(e, t, r, n, s) {
  let o = [],
    i = r.on({
      next: (c) => {
        (Rt(this.base, t),
          N(this, e, c).then(
            (a) => {
              o.push(Ba(t, a));
            },
            (a) => {
              (s(a), i());
            },
          ));
      },
      throw: (c) => {
        (Rt(this.base, t),
          N(this, e, c).then(
            (a) => {
              (o.push(Ua(t, a)), n(o), i());
            },
            (a) => {
              (s(a), i());
            },
          ));
      },
      return: (c) => {
        (Rt(this.base, t),
          N(this, e, c).then(
            (a) => {
              (o.push($a(t, a)), n(o), i());
            },
            (a) => {
              (s(a), i());
            },
          ));
      },
    });
}
async function jc(e, t, r, n) {
  return Na(r, Ut(e.base, 4), await new Promise(Fc.bind(e, t, r, n)));
}
async function Dc(e, t, r, n) {
  let s = [];
  for (let o = 0, i = n.v.length; o < i; o++) s[o] = await N(e, t, n.v[o]);
  return za(r, s, n.t, n.d);
}
async function Nc(e, t, r, n) {
  if (Array.isArray(n)) return Cc(e, t, r, n);
  if (fc(n)) return jc(e, t, r, n);
  if (sc(n)) return Dc(e, t, r, n);
  let s = n.constructor;
  if (s === Xa) return N(e, t, n.replacement);
  let o = await As(e, t, r, n);
  if (o) return o;
  switch (s) {
    case Object:
      return Xt(e, t, r, n, !1);
    case d:
      return Xt(e, t, r, n, !0);
    case Date:
      return Pa(r, n);
    case Error:
    case EvalError:
    case RangeError:
    case ReferenceError:
    case SyntaxError:
    case TypeError:
    case URIError:
      return yn(e, t, r, n);
    case Number:
    case Boolean:
    case String:
    case BigInt:
      return Ec(e, t, r, n);
    case ArrayBuffer:
      return xc(e.base, r, n);
    case Int8Array:
    case Int16Array:
    case Int32Array:
    case Uint8Array:
    case Uint16Array:
    case Uint32Array:
    case Uint8ClampedArray:
    case Float32Array:
    case Float64Array:
      return Ic(e, t, r, n);
    case DataView:
      return Mc(e, t, r, n);
    case Map:
      return Ac(e, t, r, n);
    case Set:
      return Oc(e, t, r, n);
  }
  if (s === Promise || n instanceof Promise) return kc(e, t, r, n);
  let i = e.base.features;
  if (i & 32 && s === RegExp) return Ra(r, n);
  if (i & 16)
    switch (s) {
      case BigInt64Array:
      case BigUint64Array:
        return Lc(e, t, r, n);
    }
  if (i & 1 && typeof AggregateError < "u" && (s === AggregateError || n instanceof AggregateError))
    return Tc(e, t, r, n);
  if (n instanceof Error) return yn(e, t, r, n);
  if (se in n || ne in n) return Xt(e, t, r, n, !!s);
  throw new Dt(n);
}
async function Bc(e, t, r) {
  let n = Rr(e.base, r);
  if (n.type !== 0) return n.value;
  let s = await As(e, t, n.value, r);
  if (s) return s;
  throw new Dt(r);
}
async function N(e, t, r) {
  switch (typeof r) {
    case "boolean":
      return r ? bs : Ss;
    case "undefined":
      return ca;
    case "string":
      return Cs(r);
    case "number":
      return ba(r);
    case "bigint":
      return Sa(r);
    case "object": {
      if (r) {
        let n = Rr(e.base, r);
        return n.type === 0 ? await Nc(e, t + 1, n.value, r) : n.value;
      }
      return ua;
    }
    case "symbol":
      return Pe(e.base, r);
    case "function":
      return Bc(e, t, r);
    default:
      throw new Dt(r);
  }
}
async function Uc(e, t) {
  try {
    return await N(e, 0, t);
  } catch (r) {
    throw r instanceof gn ? r : new gn(r);
  }
}
var $c = ((e) => ((e[(e.Vanilla = 1)] = "Vanilla"), (e[(e.Cross = 2)] = "Cross"), e))($c || {});
function Os(e, t) {
  for (let r = 0, n = t.length; r < n; r++) {
    let s = t[r];
    e.has(s) || (e.add(s), s.extends && Os(e, s.extends));
  }
}
function ks(e) {
  if (e) {
    let t = new Set();
    return (Os(t, e), [...t]);
  }
}
function zc(e) {
  switch (e) {
    case "Int8Array":
      return Int8Array;
    case "Int16Array":
      return Int16Array;
    case "Int32Array":
      return Int32Array;
    case "Uint8Array":
      return Uint8Array;
    case "Uint16Array":
      return Uint16Array;
    case "Uint32Array":
      return Uint32Array;
    case "Uint8ClampedArray":
      return Uint8ClampedArray;
    case "Float32Array":
      return Float32Array;
    case "Float64Array":
      return Float64Array;
    case "BigInt64Array":
      return BigInt64Array;
    case "BigUint64Array":
      return BigUint64Array;
    default:
      throw new Ya(e);
  }
}
var qc = 1e6,
  Hc = 1e4,
  Vc = 2e4;
function Fs(e, t) {
  switch (t) {
    case 3:
      return Object.freeze(e);
    case 1:
      return Object.preventExtensions(e);
    case 2:
      return Object.seal(e);
    default:
      return e;
  }
}
var Wc = 1e3;
function Kc(e, t) {
  var r;
  let n = t.refs || new Map();
  return (
    "types" in n || Object.assign(n, { types: new Map() }),
    {
      mode: e,
      plugins: t.plugins,
      refs: n,
      features: (r = t.features) != null ? r : 63 ^ (t.disabledFeatures || 0),
      depthLimit: t.depthLimit || Wc,
    }
  );
}
function Qc(e) {
  return { mode: 2, base: Kc(2, e), child: d };
}
var Gc = class {
  constructor(e, t) {
    ((this._p = e), (this.depth = t));
  }
  deserialize(e) {
    return k(this._p, this.depth, e);
  }
};
function js(e, t) {
  if (t < 0 || !Number.isFinite(t) || !Number.isInteger(t)) throw new ie({ t: 4, i: t });
  if (e.refs.has(t)) throw new Error("Conflicted ref id: " + t);
}
function Yc(e, t, r) {
  return (js(e.base, t), e.state.marked.has(t) && e.base.refs.set(t, r), r);
}
function Jc(e, t, r) {
  return (js(e.base, t), e.base.refs.set(t, r), r);
}
function B(e, t, r) {
  return e.mode === 1 ? Yc(e, t, r) : Jc(e, t, r);
}
function fr(e, t, r) {
  if (Object.hasOwn(t, r)) return t[r];
  throw new ie(e);
}
function Xc(e, t) {
  return B(e, t.i, va(pe(t.s)));
}
function Zc(e, t, r) {
  let n = r.a,
    s = n.length,
    o = B(e, r.i, new Array(s));
  for (let i = 0, c; i < s; i++) ((c = n[i]), c && (o[i] = k(e, t, c)));
  return (Fs(o, r.o), o);
}
function eu(e) {
  switch (e) {
    case "constructor":
    case "__proto__":
    case "prototype":
    case "__defineGetter__":
    case "__defineSetter__":
    case "__lookupGetter__":
    case "__lookupSetter__":
      return !1;
    default:
      return !0;
  }
}
function tu(e) {
  switch (e) {
    case ne:
    case De:
    case Ne:
    case se:
      return !0;
    default:
      return !1;
  }
}
function vn(e, t, r) {
  eu(t)
    ? (e[t] = r)
    : Object.defineProperty(e, t, { value: r, configurable: !0, enumerable: !0, writable: !0 });
}
function ru(e, t, r, n, s) {
  if (typeof n == "string") vn(r, pe(n), k(e, t, s));
  else {
    let o = k(e, t, n);
    switch (typeof o) {
      case "string":
        vn(r, o, k(e, t, s));
        break;
      case "symbol":
        tu(o) && (r[o] = k(e, t, s));
        break;
      default:
        throw new ie(n);
    }
  }
}
function Ds(e, t, r) {
  e.base.refs.types.set(t, r);
}
function ct(e, t, r, n) {
  if (e.base.refs.types.get(r) !== n) throw new ie(t);
}
function Ns(e, t, r, n) {
  let s = r.k;
  if (s.length > 0) for (let o = 0, i = r.v, c = s.length; o < c; o++) ru(e, t, n, s[o], i[o]);
  return n;
}
function nu(e, t, r) {
  let n = B(e, r.i, r.t === 10 ? {} : Object.create(null));
  return (Ns(e, t, r.p, n), Fs(n, r.o), n);
}
function su(e, t) {
  return B(e, t.i, new Date(t.s));
}
function ou(e, t) {
  if (e.base.features & 32) {
    let r = pe(t.c);
    if (r.length > Vc) throw new ie(t);
    return B(e, t.i, new RegExp(r, t.m));
  }
  throw new Is(t);
}
function iu(e, t, r) {
  let n = B(e, r.i, new Set());
  for (let s = 0, o = r.a, i = o.length; s < i; s++) n.add(k(e, t, o[s]));
  return n;
}
function au(e, t, r) {
  let n = B(e, r.i, new Map());
  for (let s = 0, o = r.e.k, i = r.e.v, c = o.length; s < c; s++)
    n.set(k(e, t, o[s]), k(e, t, i[s]));
  return n;
}
function cu(e, t) {
  if (t.s.length > qc) throw new ie(t);
  return B(e, t.i, Ls(pe(t.s)));
}
function uu(e, t, r) {
  var n;
  let s = zc(r.c),
    o = k(e, t, r.f),
    i = (n = r.b) != null ? n : 0;
  if (i < 0 || i > o.byteLength) throw new ie(r);
  return B(e, r.i, new s(o, i, r.l));
}
function lu(e, t, r) {
  var n;
  let s = k(e, t, r.f),
    o = (n = r.b) != null ? n : 0;
  if (o < 0 || o > s.byteLength) throw new ie(r);
  return B(e, r.i, new DataView(s, o, r.l));
}
function Bs(e, t, r, n) {
  if (r.p) {
    let s = Ns(e, t, r.p, {});
    Object.defineProperties(n, Object.getOwnPropertyDescriptors(s));
  }
  return n;
}
function fu(e, t, r) {
  let n = B(e, r.i, new AggregateError([], pe(r.m)));
  return Bs(e, t, r, n);
}
function du(e, t, r) {
  let n = fr(r, aa, r.s),
    s = B(e, r.i, new n(pe(r.m)));
  return Bs(e, t, r, s);
}
function hu(e, t, r) {
  let n = Nt(),
    s = B(e, r.i, n.p),
    o = k(e, t, r.f);
  return (r.s ? n.s(o) : n.f(o), s);
}
function pu(e, t, r) {
  return B(e, r.i, Object(k(e, t, r.f)));
}
function mu(e, t, r) {
  let n = e.base.plugins;
  if (n) {
    let s = pe(r.c);
    for (let o = 0, i = n.length; o < i; o++) {
      let c = n[o];
      if (c.tag === s) return B(e, r.i, c.deserialize(r.s, new Gc(e, t), { id: r.i }));
    }
  }
  throw new Ka(r.c);
}
function gu(e, t) {
  let r = B(e, t.i, B(e, t.s, Nt()).p);
  return (Ds(e, t.s, 22), r);
}
function yu(e, t, r) {
  let n = e.base.refs.get(r.i);
  if (n) return (ct(e, r, r.i, 22), n.s(k(e, t, r.a[1])), d);
  throw new at("Promise");
}
function vu(e, t, r) {
  let n = e.base.refs.get(r.i);
  if (n) return (ct(e, r, r.i, 22), n.f(k(e, t, r.a[1])), d);
  throw new at("Promise");
}
function wu(e, t, r) {
  k(e, t, r.a[0]);
  let n = k(e, t, r.a[1]);
  return ac(n);
}
function bu(e, t, r) {
  k(e, t, r.a[0]);
  let n = k(e, t, r.a[1]);
  return pc(n);
}
function Su(e, t, r) {
  let n = B(e, r.i, Ts());
  Ds(e, r.i, 31);
  let s = r.a,
    o = s.length;
  if (o) for (let i = 0; i < o; i++) k(e, t, s[i]);
  return n;
}
function xu(e, t, r) {
  let n = e.base.refs.get(r.i);
  if (n) return (ct(e, r, r.i, 31), n.next(k(e, t, r.f)), d);
  throw new at("Stream");
}
function Pu(e, t, r) {
  let n = e.base.refs.get(r.i);
  if (n) return (ct(e, r, r.i, 31), n.throw(k(e, t, r.f)), d);
  throw new at("Stream");
}
function Ru(e, t, r) {
  let n = e.base.refs.get(r.i);
  if (n) return (ct(e, r, r.i, 31), n.return(k(e, t, r.f)), d);
  throw new at("Stream");
}
function _u(e, t, r) {
  return (k(e, t, r.f), d);
}
function Cu(e, t, r) {
  return (k(e, t, r.a[1]), d);
}
function Eu(e, t, r) {
  let n = B(e, r.i, Ms([], r.s, r.l));
  for (let s = 0, o = r.a.length; s < o; s++) n.v[s] = k(e, t, r.a[s]);
  return n;
}
function k(e, t, r) {
  if (t > e.base.depthLimit) throw new Ja(e.base.depthLimit);
  switch (((t += 1), r.t)) {
    case 2:
      return fr(r, oa, r.s);
    case 0:
      return Number(r.s);
    case 1:
      return pe(String(r.s));
    case 3:
      if (String(r.s).length > Hc) throw new ie(r);
      return BigInt(r.s);
    case 4:
      return e.base.refs.get(r.i);
    case 18:
      return Xc(e, r);
    case 9:
      return Zc(e, t, r);
    case 10:
    case 11:
      return nu(e, t, r);
    case 5:
      return su(e, r);
    case 6:
      return ou(e, r);
    case 7:
      return iu(e, t, r);
    case 8:
      return au(e, t, r);
    case 19:
      return cu(e, r);
    case 16:
    case 15:
      return uu(e, t, r);
    case 20:
      return lu(e, t, r);
    case 14:
      return fu(e, t, r);
    case 13:
      return du(e, t, r);
    case 12:
      return hu(e, t, r);
    case 17:
      return fr(r, sa, r.s);
    case 21:
      return pu(e, t, r);
    case 25:
      return mu(e, t, r);
    case 22:
      return gu(e, r);
    case 23:
      return yu(e, t, r);
    case 24:
      return vu(e, t, r);
    case 28:
      return wu(e, t, r);
    case 30:
      return bu(e, t, r);
    case 31:
      return Su(e, t, r);
    case 32:
      return xu(e, t, r);
    case 33:
      return Pu(e, t, r);
    case 34:
      return Ru(e, t, r);
    case 27:
      return _u(e, t, r);
    case 29:
      return Cu(e, t, r);
    case 35:
      return Eu(e, t, r);
    default:
      throw new Is(r);
  }
}
function Iu(e, t) {
  try {
    return k(e, 0, t);
  } catch (r) {
    throw new Wa(r);
  }
}
var Lu = () => T;
Lu.toString();
function wn(e, t) {
  let r = ks(t.plugins),
    n = Qc({
      plugins: r,
      refs: t.refs,
      features: t.features,
      disabledFeatures: t.disabledFeatures,
      depthLimit: t.depthLimit,
    });
  return Iu(n, e);
}
async function Mu(e, t = {}) {
  let r = ks(t.plugins),
    n = Pc(1, { plugins: r, disabledFeatures: t.disabledFeatures });
  return { t: await Uc(n, e), f: n.base.features, m: Array.from(n.base.marked) };
}
var nt = null;
async function dr(e) {
  e.length > 0 && (await Promise.allSettled(e));
}
var Tu = Object.prototype.hasOwnProperty;
function Us(e) {
  for (const t in e) if (Tu.call(e, t)) return !0;
  return !1;
}
async function Au(e, t, r) {
  nt || (nt = ea());
  const n = t[0],
    s = n.fetch ?? r,
    o = n.data instanceof FormData ? "formData" : "payload",
    i = n.headers ? new Headers(n.headers) : new Headers();
  if (
    (i.set("x-tsr-serverFn", "true"),
    o === "payload" && i.set("accept", `${wo}, application/x-ndjson, application/json`),
    n.method === "GET")
  ) {
    if (o === "formData") throw new Error("FormData is not supported with GET requests");
    const a = await $s(n);
    if (a !== void 0) {
      const l = Yn({ payload: a });
      e.includes("?") ? (e += `&${l}`) : (e += `?${l}`);
    }
  }
  let c;
  if (n.method === "POST") {
    const a = await Ou(n);
    (a?.contentType && i.set("content-type", a.contentType), (c = a?.body));
  }
  return await ku(async () => s(e, { method: n.method, headers: i, signal: n.signal, body: c }));
}
async function $s(e) {
  let t = !1;
  const r = {};
  if (
    (e.data !== void 0 && ((t = !0), (r.data = e.data)),
    e.context && Us(e.context) && ((t = !0), (r.context = e.context)),
    t)
  )
    return zs(r);
}
async function zs(e) {
  return JSON.stringify(await Promise.resolve(Mu(e, { plugins: nt })));
}
async function Ou(e) {
  if (e.data instanceof FormData) {
    let r;
    return (
      e.context && Us(e.context) && (r = await zs(e.context)),
      r !== void 0 && e.data.set(vo, r),
      { body: e.data }
    );
  }
  const t = await $s(e);
  if (t) return { body: t, contentType: "application/json" };
}
async function ku(e) {
  let t;
  try {
    t = await e();
  } catch (n) {
    if (n instanceof Response) t = n;
    else throw (console.log(n), n);
  }
  if (t.headers.get("x-tss-raw") === "true") return t;
  const r = t.headers.get("content-type");
  if ((r || Q(), t.headers.get("x-tss-serialized"))) {
    let n;
    if (r.includes("application/x-tss-framed")) {
      if ((xo(r), !t.body)) throw new Error("No response body for framed response");
      const { getOrCreateStream: s, jsonChunks: o } = ra(t.body),
        i = [Qi(s), ...(nt || [])],
        c = new Map();
      n = await Fu({
        jsonStream: o,
        onMessage: (a) => wn(a, { refs: c, plugins: i }),
        onError(a, l) {
          console.error(a, l);
        },
      });
    } else if (r.includes("application/json")) {
      const s = await t.json(),
        o = [];
      ((n = wn(s, { plugins: nt })), await dr(o));
    }
    if ((n || Q(), n instanceof Error)) throw n;
    return n;
  }
  if (r.includes("application/json")) {
    const n = await t.json(),
      s = Jo(n);
    if (s) throw s;
    if (U(n)) throw n;
    return n;
  }
  if (!t.ok) throw new Error(await t.text());
  return t;
}
async function Fu({ jsonStream: e, onMessage: t, onError: r }) {
  const n = e.getReader(),
    { value: s, done: o } = await n.read();
  if (o || !s) throw new Error("Stream ended before first object");
  const i = JSON.parse(s);
  let c = !1;
  const a = (async () => {
    try {
      for (;;) {
        const { value: u, done: h } = await n.read();
        if (h) break;
        if (u)
          try {
            const p = [];
            try {
              t(JSON.parse(u));
            } finally {
            }
            await dr(p);
          } catch (p) {
            r?.(`Invalid JSON: ${u}`, p);
          }
      }
    } catch (u) {
      c || r?.("Stream processing error:", u);
    }
  })();
  let l;
  const f = [];
  try {
    l = t(i);
  } catch (u) {
    throw ((c = !0), n.cancel().catch(() => {}), u);
  }
  return (
    await dr(f),
    Promise.resolve(l).catch(() => {
      ((c = !0), n.cancel().catch(() => {}));
    }),
    a.finally(() => {
      try {
        n.releaseLock();
      } catch {}
    }),
    l
  );
}
function ju(e) {
  const t = "/_serverFn/" + e;
  return Object.assign(
    (...s) => {
      const o = Un()?.serverFns?.fetch;
      return Au(t, s, o ?? fetch);
    },
    { url: t, serverFnMeta: { id: e }, [ir]: !0 },
  );
}
var Du = {
  key: "$TSS/serverfn",
  test: (e) => (typeof e != "function" || !(ir in e) ? !1 : !!e[ir]),
  toSerializable: ({ serverFnMeta: e }) => ({ functionId: e.id }),
  fromSerializable: ({ functionId: e }) => ju(e),
};
function bn(e) {
  return e.replaceAll("\0", "/").replaceAll("�", "/");
}
function Nu(e, t) {
  ((e.id = t.i),
    (e.__beforeLoadContext = t.b),
    (e.loaderData = t.l),
    (e.status = t.s),
    (e.ssr = t.ssr),
    (e.updatedAt = t.u),
    (e.error = t.e),
    t.g !== void 0 && (e.globalNotFound = t.g));
}
async function Bu(e) {
  window.$_TSR || Q();
  const t = e.options.serializationAdapters;
  if (t?.length) {
    const m = new Map();
    (t.forEach((y) => {
      m.set(y.key, y.fromSerializable);
    }),
      (window.$_TSR.t = m),
      window.$_TSR.buffer.forEach((y) => y()));
  }
  ((window.$_TSR.initialized = !0), window.$_TSR.router || Q());
  const r = window.$_TSR.router;
  (r.matches.forEach((m) => {
    m.i = bn(m.i);
  }),
    r.lastMatchId && (r.lastMatchId = bn(r.lastMatchId)));
  const { manifest: n, dehydratedData: s, lastMatchId: o } = r;
  e.ssr = { manifest: n };
  const i = document.querySelector('meta[property="csp-nonce"]')?.content;
  ((e.options.ssr = { nonce: i }), await e.options.hydrate?.(s));
  const c = e.matchRoutes(e.stores.location.get()),
    a = Promise.all(c.map((m) => e.loadRouteChunk(e.looseRoutesById[m.routeId])));
  function l(m) {
    const y = e.looseRoutesById[m.routeId].options.pendingMinMs ?? e.options.defaultPendingMinMs;
    if (y) {
      const w = Ce();
      ((m._nonReactive.minPendingPromise = w),
        (m._forcePending = !0),
        setTimeout(() => {
          (w.resolve(),
            e.updateMatch(
              m.id,
              (S) => ((S._nonReactive.minPendingPromise = void 0), { ...S, _forcePending: void 0 }),
            ));
        }, y));
    }
  }
  function f(m) {
    const y = e.looseRoutesById[m.routeId];
    y && (y.options.ssr = m.ssr);
  }
  let u;
  (c.forEach((m) => {
    const y = r.matches.find((w) => w.i === m.id);
    if (!y) {
      ((m._nonReactive.dehydrated = !1), (m.ssr = !1), f(m));
      return;
    }
    (Nu(m, y),
      f(m),
      (m._nonReactive.dehydrated = m.ssr !== !1),
      (m.ssr === "data-only" || m.ssr === !1) && u === void 0 && ((u = m.index), l(m)));
  }),
    e.stores.setMatches(c));
  const h = e.stores.matches.get(),
    p = e.stores.location.get();
  await Promise.all(
    h.map(async (m) => {
      try {
        const y = e.looseRoutesById[m.routeId],
          w = h[m.index - 1]?.context ?? e.options.context;
        if (y.options.context) {
          const C = {
            deps: m.loaderDeps,
            params: m.params,
            context: w ?? {},
            location: p,
            navigate: (P) => e.navigate({ ...P, _fromLocation: p }),
            buildLocation: e.buildLocation,
            cause: m.cause,
            abortController: m.abortController,
            preload: !1,
            matches: c,
            routeId: y.id,
          };
          m.__routeContext = y.options.context(C) ?? void 0;
        }
        m.context = { ...w, ...m.__routeContext, ...m.__beforeLoadContext };
        const S = {
            ssr: e.options.ssr,
            matches: h,
            match: m,
            params: m.params,
            loaderData: m.loaderData,
          },
          b = await y.options.head?.(S),
          R = await y.options.scripts?.(S);
        ((m.meta = b?.meta),
          (m.links = b?.links),
          (m.headScripts = b?.scripts),
          (m.styles = b?.styles),
          (m.scripts = R));
      } catch (y) {
        if (U(y))
          ((m.error = { isNotFound: !0 }),
            console.error(`NotFound error during hydration for routeId: ${m.routeId}`, y));
        else
          throw (
            (m.error = y),
            console.error(`Error during hydration for route ${m.routeId}:`, y),
            y
          );
      }
    }),
  );
  const g = c[c.length - 1].id !== o;
  if (!c.some((m) => m.ssr === !1) && !g)
    return (
      c.forEach((m) => {
        m._nonReactive.dehydrated = void 0;
      }),
      e.stores.resolvedLocation.set(e.stores.location.get()),
      a
    );
  const v = Promise.resolve()
    .then(() => e.load())
    .catch((m) => {
      console.error("Error during router hydration:", m);
    });
  if (g) {
    const m = c[1];
    (m || Q(),
      l(m),
      (m._displayPending = !0),
      (m._nonReactive.displayPendingPromise = v),
      v.then(() => {
        e.batch(() => {
          (e.stores.status.get() === "pending" &&
            (e.stores.status.set("idle"), e.stores.resolvedLocation.set(e.stores.location.get())),
            e.updateMatch(m.id, (y) => ({
              ...y,
              _displayPending: void 0,
              displayPendingPromise: void 0,
            })));
        });
      }));
  }
  return a;
}
var At = I.use,
  Je = typeof window < "u" ? I.useLayoutEffect : I.useEffect;
function Zt(e) {
  const t = I.useRef({ value: e, prev: null }),
    r = t.current.value;
  return (e !== r && (t.current = { value: e, prev: r }), t.current.prev);
}
function Uu(e, t, r = {}, n = {}) {
  I.useEffect(() => {
    if (!e.current || n.disabled || typeof IntersectionObserver != "function") return;
    const s = new IntersectionObserver(([o]) => {
      t(o);
    }, r);
    return (
      s.observe(e.current),
      () => {
        s.disconnect();
      }
    );
  }, [t, r, n.disabled, e]);
}
function $u(e) {
  const t = I.useRef(null);
  return (I.useImperativeHandle(e, () => t.current, []), t);
}
function zu({ promise: e }) {
  if (At) return At(e);
  const t = _i(e);
  if (t[Z].status === "pending") throw t;
  if (t[Z].status === "error") throw t[Z].error;
  return t[Z].data;
}
function qu(e) {
  const t = x.jsx(Hu, { ...e });
  return e.fallback ? x.jsx(I.Suspense, { fallback: e.fallback, children: t }) : t;
}
function Hu(e) {
  const t = zu(e);
  return e.children(t);
}
function Cr(e) {
  const t = e.errorComponent ?? Er;
  return x.jsx(Vu, {
    getResetKey: e.getResetKey,
    onCatch: e.onCatch,
    children: ({ error: r, reset: n }) =>
      r ? I.createElement(t, { error: r, reset: n }) : e.children,
  });
}
var Vu = class extends I.Component {
  constructor(...e) {
    (super(...e), (this.state = { error: null }));
  }
  static getDerivedStateFromProps(e, t) {
    const r = e.getResetKey();
    return t.error && t.resetKey !== r ? { resetKey: r, error: null } : { resetKey: r };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  reset() {
    this.setState({ error: null });
  }
  componentDidCatch(e, t) {
    this.props.onCatch && this.props.onCatch(e, t);
  }
  render() {
    return this.props.children({
      error: this.state.error,
      reset: () => {
        this.reset();
      },
    });
  }
};
function Er({ error: e }) {
  const [t, r] = I.useState(!1);
  return x.jsxs("div", {
    style: { padding: ".5rem", maxWidth: "100%" },
    children: [
      x.jsxs("div", {
        style: { display: "flex", alignItems: "center", gap: ".5rem" },
        children: [
          x.jsx("strong", { style: { fontSize: "1rem" }, children: "Something went wrong!" }),
          x.jsx("button", {
            style: {
              appearance: "none",
              fontSize: ".6em",
              border: "1px solid currentColor",
              padding: ".1rem .2rem",
              fontWeight: "bold",
              borderRadius: ".25rem",
            },
            onClick: () => r((n) => !n),
            children: t ? "Hide Error" : "Show Error",
          }),
        ],
      }),
      x.jsx("div", { style: { height: ".25rem" } }),
      t
        ? x.jsx("div", {
            children: x.jsx("pre", {
              style: {
                fontSize: ".7em",
                border: "1px solid red",
                borderRadius: ".25rem",
                padding: ".3rem",
                color: "red",
                overflow: "auto",
              },
              children: e.message ? x.jsx("code", { children: e.message }) : null,
            }),
          })
        : null,
    ],
  });
}
function Wu({ children: e, fallback: t = null }) {
  return Ir() ? x.jsx(Xe.Fragment, { children: e }) : x.jsx(Xe.Fragment, { children: t });
}
function Ir() {
  return Xe.useSyncExternalStore(
    Ku,
    () => !0,
    () => !1,
  );
}
function Ku() {
  return () => {};
}
var qs = I.createContext(null);
function $(e) {
  return I.useContext(qs);
}
var $t = I.createContext(void 0),
  Qu = I.createContext(void 0),
  j = ((e) => (
    (e[(e.None = 0)] = "None"),
    (e[(e.Mutable = 1)] = "Mutable"),
    (e[(e.Watching = 2)] = "Watching"),
    (e[(e.RecursedCheck = 4)] = "RecursedCheck"),
    (e[(e.Recursed = 8)] = "Recursed"),
    (e[(e.Dirty = 16)] = "Dirty"),
    (e[(e.Pending = 32)] = "Pending"),
    e
  ))(j || {});
function Gu({ update: e, notify: t, unwatched: r }) {
  return { link: n, unlink: s, propagate: o, checkDirty: i, shallowPropagate: c };
  function n(l, f, u) {
    const h = f.depsTail;
    if (h !== void 0 && h.dep === l) return;
    const p = h !== void 0 ? h.nextDep : f.deps;
    if (p !== void 0 && p.dep === l) {
      ((p.version = u), (f.depsTail = p));
      return;
    }
    const g = l.subsTail;
    if (g !== void 0 && g.version === u && g.sub === f) return;
    const v =
      (f.depsTail =
      l.subsTail =
        { version: u, dep: l, sub: f, prevDep: h, nextDep: p, prevSub: g, nextSub: void 0 });
    (p !== void 0 && (p.prevDep = v),
      h !== void 0 ? (h.nextDep = v) : (f.deps = v),
      g !== void 0 ? (g.nextSub = v) : (l.subs = v));
  }
  function s(l, f = l.sub) {
    const u = l.dep,
      h = l.prevDep,
      p = l.nextDep,
      g = l.nextSub,
      v = l.prevSub;
    return (
      p !== void 0 ? (p.prevDep = h) : (f.depsTail = h),
      h !== void 0 ? (h.nextDep = p) : (f.deps = p),
      g !== void 0 ? (g.prevSub = v) : (u.subsTail = v),
      v !== void 0 ? (v.nextSub = g) : (u.subs = g) === void 0 && r(u),
      p
    );
  }
  function o(l) {
    let f = l.nextSub,
      u;
    e: do {
      const h = l.sub;
      let p = h.flags;
      if (
        (p & 60
          ? p & 12
            ? p & 4
              ? !(p & 48) && a(l, h)
                ? ((h.flags = p | 40), (p &= 1))
                : (p = 0)
              : (h.flags = (p & -9) | 32)
            : (p = 0)
          : (h.flags = p | 32),
        p & 2 && t(h),
        p & 1)
      ) {
        const g = h.subs;
        if (g !== void 0) {
          const v = (l = g).nextSub;
          v !== void 0 && ((u = { value: f, prev: u }), (f = v));
          continue;
        }
      }
      if ((l = f) !== void 0) {
        f = l.nextSub;
        continue;
      }
      for (; u !== void 0; )
        if (((l = u.value), (u = u.prev), l !== void 0)) {
          f = l.nextSub;
          continue e;
        }
      break;
    } while (!0);
  }
  function i(l, f) {
    let u,
      h = 0,
      p = !1;
    e: do {
      const g = l.dep,
        v = g.flags;
      if (f.flags & 16) p = !0;
      else if ((v & 17) === 17) {
        if (e(g)) {
          const m = g.subs;
          (m.nextSub !== void 0 && c(m), (p = !0));
        }
      } else if ((v & 33) === 33) {
        ((l.nextSub !== void 0 || l.prevSub !== void 0) && (u = { value: l, prev: u }),
          (l = g.deps),
          (f = g),
          ++h);
        continue;
      }
      if (!p) {
        const m = l.nextDep;
        if (m !== void 0) {
          l = m;
          continue;
        }
      }
      for (; h--; ) {
        const m = f.subs,
          y = m.nextSub !== void 0;
        if ((y ? ((l = u.value), (u = u.prev)) : (l = m), p)) {
          if (e(f)) {
            (y && c(m), (f = l.sub));
            continue;
          }
          p = !1;
        } else f.flags &= -33;
        f = l.sub;
        const w = l.nextDep;
        if (w !== void 0) {
          l = w;
          continue e;
        }
      }
      return p;
    } while (!0);
  }
  function c(l) {
    do {
      const f = l.sub,
        u = f.flags;
      (u & 48) === 32 && ((f.flags = u | 16), (u & 6) === 2 && t(f));
    } while ((l = l.nextSub) !== void 0);
  }
  function a(l, f) {
    let u = f.depsTail;
    for (; u !== void 0; ) {
      if (u === l) return !0;
      u = u.prevDep;
    }
    return !1;
  }
}
function Yu(e, t, r) {
  const n = typeof e == "object",
    s = n ? e : void 0;
  return {
    next: (n ? e.next : e)?.bind(s),
    error: (n ? e.error : t)?.bind(s),
    complete: (n ? e.complete : r)?.bind(s),
  };
}
const hr = [];
let _t = 0;
const {
  link: Sn,
  unlink: Ju,
  propagate: Xu,
  checkDirty: Hs,
  shallowPropagate: xn,
} = Gu({
  update(e) {
    return e._update();
  },
  notify(e) {
    ((hr[pr++] = e), (e.flags &= ~j.Watching));
  },
  unwatched(e) {
    e.depsTail !== void 0 && ((e.depsTail = void 0), (e.flags = j.Mutable | j.Dirty), Ot(e));
  },
});
let wt = 0,
  pr = 0,
  X,
  mr = 0;
function Vs(e) {
  try {
    (++mr, e());
  } finally {
    --mr || Ws();
  }
}
function Ot(e) {
  const t = e.depsTail;
  let r = t !== void 0 ? t.nextDep : e.deps;
  for (; r !== void 0; ) r = Ju(r, e);
}
function Ws() {
  if (!(mr > 0)) {
    for (; wt < pr; ) {
      const e = hr[wt];
      ((hr[wt++] = void 0), e.notify());
    }
    ((wt = 0), (pr = 0));
  }
}
function Pn(e, t) {
  const r = typeof e == "function",
    n = e,
    s = {
      _snapshot: r ? void 0 : e,
      subs: void 0,
      subsTail: void 0,
      deps: void 0,
      depsTail: void 0,
      flags: r ? j.None : j.Mutable,
      get() {
        return (X !== void 0 && Sn(s, X, _t), s._snapshot);
      },
      subscribe(o) {
        const i = Yu(o),
          c = { current: !1 },
          a = Zu(() => {
            (s.get(), c.current ? i.next?.(s._snapshot) : (c.current = !0));
          });
        return {
          unsubscribe: () => {
            a.stop();
          },
        };
      },
      _update(o) {
        const i = X,
          c = t?.compare ?? Object.is;
        if (r) ((X = s), ++_t, (s.depsTail = void 0));
        else if (o === void 0) return !1;
        r && (s.flags = j.Mutable | j.RecursedCheck);
        try {
          const a = s._snapshot,
            l = typeof o == "function" ? o(a) : o === void 0 && r ? n(a) : o;
          return a === void 0 || !c(a, l) ? ((s._snapshot = l), !0) : !1;
        } finally {
          ((X = i), r && (s.flags &= ~j.RecursedCheck), Ot(s));
        }
      },
    };
  return (
    r
      ? ((s.flags = j.Mutable | j.Dirty),
        (s.get = function () {
          const o = s.flags;
          if (o & j.Dirty || (o & j.Pending && Hs(s.deps, s))) {
            if (s._update()) {
              const i = s.subs;
              i !== void 0 && xn(i);
            }
          } else o & j.Pending && (s.flags = o & ~j.Pending);
          return (X !== void 0 && Sn(s, X, _t), s._snapshot);
        }))
      : (s.set = function (o) {
          if (s._update(o)) {
            const i = s.subs;
            i !== void 0 && (Xu(i), xn(i), Ws());
          }
        }),
    s
  );
}
function Zu(e) {
  const t = () => {
      const n = X;
      ((X = r), ++_t, (r.depsTail = void 0), (r.flags = j.Watching | j.RecursedCheck));
      try {
        return e();
      } finally {
        ((X = n), (r.flags &= ~j.RecursedCheck), Ot(r));
      }
    },
    r = {
      deps: void 0,
      depsTail: void 0,
      subs: void 0,
      subsTail: void 0,
      flags: j.Watching | j.RecursedCheck,
      notify() {
        const n = this.flags;
        n & j.Dirty || (n & j.Pending && Hs(this.deps, this)) ? t() : (this.flags = j.Watching);
      },
      stop() {
        ((this.flags = j.None), (this.depsTail = void 0), Ot(this));
      },
    };
  return (t(), r);
}
var er = { exports: {} },
  tr = {},
  rr = { exports: {} },
  nr = {};
var Rn;
function el() {
  if (Rn) return nr;
  Rn = 1;
  var e = Bn();
  function t(u, h) {
    return (u === h && (u !== 0 || 1 / u === 1 / h)) || (u !== u && h !== h);
  }
  var r = typeof Object.is == "function" ? Object.is : t,
    n = e.useState,
    s = e.useEffect,
    o = e.useLayoutEffect,
    i = e.useDebugValue;
  function c(u, h) {
    var p = h(),
      g = n({ inst: { value: p, getSnapshot: h } }),
      v = g[0].inst,
      m = g[1];
    return (
      o(
        function () {
          ((v.value = p), (v.getSnapshot = h), a(v) && m({ inst: v }));
        },
        [u, p, h],
      ),
      s(
        function () {
          return (
            a(v) && m({ inst: v }),
            u(function () {
              a(v) && m({ inst: v });
            })
          );
        },
        [u],
      ),
      i(p),
      p
    );
  }
  function a(u) {
    var h = u.getSnapshot;
    u = u.value;
    try {
      var p = h();
      return !r(u, p);
    } catch {
      return !0;
    }
  }
  function l(u, h) {
    return h();
  }
  var f =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? l
      : c;
  return (
    (nr.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : f),
    nr
  );
}
var _n;
function tl() {
  return (_n || ((_n = 1), (rr.exports = el())), rr.exports);
}
var Cn;
function rl() {
  if (Cn) return tr;
  Cn = 1;
  var e = Bn(),
    t = tl();
  function r(l, f) {
    return (l === f && (l !== 0 || 1 / l === 1 / f)) || (l !== l && f !== f);
  }
  var n = typeof Object.is == "function" ? Object.is : r,
    s = t.useSyncExternalStore,
    o = e.useRef,
    i = e.useEffect,
    c = e.useMemo,
    a = e.useDebugValue;
  return (
    (tr.useSyncExternalStoreWithSelector = function (l, f, u, h, p) {
      var g = o(null);
      if (g.current === null) {
        var v = { hasValue: !1, value: null };
        g.current = v;
      } else v = g.current;
      g = c(
        function () {
          function y(C) {
            if (!w) {
              if (((w = !0), (S = C), (C = h(C)), p !== void 0 && v.hasValue)) {
                var P = v.value;
                if (p(P, C)) return (b = P);
              }
              return (b = C);
            }
            if (((P = b), n(S, C))) return P;
            var _ = h(C);
            return p !== void 0 && p(P, _) ? ((S = C), P) : ((S = C), (b = _));
          }
          var w = !1,
            S,
            b,
            R = u === void 0 ? null : u;
          return [
            function () {
              return y(f());
            },
            R === null
              ? void 0
              : function () {
                  return y(R());
                },
          ];
        },
        [f, u, h, p],
      );
      var m = s(l, g[0], g[1]);
      return (
        i(
          function () {
            ((v.hasValue = !0), (v.value = m));
          },
          [m],
        ),
        a(m),
        m
      );
    }),
    tr
  );
}
var En;
function nl() {
  return (En || ((En = 1), (er.exports = rl())), er.exports);
}
var sl = nl();
function ol(e, t) {
  return e === t;
}
function D(e, t, r = ol) {
  const n = I.useCallback(
      (i) => {
        if (!e) return () => {};
        const { unsubscribe: c } = e.subscribe(i);
        return c;
      },
      [e],
    ),
    s = I.useCallback(() => e?.get(), [e]);
  return sl.useSyncExternalStoreWithSelector(n, s, s, t, r);
}
var il = { get: () => {}, subscribe: () => ({ unsubscribe: () => {} }) };
function Ee(e) {
  const t = $(),
    r = I.useContext(e.from ? Qu : $t),
    n = e.from ?? r,
    s = n ? (e.from ? t.stores.getRouteMatchStore(n) : t.stores.matchStores.get(n)) : void 0,
    o = I.useRef(void 0);
  return D(s ?? il, (i) => {
    if (((e.shouldThrow ?? !0) && !i && Q(), i === void 0)) return;
    const c = e.select ? e.select(i) : i;
    if (e.structuralSharing ?? t.options.defaultStructuralSharing) {
      const a = Se(o.current, c);
      return ((o.current = a), a);
    }
    return c;
  });
}
function Ks(e) {
  return Ee({
    from: e.from,
    strict: e.strict,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.loaderData) : t.loaderData),
  });
}
function Qs(e) {
  const { select: t, ...r } = e;
  return Ee({ ...r, select: (n) => (t ? t(n.loaderDeps) : n.loaderDeps) });
}
function Gs(e) {
  return Ee({
    from: e.from,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    strict: e.strict,
    select: (t) => {
      const r = e.strict === !1 ? t.params : t._strictParams;
      return e.select ? e.select(r) : r;
    },
  });
}
function Ys(e) {
  return Ee({
    from: e.from,
    strict: e.strict,
    shouldThrow: e.shouldThrow,
    structuralSharing: e.structuralSharing,
    select: (t) => (e.select ? e.select(t.search) : t.search),
  });
}
function Js(e) {
  const t = $();
  return I.useCallback((r) => t.navigate({ ...r, from: r.from ?? e?.from }), [e?.from, t]);
}
function Xs(e) {
  return Ee({ ...e, select: (t) => (e.select ? e.select(t.context) : t.context) });
}
function al(e, t) {
  const r = $(),
    n = $u(t),
    {
      activeProps: s,
      inactiveProps: o,
      activeOptions: i,
      to: c,
      preload: a,
      preloadDelay: l,
      preloadIntentProximity: f,
      hashScrollIntoView: u,
      replace: h,
      startTransition: p,
      resetScroll: g,
      viewTransition: v,
      children: m,
      target: y,
      disabled: w,
      style: S,
      className: b,
      onClick: R,
      onBlur: C,
      onFocus: P,
      onMouseEnter: _,
      onMouseLeave: E,
      onTouchStart: M,
      ignoreBlocker: L,
      params: A,
      search: J,
      hash: V,
      state: ee,
      mask: ut,
      reloadDocument: G,
      unsafeRelative: ze,
      from: Ar,
      _fromLocation: Or,
      ...Ie
    } = e,
    qt = Ir(),
    qe = I.useMemo(
      () => e,
      [
        r,
        e.from,
        e._fromLocation,
        e.hash,
        e.to,
        e.search,
        e.params,
        e.state,
        e.mask,
        e.unsafeRelative,
      ],
    ),
    ge = D(
      r.stores.location,
      (F) => F,
      (F, W) => F.href === W.href,
    ),
    z = I.useMemo(() => {
      const F = { _fromLocation: ge, ...qe };
      return r.buildLocation(F);
    }, [r, ge, qe]),
    kr = z.maskedLocation ? z.maskedLocation.publicHref : z.publicHref,
    Fr = z.maskedLocation ? z.maskedLocation.external : z.external,
    He = I.useMemo(() => hl(kr, Fr, r.history, w), [w, Fr, kr, r.history]),
    Ve = I.useMemo(() => {
      if (He?.external) return Et(He.href, r.protocolAllowlist) ? void 0 : He.href;
      if (!pl(c) && !(typeof c != "string" || c.indexOf(":") === -1))
        try {
          return (new URL(c), Et(c, r.protocolAllowlist) ? void 0 : c);
        } catch {}
    }, [c, He, r.protocolAllowlist]),
    Ht = I.useMemo(() => {
      if (Ve) return !1;
      if (i?.exact) {
        if (!qo(ge.pathname, z.pathname, r.basepath)) return !1;
      } else {
        const F = It(ge.pathname, r.basepath),
          W = It(z.pathname, r.basepath);
        if (!(F.startsWith(W) && (F.length === W.length || F[W.length] === "/"))) return !1;
      }
      return (i?.includeSearch ?? !0) &&
        !q(ge.search, z.search, { partial: !i?.exact, ignoreUndefined: !i?.explicitUndefined })
        ? !1
        : i?.includeHash
          ? qt && ge.hash === z.hash
          : !0;
    }, [
      i?.exact,
      i?.explicitUndefined,
      i?.includeHash,
      i?.includeSearch,
      ge,
      Ve,
      qt,
      z.hash,
      z.pathname,
      z.search,
      r.basepath,
    ]),
    lt = Ht ? (be(s, {}) ?? cl) : sr,
    ft = Ht ? sr : (be(o, {}) ?? sr),
    jr = [b, lt.className, ft.className].filter(Boolean).join(" "),
    Dr = (S || lt.style || ft.style) && { ...S, ...lt.style, ...ft.style },
    [fo, Nr] = I.useState(!1),
    Br = I.useRef(!1),
    Le = e.reloadDocument || Ve ? !1 : (a ?? r.options.defaultPreload),
    Vt = l ?? r.options.defaultPreloadDelay ?? 0,
    ye = I.useCallback(() => {
      r.preloadRoute({ ...qe, _builtLocation: z }).catch((F) => {
        (console.warn(F), console.warn(Ci));
      });
    }, [r, qe, z]);
  (Uu(
    n,
    I.useCallback(
      (F) => {
        F?.isIntersecting && ye();
      },
      [ye],
    ),
    dl,
    { disabled: !!w || Le !== "viewport" },
  ),
    I.useEffect(() => {
      Br.current || (!w && Le === "render" && (ye(), (Br.current = !0)));
    }, [w, ye, Le]));
  const ho = (F) => {
    const W = F.currentTarget.getAttribute("target"),
      ve = y !== void 0 ? y : W;
    if (!w && !ml(F) && !F.defaultPrevented && (!ve || ve === "_self") && F.button === 0) {
      (F.preventDefault(),
        go.flushSync(() => {
          Nr(!0);
        }));
      const mo = r.subscribe("onResolved", () => {
        (mo(), Nr(!1));
      });
      r.navigate({
        ...qe,
        replace: h,
        resetScroll: g,
        hashScrollIntoView: u,
        startTransition: p,
        viewTransition: v,
        ignoreBlocker: L,
      });
    }
  };
  if (Ve)
    return {
      ...Ie,
      ref: n,
      href: Ve,
      ...(m && { children: m }),
      ...(y && { target: y }),
      ...(w && { disabled: w }),
      ...(S && { style: S }),
      ...(b && { className: b }),
      ...(R && { onClick: R }),
      ...(C && { onBlur: C }),
      ...(P && { onFocus: P }),
      ...(_ && { onMouseEnter: _ }),
      ...(E && { onMouseLeave: E }),
      ...(M && { onTouchStart: M }),
    };
  const Ur = (F) => {
      if (w || Le !== "intent") return;
      if (!Vt) {
        ye();
        return;
      }
      const W = F.currentTarget;
      if (Ye.has(W)) return;
      const ve = setTimeout(() => {
        (Ye.delete(W), ye());
      }, Vt);
      Ye.set(W, ve);
    },
    po = (F) => {
      w || Le !== "intent" || ye();
    },
    $r = (F) => {
      if (w || !Le || !Vt) return;
      const W = F.currentTarget,
        ve = Ye.get(W);
      ve && (clearTimeout(ve), Ye.delete(W));
    };
  return {
    ...Ie,
    ...lt,
    ...ft,
    href: He?.href,
    ref: n,
    onClick: Me([R, ho]),
    onBlur: Me([C, $r]),
    onFocus: Me([P, Ur]),
    onMouseEnter: Me([_, Ur]),
    onMouseLeave: Me([E, $r]),
    onTouchStart: Me([M, po]),
    disabled: !!w,
    target: y,
    ...(Dr && { style: Dr }),
    ...(jr && { className: jr }),
    ...(w && ul),
    ...(Ht && ll),
    ...(qt && fo && fl),
  };
}
var sr = {},
  cl = { className: "active" },
  ul = { role: "link", "aria-disabled": !0 },
  ll = { "data-status": "active", "aria-current": "page" },
  fl = { "data-transitioning": "transitioning" },
  Ye = new WeakMap(),
  dl = { rootMargin: "100px" },
  Me = (e) => (t) => {
    for (const r of e)
      if (r) {
        if (t.defaultPrevented) return;
        r(t);
      }
  };
function hl(e, t, r, n) {
  if (!n) return t ? { href: e, external: !0 } : { href: r.createHref(e) || "/", external: !1 };
}
function pl(e) {
  if (typeof e != "string") return !1;
  const t = e.charCodeAt(0);
  return t === 47 ? e.charCodeAt(1) !== 47 : t === 46;
}
var Lr = I.forwardRef((e, t) => {
  const { _asChild: r, ...n } = e,
    { type: s, ...o } = al(n, t),
    i =
      typeof n.children == "function"
        ? n.children({ isActive: o["data-status"] === "active" })
        : n.children;
  if (!r) {
    const { disabled: c, ...a } = o;
    return I.createElement("a", a, i);
  }
  return I.createElement(r, o, i);
});
function ml(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
var gl = class extends os {
  constructor(t) {
    (super(t),
      (this.useMatch = (r) =>
        Ee({ select: r?.select, from: this.id, structuralSharing: r?.structuralSharing })),
      (this.useRouteContext = (r) => Xs({ ...r, from: this.id })),
      (this.useSearch = (r) =>
        Ys({ select: r?.select, structuralSharing: r?.structuralSharing, from: this.id })),
      (this.useParams = (r) =>
        Gs({ select: r?.select, structuralSharing: r?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (r) => Qs({ ...r, from: this.id })),
      (this.useLoaderData = (r) => Ks({ ...r, from: this.id })),
      (this.useNavigate = () => Js({ from: this.fullPath })),
      (this.Link = Xe.forwardRef((r, n) => x.jsx(Lr, { ref: n, from: this.fullPath, ...r }))));
  }
};
function yl(e) {
  return new gl(e);
}
function vl() {
  return (e) => bl(e);
}
var wl = class extends Ti {
  constructor(e) {
    (super(e),
      (this.useMatch = (t) =>
        Ee({ select: t?.select, from: this.id, structuralSharing: t?.structuralSharing })),
      (this.useRouteContext = (t) => Xs({ ...t, from: this.id })),
      (this.useSearch = (t) =>
        Ys({ select: t?.select, structuralSharing: t?.structuralSharing, from: this.id })),
      (this.useParams = (t) =>
        Gs({ select: t?.select, structuralSharing: t?.structuralSharing, from: this.id })),
      (this.useLoaderDeps = (t) => Qs({ ...t, from: this.id })),
      (this.useLoaderData = (t) => Ks({ ...t, from: this.id })),
      (this.useNavigate = () => Js({ from: this.fullPath })),
      (this.Link = Xe.forwardRef((t, r) => x.jsx(Lr, { ref: r, from: this.fullPath, ...t }))));
  }
};
function bl(e) {
  return new wl(e);
}
function Be(e) {
  return new Sl(e, { silent: !0 }).createRoute;
}
var Sl = class {
  constructor(e, t) {
    ((this.path = e),
      (this.createRoute = (r) => {
        const n = yl(r);
        return ((n.isRoot = !1), n);
      }),
      (this.silent = t?.silent));
  }
};
function Ue(e, t) {
  let r, n, s, o;
  const i = () => (
      r ||
        (r = e()
          .then((a) => {
            ((r = void 0), (n = a[t]));
          })
          .catch((a) => {
            if (
              ((s = a),
              _o(s) && s instanceof Error && typeof window < "u" && typeof sessionStorage < "u")
            ) {
              const l = `tanstack_router_reload:${s.message}`;
              sessionStorage.getItem(l) || (sessionStorage.setItem(l, "1"), (o = !0));
            }
          })),
      r
    ),
    c = function (l) {
      if (o) throw (window.location.reload(), new Promise(() => {}));
      if (s) throw s;
      if (!n)
        if (At) At(i());
        else throw i();
      return I.createElement(n, l);
    };
  return ((c.preload = i), c);
}
function xl(e) {
  const t = $(),
    r = `not-found-${D(t.stores.location, (n) => n.pathname)}-${D(t.stores.status, (n) => n)}`;
  return x.jsx(Cr, {
    getResetKey: () => r,
    onCatch: (n, s) => {
      if (U(n)) e.onCatch?.(n, s);
      else throw n;
    },
    errorComponent: ({ error: n }) => {
      if (U(n)) return e.fallback?.(n);
      throw n;
    },
    children: e.children,
  });
}
function Pl() {
  return x.jsx("p", { children: "Not Found" });
}
function Oe(e) {
  return x.jsx(x.Fragment, { children: e.children });
}
function Zs(e, t, r) {
  return t.options.notFoundComponent
    ? x.jsx(t.options.notFoundComponent, { ...r })
    : e.options.defaultNotFoundComponent
      ? x.jsx(e.options.defaultNotFoundComponent, { ...r })
      : x.jsx(Pl, {});
}
function Rl(e) {
  return null;
}
function _l() {
  return (Rl($()), null);
}
var eo = I.memo(function ({ matchId: t }) {
  const r = $(),
    n = r.stores.matchStores.get(t);
  n || Q();
  const s = D(r.stores.loadedAt, (i) => i),
    o = D(n, (i) => i);
  return x.jsx(Cl, {
    router: r,
    matchId: t,
    resetKey: s,
    matchState: I.useMemo(() => {
      const i = o.routeId,
        c = r.routesById[i].parentRoute?.id;
      return { routeId: i, ssr: o.ssr, _displayPending: o._displayPending, parentRouteId: c };
    }, [o._displayPending, o.routeId, o.ssr, r.routesById]),
  });
});
function Cl({ router: e, matchId: t, resetKey: r, matchState: n }) {
  const s = e.routesById[n.routeId],
    o = s.options.pendingComponent ?? e.options.defaultPendingComponent,
    i = o ? x.jsx(o, {}) : null,
    c = s.options.errorComponent ?? e.options.defaultErrorComponent,
    a = s.options.onCatch ?? e.options.defaultOnCatch,
    l = s.isRoot
      ? (s.options.notFoundComponent ?? e.options.notFoundRoute?.options.component)
      : s.options.notFoundComponent,
    f = n.ssr === !1 || n.ssr === "data-only",
    u =
      (!s.isRoot || s.options.wrapInSuspense || f) &&
      (s.options.wrapInSuspense ?? o ?? (s.options.errorComponent?.preload || f))
        ? I.Suspense
        : Oe,
    h = c ? Cr : Oe,
    p = l ? xl : Oe;
  return x.jsxs(s.isRoot ? (s.options.shellComponent ?? Oe) : Oe, {
    children: [
      x.jsx($t.Provider, {
        value: t,
        children: x.jsx(u, {
          fallback: i,
          children: x.jsx(h, {
            getResetKey: () => r,
            errorComponent: c || Er,
            onCatch: (g, v) => {
              if (U(g)) throw ((g.routeId ??= n.routeId), g);
              a?.(g, v);
            },
            children: x.jsx(p, {
              fallback: (g) => {
                if (
                  ((g.routeId ??= n.routeId),
                  !l || (g.routeId && g.routeId !== n.routeId) || (!g.routeId && !s.isRoot))
                )
                  throw g;
                return I.createElement(l, g);
              },
              children:
                f || n._displayPending
                  ? x.jsx(Wu, { fallback: i, children: x.jsx(In, { matchId: t }) })
                  : x.jsx(In, { matchId: t }),
            }),
          }),
        }),
      }),
      n.parentRouteId === Re
        ? x.jsxs(x.Fragment, {
            children: [
              x.jsx(El, { resetKey: r }),
              e.options.scrollRestoration && $n ? x.jsx(_l, {}) : null,
            ],
          })
        : null,
    ],
  });
}
function El({ resetKey: e }) {
  const t = $(),
    r = I.useRef(void 0);
  return (
    Je(() => {
      const n = t.latestLocation.href;
      (r.current === void 0 || r.current !== n) &&
        (t.emit({
          type: "onRendered",
          ...je(t.stores.location.get(), t.stores.resolvedLocation.get()),
        }),
        (r.current = n));
    }, [t.latestLocation.state.__TSR_key, e, t]),
    null
  );
}
var In = I.memo(function ({ matchId: t }) {
    const r = $(),
      n = (f, u) => r.getMatch(f.id)?._nonReactive[u] ?? f._nonReactive[u],
      s = r.stores.matchStores.get(t);
    s || Q();
    const o = D(s, (f) => f),
      i = o.routeId,
      c = r.routesById[i],
      a = I.useMemo(() => {
        const f = (r.routesById[i].options.remountDeps ?? r.options.defaultRemountDeps)?.({
          routeId: i,
          loaderDeps: o.loaderDeps,
          params: o._strictParams,
          search: o._strictSearch,
        });
        return f ? JSON.stringify(f) : void 0;
      }, [
        i,
        o.loaderDeps,
        o._strictParams,
        o._strictSearch,
        r.options.defaultRemountDeps,
        r.routesById,
      ]),
      l = I.useMemo(() => {
        const f = c.options.component ?? r.options.defaultComponent;
        return f ? x.jsx(f, {}, a) : x.jsx(to, {});
      }, [a, c.options.component, r.options.defaultComponent]);
    if (o._displayPending) throw n(o, "displayPendingPromise");
    if (o._forcePending) throw n(o, "minPendingPromise");
    if (o.status === "pending") {
      const f = c.options.pendingMinMs ?? r.options.defaultPendingMinMs;
      if (f) {
        const u = r.getMatch(o.id);
        if (u && !u._nonReactive.minPendingPromise) {
          const h = Ce();
          ((u._nonReactive.minPendingPromise = h),
            setTimeout(() => {
              (h.resolve(), (u._nonReactive.minPendingPromise = void 0));
            }, f));
        }
      }
      throw n(o, "loadPromise");
    }
    if (o.status === "notFound") return (U(o.error) || Q(), Zs(r, c, o.error));
    if (o.status === "redirected") throw (K(o.error) || Q(), n(o, "loadPromise"));
    if (o.status === "error") throw o.error;
    return l;
  }),
  to = I.memo(function () {
    const t = $(),
      r = I.useContext($t);
    let n,
      s = !1,
      o;
    {
      const l = r ? t.stores.matchStores.get(r) : void 0;
      (([n, s] = D(l, (f) => [f?.routeId, f?.globalNotFound ?? !1])),
        (o = D(t.stores.matchesId, (f) => f[f.findIndex((u) => u === r) + 1])));
    }
    const i = n ? t.routesById[n] : void 0,
      c = t.options.defaultPendingComponent ? x.jsx(t.options.defaultPendingComponent, {}) : null;
    if (s) return (i || Q(), Zs(t, i, void 0));
    if (!o) return null;
    const a = x.jsx(eo, { matchId: o });
    return n === Re ? x.jsx(I.Suspense, { fallback: c, children: a }) : a;
  });
function Il() {
  const e = $(),
    t = I.useRef({ router: e, mounted: !1 }),
    [r, n] = I.useState(!1),
    s = D(e.stores.isLoading, (u) => u),
    o = D(e.stores.hasPending, (u) => u),
    i = Zt(s),
    c = s || r || o,
    a = Zt(c),
    l = s || o,
    f = Zt(l);
  return (
    (e.startTransition = (u) => {
      (n(!0),
        I.startTransition(() => {
          (u(), n(!1));
        }));
    }),
    I.useEffect(() => {
      const u = e.history.subscribe(e.load),
        h = e.buildLocation({
          to: e.latestLocation.pathname,
          search: !0,
          params: !0,
          hash: !0,
          state: !0,
          _includeValidateSearch: !0,
        });
      return (
        re(e.latestLocation.publicHref) !== re(h.publicHref) &&
          e.commitLocation({ ...h, replace: !0 }),
        () => {
          u();
        }
      );
    }, [e, e.history]),
    Je(() => {
      if ((typeof window < "u" && e.ssr) || (t.current.router === e && t.current.mounted)) return;
      ((t.current = { router: e, mounted: !0 }),
        (async () => {
          try {
            await e.load();
          } catch (h) {
            console.error(h);
          }
        })());
    }, [e]),
    Je(() => {
      i &&
        !s &&
        e.emit({ type: "onLoad", ...je(e.stores.location.get(), e.stores.resolvedLocation.get()) });
    }, [i, e, s]),
    Je(() => {
      f &&
        !l &&
        e.emit({
          type: "onBeforeRouteMount",
          ...je(e.stores.location.get(), e.stores.resolvedLocation.get()),
        });
    }, [l, f, e]),
    Je(() => {
      if (a && !c) {
        const u = je(e.stores.location.get(), e.stores.resolvedLocation.get());
        (e.emit({ type: "onResolved", ...u }),
          Vs(() => {
            (e.stores.status.set("idle"), e.stores.resolvedLocation.set(e.stores.location.get()));
          }));
      }
    }, [c, a, e]),
    null
  );
}
function Ll() {
  const e = $(),
    t = e.routesById[Re].options.pendingComponent ?? e.options.defaultPendingComponent,
    r = t ? x.jsx(t, {}) : null,
    n = x.jsxs(typeof document < "u" && e.ssr ? Oe : I.Suspense, {
      fallback: r,
      children: [x.jsx(Il, {}), x.jsx(Ml, {})],
    });
  return e.options.InnerWrap ? x.jsx(e.options.InnerWrap, { children: n }) : n;
}
function Ml() {
  const e = $(),
    t = D(e.stores.firstId, (s) => s),
    r = D(e.stores.loadedAt, (s) => s),
    n = t ? x.jsx(eo, { matchId: t }) : null;
  return x.jsx($t.Provider, {
    value: t,
    children: e.options.disableGlobalCatchBoundary
      ? n
      : x.jsx(Cr, { getResetKey: () => r, errorComponent: Er, onCatch: void 0, children: n }),
  });
}
var Tl = (e) => ({ createMutableStore: Pn, createReadonlyStore: Pn, batch: Vs }),
  Al = (e) => new Ol(e),
  Ol = class extends fi {
    constructor(e) {
      super(e, Tl);
    }
  };
function kl({ router: e, children: t, ...r }) {
  qn(r) && e.update({ ...e.options, ...r, context: { ...e.options.context, ...r.context } });
  const n = x.jsx(qs.Provider, { value: e, children: t });
  return e.options.Wrap ? x.jsx(e.options.Wrap, { children: n }) : n;
}
function Fl({ router: e, ...t }) {
  return x.jsx(kl, { router: e, ...t, children: x.jsx(Ll, {}) });
}
function Ln(e, t) {
  if (t)
    for (const [r, n] of Object.entries(t))
      r !== "suppressHydrationWarning" &&
        n !== void 0 &&
        n !== !1 &&
        e.setAttribute(r, typeof n == "boolean" ? "" : String(n));
}
function ro(e) {
  const { attrs: t, children: r, nonce: n, preventScriptHoist: s } = e;
  switch (e.tag) {
    case "title":
      return x.jsx("title", { ...t, suppressHydrationWarning: !0, children: r });
    case "meta":
      return x.jsx("meta", { ...t, suppressHydrationWarning: !0 });
    case "link":
      return x.jsx("link", {
        ...t,
        precedence: t?.precedence ?? (t?.rel === "stylesheet" ? "default" : void 0),
        nonce: n,
        suppressHydrationWarning: !0,
      });
    case "style":
      return (
        e.inlineCss,
        x.jsx("style", { ...t, dangerouslySetInnerHTML: { __html: r }, nonce: n })
      );
    case "script":
      return x.jsx(jl, { attrs: t, preventScriptHoist: s, children: r });
    default:
      return null;
  }
}
function jl({ attrs: e, children: t, preventScriptHoist: r }) {
  $();
  const n = Ir(),
    s =
      typeof e?.type == "string" &&
      e.type !== "" &&
      e.type !== "text/javascript" &&
      e.type !== "module";
  if (
    (I.useEffect(() => {
      if (!s) {
        if (e?.src) {
          const o = (() => {
            try {
              const c = document.baseURI || window.location.href;
              return new URL(e.src, c).href;
            } catch {
              return e.src;
            }
          })();
          for (const c of document.querySelectorAll("script[src]")) if (c.src === o) return;
          const i = document.createElement("script");
          return (Ln(i, e), document.head.appendChild(i), () => i.remove());
        }
        if (typeof t == "string") {
          const o = typeof e?.type == "string" ? e.type : "text/javascript",
            i = typeof e?.nonce == "string" ? e.nonce : void 0;
          for (const a of document.querySelectorAll("script:not([src])")) {
            if (!(a instanceof HTMLScriptElement)) continue;
            const l = a.getAttribute("type") ?? "text/javascript",
              f = a.getAttribute("nonce") ?? void 0;
            if (a.textContent === t && l === o && f === i) return;
          }
          const c = document.createElement("script");
          return ((c.textContent = t), Ln(c, e), document.head.appendChild(c), () => c.remove());
        }
      }
    }, [e, t, s]),
    s && typeof t == "string")
  )
    return x.jsx("script", {
      ...e,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: { __html: t },
    });
  if (!n) {
    if (e?.src) return x.jsx("script", { ...e, suppressHydrationWarning: !0 });
    if (typeof t == "string")
      return x.jsx("script", {
        ...e,
        dangerouslySetInnerHTML: { __html: t },
        suppressHydrationWarning: !0,
      });
  }
  return null;
}
var Dl = (e) => {
  const t = $(),
    r = t.options.ssr?.nonce,
    n = D(t.stores.matches, (u) => u.map((h) => h.meta).filter((h) => h !== void 0), q),
    s = I.useMemo(() => {
      const u = [],
        h = {};
      let p;
      for (let g = n.length - 1; g >= 0; g--) {
        const v = n[g];
        for (let m = v.length - 1; m >= 0; m--) {
          const y = v[m];
          if (y)
            if (y.title) p || (p = { tag: "title", children: y.title });
            else if ("script:ld+json" in y)
              try {
                const w = JSON.stringify(y["script:ld+json"]);
                u.push({ tag: "script", attrs: { type: "application/ld+json" }, children: Mo(w) });
              } catch {}
            else {
              const w = y.name ?? y.property;
              if (w) {
                if (h[w]) continue;
                h[w] = !0;
              }
              u.push({ tag: "meta", attrs: { ...y, nonce: r } });
            }
        }
      }
      return (
        p && u.push(p),
        r && u.push({ tag: "meta", attrs: { property: "csp-nonce", content: r } }),
        u.reverse(),
        u
      );
    }, [n, r]),
    o = D(
      t.stores.matches,
      (u) =>
        u
          .flatMap((h) => h.links ?? [])
          .filter((h) => h !== void 0)
          .map((h) => ({ tag: "link", attrs: { ...h, nonce: r } })),
      q,
    ),
    i = D(
      t.stores.matches,
      (u) => {
        const h = t.ssr?.manifest,
          p = [];
        return (
          h &&
            (u.forEach((g) => {
              h.routes[g.routeId]?.css?.forEach((v) => {
                const m = Mi(v);
                p.push({
                  tag: "link",
                  attrs: {
                    rel: "stylesheet",
                    ...m,
                    crossOrigin: ss(e, "stylesheet") ?? m.crossOrigin,
                    suppressHydrationWarning: !0,
                    nonce: r,
                  },
                });
              });
            }),
            h.inlineStyle &&
              p.push({
                tag: "style",
                attrs: { ...h.inlineStyle.attrs, nonce: r },
                children: h.inlineStyle.children,
                inlineCss: !0,
              })),
          p
        );
      },
      q,
    ),
    c = D(
      t.stores.matches,
      (u) => {
        const h = [],
          p = t.ssr?.manifest;
        return (
          p &&
            u.forEach((g) => {
              p.routes[g.routeId]?.preloads?.forEach((v) => {
                h.push({ tag: "link", attrs: { ...Ii(p, v, e), nonce: r } });
              });
            }),
          h
        );
      },
      q,
    ),
    a = D(
      t.stores.matches,
      (u) =>
        u
          .flatMap((h) => h.styles ?? [])
          .filter((h) => h !== void 0)
          .map(({ children: h, ...p }) => ({
            tag: "style",
            attrs: { ...p, nonce: r },
            children: h,
          })),
      q,
    ),
    l = D(
      t.stores.matches,
      (u) =>
        u
          .flatMap((h) => h.headScripts ?? [])
          .filter((h) => h !== void 0)
          .map(({ children: h, ...p }) => ({
            tag: "script",
            attrs: { ...p, nonce: r },
            children: h,
          })),
      q,
    ),
    f = [];
  return (mt(f, s), f.push(...c), mt(f, o), f.push(...i), mt(f, a), mt(f, l), f);
};
function Nl(e) {
  const t = Dl(e.assetCrossOrigin),
    r = $().options.ssr?.nonce;
  return x.jsx(x.Fragment, {
    children: t.map((n) =>
      I.createElement(ro, { ...n, key: `tsr-meta-${JSON.stringify(n)}`, nonce: r }),
    ),
  });
}
var Bl = () => {
  const e = $(),
    t = e.options.ssr?.nonce,
    r = (o) => {
      const i = [],
        c = e.ssr?.manifest;
      if (!c) return [];
      for (const a of o) {
        const l = c.routes[a.routeId]?.scripts;
        if (l)
          for (const f of l)
            i.push({
              tag: "script",
              attrs: { ...f.attrs, nonce: t },
              children: f.children,
              ...(typeof f.attrs?.src == "string" ? { preventScriptHoist: !0 } : {}),
            });
      }
      return i;
    },
    n = (o) =>
      o
        .map((i) => i.scripts)
        .flat(1)
        .filter(Boolean)
        .map(({ children: i, ...c }) => ({
          tag: "script",
          attrs: { ...c, suppressHydrationWarning: !0, nonce: t },
          children: i,
        })),
    s = D(e.stores.matches, r, q);
  return Ul(e, D(e.stores.matches, n, q), s);
};
function Ul(e, t, r) {
  const n = [...t, ...r];
  return x.jsx(x.Fragment, {
    children: n.map((s, o) => I.createElement(ro, { ...s, key: `tsr-scripts-${s.tag}-${o}` })),
  });
}
var Fe = (e, t) => {
  const r = { type: "request", ...(t || e) },
    n = (s) => Fe({}, Object.assign(r, { validator: s, inputValidator: s }));
  return {
    options: r,
    middleware: (s) => Fe({}, Object.assign(r, { middleware: s })),
    validator: n,
    inputValidator: n,
    client: (s) => Fe({}, Object.assign(r, { client: s })),
    server: (s) => Fe({}, Object.assign(r, { server: s })),
  };
};
function no(e, t) {
  for (let r = 0, n = t.length; r < n; r++) {
    const s = t[r];
    e.has(s) || (e.add(s), s.extends && no(e, s.extends));
  }
}
var $l = (e) => ({
  getOptions: async () => {
    const t = await e();
    if (t.serializationAdapters) {
      const r = new Set();
      (no(r, t.serializationAdapters), (t.serializationAdapters = Array.from(r)));
    }
    return t;
  },
  createMiddleware: Fe,
});
const zl = Fe(),
  Mn = $l(() => ({ requestMiddleware: [zl] }));
var zt = class {
    constructor() {
      ((this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this)));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          (this.listeners.delete(e), this.onUnsubscribe());
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  ql = class extends zt {
    #e;
    #t;
    #r;
    constructor() {
      (super(),
        (this.#r = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const t = () => e();
            return (
              window.addEventListener("visibilitychange", t, !1),
              () => {
                window.removeEventListener("visibilitychange", t);
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#r);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#r = e),
        this.#t?.(),
        (this.#t = e((t) => {
          typeof t == "boolean" ? this.setFocused(t) : this.onFocus();
        })));
    }
    setFocused(e) {
      this.#e !== e && ((this.#e = e), this.onFocus());
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach((t) => {
        t(e);
      });
    }
    isFocused() {
      return typeof this.#e == "boolean"
        ? this.#e
        : globalThis.document?.visibilityState !== "hidden";
    }
  },
  so = new ql(),
  Hl = {
    setTimeout: (e, t) => setTimeout(e, t),
    clearTimeout: (e) => clearTimeout(e),
    setInterval: (e, t) => setInterval(e, t),
    clearInterval: (e) => clearInterval(e),
  },
  Vl = class {
    #e = Hl;
    #t = !1;
    setTimeoutProvider(e) {
      this.#e = e;
    }
    setTimeout(e, t) {
      return this.#e.setTimeout(e, t);
    }
    clearTimeout(e) {
      this.#e.clearTimeout(e);
    }
    setInterval(e, t) {
      return this.#e.setInterval(e, t);
    }
    clearInterval(e) {
      this.#e.clearInterval(e);
    }
  },
  gr = new Vl();
function Wl(e) {
  setTimeout(e, 0);
}
var Kl = typeof window > "u" || "Deno" in globalThis;
function Y() {}
function Ql(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Gl(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Yl(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function yr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jl(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Tn(e, t) {
  const { type: r = "all", exact: n, fetchStatus: s, predicate: o, queryKey: i, stale: c } = e;
  if (i) {
    if (n) {
      if (t.queryHash !== Mr(i, t.options)) return !1;
    } else if (!ot(t.queryKey, i)) return !1;
  }
  if (r !== "all") {
    const a = t.isActive();
    if ((r === "active" && !a) || (r === "inactive" && a)) return !1;
  }
  return !(
    (typeof c == "boolean" && t.isStale() !== c) ||
    (s && s !== t.state.fetchStatus) ||
    (o && !o(t))
  );
}
function An(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: o } = e;
  if (o) {
    if (!t.options.mutationKey) return !1;
    if (r) {
      if (st(t.options.mutationKey) !== st(o)) return !1;
    } else if (!ot(t.options.mutationKey, o)) return !1;
  }
  return !((n && t.state.status !== n) || (s && !s(t)));
}
function Mr(e, t) {
  return (t?.queryKeyHashFn || st)(e);
}
function st(e) {
  return JSON.stringify(e, (t, r) =>
    vr(r)
      ? Object.keys(r)
          .sort()
          .reduce((n, s) => ((n[s] = r[s]), n), {})
      : r,
  );
}
function ot(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
        ? Object.keys(t).every((r) => ot(e[r], t[r]))
        : !1;
}
var Xl = Object.prototype.hasOwnProperty;
function oo(e, t, r = 0) {
  if (e === t) return e;
  if (r > 500) return t;
  const n = On(e) && On(t);
  if (!n && !(vr(e) && vr(t))) return t;
  const o = (n ? e : Object.keys(e)).length,
    i = n ? t : Object.keys(t),
    c = i.length,
    a = n ? new Array(c) : {};
  let l = 0;
  for (let f = 0; f < c; f++) {
    const u = n ? f : i[f],
      h = e[u],
      p = t[u];
    if (h === p) {
      ((a[u] = h), (n ? f < o : Xl.call(e, u)) && l++);
      continue;
    }
    if (h === null || p === null || typeof h != "object" || typeof p != "object") {
      a[u] = p;
      continue;
    }
    const g = oo(h, p, r + 1);
    ((a[u] = g), g === h && l++);
  }
  return o === c && l === o ? e : a;
}
function On(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function vr(e) {
  if (!kn(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const r = t.prototype;
  return !(
    !kn(r) ||
    !r.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function kn(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Zl(e) {
  return new Promise((t) => {
    gr.setTimeout(t, e);
  });
}
function ef(e, t, r) {
  return typeof r.structuralSharing == "function"
    ? r.structuralSharing(e, t)
    : r.structuralSharing !== !1
      ? oo(e, t)
      : t;
}
function tf(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function rf(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Tr = Symbol();
function io(e, t) {
  return !e.queryFn && t?.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === Tr
      ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
      : e.queryFn;
}
function nf(e, t, r) {
  let n = !1,
    s;
  return (
    Object.defineProperty(e, "signal", {
      enumerable: !0,
      get: () => (
        (s ??= t()),
        n || ((n = !0), s.aborted ? r() : s.addEventListener("abort", r, { once: !0 })),
        s
      ),
    }),
    e
  );
}
var ao = (() => {
  let e = () => Kl;
  return {
    isServer() {
      return e();
    },
    setIsServer(t) {
      e = t;
    },
  };
})();
function sf() {
  let e, t;
  const r = new Promise((s, o) => {
    ((e = s), (t = o));
  });
  ((r.status = "pending"), r.catch(() => {}));
  function n(s) {
    (Object.assign(r, s), delete r.resolve, delete r.reject);
  }
  return (
    (r.resolve = (s) => {
      (n({ status: "fulfilled", value: s }), e(s));
    }),
    (r.reject = (s) => {
      (n({ status: "rejected", reason: s }), t(s));
    }),
    r
  );
}
var of = Wl;
function af() {
  let e = [],
    t = 0,
    r = (c) => {
      c();
    },
    n = (c) => {
      c();
    },
    s = of;
  const o = (c) => {
      t
        ? e.push(c)
        : s(() => {
            r(c);
          });
    },
    i = () => {
      const c = e;
      ((e = []),
        c.length &&
          s(() => {
            n(() => {
              c.forEach((a) => {
                r(a);
              });
            });
          }));
    };
  return {
    batch: (c) => {
      let a;
      t++;
      try {
        a = c();
      } finally {
        (t--, t || i());
      }
      return a;
    },
    batchCalls:
      (c) =>
      (...a) => {
        o(() => {
          c(...a);
        });
      },
    schedule: o,
    setNotifyFunction: (c) => {
      r = c;
    },
    setBatchNotifyFunction: (c) => {
      n = c;
    },
    setScheduler: (c) => {
      s = c;
    },
  };
}
var H = af(),
  cf = class extends zt {
    #e = !0;
    #t;
    #r;
    constructor() {
      (super(),
        (this.#r = (e) => {
          if (typeof window < "u" && window.addEventListener) {
            const t = () => e(!0),
              r = () => e(!1);
            return (
              window.addEventListener("online", t, !1),
              window.addEventListener("offline", r, !1),
              () => {
                (window.removeEventListener("online", t), window.removeEventListener("offline", r));
              }
            );
          }
        }));
    }
    onSubscribe() {
      this.#t || this.setEventListener(this.#r);
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#t?.(), (this.#t = void 0));
    }
    setEventListener(e) {
      ((this.#r = e), this.#t?.(), (this.#t = e(this.setOnline.bind(this))));
    }
    setOnline(e) {
      this.#e !== e &&
        ((this.#e = e),
        this.listeners.forEach((r) => {
          r(e);
        }));
    }
    isOnline() {
      return this.#e;
    }
  },
  kt = new cf();
function uf(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function co(e) {
  return (e ?? "online") === "online" ? kt.isOnline() : !0;
}
var wr = class extends Error {
  constructor(e) {
    (super("CancelledError"), (this.revert = e?.revert), (this.silent = e?.silent));
  }
};
function uo(e) {
  let t = !1,
    r = 0,
    n;
  const s = sf(),
    o = () => s.status !== "pending",
    i = (v) => {
      if (!o()) {
        const m = new wr(v);
        (h(m), e.onCancel?.(m));
      }
    },
    c = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    l = () => so.isFocused() && (e.networkMode === "always" || kt.isOnline()) && e.canRun(),
    f = () => co(e.networkMode) && e.canRun(),
    u = (v) => {
      o() || (n?.(), s.resolve(v));
    },
    h = (v) => {
      o() || (n?.(), s.reject(v));
    },
    p = () =>
      new Promise((v) => {
        ((n = (m) => {
          (o() || l()) && v(m);
        }),
          e.onPause?.());
      }).then(() => {
        ((n = void 0), o() || e.onContinue?.());
      }),
    g = () => {
      if (o()) return;
      let v;
      const m = r === 0 ? e.initialPromise : void 0;
      try {
        v = m ?? e.fn();
      } catch (y) {
        v = Promise.reject(y);
      }
      Promise.resolve(v)
        .then(u)
        .catch((y) => {
          if (o()) return;
          const w = e.retry ?? (ao.isServer() ? 0 : 3),
            S = e.retryDelay ?? uf,
            b = typeof S == "function" ? S(r, y) : S,
            R = w === !0 || (typeof w == "number" && r < w) || (typeof w == "function" && w(r, y));
          if (t || !R) {
            h(y);
            return;
          }
          (r++,
            e.onFail?.(r, y),
            Zl(b)
              .then(() => (l() ? void 0 : p()))
              .then(() => {
                t ? h(y) : g();
              }));
        });
    };
  return {
    promise: s,
    status: () => s.status,
    cancel: i,
    continue: () => (n?.(), s),
    cancelRetry: c,
    continueRetry: a,
    canStart: f,
    start: () => (f() ? g() : p().then(g), s),
  };
}
var lo = class {
  #e;
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    (this.clearGcTimeout(),
      Gl(this.gcTime) &&
        (this.#e = gr.setTimeout(() => {
          this.optionalRemove();
        }, this.gcTime)));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (ao.isServer() ? 1 / 0 : 300 * 1e3));
  }
  clearGcTimeout() {
    this.#e !== void 0 && (gr.clearTimeout(this.#e), (this.#e = void 0));
  }
};
function lf(e) {
  return {
    onFetch: (t, r) => {
      const n = t.options,
        s = t.fetchOptions?.meta?.fetchMore?.direction,
        o = t.state.data?.pages || [],
        i = t.state.data?.pageParams || [];
      let c = { pages: [], pageParams: [] },
        a = 0;
      const l = async () => {
        let f = !1;
        const u = (g) => {
            nf(
              g,
              () => t.signal,
              () => (f = !0),
            );
          },
          h = io(t.options, t.fetchOptions),
          p = async (g, v, m) => {
            if (f) return Promise.reject(t.signal.reason);
            if (v == null && g.pages.length) return Promise.resolve(g);
            const w = (() => {
                const C = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: v,
                  direction: m ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return (u(C), C);
              })(),
              S = await h(w),
              { maxPages: b } = t.options,
              R = m ? rf : tf;
            return { pages: R(g.pages, S, b), pageParams: R(g.pageParams, v, b) };
          };
        if (s && o.length) {
          const g = s === "backward",
            v = g ? ff : Fn,
            m = { pages: o, pageParams: i },
            y = v(n, m);
          c = await p(m, y, g);
        } else {
          const g = e ?? o.length;
          do {
            const v = a === 0 ? (i[0] ?? n.initialPageParam) : Fn(n, c);
            if (a > 0 && v == null) break;
            ((c = await p(c, v)), a++);
          } while (a < g);
        }
        return c;
      };
      t.options.persister
        ? (t.fetchFn = () =>
            t.options.persister?.(
              l,
              { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
              r,
            ))
        : (t.fetchFn = l);
    },
  };
}
function Fn(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0;
}
function ff(e, { pages: t, pageParams: r }) {
  return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0;
}
var df = class extends lo {
  #e;
  #t;
  #r;
  #s;
  #o;
  #n;
  #c;
  #i;
  constructor(e) {
    (super(),
      (this.#i = !1),
      (this.#c = e.defaultOptions),
      this.setOptions(e.options),
      (this.observers = []),
      (this.#o = e.client),
      (this.#s = this.#o.getQueryCache()),
      (this.queryKey = e.queryKey),
      (this.queryHash = e.queryHash),
      (this.#t = Dn(this.options)),
      (this.state = e.state ?? this.#t),
      this.scheduleGc());
  }
  get meta() {
    return this.options.meta;
  }
  get queryType() {
    return this.#e;
  }
  get promise() {
    return this.#n?.promise;
  }
  setOptions(e) {
    if (
      ((this.options = { ...this.#c, ...e }),
      e?._type && (this.#e = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0)
    ) {
      const t = Dn(this.options);
      t.data !== void 0 && (this.setState(jn(t.data, t.dataUpdatedAt)), (this.#t = t));
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#s.remove(this);
  }
  setData(e, t) {
    const r = ef(this.state.data, e, this.options);
    return (
      this.#a({ data: r, type: "success", dataUpdatedAt: t?.updatedAt, manual: t?.manual }),
      r
    );
  }
  setState(e) {
    this.#a({ type: "setState", state: e });
  }
  cancel(e) {
    const t = this.#n?.promise;
    return (this.#n?.cancel(e), t ? t.then(Y).catch(Y) : Promise.resolve());
  }
  destroy() {
    (super.destroy(), this.cancel({ silent: !0 }));
  }
  get resetState() {
    return this.#t;
  }
  reset() {
    (this.destroy(), this.setState(this.resetState));
  }
  isActive() {
    return this.observers.some((e) => Jl(e.options.enabled, this) !== !1);
  }
  isDisabled() {
    return this.getObserversCount() > 0
      ? !this.isActive()
      : this.options.queryFn === Tr || !this.isFetched();
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0;
  }
  isStatic() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => yr(e.options.staleTime, this) === "static")
      : !1;
  }
  isStale() {
    return this.getObserversCount() > 0
      ? this.observers.some((e) => e.getCurrentResult().isStale)
      : this.state.data === void 0 || this.state.isInvalidated;
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0
      ? !0
      : e === "static"
        ? !1
        : this.state.isInvalidated
          ? !0
          : !Yl(this.state.dataUpdatedAt, e);
  }
  onFocus() {
    (this.observers.find((t) => t.shouldFetchOnWindowFocus())?.refetch({ cancelRefetch: !1 }),
      this.#n?.continue());
  }
  onOnline() {
    (this.observers.find((t) => t.shouldFetchOnReconnect())?.refetch({ cancelRefetch: !1 }),
      this.#n?.continue());
  }
  addObserver(e) {
    this.observers.includes(e) ||
      (this.observers.push(e),
      this.clearGcTimeout(),
      this.#s.notify({ type: "observerAdded", query: this, observer: e }));
  }
  removeObserver(e) {
    this.observers.includes(e) &&
      ((this.observers = this.observers.filter((t) => t !== e)),
      this.observers.length ||
        (this.#n && (this.#i || this.#u() ? this.#n.cancel({ revert: !0 }) : this.#n.cancelRetry()),
        this.scheduleGc()),
      this.#s.notify({ type: "observerRemoved", query: this, observer: e }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  #u() {
    return this.state.fetchStatus === "paused" && this.state.status === "pending";
  }
  invalidate() {
    this.state.isInvalidated || this.#a({ type: "invalidate" });
  }
  async fetch(e, t) {
    if (this.state.fetchStatus !== "idle" && this.#n?.status() !== "rejected") {
      if (this.state.data !== void 0 && t?.cancelRefetch) this.cancel({ silent: !0 });
      else if (this.#n) return (this.#n.continueRetry(), this.#n.promise);
    }
    if ((e && this.setOptions(e), !this.options.queryFn)) {
      const a = this.observers.find((l) => l.options.queryFn);
      a && this.setOptions(a.options);
    }
    const r = new AbortController(),
      n = (a) => {
        Object.defineProperty(a, "signal", {
          enumerable: !0,
          get: () => ((this.#i = !0), r.signal),
        });
      },
      s = () => {
        const a = io(this.options, t),
          f = (() => {
            const u = { client: this.#o, queryKey: this.queryKey, meta: this.meta };
            return (n(u), u);
          })();
        return ((this.#i = !1), this.options.persister ? this.options.persister(a, f, this) : a(f));
      },
      i = (() => {
        const a = {
          fetchOptions: t,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#o,
          state: this.state,
          fetchFn: s,
        };
        return (n(a), a);
      })();
    ((this.#e === "infinite" ? lf(this.options.pages) : this.options.behavior)?.onFetch(i, this),
      (this.#r = this.state),
      (this.state.fetchStatus === "idle" || this.state.fetchMeta !== i.fetchOptions?.meta) &&
        this.#a({ type: "fetch", meta: i.fetchOptions?.meta }),
      (this.#n = uo({
        initialPromise: t?.initialPromise,
        fn: i.fetchFn,
        onCancel: (a) => {
          (a instanceof wr && a.revert && this.setState({ ...this.#r, fetchStatus: "idle" }),
            r.abort());
        },
        onFail: (a, l) => {
          this.#a({ type: "failed", failureCount: a, error: l });
        },
        onPause: () => {
          this.#a({ type: "pause" });
        },
        onContinue: () => {
          this.#a({ type: "continue" });
        },
        retry: i.options.retry,
        retryDelay: i.options.retryDelay,
        networkMode: i.options.networkMode,
        canRun: () => !0,
      })));
    try {
      const a = await this.#n.start();
      if (a === void 0) throw new Error(`${this.queryHash} data is undefined`);
      return (
        this.setData(a),
        this.#s.config.onSuccess?.(a, this),
        this.#s.config.onSettled?.(a, this.state.error, this),
        a
      );
    } catch (a) {
      if (a instanceof wr) {
        if (a.silent) return this.#n.promise;
        if (a.revert) {
          if (this.state.data === void 0) throw a;
          return this.state.data;
        }
      }
      throw (
        this.#a({ type: "error", error: a }),
        this.#s.config.onError?.(a, this),
        this.#s.config.onSettled?.(this.state.data, a, this),
        a
      );
    } finally {
      this.scheduleGc();
    }
  }
  #a(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return { ...r, fetchFailureCount: e.failureCount, fetchFailureReason: e.error };
        case "pause":
          return { ...r, fetchStatus: "paused" };
        case "continue":
          return { ...r, fetchStatus: "fetching" };
        case "fetch":
          return { ...r, ...hf(r.data, this.options), fetchMeta: e.meta ?? null };
        case "success":
          const n = {
            ...r,
            ...jn(e.data, e.dataUpdatedAt),
            dataUpdateCount: r.dataUpdateCount + 1,
            ...(!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null,
            }),
          };
          return ((this.#r = e.manual ? n : void 0), n);
        case "error":
          const s = e.error;
          return {
            ...r,
            error: s,
            errorUpdateCount: r.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: r.fetchFailureCount + 1,
            fetchFailureReason: s,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0,
          };
        case "invalidate":
          return { ...r, isInvalidated: !0 };
        case "setState":
          return { ...r, ...e.state };
      }
    };
    ((this.state = t(this.state)),
      H.batch(() => {
        (this.observers.forEach((r) => {
          r.onQueryUpdate();
        }),
          this.#s.notify({ query: this, type: "updated", action: e }));
      }));
  }
};
function hf(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: co(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function jn(e, t) {
  return {
    data: e,
    dataUpdatedAt: t ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success",
  };
}
function Dn(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
    r = t !== void 0,
    n = r
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? (n ?? Date.now()) : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var pf = class extends lo {
  #e;
  #t;
  #r;
  #s;
  constructor(e) {
    (super(),
      (this.#e = e.client),
      (this.mutationId = e.mutationId),
      (this.#r = e.mutationCache),
      (this.#t = []),
      (this.state = e.state || mf()),
      this.setOptions(e.options),
      this.scheduleGc());
  }
  setOptions(e) {
    ((this.options = e), this.updateGcTime(this.options.gcTime));
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(e) {
    this.#t.includes(e) ||
      (this.#t.push(e),
      this.clearGcTimeout(),
      this.#r.notify({ type: "observerAdded", mutation: this, observer: e }));
  }
  removeObserver(e) {
    ((this.#t = this.#t.filter((t) => t !== e)),
      this.scheduleGc(),
      this.#r.notify({ type: "observerRemoved", mutation: this, observer: e }));
  }
  optionalRemove() {
    this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#r.remove(this));
  }
  continue() {
    return this.#s?.continue() ?? this.execute(this.state.variables);
  }
  async execute(e) {
    const t = () => {
        this.#o({ type: "continue" });
      },
      r = { client: this.#e, meta: this.options.meta, mutationKey: this.options.mutationKey };
    this.#s = uo({
      fn: () =>
        this.options.mutationFn
          ? this.options.mutationFn(e, r)
          : Promise.reject(new Error("No mutationFn found")),
      onFail: (o, i) => {
        this.#o({ type: "failed", failureCount: o, error: i });
      },
      onPause: () => {
        this.#o({ type: "pause" });
      },
      onContinue: t,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#r.canRun(this),
    });
    const n = this.state.status === "pending",
      s = !this.#s.canStart();
    try {
      if (n) t();
      else {
        (this.#o({ type: "pending", variables: e, isPaused: s }),
          this.#r.config.onMutate && (await this.#r.config.onMutate(e, this, r)));
        const i = await this.options.onMutate?.(e, r);
        i !== this.state.context &&
          this.#o({ type: "pending", context: i, variables: e, isPaused: s });
      }
      const o = await this.#s.start();
      return (
        await this.#r.config.onSuccess?.(o, e, this.state.context, this, r),
        await this.options.onSuccess?.(o, e, this.state.context, r),
        await this.#r.config.onSettled?.(
          o,
          null,
          this.state.variables,
          this.state.context,
          this,
          r,
        ),
        await this.options.onSettled?.(o, null, e, this.state.context, r),
        this.#o({ type: "success", data: o }),
        o
      );
    } catch (o) {
      try {
        await this.#r.config.onError?.(o, e, this.state.context, this, r);
      } catch (i) {
        Promise.reject(i);
      }
      try {
        await this.options.onError?.(o, e, this.state.context, r);
      } catch (i) {
        Promise.reject(i);
      }
      try {
        await this.#r.config.onSettled?.(
          void 0,
          o,
          this.state.variables,
          this.state.context,
          this,
          r,
        );
      } catch (i) {
        Promise.reject(i);
      }
      try {
        await this.options.onSettled?.(void 0, o, e, this.state.context, r);
      } catch (i) {
        Promise.reject(i);
      }
      throw (this.#o({ type: "error", error: o }), o);
    } finally {
      this.#r.runNext(this);
    }
  }
  #o(e) {
    const t = (r) => {
      switch (e.type) {
        case "failed":
          return { ...r, failureCount: e.failureCount, failureReason: e.error };
        case "pause":
          return { ...r, isPaused: !0 };
        case "continue":
          return { ...r, isPaused: !1 };
        case "pending":
          return {
            ...r,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now(),
          };
        case "success":
          return {
            ...r,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1,
          };
        case "error":
          return {
            ...r,
            data: void 0,
            error: e.error,
            failureCount: r.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error",
          };
      }
    };
    ((this.state = t(this.state)),
      H.batch(() => {
        (this.#t.forEach((r) => {
          r.onMutationUpdate(e);
        }),
          this.#r.notify({ mutation: this, type: "updated", action: e }));
      }));
  }
};
function mf() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var gf = class extends zt {
  constructor(e = {}) {
    (super(), (this.config = e), (this.#e = new Set()), (this.#t = new Map()), (this.#r = 0));
  }
  #e;
  #t;
  #r;
  build(e, t, r) {
    const n = new pf({
      client: e,
      mutationCache: this,
      mutationId: ++this.#r,
      options: e.defaultMutationOptions(t),
      state: r,
    });
    return (this.add(n), n);
  }
  add(e) {
    this.#e.add(e);
    const t = bt(e);
    if (typeof t == "string") {
      const r = this.#t.get(t);
      r ? r.push(e) : this.#t.set(t, [e]);
    }
    this.notify({ type: "added", mutation: e });
  }
  remove(e) {
    if (this.#e.delete(e)) {
      const t = bt(e);
      if (typeof t == "string") {
        const r = this.#t.get(t);
        if (r)
          if (r.length > 1) {
            const n = r.indexOf(e);
            n !== -1 && r.splice(n, 1);
          } else r[0] === e && this.#t.delete(t);
      }
    }
    this.notify({ type: "removed", mutation: e });
  }
  canRun(e) {
    const t = bt(e);
    if (typeof t == "string") {
      const n = this.#t.get(t)?.find((s) => s.state.status === "pending");
      return !n || n === e;
    } else return !0;
  }
  runNext(e) {
    const t = bt(e);
    return typeof t == "string"
      ? (this.#t
          .get(t)
          ?.find((n) => n !== e && n.state.isPaused)
          ?.continue() ?? Promise.resolve())
      : Promise.resolve();
  }
  clear() {
    H.batch(() => {
      (this.#e.forEach((e) => {
        this.notify({ type: "removed", mutation: e });
      }),
        this.#e.clear(),
        this.#t.clear());
    });
  }
  getAll() {
    return Array.from(this.#e);
  }
  find(e) {
    const t = { exact: !0, ...e };
    return this.getAll().find((r) => An(t, r));
  }
  findAll(e = {}) {
    return this.getAll().filter((t) => An(e, t));
  }
  notify(e) {
    H.batch(() => {
      this.listeners.forEach((t) => {
        t(e);
      });
    });
  }
  resumePausedMutations() {
    const e = this.getAll().filter((t) => t.state.isPaused);
    return H.batch(() => Promise.all(e.map((t) => t.continue().catch(Y))));
  }
};
function bt(e) {
  return e.options.scope?.id;
}
var yf = class extends zt {
    constructor(e = {}) {
      (super(), (this.config = e), (this.#e = new Map()));
    }
    #e;
    build(e, t, r) {
      const n = t.queryKey,
        s = t.queryHash ?? Mr(n, t);
      let o = this.get(s);
      return (
        o ||
          ((o = new df({
            client: e,
            queryKey: n,
            queryHash: s,
            options: e.defaultQueryOptions(t),
            state: r,
            defaultOptions: e.getQueryDefaults(n),
          })),
          this.add(o)),
        o
      );
    }
    add(e) {
      this.#e.has(e.queryHash) ||
        (this.#e.set(e.queryHash, e), this.notify({ type: "added", query: e }));
    }
    remove(e) {
      const t = this.#e.get(e.queryHash);
      t &&
        (e.destroy(),
        t === e && this.#e.delete(e.queryHash),
        this.notify({ type: "removed", query: e }));
    }
    clear() {
      H.batch(() => {
        this.getAll().forEach((e) => {
          this.remove(e);
        });
      });
    }
    get(e) {
      return this.#e.get(e);
    }
    getAll() {
      return [...this.#e.values()];
    }
    find(e) {
      const t = { exact: !0, ...e };
      return this.getAll().find((r) => Tn(t, r));
    }
    findAll(e = {}) {
      const t = this.getAll();
      return Object.keys(e).length > 0 ? t.filter((r) => Tn(e, r)) : t;
    }
    notify(e) {
      H.batch(() => {
        this.listeners.forEach((t) => {
          t(e);
        });
      });
    }
    onFocus() {
      H.batch(() => {
        this.getAll().forEach((e) => {
          e.onFocus();
        });
      });
    }
    onOnline() {
      H.batch(() => {
        this.getAll().forEach((e) => {
          e.onOnline();
        });
      });
    }
  },
  vf = class {
    #e;
    #t;
    #r;
    #s;
    #o;
    #n;
    #c;
    #i;
    constructor(e = {}) {
      ((this.#e = e.queryCache || new yf()),
        (this.#t = e.mutationCache || new gf()),
        (this.#r = e.defaultOptions || {}),
        (this.#s = new Map()),
        (this.#o = new Map()),
        (this.#n = 0));
    }
    mount() {
      (this.#n++,
        this.#n === 1 &&
          ((this.#c = so.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onFocus());
          })),
          (this.#i = kt.subscribe(async (e) => {
            e && (await this.resumePausedMutations(), this.#e.onOnline());
          }))));
    }
    unmount() {
      (this.#n--,
        this.#n === 0 && (this.#c?.(), (this.#c = void 0), this.#i?.(), (this.#i = void 0)));
    }
    isFetching(e) {
      return this.#e.findAll({ ...e, fetchStatus: "fetching" }).length;
    }
    isMutating(e) {
      return this.#t.findAll({ ...e, status: "pending" }).length;
    }
    getQueryData(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state.data;
    }
    ensureQueryData(e) {
      const t = this.defaultQueryOptions(e),
        r = this.#e.build(this, t),
        n = r.state.data;
      return n === void 0
        ? this.fetchQuery(e)
        : (e.revalidateIfStale && r.isStaleByTime(yr(t.staleTime, r)) && this.prefetchQuery(t),
          Promise.resolve(n));
    }
    getQueriesData(e) {
      return this.#e.findAll(e).map(({ queryKey: t, state: r }) => {
        const n = r.data;
        return [t, n];
      });
    }
    setQueryData(e, t, r) {
      const n = this.defaultQueryOptions({ queryKey: e }),
        o = this.#e.get(n.queryHash)?.state.data,
        i = Ql(t, o);
      if (i !== void 0) return this.#e.build(this, n).setData(i, { ...r, manual: !0 });
    }
    setQueriesData(e, t, r) {
      return H.batch(() =>
        this.#e.findAll(e).map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)]),
      );
    }
    getQueryState(e) {
      const t = this.defaultQueryOptions({ queryKey: e });
      return this.#e.get(t.queryHash)?.state;
    }
    removeQueries(e) {
      const t = this.#e;
      H.batch(() => {
        t.findAll(e).forEach((r) => {
          t.remove(r);
        });
      });
    }
    resetQueries(e, t) {
      const r = this.#e;
      return H.batch(
        () => (
          r.findAll(e).forEach((n) => {
            n.reset();
          }),
          this.refetchQueries({ type: "active", ...e }, t)
        ),
      );
    }
    cancelQueries(e, t = {}) {
      const r = { revert: !0, ...t },
        n = H.batch(() => this.#e.findAll(e).map((s) => s.cancel(r)));
      return Promise.all(n).then(Y).catch(Y);
    }
    invalidateQueries(e, t = {}) {
      return H.batch(
        () => (
          this.#e.findAll(e).forEach((r) => {
            r.invalidate();
          }),
          e?.refetchType === "none"
            ? Promise.resolve()
            : this.refetchQueries({ ...e, type: e?.refetchType ?? e?.type ?? "active" }, t)
        ),
      );
    }
    refetchQueries(e, t = {}) {
      const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
        n = H.batch(() =>
          this.#e
            .findAll(e)
            .filter((s) => !s.isDisabled() && !s.isStatic())
            .map((s) => {
              let o = s.fetch(void 0, r);
              return (
                r.throwOnError || (o = o.catch(Y)),
                s.state.fetchStatus === "paused" ? Promise.resolve() : o
              );
            }),
        );
      return Promise.all(n).then(Y);
    }
    fetchQuery(e) {
      const t = this.defaultQueryOptions(e);
      t.retry === void 0 && (t.retry = !1);
      const r = this.#e.build(this, t);
      return r.isStaleByTime(yr(t.staleTime, r)) ? r.fetch(t) : Promise.resolve(r.state.data);
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Y).catch(Y);
    }
    fetchInfiniteQuery(e) {
      return ((e._type = "infinite"), this.fetchQuery(e));
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Y).catch(Y);
    }
    ensureInfiniteQueryData(e) {
      return ((e._type = "infinite"), this.ensureQueryData(e));
    }
    resumePausedMutations() {
      return kt.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
    }
    getQueryCache() {
      return this.#e;
    }
    getMutationCache() {
      return this.#t;
    }
    getDefaultOptions() {
      return this.#r;
    }
    setDefaultOptions(e) {
      this.#r = e;
    }
    setQueryDefaults(e, t) {
      this.#s.set(st(e), { queryKey: e, defaultOptions: t });
    }
    getQueryDefaults(e) {
      const t = [...this.#s.values()],
        r = {};
      return (
        t.forEach((n) => {
          ot(e, n.queryKey) && Object.assign(r, n.defaultOptions);
        }),
        r
      );
    }
    setMutationDefaults(e, t) {
      this.#o.set(st(e), { mutationKey: e, defaultOptions: t });
    }
    getMutationDefaults(e) {
      const t = [...this.#o.values()],
        r = {};
      return (
        t.forEach((n) => {
          ot(e, n.mutationKey) && Object.assign(r, n.defaultOptions);
        }),
        r
      );
    }
    defaultQueryOptions(e) {
      if (e._defaulted) return e;
      const t = { ...this.#r.queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
      return (
        t.queryHash || (t.queryHash = Mr(t.queryKey, t)),
        t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
        t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
        !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
        t.queryFn === Tr && (t.enabled = !1),
        t
      );
    }
    defaultMutationOptions(e) {
      return e?._defaulted
        ? e
        : {
            ...this.#r.mutations,
            ...(e?.mutationKey && this.getMutationDefaults(e.mutationKey)),
            ...e,
            _defaulted: !0,
          };
    }
    clear() {
      (this.#e.clear(), this.#t.clear());
    }
  },
  wf = I.createContext(void 0),
  bf = ({ client: e, children: t }) => (
    I.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e],
    ),
    x.jsx(wf.Provider, { value: e, children: t })
  );
const Sf = "/assets/styles-Bz82AN6C.css";
function xf(e, t = {}) {
  typeof window > "u" ||
    window.__higgsfieldEvents?.captureException?.(
      e,
      { source: "react_error_boundary", route: window.location.pathname, ...t },
      { mechanism: "react_error_boundary", handled: !1, severity: "error" },
    );
}
function Pf() {
  return x.jsx("div", {
    className: "flex min-h-screen items-center justify-center bg-background px-4",
    children: x.jsxs("div", {
      className: "max-w-md text-center",
      children: [
        x.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
        x.jsx("h2", {
          className: "mt-4 text-xl font-semibold text-foreground",
          children: "Page not found",
        }),
        x.jsx("p", {
          className: "mt-2 text-sm text-muted-foreground",
          children: "The page you're looking for doesn't exist or has been moved.",
        }),
        x.jsx("div", {
          className: "mt-6",
          children: x.jsx(Lr, {
            to: "/",
            className:
              "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
            children: "Go home",
          }),
        }),
      ],
    }),
  });
}
function Rf({ error: e, reset: t }) {
  console.error(e);
  const r = $();
  return (
    I.useEffect(() => {
      xf(e, { boundary: "tanstack_root_error_component" });
    }, [e]),
    x.jsx("div", {
      className: "flex min-h-screen items-center justify-center bg-background px-4",
      children: x.jsxs("div", {
        className: "max-w-md text-center",
        children: [
          x.jsx("h1", {
            className: "text-xl font-semibold tracking-tight text-foreground",
            children: "This page didn't load",
          }),
          x.jsx("p", {
            className: "mt-2 text-sm text-muted-foreground",
            children: "Something went wrong on our end. You can try refreshing or head back home.",
          }),
          x.jsxs("div", {
            className: "mt-6 flex flex-wrap justify-center gap-2",
            children: [
              x.jsx("button", {
                onClick: () => {
                  (r.invalidate(), t());
                },
                className:
                  "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
                children: "Try again",
              }),
              x.jsx("a", {
                href: "/",
                className:
                  "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
                children: "Go home",
              }),
            ],
          }),
        ],
      }),
    })
  );
}
const me = vl()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ótmow — Liquidez inteligente para quem vende ao setor público" },
      {
        name: "description",
        content:
          "Antecipe seus recebíveis de contratos públicos com agilidade, tecnologia e total segurança. Receba em até 48 horas, sem garantias reais e sem burocracia.",
      },
      { name: "author", content: "Ótmow Securitizadora S.A." },
      { property: "og:title", content: "Ótmow — Liquidez inteligente para o setor público" },
      {
        property: "og:description",
        content:
          "Antecipação de recebíveis de contratos públicos em até 48h. Sem garantias reais, sem burocracia.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Higgsfield" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://i.ytimg.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
      { rel: "stylesheet", href: Sf },
    ],
  }),
  shellComponent: _f,
  component: Cf,
  notFoundComponent: Pf,
  errorComponent: Rf,
});
function _f({ children: e }) {
  return x.jsxs("html", {
    lang: "pt-BR",
    children: [
      x.jsx("head", { children: x.jsx(Nl, {}) }),
      x.jsxs("body", { children: [e, x.jsx(Bl, {})] }),
    ],
  });
}
function Cf() {
  const { queryClient: e } = me.useRouteContext();
  return x.jsx(bf, { client: e, children: x.jsx(to, {}) });
}
const Ef = "modulepreload",
  If = function (e) {
    return "/" + e;
  },
  Nn = {},
  $e = function (t, r, n) {
    let s = Promise.resolve();
    if (r && r.length > 0) {
      let a = function (l) {
        return Promise.all(
          l.map((f) =>
            Promise.resolve(f).then(
              (u) => ({ status: "fulfilled", value: u }),
              (u) => ({ status: "rejected", reason: u }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const i = document.querySelector("meta[property=csp-nonce]"),
        c = i?.nonce || i?.getAttribute("nonce");
      s = a(
        r.map((l) => {
          if (((l = If(l)), l in Nn)) return;
          Nn[l] = !0;
          const f = l.endsWith(".css"),
            u = f ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${l}"]${u}`)) return;
          const h = document.createElement("link");
          if (
            ((h.rel = f ? "stylesheet" : Ef),
            f || (h.as = "script"),
            (h.crossOrigin = ""),
            (h.href = l),
            c && h.setAttribute("nonce", c),
            document.head.appendChild(h),
            f)
          )
            return new Promise((p, g) => {
              (h.addEventListener("load", p),
                h.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${l}`))));
            });
        }),
      );
    }
    function o(i) {
      const c = new Event("vite:preloadError", { cancelable: !0 });
      if (((c.payload = i), window.dispatchEvent(c), !c.defaultPrevented)) throw i;
    }
    return s.then((i) => {
      for (const c of i || []) c.status === "rejected" && o(c.reason);
      return t().catch(o);
    });
  },
  Lf = () => $e(() => import("./sobre-Bds6Vzt1.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6])),
  Mf = Be("/sobre")({ component: Ue(Lf, "component") }),
  Tf = () => $e(() => import("./parceiros-C9X6ZKEx.js"), __vite__mapDeps([7, 1, 2, 3, 8, 9])),
  Af = Be("/parceiros")({ component: Ue(Tf, "component") }),
  Of = () => $e(() => import("./gestores-fFw5jyt2.js"), __vite__mapDeps([10, 1, 2, 4, 8])),
  kf = Be("/gestores")({ component: Ue(Of, "component") }),
  Ff = () => $e(() => import("./faq-BszyD9ft.js"), __vite__mapDeps([11, 1, 2, 3, 12])),
  jf = Be("/faq")({ component: Ue(Ff, "component") }),
  Df = () =>
    $e(() => import("./clientes-DGc009Sf.js"), __vite__mapDeps([13, 1, 2, 14, 3, 5, 9, 8])),
  Nf = Be("/clientes")({ component: Ue(Df, "component") }),
  Bf = () =>
    $e(() => import("./index-BKjET-WM.js"), __vite__mapDeps([15, 1, 2, 14, 12, 3, 4, 5, 8, 6, 9])),
  Uf = Be("/")({ component: Ue(Bf, "component") }),
  $f = Mf.update({ id: "/sobre", path: "/sobre", getParentRoute: () => me }),
  zf = Af.update({ id: "/parceiros", path: "/parceiros", getParentRoute: () => me }),
  qf = kf.update({ id: "/gestores", path: "/gestores", getParentRoute: () => me }),
  Hf = jf.update({ id: "/faq", path: "/faq", getParentRoute: () => me }),
  Vf = Nf.update({ id: "/clientes", path: "/clientes", getParentRoute: () => me }),
  Wf = Uf.update({ id: "/", path: "/", getParentRoute: () => me }),
  Kf = {
    IndexRoute: Wf,
    ClientesRoute: Vf,
    FaqRoute: Hf,
    GestoresRoute: qf,
    ParceirosRoute: zf,
    SobreRoute: $f,
  },
  Qf = me._addFileChildren(Kf),
  Gf = () => {
    const e = new vf();
    return Al({
      routeTree: Qf,
      context: { queryClient: e },
      scrollRestoration: !0,
      defaultPreloadStaleTime: 0,
    });
  };
async function Yf() {
  const e = await Gf();
  let t;
  if (Mn) {
    const r = await Mn.getOptions();
    ((r.serializationAdapters = r.serializationAdapters ?? []),
      (window.__TSS_START_OPTIONS__ = r),
      (t = r.serializationAdapters),
      (e.options.defaultSsr = r.defaultSsr));
  } else ((t = []), (window.__TSS_START_OPTIONS__ = { serializationAdapters: t }));
  return (
    t.push(Du),
    e.options.serializationAdapters && t.push(...e.options.serializationAdapters),
    e.update({ basepath: "", serializationAdapters: t }),
    e.stores.matchesId.get().length || (await Bu(e)),
    e
  );
}
var Jf = Yf;
async function Xf() {
  const e = await Jf();
  return (window.$_TSR?.h(), e);
}
var or;
function Zf() {
  return (or || (or = Xf()), x.jsx(qu, { promise: or, children: (e) => x.jsx(Fl, { router: e }) }));
}
I.startTransition(() => {
  yo.hydrateRoot(document, x.jsx(I.StrictMode, { children: x.jsx(Zf, {}) }));
});
export { Lr as L, $e as _ };
