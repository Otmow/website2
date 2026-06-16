import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/fx/Reveal";

// Taxa mensal usada no cálculo — intencionalmente nunca exibida na interface.
const MONTHLY_RATE = 0.06;
const WEEKS_PER_MONTH = 4.345;
const WEEK_OPTIONS = [4, 8, 12, 16, 24];

const AMOUNT_MIN = 5_000;
const AMOUNT_MAX = 2_000_000;

const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0,
});

export function SimuladorAntecipacao() {
  const [step, setStep] = useState(1);
  const [cnpj, setCnpj] = useState("");
  const [company, setCompany] = useState("");
  const [organ, setOrgan] = useState("");
  const [invoiceAmountStr, setInvoiceAmountStr] = useState("");

  const [amount, setAmount] = useState(250_000);
  const [weeks, setWeeks] = useState(8);

  const discount = amount * MONTHLY_RATE * (weeks / WEEKS_PER_MONTH);
  const net = amount - discount;

  const handleProceed = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = Number(invoiceAmountStr);
    let initialAmount = parsedAmount > 0 ? parsedAmount : 250_000;
    if (initialAmount < AMOUNT_MIN) initialAmount = AMOUNT_MIN;
    if (initialAmount > AMOUNT_MAX) initialAmount = AMOUNT_MAX;

    setAmount(initialAmount);
    setStep(2);
  };

  return (
    <section className="relative overflow-hidden bg-[#081127] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
              Simulador
            </span>
            <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
              Simule sua antecipação
            </h2>
            <p className="mt-5 text-base text-slate-300 md:text-lg">
              {step === 1
                ? "Preencha os dados da sua operação para visualizar as condições."
                : "Ajuste o valor do recebível e o prazo em semanas para ver quanto você recebe — com liberação em até 48 horas."}
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          {step === 1 ? (
            <form
              onSubmit={handleProceed}
              className="mx-auto mt-14 max-w-xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-10 text-left shadow-2xl"
            >
              <div className="flex flex-col gap-6">
                <div>
                  <label htmlFor="cnpj" className="block text-sm font-medium text-slate-300">
                    CNPJ
                  </label>
                  <input
                    id="cnpj"
                    required
                    value={cnpj}
                    onChange={(e) => setCnpj(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#060d1f] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#4EB7FF] focus:ring-1 focus:ring-[#4EB7FF] transition-all"
                    placeholder="00.000.000/0000-00"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-300">
                    Nome da Empresa
                  </label>
                  <input
                    id="company"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#060d1f] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#4EB7FF] focus:ring-1 focus:ring-[#4EB7FF] transition-all"
                    placeholder="Razão Social ou Nome Fantasia"
                  />
                </div>
                <div>
                  <label htmlFor="organ" className="block text-sm font-medium text-slate-300">
                    Órgão que opera
                  </label>
                  <input
                    id="organ"
                    required
                    value={organ}
                    onChange={(e) => setOrgan(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#060d1f] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#4EB7FF] focus:ring-1 focus:ring-[#4EB7FF] transition-all"
                    placeholder="Prefeitura, Governo Estadual, etc."
                  />
                </div>
                <div>
                  <label
                    htmlFor="invoiceAmount"
                    className="block text-sm font-medium text-slate-300"
                  >
                    Valor da Nota Fiscal (R$)
                  </label>
                  <input
                    id="invoiceAmount"
                    required
                    type="number"
                    min={AMOUNT_MIN}
                    max={AMOUNT_MAX}
                    step={100}
                    value={invoiceAmountStr}
                    onChange={(e) => setInvoiceAmountStr(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-[#060d1f] px-4 py-3 text-sm text-white placeholder-slate-500 outline-none focus:border-[#4EB7FF] focus:ring-1 focus:ring-[#4EB7FF] transition-all"
                    placeholder="Ex: 150000"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#3674EF] px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-[1.02]"
                >
                  Ver condições de antecipação
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </form>
          ) : (
            <div className="mx-auto mt-14 grid max-w-4xl gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] lg:grid-cols-2">
              {/* Inputs */}
              <div className="p-8 md:p-10 relative">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="absolute top-4 right-6 text-slate-400 hover:text-white transition-colors text-xs font-medium underline underline-offset-4"
                >
                  Voltar e editar dados
                </button>
                <label
                  htmlFor="sim-amount"
                  className="block text-sm font-medium text-slate-300 mt-4"
                >
                  Valor do recebível
                </label>
                <p className="mt-2 font-display text-3xl font-bold text-white md:text-4xl">
                  {brl.format(amount)}
                </p>
                <input
                  id="sim-amount"
                  type="range"
                  min={AMOUNT_MIN}
                  max={AMOUNT_MAX}
                  step={5_000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="mt-5 w-full accent-[#4EB7FF]"
                />
                <div className="mt-2 flex justify-between text-xs text-slate-500">
                  <span>{brl.format(AMOUNT_MIN)}</span>
                  <span>{brl.format(AMOUNT_MAX)}</span>
                </div>

                <p className="mt-8 text-sm font-medium text-slate-300">Prazo do recebível</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {WEEK_OPTIONS.map((w) => (
                    <button
                      key={w}
                      type="button"
                      onClick={() => setWeeks(w)}
                      aria-pressed={weeks === w}
                      className={
                        "rounded-full px-4 py-2 text-sm font-semibold transition-colors " +
                        (weeks === w
                          ? "bg-[#3674EF] text-white"
                          : "border border-white/15 bg-white/[0.04] text-slate-300 hover:border-[#3674EF]/45")
                      }
                    >
                      {w} semanas
                    </button>
                  ))}
                </div>
              </div>

              {/* Resultado */}
              <div className="flex flex-col justify-center gap-5 bg-[#060d1f] p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Valor bruto</span>
                  <span className="text-base font-medium text-slate-200">{brl.format(amount)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Deságio</span>
                  <span className="text-base font-medium text-slate-200">
                    −{brl.format(discount)}
                  </span>
                </div>
                <div className="h-px bg-white/10" />
                <div>
                  <span className="text-sm text-slate-400">Você recebe</span>
                  <p className="mt-1 font-display text-3xl font-bold text-[#4EB7FF] md:text-4xl">
                    {brl.format(net)}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#3674EF]/15 px-3 py-1 text-xs font-medium text-[#7cc6ff]">
                    Em até 48h na sua conta
                  </span>
                </div>
                <a
                  href="https://app.otmow.com/pt-BR/loan/intake/details"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#06122b] transition-transform duration-300 hover:scale-105"
                >
                  Antecipe agora
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          )}
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-slate-500">
          Simulação ilustrativa. Os valores finais são definidos após a análise de crédito e da
          operação.
        </p>
      </div>
    </section>
  );
}
