import { c as p, R as r, A as h } from "./FooterBlue-BnGcN94H.js";
import { r as o, j as e } from "./vendor-react-DLnSei1N.js";
const u = [
    [
      "path",
      {
        d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
        key: "3c2336",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  v = p("badge-check", u),
  f = 0.06,
  b = 4.345,
  j = [4, 8, 12, 16, 24],
  i = 5e3,
  c = 2e6,
  s = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });
function y() {
  const [a, m] = o.useState(25e4),
    [l, x] = o.useState(8),
    n = a * f * (l / b),
    d = a - n;
  return e.jsx("section", {
    className: "relative overflow-hidden bg-[#081127] py-24 md:py-32",
    children: e.jsxs("div", {
      className: "mx-auto max-w-7xl px-5 md:px-8",
      children: [
        e.jsx(r, {
          children: e.jsxs("div", {
            className: "mx-auto max-w-2xl text-center",
            children: [
              e.jsx("span", {
                className: "text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]",
                children: "Simulador",
              }),
              e.jsx("h2", {
                className:
                  "mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl",
                children: "Simule sua antecipação",
              }),
              e.jsx("p", {
                className: "mt-5 text-base text-slate-300 md:text-lg",
                children:
                  "Ajuste o valor do recebível e o prazo em semanas para ver quanto você recebe — com liberação em até 48 horas.",
              }),
            ],
          }),
        }),
        e.jsx(r, {
          delay: 150,
          children: e.jsxs("div", {
            className:
              "mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2",
            children: [
              e.jsxs("div", {
                className: "p-8 md:p-10",
                children: [
                  e.jsx("label", {
                    htmlFor: "sim-amount",
                    className: "block text-sm font-medium text-slate-300",
                    children: "Valor do recebível",
                  }),
                  e.jsx("p", {
                    className: "mt-2 font-display text-3xl font-bold text-white md:text-4xl",
                    children: s.format(a),
                  }),
                  e.jsx("input", {
                    id: "sim-amount",
                    type: "range",
                    min: i,
                    max: c,
                    step: 5e3,
                    value: a,
                    onChange: (t) => m(Number(t.target.value)),
                    className: "mt-5 w-full accent-[#4EB7FF]",
                  }),
                  e.jsxs("div", {
                    className: "mt-2 flex justify-between text-xs text-slate-500",
                    children: [
                      e.jsx("span", { children: s.format(i) }),
                      e.jsx("span", { children: s.format(c) }),
                    ],
                  }),
                  e.jsx("p", {
                    className: "mt-8 text-sm font-medium text-slate-300",
                    children: "Prazo do recebível",
                  }),
                  e.jsx("div", {
                    className: "mt-3 flex flex-wrap gap-2",
                    children: j.map((t) =>
                      e.jsxs(
                        "button",
                        {
                          type: "button",
                          onClick: () => x(t),
                          "aria-pressed": l === t,
                          className:
                            "rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                            (l === t
                              ? "bg-[#3674EF] text-white"
                              : "border border-white/15 bg-white/[0.04] text-slate-300 hover:border-[#3674EF]/45"),
                          children: [t, " semanas"],
                        },
                        t,
                      ),
                    ),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex flex-col justify-center gap-5 bg-[#060d1f] p-8 md:p-10",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsx("span", {
                        className: "text-sm text-slate-400",
                        children: "Valor bruto",
                      }),
                      e.jsx("span", {
                        className: "text-base font-medium text-slate-200",
                        children: s.format(a),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsx("span", { className: "text-sm text-slate-400", children: "Deságio" }),
                      e.jsxs("span", {
                        className: "text-base font-medium text-slate-200",
                        children: ["−", s.format(n)],
                      }),
                    ],
                  }),
                  e.jsx("div", { className: "h-px bg-white/10" }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("span", {
                        className: "text-sm text-slate-400",
                        children: "Você recebe",
                      }),
                      e.jsx("p", {
                        className:
                          "mt-1 font-display text-3xl font-bold text-[#4EB7FF] md:text-4xl",
                        children: s.format(d),
                      }),
                      e.jsx("span", {
                        className:
                          "mt-3 inline-flex items-center gap-2 rounded-full bg-[#3674EF]/15 px-3 py-1 text-xs font-medium text-[#7cc6ff]",
                        children: "Em até 48h na sua conta",
                      }),
                    ],
                  }),
                  e.jsxs("a", {
                    href: "https://app.otmow.com/pt-BR/loan/intake/details",
                    target: "_blank",
                    rel: "noreferrer",
                    className:
                      "group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06122b] transition-transform duration-300 hover:scale-105",
                    children: [
                      "Antecipe agora",
                      e.jsx(h, {
                        className:
                          "size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        e.jsx("p", {
          className: "mx-auto mt-6 max-w-2xl text-center text-xs text-slate-500",
          children:
            "Simulação ilustrativa. Os valores finais são definidos após a análise de crédito e da operação.",
        }),
      ],
    }),
  });
}
export { v as B, y as S };
