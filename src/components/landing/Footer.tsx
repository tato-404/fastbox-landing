import { Instagram } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <Logo />

        <p className="text-sm text-muted-foreground text-center">
          © {new Date().getFullYear()} FastBox24h. Todos os direitos reservados.
        </p>

        <div className="flex items-center gap-5 text-sm text-muted-foreground">

          <a
            href="https://www.instagram.com/fastbox24h/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition"
            aria-label="Instagram FastBox"
          >
            <Instagram size={18} />
          </a>

          <a href="#sobre" className="hover:text-primary transition">
            Sobre
          </a>

          <a href="#faq" className="hover:text-primary transition">
            FAQ
          </a>

          <a href="#contato" className="hover:text-primary transition">
            Contato
          </a>


        </div>
      </div>
    </footer>
  );
}
