import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground animate-neon-pulse hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
