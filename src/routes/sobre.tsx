import { createFileRoute } from "@tanstack/react-router";
import { NavBlue } from "@/components/site/NavBlue";
import { FooterBlue } from "@/components/site/FooterBlue";
import { DottedSurfaceBlue } from "@/components/fx/DottedSurfaceBlue";
import { GridShader } from "@/components/fx/GridShader";
import { Reveal } from "@/components/fx/Reveal";
import { CountUp } from "@/components/fx/CountUp";
import { ArrowUpRight, Newspaper, Rocket, TrendingUp, Landmark, LineChart } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: SobrePageBlue,
});

const timeline = [
  {
    year: "2023",
    title: "Fundação da Ótmow",
    icon: Rocket,
    text: "A Ótmow nasce com o propósito de revolucionar o mercado financeiro voltado para licitações públicas, oferecendo soluções ágeis e transparentes em antecipação de recebíveis.",
  },
  {
    year: "2024",
    title: "Consolidação no mercado",
    icon: TrendingUp,
    text: "Com o aporte inicial, a Ótmow acelerou o desenvolvimento de sua plataforma tecnológica, expandiu a equipe e consolidou sua presença no mercado, ainda como securitizadora.",
  },
  {
    year: "2025 · 1º sem.",
    title: "Rodadas de investimento",
    icon: LineChart,
    text: "Consolidamos novas rodadas de captação, ampliamos nossa base de clientes e expandimos a presença em diferentes setores e regiões do Brasil.",
  },
  {
    year: "2025 · 2º sem.",
    title: "Lançamento do primeiro FIDC",
    icon: Landmark,
    text: "Estruturamos e lançamos nosso primeiro Fundo de Investimento em Direitos Creditórios (FIDC), fortalecendo a transparência, a capacidade de operação e a confiança junto a clientes e investidores.",
  },
];

const media = [
  {
    source: "Imprensa especializada",
    title: "Ótmow busca R$ 100 mi para adiantar dinheiro a quem vende para o governo",
  },
  {
    source: "Mercado financeiro",
    title: "Fechamento de mercado — impacto na Bolsa de Valores (IBOVESPA), valorização do Real e perspectivas para o mercado brasileiro",
  },
  {
    source: "Mercado financeiro",
    title: "Abertura de mercado — Ata do COPOM, balanços corporativos e cenário macroeconômico no radar",
  },
];

function SobrePageBlue() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-white">
      <NavBlue />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
        <DottedSurfaceBlue className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#060d1f]" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
              Sobre a Ótmow
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-balance text-4xl font-bold leading-[1.08] md:text-6xl">
              Transformamos recebíveis públicos em{" "}
              <span className="gradient-text-blue">oportunidades</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Com tecnologia própria, agilidade e segurança, viabilizamos capital para
              empresas que vendem para o governo, transformando notas fiscais em liquidez
              imediata — sem exigência de garantias reais e com análise rápida.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-balance text-3xl font-bold md:text-5xl">
                Nossa trajetória de crescimento
              </h2>
              <p className="mt-5 text-base text-slate-300">
                Cada conquista representa um passo estratégico na missão de transformar o
                acesso a crédito para fornecedores do setor público.
              </p>
            </div>
          </Reveal>

          <div className="relative mt-16">
            <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-[#4EB7FF]/70 via-[#3674EF]/45 to-transparent md:left-1/2 md:block" />
            <div className="space-y-10 md:space-y-16">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 100}>
                  <div
                    className={`flex flex-col gap-4 md:flex-row md:items-center md:gap-12 ${
                      i % 2 === 1 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="md:w-1/2">
                      <div
                        className={`rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-[#3674EF]/45 ${
                          i % 2 === 1 ? "md:ml-12" : "md:mr-12"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <t.icon className="size-6 text-[#4EB7FF]" />
                          <span className="font-display text-sm font-bold uppercase tracking-wider text-[#4EB7FF]">
                            {t.year}
                          </span>
                        </div>
                        <h3 className="mt-3 font-display text-xl font-semibold">{t.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.text}</p>
                      </div>
                    </div>
                    <div className="hidden size-3 shrink-0 rounded-full bg-[#3674EF] ring-4 ring-[#3674EF]/25 md:block" />
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Market numbers over grid shader */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <GridShader />
        <div className="absolute inset-0 bg-[#060d1f]/35" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-balance text-3xl font-bold md:text-5xl">
                Um mercado sólido, um futuro promissor
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="glass h-full rounded-2xl p-10">
                <p className="font-display text-5xl font-bold text-[#4EB7FF] md:text-6xl">
                  R$ <CountUp end={1.3} decimals={1} duration={2400} /> tri
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-200">
                  O setor público brasileiro é o maior comprador da América Latina,
                  movimentando mais de R$ 1,3 trilhão por ano em contratações de obras,
                  serviços e fornecimento de bens.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="glass h-full rounded-2xl p-10">
                <p className="font-display text-5xl font-bold text-white md:text-6xl">
                  +<CountUp end={160} duration={2400} />
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-200">
                  Já analisamos mais de 160 órgãos públicos em todo o Brasil, reunindo
                  dados estratégicos sobre licitações, contratos e prazos de pagamento.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="relative bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                Ótmow na mídia
              </span>
              <h2 className="mt-4 font-display text-balance text-3xl font-bold md:text-5xl">
                Reconhecimento que reforça a confiança
              </h2>
              <p className="mt-5 text-base text-slate-300">
                Nossas conquistas e iniciativas têm ganhado destaque em veículos de
                comunicação e canais especializados do mercado financeiro.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {media.map((m, i) => (
              <Reveal key={m.title} delay={i * 120}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-[#3674EF]/45 hover:bg-white/[0.06]">
                  <Newspaper className="size-6 text-[#4EB7FF]" />
                  <span className="mt-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {m.source}
                  </span>
                  <h3 className="mt-2 flex-1 font-display text-lg font-semibold leading-snug text-white">
                    {m.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#4EB7FF]">
                    Ver cobertura <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FooterBlue />
    </div>
  );
}
