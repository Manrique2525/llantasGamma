"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UrgencyBanner from "@/components/UrgencyBanner";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import FAQAccordion from "@/components/FAQAccordion";
import ImageLightbox from "@/components/ImageLightbox";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDwf97d3xYB_v4xhZaPzwJA0SB3mQmzz2IptS0ygumaNDGU-Fc9Q2g7KI5pTPxy30qriXqVq8GiySS1y4oCqLf1FPTdbB-4D6ly70b7oDYfNP3873RPeKC4yOlgsK3qvKuK8rc7HjV_C3zITBwFs_i_aNgxLjFSta4DMKca9qpb3fB9OzgDuXSTRJvf3KLQBpjAUnYjhZFOgskWDPYmXYZW_5RGntHjLjzDhm6ZOzZ9UdQDQ8V85rBpCVtQoOtnob-4EHnUe4l1l3g",
    alt: "Servicio pesado - Montaje de llantas mineras",
    label: "Servicio Pesado",
    desc: "Montaje de llantas mineras - Equipo especializado",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6cyYk3Tf0L3zqAaX3pYkXhiLqGjJyBsauq0WlAhUhBT2cybamNzFQhHk2G4RybayBhLKsmjEO0n3-IM9owKPyteZCOCDqTtWj7Bg6CCww48evlm6J9FiCcWhc9RLzu7R4JlPIm9S9qE3rDE96Hp3wEFneOq_okLRSkDCVTwtKBctFrzr_maxMhavOjV9701odSRrIfNae0KyWnyfWNcjoqFHBSEOhG3M2b4acwqipCnv6wfbS2n-7TOhtMqSL669NT24smP8OcY",
    alt: "Inflado de precisión",
    label: "Inflado Precisión",
    desc: "Presión calibrada al PSI exacto",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCno7QeiwUOpGIYyGJUYWn7pmD1uWJJPUilqdoA3JfQsGV-kbQZgsqpHF9IwubNvm9aEASBsf0eucIyv_Haa6fvljN00qiXGOC2z-kKaLAplqUSbbNVU2RcIojU-2bsmg_z02W6laCrRkKg5xfFbdjWwvJ9Lk0JjcugoPdEBZXQf-ZsOzU-DOCJ-eZW5cUFFcawqulE4XO480FFcaZDO8cypdhnsPaXZs28gVAHzOMhdV5JCaa95c0aS1pRQxAwmbgt4r9H7flRozg",
    alt: "Alineación 3D láser",
    label: "Alineación 3D",
    desc: "Precisión láser milimétrica",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6xqiWWzSu0ukHfL1lG1E5OnBwGRWNtXvPDA-mJAFKJ4w2WPO0TlpUV_MnpHep4r6Vk_-rIpZezOOcgSA7_fBZAfgQa-CegA2wM_Q6fUybQt0_tQThJNHnG2zFkZvDItpwWTqpkO3VVrSu73-FGh7cajCHiZk1FE8exnpft8gFZWD7aYO1fvh3nGklTMJxWSVFlW0iaIhq_YwaIc6YTX1qR9YizYqRZ7uT54rwPmUOU0ByGwX-vkkcsb2IbXD22KTCjz81AIwBqZk",
    alt: "Balanceado industrial",
    label: "Balanceado Industrial",
    desc: "50,000+ llantas montadas este año",
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
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDQZJoITvOo5LSd2xMHbznTyWsHxn0leu8eJ82OMh1W9j0LfIUJZb57IXnR-boVSMh2fI-bt_oNtL5NmR0AvWMG6JcVQ0P9jOYi9SRi0t-s8CanbfPtIi3yi193mhh-rO-zp974BRJqALIwkj1FPrf9gY5dIyjWhbw0L2PbS-MzEo_Sz-Mz_dScFl9CNBPKaWJSJMT0XE9ygVCEf6YoTRMaTquFetd9k6T9HCGprgiZKGywzK8jAmYlP20fc2UL6JL2FHs2JIMtPZM')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full">
            <div className="max-w-2xl space-y-md">
              <div className="inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  precision_manufacturing
                </span>
                <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
                  Distribuidor Oficial de 8 Marcas
                </span>
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface">
                TU PROVEEDOR DE{" "}
                <span className="text-primary">LLANTAS</span> CON ENTREGA EN 24
                HORAS.
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant">
                <strong className="text-on-surface">25,000+ llantas en stock</strong> de
                8 marcas oficiales. Auto, camión, agrícola e industrial.{" "}
                <strong className="text-primary">
                  Cotización en menos de 10 minutos.
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
                    Distribuidor Oficial Certificado
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    group
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    1,200+ Clientes Activos
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    schedule
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    Entrega en 24-48 hrs
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-sm pt-xs">
                <Link
                  href="/#contacto"
                  className="bg-primary-container text-on-primary px-xl py-md font-label-bold text-label-bold tracking-label-bold font-weight-label-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 duration-200 text-center"
                >
                  Cotización Gratis
                </Link>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711"}?text=Hola%2C%20necesito%20asesor%C3%ADa%20t%C3%A9cnica`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-outline text-on-surface px-xl py-md font-label-bold text-label-bold tracking-label-bold font-weight-label-bold uppercase tracking-widest hover:bg-white hover:text-background transition-all active:scale-95 duration-200 text-center"
                >
                  Asesoría por WhatsApp
                </a>
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
                title: "Auto & Camioneta",
                icon: "directions_car",
                desc: "Michelin, Bridgestone, Continental desde $899. Instalación incluida.",
                link: "/auto",
                tag: "Desde $899",
              },
              {
                title: "Camión",
                icon: "local_shipping",
                desc: "Programa de flotillas: ahorra 15% en costos operativos. Soporte 24/7.",
                link: "/camion",
                tag: "Ahorra 15%",
              },
              {
                title: "Agrícola",
                icon: "agriculture",
                desc: "250+ medidas. Servicio en campo durante cosecha. Entrega en 24 hrs.",
                link: "/agricola",
                tag: "250+ Medidas",
              },
              {
                title: "Industrial",
                icon: "precision_manufacturing",
                desc: "Montacargas, minería, excavadoras. 99.8% uptime garantizado.",
                link: "/industrial",
                tag: "99.8% Uptime",
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
                  <p className="text-on-surface-variant font-body text-body-md mb-lg">
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
                    <AnimatedCounter target={25000} suffix="+" />
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    Llantas en stock de 8 marcas oficiales
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
                    &lt;4 Horas
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    Tiempo de respuesta en zona metropolitana
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
                    24/7
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    Soporte técnico y asistencia en ruta
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
                <p className="text-body-lg text-on-surface-variant mb-lg leading-relaxed">
                  En GAMA no solo vendemos llantas — <strong className="text-on-surface">resolvemos problemas
                  operativos</strong>. Sabemos que cada hora detenida es dinero perdido,
                  por eso diseñamos un modelo de servicio pensado para que tu
                  vehículo o flota esté siempre en movimiento.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-lg">
                  <div className="bg-surface-container p-4 ghost-border text-center">
                    <div className="font-headline text-headline-md font-bold text-primary">
                      10%
                    </div>
                    <div className="text-label-sm text-on-surface-variant uppercase">
                      Descuento si no respondemos en 4 hrs
                    </div>
                  </div>
                  <div className="bg-surface-container p-4 ghost-border text-center">
                    <div className="font-headline text-headline-md font-bold text-primary">
                      24-48h
                    </div>
                    <div className="text-label-sm text-on-surface-variant uppercase">
                      Entrega garantizada
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
                  <p className="text-body-md text-on-surface-variant">
                    Cotización en menos de 10 minutos. Entrega en 24-48 horas.
                    <strong className="text-primary">
                      {" "}Si no respondemos en 4 horas, te damos 10% de descuento.
                    </strong>
                  </p>
                </div>

                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Distribuidor Oficial
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Somos distribuidor certificado de{" "}
                    <strong className="text-on-surface">Michelin, Bridgestone, Continental,
                    Goodyear y 4 marcas más</strong>. Garantía directa de fábrica.
                  </p>
                </div>

                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      support_agent
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Soporte 24/7
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Línea directa las 24 horas. Asistencia en ruta para flotillas.
                    <strong className="text-on-surface"> Nuestro equipo técnico está disponible cuando nos necesitas.</strong>
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
                  <p className="text-body-md text-on-surface-variant">
                    Precios de distribuidor con descuentos por volumen. Para flotillas
                    de 10+ unidades, <strong className="text-primary">precios especiales con programa de renovado</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="Lo Que Dicen Nuestros Clientes"
              badgeIcon="star"
              title="+1,200 Clientes"
              titleHighlight="Confían en Nosotros"
              subtitle="Resultados reales de empresas que ya optimizan sus costos operativos con nosotros."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <ScrollReveal delay={0}>
              <TestimonialCard
                name="Ing. Carlos Mendoza"
                role="Director de Operaciones"
                company="Transportes del Sureste"
                text="Llevamos 5 años con Gama. Nuestros costos operativos bajaron 18% con su programa de flotillas. El soporte 24/7 ha sido clave para mantener nuestra flota en movimiento."
                rating={5}
                metric="-18%"
                metricLabel="Reducción en costos operativos anuales"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <TestimonialCard
                name="Ing. María García"
                role="Propietaria"
                company="Agropecuaria La Esperanza, Tab."
                text="Las llantas Michelin AG que nos instalaron duraron 2 temporadas más que las competidoras. El servicio en campo durante cosecha fue la diferencia."
                rating={5}
                metric="+2 Temporadas"
                metricLabel="Más de vida útil por juego de llantas"
              />
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <TestimonialCard
                name="Lic. Roberto Sánchez"
                role="Gerente de Mantenimiento"
                company="Minera del Carmen"
                text="La auditoría de flotilla nos ahorró $500,000 en el primer año. El equipo técnico es de primer nivel y siempre disponibles."
                rating={5}
                metric="$500K MXN"
                metricLabel="Ahorro en el primer año de servicio"
              />
            </ScrollReveal>
          </div>
        </section>

        {/* Work Gallery */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <ScrollReveal>
            <SectionHeader
              badge="Nuestras Instalaciones"
              badgeIcon="precision_manufacturing"
              title="Capacidad"
              titleHighlight="Operativa"
              subtitle="Más de 50,000 llantas montadas este año con precisión técnica y equipamiento de vanguardia."
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
                Distribuidor Oficial Certificado de 8 Marcas Líderes Mundiales
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
          className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl"
        >
          <div className="space-y-4">
            <div className="inline-block border-l-2 border-primary pl-4 mb-md">
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase mb-xs">
                Solicita Tu Cotización
              </h2>
              <p className="text-on-surface-variant">
                Respuesta en menos de 10 minutos. Sin compromiso.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: "call",
                  title: "Línea Directa",
                  text: "01-800-GAMA-99",
                  href: "tel:01800426299",
                },
                {
                  icon: "chat",
                  title: "WhatsApp 24/7",
                  text: "+52 1 81 2345 6789",
                  href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711"}`,
                },
                {
                  icon: "mail",
                  title: "Email Corporativo",
                  text: "ventas@llantasgama.com",
                  href: "mailto:ventas@llantasgama.com",
                },
                {
                  icon: "location_on",
                  title: "Ubicación",
                  text: "Av Universidad 494, El Recreo, 86029 Villahermosa, Tab.",
                  href: "https://maps.google.com/?q=Av+Universidad+494+Villahermosa+Tabasco",
                },
              ].map((item) => (
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
              ))}
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
            <p className="text-body-lg text-on-surface-variant">
              Av Universidad 494, El Recreo, 86029 Villahermosa, Tabasco
            </p>
          </div>
          <div className="w-full h-[400px] lg:h-[500px] ghost-border overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.8!2d-92.9163!3d18.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85efd5e3b3b3b3b3%3A0x1234567890abcdef!2sAv%20Universidad%20494%2C%20El%20Recreo%2C%2086029%20Villahermosa%2C%20Tab.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
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
