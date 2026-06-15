import { Link } from "@tanstack/react-router";
import { WarpBackgroundBlue } from "@/components/fx/WarpBackgroundBlue";
import { Reveal } from "@/components/fx/Reveal";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function FooterBlue() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA band with warp shader */}
      <div className="relative">
        <WarpBackgroundBlue speed={0.45} />
        <div className="absolute inset-0 bg-[#040a1c]/55" />
        <div className="relative z-10 mx-auto max-w-5xl px-5 py-24 text-center md:py-32">
          <Reveal>
            <h2 className="font-display text-balance text-3xl font-bold leading-tight text-white md:text-5xl">
              Não dependa do prazo do governo.
              <br />
              <span className="text-[#4EB7FF]">Antecipe seus recebíveis públicos.</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-slate-200/90 md:text-lg">
              Antecipar os valores das suas notas fiscais de contratos públicos é a forma
              mais eficiente de manter o caixa saudável e garantir o ritmo do seu negócio.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://app.otmow.com/pt-BR/loan/intake/details"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#06122b] transition-transform duration-300 hover:scale-105"
              >
                Faça seu cadastro aqui
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                to="/faq"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20"
              >
                Tire suas dúvidas
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer body */}
      <div className="border-t border-white/10 bg-[#04091a]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-baseline gap-0.5">
                <span className="font-display text-3xl font-bold text-white">Ótmow</span>
                <span className="size-1.5 rounded-full bg-[#4EB7FF]" />
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
                Liquidez inteligente para quem vende ao setor público.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-400">
                <p className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#4EB7FF]" />
                  comercial@otmow.com
                </p>
                <p className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-[#4EB7FF]" />
                  +55 (11) 5051-4249 · WhatsApp +55 (11) 97310-6054
                </p>
              </div>
            </div>

            <div className="md:col-span-3">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Navegação
              </h4>
              <ul className="mt-4 space-y-3 text-sm">
                <li><Link to="/sobre" className="text-slate-300 hover:text-[#4EB7FF]">Sobre a Ótmow</Link></li>
                <li><Link to="/clientes" className="text-slate-300 hover:text-[#4EB7FF]">Para empresas</Link></li>
                <li><Link to="/parceiros" className="text-slate-300 hover:text-[#4EB7FF]">Programa de parceria</Link></li>
                <li><Link to="/gestores" className="text-slate-300 hover:text-[#4EB7FF]">Gestores de relacionamento</Link></li>
                <li><Link to="/faq" className="text-slate-300 hover:text-[#4EB7FF]">Perguntas frequentes</Link></li>
              </ul>
            </div>

            <div className="md:col-span-5">
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Escritórios
              </h4>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MapPin className="size-4 text-[#4EB7FF]" /> Brasil
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    R. Joaquim Floriano, 72
                    <br />
                    Itaim Bibi – São Paulo, SP
                    <br />
                    04534-000
                  </p>
                </div>
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
                  <p className="flex items-center gap-2 text-sm font-semibold text-white">
                    <MapPin className="size-4 text-[#4EB7FF]" /> Estados Unidos
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    614 N. DuPont Highway
                    <br />
                    Dover, DE 19901
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <p className="text-xs text-slate-500">©2025 Ótmow Securitizadora S.A. Todos os direitos reservados.</p>
            <p className="text-xs text-slate-600">
              Operações em conformidade com COAF e LGPD.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
