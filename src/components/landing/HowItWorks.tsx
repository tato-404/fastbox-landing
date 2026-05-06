import { Reveal } from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Solicite a instalação",
    desc: "Fale com a gente pelo WhatsApp e entendemos o perfil do condomínio.",
  },
  {
    n: "02",
    title: "Instalamos sem obras",
    desc: "Montagem rápida em uma área compacta, sem transtorno para os moradores.",
  },
  {
    n: "03",
    title: "Moradores compram pelo app",
    desc: "Cadastro rápido, pagamento direto no app e produtos disponíveis 24h.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="py-24 md:py-32 border-t border-border/40 bg-card/30"
    >
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              Como funciona
            </span>
            <h2
              className="mt-4 font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4.2vw, 3.25rem)" }}
            >
              Simples do início ao <span className="text-glow">fim</span>.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Em poucos dias o seu condomínio já tem um mercado funcionando 24h.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="h-full rounded-3xl border border-border/60 bg-background p-8 glow-hover">
                <div className="text-5xl font-extrabold text-glow">{s.n}</div>
                <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
