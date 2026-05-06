import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { Faq } from "@/components/landing/Faq";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FastBox — Mercado autônomo 24h para o seu condomínio" },
      {
        name: "description",
        content:
          "FastBox: minimercado autônomo 24h dentro do seu condomínio. Sem filas, pagamento pelo app e monitoramento total. Solicite a instalação.",
      },
      { property: "og:title", content: "FastBox — Mercado 24h no seu condomínio" },
      {
        property: "og:description",
        content:
          "Praticidade real para os moradores e valorização imediata para o condomínio.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
