import type { Metadata } from "next";
import { Montserrat, Hanken_Grotesk } from "next/font/google";
import WhatsAppButton from "@/components/WhatsAppButton";
import StickyCTA from "@/components/StickyCTA";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://llantasgama.com"),
  title: {
    default: "Llantas Gama | Proveedor Multimarca en Villahermosa",
    template: "%s | Llantas Gama",
  },
  description:
    "Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial en Villahermosa, Tabasco. Solicita tu cotización por WhatsApp.",
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
    "multimarca",
  ],
  alternates: {
    canonical: "https://llantasgama.com",
    languages: {
      "es-MX": "https://llantasgama.com",
    },
  },
  openGraph: {
    title: "Llantas Gama | Proveedor Multimarca en Villahermosa",
    description:
      "Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial en Villahermosa. Solicita tu cotización por WhatsApp.",
    url: "https://llantasgama.com",
    siteName: "Llantas Gama",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Llantas Gama - Llantas multimarca en Villahermosa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Llantas Gama | Proveedor Multimarca en Villahermosa",
    description:
      "Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial en Villahermosa. Solicita tu cotización por WhatsApp.",
    images: ["/og-image.png"],
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
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
                "Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial en Villahermosa, Tabasco.",
              url: "https://llantasgama.com",
              telephone: "993 398 7711",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Av Universidad 494, El Recreo",
                addressLocality: "Villahermosa",
                addressRegion: "Tabasco",
                postalCode: "86020",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 18.015,
                longitude: -92.9163,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:30",
                  closes: "17:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday"],
                  opens: "08:30",
                  closes: "13:30",
                },
              ],
              priceRange: "$$",
              sameAs: ["https://facebook.com/llantasgama"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-surface selection:bg-primary selection:text-on-primary">
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
