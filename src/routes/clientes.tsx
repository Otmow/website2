import { createFileRoute } from "@tanstack/react-router";
import { NavBlue } from "@/components/site/NavBlue";
import { FooterBlue } from "@/components/site/FooterBlue";
import { SimuladorAntecipacao } from "@/components/site/SimuladorAntecipacao";
import { WarpBackgroundBlue } from "@/components/fx/WarpBackgroundBlue";
import { DottedSurfaceBlue } from "@/components/fx/DottedSurfaceBlue";
import { Reveal } from "@/components/fx/Reveal";
import { CountUp } from "@/components/fx/CountUp";
import { ArrowUpRight, BadgeCheck, FileText, Lock, ShieldCheck, Wallet, Zap } from "lucide-react";

export const Route = createFileRoute("/clientes")({
  component: ClientesPageBlue,
});

function ClientesPageBlue() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-white">
      <NavBlue />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <WarpBackgroundBlue speed={0.6} />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040a1c]/45 to-[#060d1f]" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 pb-24 pt-44 text-center md:px-8 md:pb-32 md:pt-52">
          <Reveal>
            <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-medium tracking-wide text-[#7cc6ff]">
              Para empresas que vendem ao governo
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-balance text-4xl font-bold leading-[1.08] md:text-6xl">
              Transforme o valor da sua nota fiscal performada em{" "}
              <span className="gradient-text-blue">capital imediato</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-7 max-w-2xl text-balance text-lg font-light text-slate-100/90">
              Antecipe seus recebíveis de contratos públicos com agilidade, segurança e sem
              burocracia.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="https://app.otmow.com/pt-BR/loan/intake/details"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#06122b] transition-transform duration-300 hover:scale-105"
            >
              Solicite uma análise gratuita
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-[#081127]">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden px-5 py-12 sm:grid-cols-3 md:px-8">
          {[
            {
              v: <CountUp end={130} prefix="+R$ " suffix=" M" duration={2200} />,
              l: "em operações de antecipação realizadas",
            },
            {
              v: <CountUp end={100} prefix="+" duration={2200} />,
              l: "clientes ativos confiam na Ótmow",
            },
            {
              v: <CountUp end={160} prefix="+" duration={2200} />,
              l: "órgãos públicos mapeados em todo o Brasil",
            },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="px-6 py-4 text-center">
                <p className="font-display text-4xl font-bold text-[#4EB7FF] md:text-5xl">{s.v}</p>
                <p className="mt-2 text-sm text-slate-400">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Simulador */}
      <SimuladorAntecipacao />

      {/* Commitment */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <DottedSurfaceBlue className="opacity-40" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                  Compromisso
                </span>
                <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
                  Transparência e segurança em cada operação
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
                  A Ótmow nasceu para resolver um dos maiores desafios do mercado de compras
                  públicas: a espera pelo pagamento. Ao transformar recebíveis performados em
                  capital imediato, garantimos que empresas de todos os portes mantenham seu
                  crescimento, cumpram compromissos e ampliem oportunidades.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                  Mais do que um fundo financeiro, somos um elo essencial entre fornecedores e o
                  poder público — unindo tecnologia, inteligência de dados e rigor regulatório.
                </p>
              </div>
            </Reveal>

            <div className="space-y-5">
              {[
                {
                  icon: BadgeCheck,
                  t: "Suporte consultivo em todas as etapas",
                  d: "Nossa equipe acompanha você do início ao fim do processo, oferecendo orientação especializada para facilitar a operação e tirar dúvidas sempre que necessário.",
                },
                {
                  icon: Lock,
                  t: "Sem exigência de garantias reais",
                  d: "Realizamos a antecipação com base na força do contrato público e na nota fiscal, sem necessidade de oferecer imóveis, veículos ou bens como garantia.",
                },
                {
                  icon: ShieldCheck,
                  t: "Segurança jurídica e tecnológica",
                  d: "Seguimos as normas do COAF e da LGPD, com uma plataforma segura e criptografada que garante a integridade das informações e das transações.",
                },
              ].map((f, i) => (
                <Reveal key={f.t} delay={i * 120}>
                  <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-[#3674EF]/45">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#3674EF]/15">
                      <f.icon className="size-6 text-[#4EB7FF]" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold">{f.t}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What you need */}
      <section className="bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-balance text-3xl font-bold md:text-5xl">
                O que você precisa para antecipar
              </h2>
              <p className="mt-5 text-base text-slate-300">
                Trabalhamos com recebíveis públicos performados — mercadoria entregue, serviço
                prestado ou medição apurada.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: FileText,
                t: "Notas fiscais emitidas",
                d: "Documentos fiscais da entrega ou prestação já realizada.",
              },
              {
                icon: BadgeCheck,
                t: "Empenho do órgão",
                d: "Comprovação do devido empenho junto ao sacado público.",
              },
              {
                icon: Wallet,
                t: "Contrato ou ata",
                d: "Contrato público ou ata de registro de preços vigente.",
              },
              {
                icon: Zap,
                t: "Docs de crédito",
                d: "Balanço, DRE e demais documentos convencionais de análise.",
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
          <Reveal delay={200}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base text-slate-300">
              <strong className="text-white">Receba antes, invista melhor.</strong> A gestão
              financeira dos seus contratos começa aqui — faça uma análise gratuita e descubra como
              podemos impulsionar seu negócio.
            </p>
          </Reveal>
        </div>
      </section>

      <FooterBlue />
    </div>
  );
}
