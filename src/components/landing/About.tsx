import { Box, Smartphone, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const features = [
  {
    icon: Box,
    title: "Instalado em área compacta",
    desc: "Cabe em poucos metros quadrados, sem reformas.",
  },
  {
    icon: Smartphone,
    title: "Pagamento via aplicativo",
    desc: "Compra rápida, sem caixa e sem fila.",
  },
  {
    icon: ShieldCheck,
    title: "Monitoramento 24/7",
    desc: "Câmeras e antifurto inteligentes em tempo real.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Esquerda */}
        <Reveal>
          <div>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              O que é a FastBox
            </span>
            <h2
              className="mt-4 font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)" }}
            >
              Um mercado inteligente,{" "}
              <span className="text-glow">dentro do condomínio.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A FastBox é um minimercado autônomo instalado dentro do seu
              condomínio. Os moradores compram quando quiserem, pagam pelo app
              e levam — tudo sem atendente, sem fila e com segurança total.
            </p>

            <ul className="mt-10 space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/30">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{f.title}</p>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* Direita — Big 24h card */}
        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-3xl" />
            <div className="relative rounded-3xl border border-border/60 bg-card p-10 md:p-14 text-center glow-ring">
              <div
                className="font-extrabold leading-none text-glow"
                style={{ fontSize: "clamp(7rem, 18vw, 14rem)" }}
              >
                24h
              </div>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                Aberto todos os dias do ano.
                <br />
                <span className="text-foreground font-semibold">
                  Sem horário, sem espera.
                </span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
