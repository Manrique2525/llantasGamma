export const SITE_URL = "https://llantasgama.com";

export function tireShopJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TireShop",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Llantas Gama",
    legalName: "LLANTEROS GAMA VAZQUEZ",
    description:
      "Venta e instalación de llantas multimarca para auto, camión, agrícola e industrial en Villahermosa, Tabasco. Alineación, balanceo y reparación de llantas.",
    url: SITE_URL,
    telephone: "+52 993 398 7711",
    image: `${SITE_URL}/opengraph-image`,
    logo: `${SITE_URL}/images/logo/logo-light-bg.jpeg`,
    priceRange: "$$",
    currenciesAccepted: "MXN",
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
    hasMap:
      "https://maps.google.com/?q=Av+Universidad+494+Villahermosa+Tabasco",
    areaServed: [
      "Villahermosa",
      "Zona metropolitana de Villahermosa",
      "Tabasco",
    ],
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
    sameAs: ["https://www.facebook.com/gamallantas?locale=es_LA"],
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Venta e instalación de llantas",
          areaServed: "Villahermosa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Alineación y balanceo",
          areaServed: "Villahermosa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Reparación de llantas y ponchaduras",
          areaServed: "Villahermosa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Servicio para flotillas",
          areaServed: "Villahermosa",
        },
      },
    ],
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Llantas Gama",
    legalName: "LLANTEROS GAMA VAZQUEZ",
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo/logo-light-bg.jpeg`,
    sameAs: ["https://www.facebook.com/gamallantas?locale=es_LA"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+52 993 398 7711",
      contactType: "sales",
      availableLanguage: "Spanish",
      areaServed: "MX",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Llantas Gama",
    description:
      "Llantera multimarca en Villahermosa, Tabasco. Venta e instalación de llantas para auto, camión, agrícola e industrial.",
    inLanguage: "es-MX",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

export function faqPageJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.href,
    })),
  };
}
