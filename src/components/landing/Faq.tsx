import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Quanto custa para o condomínio?",
    a: "A instalação da FastBox é sem custo para o condomínio. Nosso modelo é parceria — você ganha um benefício para os moradores sem investir.",
  },
  {
    q: "Precisa de obras ou reformas?",
    a: "Não. A FastBox é instalada em uma área compacta e a montagem é rápida, sem barulho e sem bagunça.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "100% via aplicativo. O morador faz o cadastro, escaneia o produto, paga pelo app e leva. Sem caixa, sem fila.",
  },
  {
    q: "E a segurança?",
    a: "Câmeras 24/7, sensores e antifurto inteligente. Tudo monitorado por nossa equipe em tempo real.",
  },
  {
    q: "Quem repõe os produtos?",
    a: "Nossa equipe faz toda a reposição e curadoria do mix. O condomínio não tem nenhum trabalho operacional.",
  },
];

export function Faq() {
  return (
    <section
      id="faq"
      className="py-24 md:py-32 border-t border-border/40 bg-card/30"
    >
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Perguntas frequentes
            </span>
            <h2
              className="mt-4 font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3rem)" }}
            >
              Tudo que você precisa <span className="text-glow">saber</span>.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="mt-12 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border/60 bg-background px-5 [&[data-state=open]]:glow-ring"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
