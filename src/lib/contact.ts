// TODO: trocar pelo número real do WhatsApp da FastBox.
// Formato internacional, somente dígitos: 55 (Brasil) + DDD + número.
export const WHATSAPP_NUMBER = "5511947425771";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Tenho interesse em instalar a FastBox no meu condomínio.";

export function buildWhatsAppUrl(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
