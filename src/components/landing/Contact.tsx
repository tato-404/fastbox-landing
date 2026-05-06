import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { buildWhatsAppUrl } from "@/lib/contact";
import { Reveal } from "./Reveal";

export function Contact() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sending, setSending] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) {
      toast.error("Preencha todos os campos.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Email inválido.");
      return;
    }

    // Simulação de envio — sem backend.
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Recebemos seus dados, vamos te chamar no WhatsApp");
      setForm({ nome: "", email: "", mensagem: "" });
    }, 600);
  }

  return (
    <section
      id="contato"
      className="py-24 md:py-32 border-t border-border/40"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Bloco CTA */}
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-card p-10 md:p-16 text-center glow-ring">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full blur-[120px]"
              style={{ background: "rgba(0,255,136,0.3)" }}
            />
            <h2
              className="relative font-extrabold tracking-tight leading-tight"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
            >
              Quer levar a FastBox para o{" "}
              <span className="text-glow">seu condomínio?</span>
            </h2>
            <div className="relative mt-8 flex justify-center">
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 h-14 text-base font-semibold glow-ring glow-hover"
              >
                <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Falar agora no WhatsApp
                </a>
              </Button>
            </div>
            <p className="relative mt-4 text-sm text-muted-foreground">
              Resposta rápida · Atendimento humano · Sem compromisso
            </p>
          </div>
        </Reveal>

        {/* Formulário */}
        <Reveal delay={150}>
          <div className="mt-16 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
            <div>
              <h3
                className="font-extrabold tracking-tight leading-tight"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
              >
                Prefere que a gente entre em <span className="text-glow">contato?</span>
              </h3>
              <p className="mt-4 text-muted-foreground">
                Deixe seus dados e retornamos pelo WhatsApp com uma proposta
                personalizada para o seu condomínio.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border/60 bg-card p-6 md:p-8 space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="nome">Nome</Label>
                <Input
                  id="nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  placeholder="Seu nome"
                  className="rounded-xl h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="voce@email.com"
                  className="rounded-xl h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensagem">Mensagem</Label>
                <Textarea
                  id="mensagem"
                  value={form.mensagem}
                  onChange={(e) =>
                    setForm({ ...form, mensagem: e.target.value })
                  }
                  placeholder="Conte um pouco sobre o seu condomínio…"
                  rows={4}
                  className="rounded-xl"
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full rounded-full h-12 font-semibold glow-ring glow-hover"
              >
                {sending ? "Enviando…" : "Enviar mensagem"}
              </Button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
