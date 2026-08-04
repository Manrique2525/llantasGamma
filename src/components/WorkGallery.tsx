"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import ImageLightbox from "@/components/ImageLightbox";

const galleryImages = [
  {
    src: "/images/homepage-gallery-1.jpg",
    alt: "Servicio pesado - Montaje de llantas mineras",
    label: "Servicio Pesado",
    desc: "Montaje de llantas mineras - Equipo especializado",
  },
  {
    src: "/images/homepage-gallery-2.jpg",
    alt: "Inflado de precisión",
    label: "Inflado Precisión",
    desc: "Presión calibrada al PSI exacto",
  },
  {
    src: "/images/homepage-gallery-3.jpg",
    alt: "Revisión de alineación y desgaste de neumáticos",
    label: "Revisión de Alineación",
    desc: "Detección de desgaste de neumáticos",
  },
  {
    src: "/images/homepage-gallery-4.jpg",
    alt: "Balanceado industrial",
    label: "Balanceado Industrial",
    desc: "Experiencia en instalación, balanceo y mantenimiento automotriz",
  },
];

export default function WorkGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        <ScrollReveal>
          <SectionHeader
            badge="Nuestras Instalaciones"
            badgeIcon="precision_manufacturing"
            title="Capacidad"
            titleHighlight="Operativa"
            subtitle="Experiencia en instalación, balanceo y mantenimiento automotriz."
          />
        </ScrollReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
          <ScrollReveal delay={0}>
            <div
              onClick={() => openLightbox(0)}
              className="lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto bg-surface-container overflow-hidden ghost-border group relative cursor-pointer"
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${galleryImages[0].src}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-label-sm font-label-bold uppercase tracking-widest text-primary">
                  {galleryImages[0].label}
                </span>
                <p className="text-label-sm text-on-surface-variant mt-1">
                  {galleryImages[0].desc}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {galleryImages.slice(1).map((item, i) => (
            <ScrollReveal key={i} delay={(i + 1) * 100}>
              <div
                onClick={() => openLightbox(i + 1)}
                className="aspect-square bg-surface-container overflow-hidden ghost-border group relative cursor-pointer"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-label-sm font-label-bold uppercase tracking-widest text-primary">
                    {item.label}
                  </span>
                  <p className="text-label-sm text-on-surface-variant mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ImageLightbox
        images={galleryImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
