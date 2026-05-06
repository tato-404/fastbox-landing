import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/contact";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="hero-gradient relative overflow-hidden pt-36 pb-28 md:pt-44 md:pb-36"
    >
      {/* Glow decorativo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[140px] opacity-40"
        style={{ background: "rgba(0,255,136,0.35)" }}
      />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Mercado autônomo para condomínios
          </span>
        </Reveal>

        <Reveal delay={120}>
          <h1
            className="mt-8 font-extrabold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.25rem)" }}
          >
            Tenha um mercado{" "}
            <span className="text-glow">24h</span> dentro do seu condomínio
            <br className="hidden sm:block" /> — sem complicação
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            Aberto 24h, sem filas. Praticidade real para os moradores e
            valorização imediata para o seu condomínio.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full px-7 h-12 text-base font-semibold glow-ring glow-hover"
            >
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Solicitar instalação <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-12 text-base font-semibold border-primary/60 text-primary hover:bg-primary/10 hover:text-primary glow-hover"
            >
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={480}>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center">
            {[
              { v: "24/7", l: "Sempre aberto" },
              { v: "0", l: "Filas" },
              { v: "100%", l: "App + câmeras" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl md:text-3xl font-extrabold text-glow">
                  {s.v}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
