import { createFileRoute } from "@tanstack/react-router";
import { NavBlue } from "@/components/site/NavBlue";
import { FooterBlue } from "@/components/site/FooterBlue";
import { WarpBackgroundBlue } from "@/components/fx/WarpBackgroundBlue";
import { GridShader } from "@/components/fx/GridShader";
import { Reveal } from "@/components/fx/Reveal";
import {
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  FileCheck,
  GraduationCap,
  Landmark,
  LifeBuoy,
  Megaphone,
  RefreshCcw,
  Scale,
  ShieldCheck,
  UserPlus,
} from "lucide-react";

export const Route = createFileRoute("/gestores")({
  component: GestoresPageBlue,
});

const journey = [
  { n: "1", icon: UserPlus, t: "Cadastro", d: "Validação de perfil e compliance." },
  { n: "2", icon: GraduationCap, t: "Treinamento", d: "Imersão rápida na tese e materiais." },
  { n: "3", icon: Megaphone, t: "Apoio estratégico", d: "Materiais exclusivos e suporte técnico." },
  { n: "4", icon: BarChart3, t: "Distribuição", d: "Prospecção e fechamento com apoio." },
  { n: "5", icon: RefreshCcw, t: "Comissão", d: "Recorrência e acompanhamento." },
];

const risks = [
  {
    icon: ShieldCheck,
    t: "Risco de crédito / atraso",
    d: "Mitigado por diligência prévia rigorosa, critérios de elegibilidade restritivos e monitoramento constante da capacidade de pagamento.",
  },
  {
    icon: Scale,
    t: "Risco jurídico / documental",
    d: "Auditoria completa do processo de originação, garantindo que o lastro seja válido, existente e cedível.",
  },
  {
    icon: FileCheck,
    t: "Risco de liquidez",
    d: "Por ser um ativo privado, a liquidez pode ser limitada. O alinhamento do prazo do investimento com o objetivo do cliente é essencial.",
  },
];

function GestoresPageBlue() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-white">
      <NavBlue />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <WarpBackgroundBlue speed={0.6} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040a1c]/50 to-[#060d1f]" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-44 md:px-8 md:pb-32 md:pt-52">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Reveal>
                <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-medium tracking-wide text-[#7cc6ff]">
                  Gestores de relacionamento · Debêntures privadas
                </span>
              </Reveal>
              <Reveal delay={120}>
                <h1 className="mt-7 font-display text-balance text-4xl font-bold leading-[1.08] md:text-6xl">
                  Converta investidores em{" "}
                  <span className="gradient-text-blue">receita recorrente</span> sustentável
                </h1>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-100/90 md:text-lg">
                  Distribua ativos de renda fixa lastreados em recebíveis públicos, com
                  liquidez controlada. Uma estrutura de alto nível para investidores que
                  buscam segurança e rentabilidade consistente.
                </p>
              </Reveal>
              <Reveal delay={340}>
                <ul className="mt-7 space-y-3">
                  {[
                    "Comissão recorrente sobre a carteira ativa",
                    "Produto sem burocracia: liberação em 48h após aprovação",
                    "Estrutura robusta de FIDC e auditoria de lastro",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-slate-200">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-[#4EB7FF]" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={440}>
                <a
                  href="https://wa.me/+5511973106054"
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#06122b] transition-transform duration-300 hover:scale-105"
                >
                  Quero me credenciar
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Reveal>
            </div>

            <Reveal delay={300}>
              <div className="glass rounded-2xl p-7">
                <div className="flex items-center justify-between">
                  <p className="font-display text-sm font-semibold text-white">Carteira Ótmow</p>
                  <span className="flex items-center gap-1.5 text-[11px] text-[#4EB7FF]">
                    <span className="size-1.5 animate-pulse rounded-full bg-[#3674EF]" />
                    Tempo real
                  </span>
                </div>
                <div className="mt-5 space-y-3">
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-white">Liquidação Recebível #8492</p>
                        <p className="mt-0.5 text-[11px] text-slate-400">Ente público · Pgto confirmado</p>
                      </div>
                      <p className="font-display text-sm font-bold text-[#4EB7FF]">+ R$ 142.500</p>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-medium text-white">Comissão recorrente</p>
                        <p className="mt-0.5 text-[11px] text-slate-400">Carteira Gestor #12</p>
                      </div>
                      <RefreshCcw className="size-4 animate-spin text-[#4EB7FF] [animation-duration:3s]" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-[#3674EF]/30 bg-[#3674EF]/15 p-4">
                    <p className="text-[11px] uppercase tracking-wider text-[#7cc6ff]">Já captados</p>
                    <p className="mt-1 font-display text-2xl font-bold text-white">+ R$ 20 milhões</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-balance text-3xl font-bold md:text-5xl">
                Sua autoridade no relacionamento.{" "}
                <span className="text-[#4EB7FF]">Nossa excelência em ativos estruturados.</span>
              </h2>
              <p className="mt-5 text-base text-slate-300">
                Proporcionamos a inteligência de mercado e o suporte operacional para que
                sua única preocupação seja o crescimento da sua rede.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: CircleDollarSign,
                t: "Fluxo de caixa recorrente",
                d: "Remuneração contínua baseada no AUM, garantindo previsibilidade enquanto o investidor permanece alocado.",
              },
              {
                icon: Landmark,
                t: "Resiliência soberana",
                d: "Ativos lastreados em recebíveis de entes públicos, com camada de proteção institucional superior ao crédito privado convencional.",
              },
              {
                icon: LifeBuoy,
                t: "Suporte institucional",
                d: "Acompanhamento técnico em apresentações estratégicas, back-office dedicado e materiais de apoio de alta conversão.",
              },
              {
                icon: ShieldCheck,
                t: "Governança e compliance",
                d: "Relatórios detalhados e total transparência sobre a origem e auditoria dos ativos.",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-[#3674EF]/45 hover:bg-white/[0.06]">
                  <c.icon className="size-7 text-[#4EB7FF]" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{c.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey over grid shader */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <GridShader />
        <div className="absolute inset-0 bg-[#060d1f]/40" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-balance text-3xl font-bold md:text-5xl">
                Do credenciamento à receita recorrente
              </h2>
              <p className="mt-5 text-base text-slate-200">
                Um ecossistema de alta performance em cinco etapas.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((j, i) => (
              <Reveal key={j.n} delay={i * 90}>
                <div className="glass h-full rounded-2xl p-6 text-center">
                  <span className="font-display mx-auto flex size-9 items-center justify-center rounded-full bg-[#3674EF] text-sm font-bold text-white">
                    {j.n}
                  </span>
                  <j.icon className="mx-auto mt-4 size-6 text-[#4EB7FF]" />
                  <h3 className="mt-3 text-sm font-semibold text-white">{j.t}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">{j.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency / risks */}
      <section className="bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                Transparência
              </span>
              <h2 className="mt-4 font-display text-balance text-3xl font-bold md:text-5xl">
                Medimos, mitigamos e monitoramos
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {risks.map((r, i) => (
              <Reveal key={r.t} delay={i * 120}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <r.icon className="size-6 text-[#4EB7FF]" />
                  <h3 className="mt-4 font-display text-lg font-semibold">{r.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-14 text-center">
              <a
                href="https://wa.me/+5511973106054"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3674EF] px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                Acessar proposta comercial personalizada
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <FooterBlue />
    </div>
  );
}
