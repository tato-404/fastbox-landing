import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo className="text-xl" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} FastBox. Todos os direitos reservados.
        </p>
        <div className="flex gap-5 text-sm text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground">
            Sobre
          </a>
          <a href="#faq" className="hover:text-foreground">
            FAQ
          </a>
          <a href="#contato" className="hover:text-foreground">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
