export const SITE_URL = "https://llantasgama.com";

export const PHONE = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711",
  display: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "993 398 7711",
  tel: process.env.NEXT_PUBLIC_PHONE_TEL || "9933987711",
};

export const WHATSAPP_LINKS = {
  cotizacion: `https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent("Hola, me interesa una cotización de llantas")}`,
  oferta: `https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent("Hola, vi la oferta en la página y me interesa un 10% de descuento")}`,
  newsletter: `https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent("Hola, quiero suscribirme al newsletter de ofertas y tips técnicos")}`,
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent(message)}`;
}
