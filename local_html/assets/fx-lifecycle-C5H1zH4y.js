function m(d, l) {
  let t = 0,
    o = !1,
    r = typeof document > "u" ? !0 : !document.hidden,
    e = !1;
  const s = (n) => {
      e && (l(n), (t = requestAnimationFrame(s)));
    },
    i = () => {
      const n = o && r;
      n && !e
        ? ((e = !0), (t = requestAnimationFrame(s)))
        : !n && e && ((e = !1), cancelAnimationFrame(t));
    },
    a = new IntersectionObserver(
      (n) => {
        ((o = n.some((u) => u.isIntersecting)), i());
      },
      { rootMargin: "120px" },
    );
  a.observe(d);
  const c = () => {
    ((r = !document.hidden), i());
  };
  return (
    document.addEventListener("visibilitychange", c),
    i(),
    () => {
      ((e = !1),
        cancelAnimationFrame(t),
        a.disconnect(),
        document.removeEventListener("visibilitychange", c));
    }
  );
}
export { m as r };
