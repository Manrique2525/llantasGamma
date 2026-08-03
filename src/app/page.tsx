"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UrgencyBanner from "@/components/UrgencyBanner";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQAccordion from "@/components/FAQAccordion";
import ImageLightbox from "@/components/ImageLightbox";
import TireSearchForm from "@/components/TireSearchForm";
import { PHONE, buildWhatsAppUrl } from "@/lib/constants";

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

export default function HomePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Navbar />
      <UrgencyBanner />
      <main id="main-content" tabIndex={-1}>
        {/* Hero Section */}
        <section className="relative min-h-[500px] lg:min-h-[870px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center brightness-50"
              style={{
                backgroundImage:
                  "url('/images/homepage-hero.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
            <div className="hero-glow" />
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
            <div className="max-w-2xl space-y-md">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    precision_manufacturing
                  </span>
                  <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
                    Proveedor multimarca
                  </span>
                </div>
                <div className="inline-flex items-center gap-xs px-3 py-1 bg-primary/10 border border-primary/30">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    schedule
                  </span>
                  <span className="text-label-sm font-bold font-weight-label-sm tracking-widest uppercase text-primary">
                    Lun-Vie 8:30-17:30
                  </span>
                </div>
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface">
                TU PROVEEDOR DE{" "}
                <span className="text-primary">LLANTAS</span> CON ENTREGA SUJETA
                A MEDIDA, MARCA Y DISPONIBILIDAD.
              </h1>
              <p className="font-body text-body-lg text-on-surface">
                <strong className="text-on-surface">
                  Acceso a inventario multimarca para distintas aplicaciones.
                </strong>{" "}
                Auto, camión, agrícola e industrial.{" "}
                <strong className="text-primary">
                  Solicita tu cotización por WhatsApp.
                </strong>
              </p>
              <div className="flex flex-wrap gap-lg pt-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    Venta e instalación de llantas multimarca
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    Garantía aplicable según marca, producto y condiciones del fabricante
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_shipping
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    Entrega sujeta a medida, marca y disponibilidad
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md pt-xs">
                <Link
                  href="/#contacto"
                  className="bg-primary text-on-primary px-xl py-md text-label-bold font-weight-label-bold uppercase tracking-label-bold primary-glow hover:brightness-110 hover:scale-105 transition-all active:scale-95 duration-200 text-center"
                >
                  Cotización Gratis
                </Link>
                <a
                  href={`tel:${PHONE.tel}`}
                  className="flex items-center justify-center gap-2 border border-outline text-on-surface px-xl py-md text-label-bold font-weight-label-bold uppercase tracking-label-bold hover:bg-white hover:text-background transition-all active:scale-95 duration-200 text-center"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  {PHONE.display}
                </a>
              </div>
              <div className="border-t border-outline-variant/30 pt-md">
                <p className="text-label-sm text-on-surface-variant mb-3 uppercase tracking-widest font-bold">
                  Busca tu medida:
                </p>
                <TireSearchForm
                  fields={[{ label: "Medida", placeholder: "ej. 205/55R16" }]}
                  whatsappMessage="Hola, me interesa una cotización de llantas"
                  fallbackLabel="No encuentras tu medida"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Segment Grid */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <SectionHeader
            badge="Soluciones por Sector"
            badgeIcon="category"
            title="Segmentos"
            titleHighlight="Especializados"
            subtitle="Cada tipo de ruta y exigencia de carga tiene una solución ideal. Encuentra la tuya."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              {
                title: "Auto/Camioneta",
                icon: "directions_car",
                desc: "Llantas multimarca desde $899 por pieza en medidas participantes. Sujeto a disponibilidad.",
                link: "/auto",
                tag: "Desde $899",
              },
              {
                title: "Camión",
                icon: "local_shipping",
                desc: "Programa de flotillas: inspecciones, historial de mantenimiento y seguimiento por unidad.",
                link: "/camion",
                tag: "Flotillas",
              },
              {
                title: "Agrícola",
                icon: "agriculture",
                desc: "Cotización de medidas agrícolas para distintas aplicaciones. Entrega sujeta a disponibilidad.",
                link: "/agricola",
                tag: "Medidas Agrícolas",
              },
              {
                title: "Industrial",
                icon: "precision_manufacturing",
                desc: "Cotización de llantas multimarca para montacargas y equipos de trabajo.",
                link: "/industrial",
                tag: "Multimarca",
              },
            ].map((seg) => (
              <Link
                key={seg.title}
                href={seg.link}
                className="metallic-edge bg-surface-container p-lg flex flex-col justify-between group hover:border-primary transition-all cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-md">
                    <div className="text-primary">
                      <span className="material-symbols-outlined text-[48px]">
                        {seg.icon}
                      </span>
                    </div>
                    <span className="text-label-sm font-label-bold font-weight-label-sm text-primary bg-primary/10 px-2 py-1 uppercase">
                      {seg.tag}
                    </span>
                  </div>
                  <h3 className="font-headline text-headline-md mb-sm">
                    {seg.title}
                  </h3>
                  <p className="text-on-surface font-body text-body-md mb-lg">
                    {seg.desc}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-label-sm font-label-bold font-weight-label-sm text-primary uppercase tracking-widest">
                    Ver Especificaciones
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-surface-container-lowest py-sm border-y border-outline-variant overflow-x-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-lg">
            <ScrollReveal delay={0}>
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <span
                    className="material-symbols-outlined scale-[2]"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    inventory
                  </span>
                </div>
                <div>
                  <div className="font-headline text-headline-md font-bold">
                    Acceso a inventario multimarca
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    para distintas aplicaciones
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <span
                    className="material-symbols-outlined scale-[2]"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    schedule
                  </span>
                </div>
                <div>
                  <div className="font-headline text-headline-md font-bold">
                    Atención local en Villahermosa
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    y zona metropolitana
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <span
                    className="material-symbols-outlined scale-[2]"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    headset_mic
                  </span>
                </div>
                <div>
                  <div className="font-headline text-headline-md font-bold">
                    Lun-Vie
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    Atención 8:30-17:30
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <div className="flex items-center gap-4">
                <div className="text-primary">
                  <span
                    className="material-symbols-outlined scale-[2]"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    history
                  </span>
                </div>
                <div>
                  <div className="font-headline text-headline-md font-bold">
                    <AnimatedCounter target={15} suffix=" Años" />
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    De experiencia en el sector automotriz
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Nosotros */}
        <section className="py-xl bg-surface-container-low">
          <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
              <div>
                <div className="inline-block border-l-2 border-primary pl-4 mb-md">
                  <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase">
                    ¿Por Qué Elegirnos?
                  </h2>
                </div>
                <p className="text-body-lg text-on-surface mb-lg leading-relaxed">
                  En GAMA no solo vendemos llantas — <strong className="text-on-surface">resolvemos problemas
                  operativos</strong>. Sabemos que cada hora detenida es dinero perdido,
                  por eso diseñamos un modelo de servicio pensado para que tu
                  vehículo o flota esté siempre en movimiento.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-lg">
                  <div className="bg-surface-container p-4 ghost-border text-center">
                    <div className="font-headline text-headline-md font-bold text-primary">
                      Atención directa
                    </div>
                    <div className="text-label-sm text-on-surface-variant uppercase">
                      y seguimiento personalizado
                    </div>
                  </div>
                  <div className="bg-surface-container p-4 ghost-border text-center">
                    <div className="font-headline text-headline-md font-bold text-primary">
                      Disponibilidad
                    </div>
                    <div className="text-label-sm text-on-surface-variant uppercase">
                      y tiempo de entrega confirmados al cotizar
                    </div>
                  </div>
                </div>
                <Link
                  href="/#contacto"
                  className="inline-flex items-center gap-2 text-primary font-label-bold hover:gap-4 transition-all"
                >
                  Solicita tu cotización ahora
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>

              <div className="space-y-md">
                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      bolt
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Respuesta Rápida
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface">
                    Solicita tu cotización por WhatsApp. Entrega sujeta a medida,
                    marca y disponibilidad.
                    <strong className="text-primary">
                      {" "}Atención directa y seguimiento personalizado.
                    </strong>
                  </p>
                </div>

                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Proveedor Multimarca
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface">
                    Venta e instalación de llantas multimarca:{" "}
                    <strong className="text-on-surface">Michelin, Bridgestone, Continental,
                    Goodyear y 4 marcas más</strong>. Garantía aplicable según marca,
                    producto y condiciones del fabricante.
                  </p>
                </div>

                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      support_agent
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Atención Personalizada
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface">
                    Atención directa por teléfono y WhatsApp con seguimiento
                    personalizado a cada unidad.
                  </p>
                </div>

                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      savings
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Precios Competitivos
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface">
                    Precios competitivos y opciones según presupuesto. Para flotillas
                    de 10+ unidades, <strong className="text-primary">precios preferentes y seguimiento por unidad</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="Nuestra Experiencia"
              badgeIcon="verified"
              title="Experiencia con"
              titleHighlight="Particulares y Empresas de Villahermosa"
            />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-body-lg text-on-surface">
                Atendemos necesidades de llantas, frenos, suspensión, dirección
                y mantenimiento preventivo, con seguimiento directo a cada
                unidad.
              </p>
            </div>
          </ScrollReveal>
        </section>

        {/* Work Gallery */}
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

        {/* Brand Slider */}
        <section className="bg-surface-container-highest py-6 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-highest to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-highest to-transparent z-10" />
          <ScrollReveal>
            <div className="mb-4 text-center">
              <span className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                Venta e instalación de llantas multimarca
              </span>
            </div>
          </ScrollReveal>
          <div className="animate-marquee flex items-center gap-lg whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
            {[
              "Michelin",
              "Bridgestone",
              "Goodyear",
              "Continental",
              "Pirelli",
              "Firestone",
              "Yokohama",
              "Hankook",
              "Michelin",
              "Bridgestone",
              "Goodyear",
              "Continental",
              "Pirelli",
              "Firestone",
              "Yokohama",
              "Hankook",
            ].map((brand, i) => (
              <span
                key={i}
                className="font-headline text-headline-md uppercase tracking-[0.2em] font-extrabold text-on-surface-variant"
              >
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-xl bg-surface-container-low">
          <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
            <ScrollReveal>
              <SectionHeader
                badge="Preguntas Frecuentes"
                badgeIcon="help"
                title="¿Tienes"
                titleHighlight="Dudas?"
                subtitle="Resolvemos las preguntas más comunes de nuestros clientes."
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal>
              <div className="max-w-3xl mx-auto">
                <FAQAccordion />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact & Form */}
        <section
          id="contacto"
          className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl section-glow"
        >
          <div className="space-y-4">
            <div                className="inline-block border-l-2 border-primary pl-4 mb-md">
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase mb-xs">
                Solicita Tu Cotización
              </h2>
              <p className="text-on-surface">
                Solicita tu cotización por WhatsApp. Sin compromiso.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: "call",
                  title: "Línea Directa",
                  text: "993 398 7711",
                  href: `tel:${process.env.NEXT_PUBLIC_PHONE_TEL || "9933987711"}`,
                },
                {
                  icon: "chat",
                  title: "WhatsApp",
                  text: "993 398 7711",
                  href: buildWhatsAppUrl("Hola, me interesa una cotización de llantas"),
                },
                {
                  icon: "schedule",
                  title: "Horario",
                  text: "Lun-Vie 8:30-17:30 · Sáb 8:30-13:30",
                },
                {
                  icon: "location_on",
                  title: "Ubicación",
                  text: "Av Universidad 494, El Recreo, 86020 Villahermosa, Tab.",
                  href: "https://maps.google.com/?q=Av+Universidad+494+Villahermosa+Tabasco",
                },
              ].map((item) =>
                item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-4 bg-surface-container ghost-border flex items-start gap-4 hover:border-primary/50 transition-colors"
                >
                  <span className="material-symbols-outlined text-primary mt-1">
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-label-bold uppercase text-primary text-xs mb-1">
                      {item.title}
                    </div>
                    <div className="text-body-md">{item.text}</div>
                  </div>
                </a>
                ) : (
                <div
                  key={item.title}
                  className="p-4 bg-surface-container ghost-border flex items-start gap-4"
                >
                  <span className="material-symbols-outlined text-primary mt-1">
                    {item.icon}
                  </span>
                  <div>
                    <div className="font-label-bold uppercase text-primary text-xs mb-1">
                      {item.title}
                    </div>
                    <div className="text-body-md">{item.text}</div>
                  </div>
                </div>
                )
              )}
            </div>
          </div>
          <ContactForm segment="general" />
        </section>

        {/* Map */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-2xl mb-lg">
            <div className="inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary mb-sm">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
                Nuestra Ubicación
              </span>
            </div>
            <h2 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-xs">
              Visítanos en{" "}
              <span className="text-primary">Villahermosa</span>
            </h2>
            <p className="text-body-lg text-on-surface">
              Av Universidad 494, El Recreo, 86020 Villahermosa, Tabasco
            </p>
          </div>
          <div className="w-full h-[400px] lg:h-[500px] ghost-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.8!2d-92.9163!3d18.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85efd5e3b3b3b3b3%3A0x1234567890abcdef!2sAv%20Universidad%20494%2C%20El%20Recreo%2C%2086020%20Villahermosa%2C%20Tab.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Llantas Gama"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
