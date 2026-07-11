import type { Metadata } from "next";
import { Montserrat, Hanken_Grotesk } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";
import SocialProofToast from "@/components/SocialProofToast";
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

export const metadata: Metadata = {
  title: {
    default: "Llantas Gama | Distribuidor Oficial de 8 Marcas Premium",
    template: "%s | Llantas Gama",
  },
  description:
    "Venta de llantas Michelin, Bridgestone, Continental y más para auto, camión, agrícola e industrial. Distribuidor oficial certificado. Entrega en 24-48 hrs. Cotización gratis.",
  keywords: [
    "llantas",
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
    "distribuidor oficial",
  ],
  openGraph: {
    title: "Llantas Gama | Distribuidor Oficial de 8 Marcas Premium",
    description:
      "25,000+ llantas en stock. Auto, camión, agrícola e industrial. Entrega en 24-48 hrs.",
    locale: "es_MX",
    type: "website",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Llantas Gama",
              description:
                "Distribuidor oficial de llantas Michelin, Bridgestone, Continental y más. Auto, camión, agrícola e industrial.",
              url: "https://llantasgama.com",
              telephone: "01-800-GAMA-99",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av Universidad 494, El Recreo",
                addressLocality: "Villahermosa",
                addressRegion: "Tabasco",
                postalCode: "86029",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.015,
                longitude: -92.9163,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:00",
                closes: "18:00",
              },
              priceRange: "$$",
              sameAs: ["https://facebook.com/llantasgama"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface selection:bg-primary selection:text-on-primary overflow-x-hidden">
        {children}
        <WhatsAppButton />
        <StickyCTA />
        <SocialProofToast />
      </body>
    </html>
  );
}
