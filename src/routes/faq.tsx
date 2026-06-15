import { createFileRoute } from "@tanstack/react-router";
import { NavBlue } from "@/components/site/NavBlue";
import { FooterBlue } from "@/components/site/FooterBlue";
import { DottedSurfaceBlue } from "@/components/fx/DottedSurfaceBlue";
import { Reveal } from "@/components/fx/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, MessageCircle, Phone } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FaqPageBlue,
});

const faqs = [
  {
    q: "Quais os tipos de recebíveis que a Ótmow trabalha?",
    a: "Trabalhamos apenas com recebíveis públicos performados, ou seja, aqueles em que a mercadoria já foi entregue, os serviços já foram prestados e, no caso de construtoras, as medições devidamente apuradas, entre outros.",
  },
  {
    q: "A antecipação de recebíveis públicos exige garantias?",
    a: "Não. As operações da Ótmow dispensam garantias, fiadores ou bens físicos como contrapartida, mas exigimos a documentação que comprove a entrega do produto ou serviço contratado pelo órgão público, bem como a comprovação de que exista o devido empenho junto ao sacado.",
  },
  {
    q: "Em quanto tempo recebo o valor antecipado?",
    a: "Após o envio e a validação da documentação, do cedente e do sacado, a análise de crédito e da licitação é feita de forma ágil, e a antecipação pode ser liberada em até 48 horas úteis após a formalização da proposta.",
  },
  {
    q: "Quais documentos preciso enviar?",
    a: "Notas fiscais emitidas, empenho do órgão, contrato público ou ata de registro, comprovantes de prestação de serviço ou entrega, bem como os documentos de análise de crédito convencionais (balanço, DRE e demais).",
  },
  {
    q: "A Ótmow é um fundo?",
    a: "Sim, somos um fundo que opera tanto na modalidade de securitizadora quanto de FIDC, utilizando tecnologia de ponta e inteligência artificial proprietária.",
  },
  {
    q: "Existe algum setor onde não atuamos?",
    a: "Não há restrição de setores. Podemos operar em todos eles, desde que sejam atendidos os pré-requisitos qualitativos da operação e haja aprovação nos comitês responsáveis.",
  },
  {
    q: "Qual a diferença de operar no mercado convencional e operar com a Ótmow?",
    a: "Diferentemente do que é comum no mercado convencional, a Ótmow emprega tecnologia de ponta, uso intensivo de inteligência artificial e apetite majoritário ao risco sacado, aliado a um conhecimento ímpar sobre o mercado de vendas públicas.",
  },
  {
    q: "É um empréstimo? Isso gera dívida para a empresa?",
    a: "Não. A antecipação de recebíveis não é um empréstimo. Trata-se da venda de um direito creditório futuro (o pagamento do órgão público), o que não configura dívida nem impacta o balanço da empresa como passivo.",
  },
  {
    q: "A Ótmow é uma empresa brasileira?",
    a: "Sim. A Ótmow é uma empresa brasileira, fundada com o propósito de transformar o acesso ao crédito para fornecedores do setor público. Atuamos em todo o território nacional com soluções financeiras desenvolvidas para o mercado brasileiro de licitações públicas.",
  },
  {
    q: "Quem pode se tornar parceiro da Ótmow?",
    a: "Qualquer profissional ou empresa que possua relacionamento com fornecedores do setor público, incluindo consultores, contadores, advogados, representantes comerciais, assessorias de licitação, entre outros.",
  },
  {
    q: "Como faço para me cadastrar como parceiro?",
    a: "Basta preencher o formulário disponível na página de parceria com seus dados. Após o envio, nossa equipe entrará em contato para validar as informações e formalizar o início da parceria.",
  },
  {
    q: "Como funciona a remuneração de parceiros?",
    a: "A cada operação de antecipação realizada por um cliente indicado por você, é gerada uma comissão. O valor dessa comissão varia conforme o deságio da operação formalizada e liquidada, e tudo é formalizado em contrato.",
  },
];

function FaqPageBlue() {
  return (
    <div className="min-h-screen bg-[#060d1f] text-white">
      <NavBlue />

      <section className="relative overflow-hidden pb-16 pt-40 md:pt-48">
        <DottedSurfaceBlue className="opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#060d1f]" />
        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#4EB7FF]">
              FAQ
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-balance text-4xl font-bold leading-[1.08] md:text-6xl">
              Perguntas frequentes
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-base text-slate-300">
              Respostas simples e diretas para as questões mais comuns. Nosso objetivo é tornar sua
              experiência mais prática, transparente e sem complicações.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-6 transition-colors data-[state=open]:border-[#3674EF]/45"
                >
                  <AccordionTrigger className="py-5 text-left text-sm font-semibold text-white hover:no-underline md:text-base">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-400">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#081127] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-center font-display text-3xl font-bold md:text-4xl">
              Ainda tem dúvidas?
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Mail,
                t: "E-mail",
                d: "Entre em contato para mais informações sobre nossos serviços.",
                v: "comercial@otmow.com",
                href: "mailto:comercial@otmow.com",
              },
              {
                icon: MessageCircle,
                t: "WhatsApp",
                d: "Estamos disponíveis para atender suas dúvidas e necessidades.",
                v: "+55 (11) 97310-6054",
                href: "https://wa.me/+5511973106054",
              },
              {
                icon: Phone,
                t: "Telefone",
                d: "Estamos disponíveis para atender suas dúvidas e necessidades.",
                v: "+55 (11) 5051-4249",
                href: "tel:+551150514249",
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 110}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="block h-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center transition-all hover:border-[#3674EF]/45 hover:bg-white/[0.06]"
                >
                  <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#3674EF]/15">
                    <c.icon className="size-7 text-[#4EB7FF]" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{c.t}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{c.d}</p>
                  <p className="mt-3 text-sm font-semibold text-[#4EB7FF]">{c.v}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FooterBlue />
    </div>
  );
}
