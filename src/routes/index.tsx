import { createFileRoute, Link } from "@tanstack/react-router";
import { NavBlue } from "@/components/site/NavBlue";
import { FooterBlue } from "@/components/site/FooterBlue";
import { SimuladorAntecipacao } from "@/components/site/SimuladorAntecipacao";
import { LazyVideo } from "@/components/fx/LazyVideo";
import { LiteYouTube } from "@/components/fx/LiteYouTube";
import { WarpBackgroundBlue } from "@/components/fx/WarpBackgroundBlue";
import { DottedSurfaceBlue } from "@/components/fx/DottedSurfaceBlue";
import { GridShader } from "@/components/fx/GridShader";
import { Reveal } from "@/components/fx/Reveal";
import { CountUp } from "@/components/fx/CountUp";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  Building2,
  ClipboardCheck,
  FileSearch,
  FileSignature,
  Landmark,
  Lock,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: HomePageBlue,
});

const steps = [
  {
    n: "01",
    icon: ClipboardCheck,
    title: "Cadastro",
    text: "Preencha o formulário básico da empresa e anexe os documentos de crédito e da licitação. Com essas informações, iniciamos as análises de crédito e do sacado, garantindo a segurança de toda a operação.",
  },
  {
    n: "02",
    icon: FileSearch,
    title: "Análise",
    text: "Após a conclusão das análises, formalizamos a proposta com todas as condições da operação: valor disponível para antecipação, prazos e demais detalhes.",
  },
  {
    n: "03",
    icon: FileSignature,
    title: "Formalização",
    text: "Realizamos a formalização da proposta e, se estiver de acordo, o cliente segue para a assinatura do contrato digital e damos continuidade ao processo de liberação dos recursos.",
  },
  {
    n: "04",
    icon: Banknote,
    title: "Liberação",
    text: "Com a aprovação finalizada e o contrato assinado, os valores são liberados diretamente na conta bancária da sua empresa — em até 48 horas.",
  },
];

const sectors = [
  { label: "Construção civil", icon: Building2 },
  { label: "Tecnologia", icon: Sparkles },
  { label: "Serviços", icon: BadgeCheck },
  { label: "Saúde", icon: ShieldCheck },
  { label: "Educação", icon: Landmark },
  { label: "Indústria", icon: TrendingUp },
];

function HomePageBlue() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-white">
      <NavBlue />

      {/* ============ HERO — Warp shader ============ */}
      <section className="relative min-h-screen overflow-hidden">
        <WarpBackgroundBlue speed={0.8} allowMobile />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040a1c]/40 via-[#040a1c]/30 to-[#060d1f]" />

        <div className="relative z-10 flex min-h-screen items-center px-5 pt-24 md:px-8">
          <div className="mx-auto w-full max-w-5xl text-center">
            <Reveal>
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium tracking-wide text-white">
                <span className="size-1.5 animate-pulse rounded-full bg-[#3674EF]" />
                Presente em 18 estados + DF · Expansão nacional
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-8 font-display text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
                Liquidez e segurança para quem vende para o{" "}
                <span className="gradient-text-blue">setor público</span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mx-auto mt-7 max-w-2xl text-balance text-lg font-light leading-relaxed text-slate-100/90 md:text-xl">
                Antecipe seus recebíveis de contratos públicos com agilidade, tecnologia e total
                segurança. Receba em até 48 horas — sem garantias reais, sem burocracia e sem
                surpresas.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
                <a
                  href="https://app.otmow.com/pt-BR/loan/intake/details"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#06122b] transition-transform duration-300 hover:scale-105"
                >
                  Antecipe agora
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  to="/sobre"
                  className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
                >
                  Conheça a Ótmow
                </Link>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-3 text-left">
                {[
                  { k: "48h", v: "para liberação dos recursos" },
                  { k: "SEM", v: "garantias reais exigidas" },
                  { k: "100%", v: "digital e seguro" },
                ].map((s) => (
                  <div key={s.v} className="glass rounded-xl px-4 py-4 md:px-6">
                    <p className="font-display text-xl font-bold text-[#4EB7FF] md:text-3xl">
                      {s.k}
                    </p>
                    <p className="mt-1 text-[11px] leading-snug text-slate-200/80 md:text-xs">
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SIMULADOR ============ */}
      <SimuladorAntecipacao />

      {/* ============ PROBLEM / VALUE ============ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <DottedSurfaceBlue className="opacity-50" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                  O problema que resolvemos
                </span>
                <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
                  Transforme sua relação com o setor público
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
                  Não precisa esperar o governo te pagar. Os prazos de pagamento variam de{" "}
                  <strong className="text-white">30 a 180 dias</strong> e estão sujeitos a atrasos.
                  Ao antecipar os recebíveis das licitações, sua empresa recebe os valores em{" "}
                  <strong className="text-[#4EB7FF]">até 48 horas</strong> após a aprovação.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
                  Tudo isso sem exigência de garantias, sem burocracia e sem surpresas.
                </p>
                <Link
                  to="/clientes"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#4EB7FF] hover:text-[#7cc6ff]"
                >
                  Saiba como funciona para sua empresa
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-blue-600/20 to-[#4EB7FF]/20 blur-2xl" />
                <LazyVideo
                  src="/img/blue/brasilia.mp4"
                  srcWebm="/img/blue/brasilia.webm"
                  poster="/img/blue/brasilia.jpg"
                  label="Equipe Ótmow analisando operações de antecipação"
                  className="relative block w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                />
                <div className="glass absolute -bottom-6 -left-4 hidden rounded-xl px-5 py-4 md:block">
                  <p className="flex items-center gap-2 text-xs text-slate-200">
                    <Timer className="size-4 text-[#4EB7FF]" /> Prazo médio do governo
                  </p>
                  <p className="font-display mt-1 text-2xl font-bold text-white">
                    30–180 dias <span className="text-[#4EB7FF]">→ 48h</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ NUMBERS — Grid shader ============ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <GridShader />
        <div className="absolute inset-0 bg-[#060d1f]/30" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                Um mercado sólido
              </span>
              <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
                Números que sustentam a confiança
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <Reveal delay={0}>
              <div className="glass h-full rounded-2xl p-8">
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  R$ <CountUp end={1.3} decimals={1} duration={2200} /> tri
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  movimentados por ano pelo setor público brasileiro — o maior comprador da América
                  Latina.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="glass h-full rounded-2xl p-8">
                <p className="font-display text-4xl font-bold text-[#4EB7FF] md:text-5xl">
                  +<CountUp end={160} duration={2200} />
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  órgãos públicos analisados em todo o Brasil, com dados estratégicos sobre
                  licitações, contratos e prazos.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="glass h-full rounded-2xl p-8">
                <p className="font-display text-4xl font-bold text-white md:text-5xl">
                  <CountUp end={18} duration={2200} /> + DF
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  estados com clientes ativos, em todas as regiões do país — presença nacional que
                  gera confiança.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="glass h-full rounded-2xl p-8">
                <p className="font-display text-4xl font-bold text-[#4EB7FF] md:text-5xl">
                  <CountUp end={48} duration={2200} />h
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  é o prazo máximo para a liberação dos recursos após a formalização da proposta.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="relative bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                Como funciona
              </span>
              <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
                O processo de antecipação de recebíveis na Ótmow
              </h2>
              <p className="mt-5 text-base text-slate-300 md:text-lg">
                Uma jornada simplificada, digital e segura — do cadastro à liberação dos recursos na
                sua conta.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:border-[#3674EF]/45 hover:bg-white/[0.06]">
                  <span className="font-display text-5xl font-bold text-white/10 transition-colors group-hover:text-[#4EB7FF]/20">
                    {s.n}
                  </span>
                  <s.icon className="mt-4 size-7 text-[#4EB7FF]" />
                  <h3 className="mt-4 font-display text-xl font-semibold text-white">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.text}</p>
                  {i < 3 && (
                    <ArrowRight className="absolute right-5 top-1/2 hidden size-5 -translate-y-1/2 text-white/15 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <div className="mt-12 text-center">
              <a
                href="https://app.otmow.com/pt-BR/loan/intake/details"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[#3674EF] px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
              >
                Faça seu cadastro aqui
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTORS ============ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal>
              <div className="relative order-2 lg:order-1">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-bl from-[#4EB7FF]/15 to-blue-600/15 blur-2xl" />
                <LazyVideo
                  src="/img/blue/brasilnetwork.mp4"
                  srcWebm="/img/blue/brasilnetwork.webm"
                  poster="/img/blue/brasil-network.jpg"
                  label="Mapa do Brasil em rede de dados — presença nacional da Ótmow"
                  className="relative block w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                  Sobre a Ótmow
                </span>
                <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
                  Tecnologia própria, agilidade e segurança
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
                  Viabilizamos capital para empresas que vendem para o governo, transformando notas
                  fiscais em liquidez imediata — sem exigência de garantias reais e com análise
                  rápida. Atuamos exclusivamente com recebíveis do setor público.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {sectors.map((s, i) => (
                    <div
                      key={s.label}
                      className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-200 transition-colors hover:border-[#3674EF]/35"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      <s.icon className="size-4 shrink-0 text-[#4EB7FF]" />
                      {s.label}
                    </div>
                  ))}
                </div>
                <Link
                  to="/sobre"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#4EB7FF] hover:text-[#7cc6ff]"
                >
                  Nossa trajetória de crescimento
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ VÍDEOS ============ */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                Conheça a Ótmow
              </span>
              <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
                Assista e entenda como funciona
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div>
                <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                  Podcast explicativo
                </h3>
                <p className="mt-2 mb-5 text-sm leading-relaxed text-slate-400">
                  Uma conversa direta sobre antecipação de recebíveis públicos e como a Ótmow
                  destrava o caixa da sua empresa.
                </p>
                <LiteYouTube id="fE-LkwIrT-s" title="Podcast explicativo — Ótmow" />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div>
                <h3 className="font-display text-lg font-semibold text-white md:text-xl">
                  Sobre a Ótmow
                </h3>
                <p className="mt-2 mb-5 text-sm leading-relaxed text-slate-400">
                  Quem somos, como operamos e por que viramos referência em liquidez para quem vende
                  ao setor público.
                </p>
                <LiteYouTube id="DSg6TKhjNxI" title="Sobre a Ótmow" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIAL ============ */}
      <section className="relative bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                Depoimentos
              </span>
              <blockquote className="mt-8 font-display text-balance text-2xl font-medium leading-snug text-white md:text-3xl">
                "Ficamos positivamente surpresos com o atendimento, a prontidão e a agilidade da
                Ótmow. Estou encantada com o serviço prestado. Já deixamos contratos de alguns
                órgãos domiciliados com a Ótmow, com o objetivo de consolidar ainda mais nossa
                colaboração."
              </blockquote>
              <div className="mt-8">
                <p className="font-semibold text-[#4EB7FF]">Inessa</p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  Gestor Serviços Empresariais
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  t: "Segurança jurídica e tecnológica",
                  d: "Normas do COAF e da LGPD, plataforma segura e criptografada.",
                },
                {
                  icon: Lock,
                  t: "Sem garantias reais",
                  d: "Operação baseada na força do contrato público e na nota fiscal.",
                },
                {
                  icon: BadgeCheck,
                  t: "Suporte consultivo",
                  d: "Acompanhamento especializado do início ao fim do processo.",
                },
              ].map((f) => (
                <div key={f.t} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                  <f.icon className="size-6 text-[#4EB7FF]" />
                  <h3 className="mt-3 text-sm font-semibold text-white">{f.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{f.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <FooterBlue />
    </div>
  );
}
