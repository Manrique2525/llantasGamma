export const SITE_URL = "https://llantasgama.com";

export const PHONE = {
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711",
  display: process.env.NEXT_PUBLIC_PHONE_DISPLAY || "01-800-GAMA-99",
  tel: process.env.NEXT_PUBLIC_PHONE_TEL || "01800426299",
};

export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "ventas@llantasgama.com";

export function waUrl(text: string): string {
  return `https://wa.me/${PHONE.whatsapp}?text=${encodeURIComponent(text)}`;
}
