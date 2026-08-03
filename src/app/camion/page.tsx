import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { PHONE } from "@/lib/constants";

export const metadata = {
  title: "Llantas para Camión y Flotillas",
  description:
    "Llantas y mantenimiento para flotillas en Villahermosa. Ayudamos a empresas a mantener sus unidades disponibles mediante inspecciones, historial de mantenimiento, atención prioritaria y suministro de llantas y refacciones.",
  alternates: {
    canonical: "https://llantasgama.com/camion",
  },
};

export default function CamionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/camion-hero.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="hero-glow" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-md">
                <div className="inline-block px-3 py-1 bg-primary text-on-primary text-label-bold tracking-label-bold font-weight-label-bold tracking-widest">
                  CAMIÓN
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <span className="text-label-sm font-bold text-primary tracking-widest uppercase">Lun-Vie 8:30-17:30</span>
                </div>
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                LLANTAS Y MANTENIMIENTO PARA{" "}
                <span className="text-primary">FLOTILLAS EN VILLAHERMOSA</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface mb-lg">
                Ayudamos a empresas a mantener sus unidades disponibles mediante
                inspecciones, historial de mantenimiento, atención prioritaria y
                suministro de llantas y refacciones.
              </p>
              <div className="flex flex-wrap gap-lg pt-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    local_shipping
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    Atención a Flotillas
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
                    Garantía según fabricante
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
                    Seguimiento por Unidad
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md mt-md">
                <Link
                  href="/#contacto-camion"
                  className="bg-primary text-on-primary px-xl py-4 text-label-bold font-weight-label-bold uppercase tracking-label-bold primary-glow transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Solicitar Auditoría GRATIS
                </Link>
                <a
                  href={`tel:${PHONE.tel}`}
                  className="flex items-center justify-center gap-2 ghost-border text-white px-xl py-4 text-label-bold font-weight-label-bold uppercase tracking-label-bold hover:bg-white hover:text-background transition-all text-center"
                >
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  {PHONE.display}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-lg border-y border-primary/20">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div>
                  <p className="text-body-lg text-on-surface">
                    Identificamos oportunidades para reducir desgaste irregular,
                    servicios reactivos y tiempo muerto.
                  </p>
                </div>
                <div>
                  <p className="text-body-lg text-on-surface">
                    Atención en Villahermosa y servicios foráneos bajo
                    programación y evaluación de cobertura.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Bento Grid - Tire Types */}
        <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeader
            badge="Segmentos Especializados"
            badgeIcon="category"
            title="Segmentos"
            titleHighlight="Especializados"
            subtitle="Diseñadas matemáticamente para cada tipo de ruta y exigencia de carga."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                icon: "distance",
                title: "Long Haul",
                desc: "Máxima eficiencia de combustible para trayectos de larga distancia en autopista.",
                tag: "Seleccionamos la llanta de acuerdo con ruta, carga, posición, tipo de operación y presupuesto.",
                cta: "Ver opciones Long Haul",
              },
              {
                icon: "local_shipping",
                title: "Regional",
                desc: "Versatilidad para paradas frecuentes y diversos tipos de pavimentos urbanos.",
                tag: "Seleccionamos la llanta de acuerdo con ruta, carga, posición, tipo de operación y presupuesto.",
                cta: "Ver opciones Regional",
                active: true,
              },
              {
                icon: "construction",
                title: "Servicio Mixto",
                desc: "Resistencia extrema para aplicaciones dentro y fuera de carretera (On/Off Road).",
                tag: "Seleccionamos la llanta de acuerdo con ruta, carga, posición, tipo de operación y presupuesto.",
                cta: "Ver opciones Mixto",
              },
            ].map((seg) => (
              <div
                key={seg.title}
                className={`metallic-edge bg-surface-container p-lg flex flex-col justify-between group hover:border-primary transition-all cursor-pointer ${
                  seg.active
                    ? "border-t-2 border-t-primary hover:bg-surface-container-high"
                    : ""
                }`}
              >
                <div>
                  <div className="text-primary mb-md">
                    <span className="material-symbols-outlined text-[48px]">
                      {seg.icon}
                    </span>
                  </div>
                  <h3 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                    {seg.title}
                  </h3>
                  <p className="text-on-surface font-body text-body-md mb-lg">
                    {seg.desc}
                  </p>
                </div>
                <div>
                  <span className="font-label-bold text-primary text-label-sm">
                    {seg.tag}
                  </span>
                  <div className="flex items-center justify-between mt-sm">
                    <span className="text-label-sm font-label-bold text-on-surface-variant uppercase">
                      {seg.cta}
                    </span>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands Ticker */}
        <section className="py-sm bg-surface-container-lowest border-y border-outline-variant overflow-hidden">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex items-center gap-lg opacity-60">
            <span className="whitespace-nowrap font-label-bold uppercase text-on-surface-variant">
              Opciones Multimarca:
            </span>
            <div className="animate-marquee flex flex-1 items-center gap-lg grayscale hover:grayscale-0 transition-all">
              {[
                "MICHELIN",
                "BRIDGESTONE",
                "CONTINENTAL",
                "GOODYEAR",
                "PIRELLI",
                "MICHELIN",
                "BRIDGESTONE",
                "CONTINENTAL",
                "GOODYEAR",
                "PIRELLI",
              ].map((brand, i) => (
                <span
                  key={i}
                  className="font-headline text-headline-md font-weight-headline-md tracking-tighter whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Services */}
        <section className="py-xl bg-surface">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl items-center">
              <div className="relative group">
                <div className="absolute -top-4 -left-4 w-32 h-32 border-l-4 border-t-4 border-primary z-10" />
                <div
                  className="aspect-video w-full bg-cover bg-center ghost-border"
                  style={{
                    backgroundImage:
                      "url('/images/camion-fleet.jpg')",
                  }}
                />
                <div className="absolute bottom-4 right-4 bg-primary text-on-primary p-4 ghost-border">
                  <p className="font-headline text-headline-md font-weight-headline-md leading-none">
                    Seguimiento
                  </p>
                  <p className="text-label-sm font-weight-label-sm uppercase">
                    Por Unidad
                  </p>
                </div>
              </div>
              <div className="space-y-lg">
                <div>
                  <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-md">
                    ATENCIÓN A FLOTILLAS Y LOGÍSTICA
                  </h2>
                  <p className="text-body-lg font-body text-on-surface mb-md">
                    Entendemos que{" "}
                    <strong className="text-on-surface">
                      un camión detenido es pérdida de dinero
                    </strong>
                    . Mantenimiento preventivo y seguimiento por unidad.
                  </p>
                </div>
                <div className="space-y-md">
                  {[
                    {
                      title: "Capacidad de Carga Optimizada",
                      desc: "Análisis técnico de distribución de peso y presión para maximizar vida útil.",
                    },
                    {
                      title: "Servicios Foráneos",
                      desc: "Atención en Villahermosa y servicios foráneos bajo programación y evaluación de cobertura.",
                    },
                    {
                      title: "Gestión de Cascos y Renovado",
                      desc: "Gestión de cascos y renovado con seguimiento del estado de cada unidad.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <span className="material-symbols-outlined text-primary mt-1">
                        check_circle
                      </span>
                      <div>
                        <h4 className="font-label-bold text-on-surface">
                          {item.title}
                        </h4>
                        <p className="text-label-sm font-weight-label-sm text-on-surface-variant">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Qué revisamos en una flotilla */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <SectionHeader
                badge="Auditoría de Flotilla"
                badgeIcon="fact_check"
                title="¿Qué revisamos en"
                titleHighlight="una flotilla?"
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-sm">
                {[
                  "Identificación de unidades",
                  "Condición de llantas",
                  "Profundidad de piso",
                  "Presión",
                  "Desgaste irregular",
                  "Próximos mantenimientos",
                  "Frenos",
                  "Suspensión",
                  "Prioridades de reparación",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-body-md text-on-surface">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Service Photos Grid */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-md">
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg">
                REALIDAD OPERATIVA
              </h2>
              <p className="text-on-surface">
                Nuestros equipos en acción, garantizando precisión en cada
                montaje.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {[
                {
                  src: "/images/camion-service-1.jpg",
                  label: "Montaje de Llantas",
                  desc: "Equipo especializado",
                },
                {
                  src: "/images/camion-service-2.jpg",
                  label: "Verificación de Desgaste",
                  desc: "Inspección de la unidad",
                },
                {
                  src: "/images/camion-service-3.jpg",
                  label: "Balanceado",
                  desc: "Conducción suave",
                },
                {
                  src: "/images/camion-service-4.jpg",
                  label: "Inflado Precisión",
                  desc: "PSI calibrado",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="aspect-square bg-cover bg-center ghost-border grayscale hover:grayscale-0 transition-all duration-500 relative group"
                  style={{ backgroundImage: `url('${item.src}')` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-label-sm font-label-bold uppercase tracking-widest text-primary">
                      {item.label}
                    </span>
                    <p className="text-label-sm text-on-surface-variant">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Coverage */}
        <section
          id="contacto-camion"
          className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-xl section-glow"
        >
          <div className="lg:col-span-5 space-y-lg">
            <div>
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-md">
                COBERTURA DE SERVICIO
              </h2>
              <p className="text-on-surface">
                Atención en Villahermosa y servicios foráneos bajo programación
                y evaluación de cobertura.
              </p>
            </div>
            <div className="aspect-video w-full ghost-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.8!2d-92.9163!3d18.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85efd5e3b3b3b3b3%3A0x1234567890abcdef!2sAv%20Universidad%20494%2C%20El%20Recreo%2C%2086020%20Villahermosa%2C%20Tab.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cobertura Llantas Gama"
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm segment="camion" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
