import { createFileRoute } from "@tanstack/react-router";
import { NavBlue } from "@/components/site/NavBlue";
import { FooterBlue } from "@/components/site/FooterBlue";
import { DottedSurfaceBlue } from "@/components/fx/DottedSurfaceBlue";
import { Reveal } from "@/components/fx/Reveal";
import {
  ArrowUpRight,
  Briefcase,
  Calculator,
  Gavel,
  HandCoins,
  Handshake,
  Lock,
  ShieldCheck,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/parceiros")({
  component: ParceirosPageBlue,
});

function ParceirosPageBlue() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-white">
      <NavBlue />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-52">
        <DottedSurfaceBlue className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060d1f]" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-8">
          <Reveal>
            <span className="glass inline-flex rounded-full px-4 py-2 text-xs font-medium tracking-wide text-[#7cc6ff]">
              Programa de parceria Ótmow
            </span>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-7 font-display text-balance text-4xl font-bold leading-[1.08] md:text-6xl">
              Transforme sua rede de contatos em uma{" "}
              <span className="gradient-text-blue">fonte de receita</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Nosso programa é destinado a profissionais que atuam junto a fornecedores do setor
              público e que desejam indicar clientes para a antecipação de recebíveis. Simples,
              transparente e com total suporte do nosso time.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <a
              href="https://wa.me/+5511973106054"
              target="_blank"
              rel="noreferrer"
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-[#3674EF] px-8 py-4 text-sm font-semibold text-white transition-transform duration-300 hover:scale-105"
            >
              Quero ser parceiro
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* Who can join */}
      <section className="bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-balance text-3xl font-bold md:text-5xl">
                Quem pode se tornar parceiro?
              </h2>
              <p className="mt-5 text-base text-slate-300">
                Qualquer profissional ou empresa que possua relacionamento com fornecedores do setor
                público.
              </p>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { icon: Briefcase, t: "Consultores" },
              { icon: Calculator, t: "Contadores" },
              { icon: Gavel, t: "Advogados" },
              { icon: Users, t: "Representantes comerciais" },
              { icon: Handshake, t: "Assessorias de licitação" },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 90}>
                <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-8 text-center transition-all hover:border-[#3674EF]/45 hover:bg-white/[0.06]">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-[#3674EF]/15">
                    <c.icon className="size-7 text-[#4EB7FF]" />
                  </div>
                  <p className="text-sm font-semibold">{c.t}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-2">
            <Reveal>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
                  Benefícios
                </span>
                <h2 className="mt-4 font-display text-balance text-3xl font-bold leading-tight md:text-5xl">
                  Como o programa beneficia o seu negócio
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-300 md:text-lg">
                  Nosso programa de parceria oferece uma oportunidade única para quem deseja
                  expandir seus serviços financeiros. Ao se juntar a nós, você terá acesso a
                  soluções inovadoras e suporte contínuo.
                </p>
                <div className="mt-8 rounded-2xl border border-[#3674EF]/30 bg-[#3674EF]/5 p-7">
                  <HandCoins className="size-8 text-[#4EB7FF]" />
                  <h3 className="mt-4 font-display text-xl font-semibold">
                    Comissão por operação concluída
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    Indique empresas que prestam serviços ao setor público e receba comissões por
                    cada operação concluída. O valor varia conforme o deságio da operação
                    formalizada e liquidada — e tudo é formalizado em contrato.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="space-y-5">
              {[
                {
                  icon: ShieldCheck,
                  t: "Segurança jurídica e tecnológica",
                  d: "Seguimos as normas do COAF e da LGPD, com uma plataforma segura e criptografada que garante a integridade das informações e das transações.",
                },
                {
                  icon: Lock,
                  t: "Sem exigência de garantias reais",
                  d: "A antecipação é feita com base na força do contrato público e na nota fiscal, sem necessidade de imóveis, veículos ou bens como garantia.",
                },
                {
                  icon: Handshake,
                  t: "Suporte consultivo em todas as etapas",
                  d: "Nossa equipe acompanha você do início ao fim do processo, oferecendo orientação especializada para facilitar a operação.",
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

      {/* Partner quote */}
      <section className="bg-[#081127] py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
              Palavra de parceiro
            </span>
            <blockquote className="mt-8 font-display text-balance text-xl font-medium leading-relaxed text-white md:text-2xl">
              "A Ótmow tem sido uma parceira estratégica, contribuindo diretamente para o
              fortalecimento da nossa relação comercial e oferecendo suporte financeiro que nos
              auxilia a manter o giro da atividade sempre que necessário. Seguimos à disposição para
              fortalecer ainda mais essa relação."
            </blockquote>
            <p className="mt-8 text-sm font-semibold text-[#4EB7FF]">Parceiro Ótmow</p>
          </Reveal>
        </div>
      </section>

      <FooterBlue />
    </div>
  );
}
