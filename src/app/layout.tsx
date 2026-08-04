import type { Metadata, Viewport } from "next";
import { Montserrat, Hanken_Grotesk } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";
import JsonLd from "@/components/JsonLd";
import {
  tireShopJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";

import CookieConsent from "@/components/CookieConsent";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["400", "700", "800"],
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://llantasgama.com"),
  title: {
    default: "Llantas Gama | Llantera en Villahermosa, Tabasco",
    template: "%s | Llantas Gama",
  },
  description:
    "Llantera en Villahermosa, Tabasco. Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial. Alineación, balanceo y reparación. Cotiza por WhatsApp.",
  keywords: [
    "llantera",
    "llantera en Villahermosa",
    "llanteras cerca de mí",
    "venta de llantas",
    "venta de llantas en Villahermosa",
    "cambio de llantas",
    "reparación de llantas",
    "alineación y balanceo",
    "vulcanizadora",
    "llantas económicas",
    "llantas nuevas",
    "neumáticos",
    "Michelin",
    "Bridgestone",
    "Continental",
    "Goodyear",
    "llantas auto",
    "llantas camión",
    "llantas agrícolas",
    "llantas industriales",
    "Villahermosa",
    "Tabasco",
    "multimarca",
  ],
  alternates: {
    canonical: "https://llantasgama.com",
    languages: {
      "es-MX": "https://llantasgama.com",
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Llantas Gama | Llantera en Villahermosa, Tabasco",
    description:
      "Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial en Villahermosa. Solicita tu cotización por WhatsApp.",
    url: "https://llantasgama.com",
    siteName: "Llantas Gama",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Llantas Gama | Llantera en Villahermosa, Tabasco",
    description:
      "Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial en Villahermosa. Solicita tu cotización por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${montserrat.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface selection:bg-primary selection:text-on-primary">
        <JsonLd data={tireShopJsonLd()} />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <a href="#main-content" className="skip-link">
          Saltar al contenido
        </a>
        <div className="flex-1 flex flex-col">
          {children}
          <WhatsAppButton />
        </div>
        <StickyCTA />

        <CookieConsent />
      </body>
    </html>
  );
}
