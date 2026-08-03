import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { PHONE } from "@/lib/constants";

export const metadata = {
  title: "Llantas para Maquinaria Industrial y Construcción",
  description:
    "Cotizamos llantas para montacargas, minicargadores, retroexcavadoras y otros equipos de trabajo. La disponibilidad, instalación y tiempo de entrega se confirman según medida, equipo, ubicación y condiciones operativas.",
  alternates: {
    canonical: "https://llantasgama.com/industrial",
  },
};

export default function IndustrialPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <div className="hero-glow" style={{ zIndex: 11 }} />
            <img
              className="w-full h-full object-cover grayscale brightness-50"
              src="/images/industrial-hero.jpg"
              alt="Maquinaria industrial pesada en operación"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-md">
                <div className="inline-block px-3 py-1 bg-primary text-on-primary text-label-bold tracking-label-bold font-weight-label-bold tracking-widest">
                  EQUIPOS INDUSTRIALES
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <span className="text-label-sm font-bold text-primary tracking-widest uppercase">Lun-Vie 8:30-17:30</span>
                </div>
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                LLANTAS PARA MAQUINARIA{" "}
                <span className="text-primary">
                  INDUSTRIAL Y CONSTRUCCIÓN
                </span>
              </h1>
              <p className="font-body text-body-lg text-on-surface mb-lg">
                Cotizamos llantas para montacargas, minicargadores,
                retroexcavadoras y otros equipos de trabajo. La disponibilidad,
                instalación y tiempo de entrega se confirman según medida,
                equipo, ubicación y condiciones operativas.
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
                    Cotización Multimarca
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
                    Seguimiento de Desgaste
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md mt-md">
                <Link
                  href="/#contacto-industrial"
                  className="bg-primary text-on-primary px-xl py-4 text-label-bold font-weight-label-bold uppercase tracking-label-bold primary-glow transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Solicitar Cotización GRATIS
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

        {/* Tire Types Bento Grid */}
        <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <ScrollReveal>
            <SectionHeader
              badge="Neumáticos Especializados"
              badgeIcon="precision_manufacturing"
              title="Neumáticos"
              titleHighlight="Especializados"
              subtitle="Diseñados para resistir las condiciones más extremas en logística, construcción y extracción."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Forklifts */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low ghost-border header-strip p-lg flex flex-col justify-between min-h-[280px] lg:min-h-[400px]">
              <div className="z-10 relative">
                <span className="text-primary font-label-bold uppercase tracking-widest block mb-2">
                  Logística
                </span>
                <h3 className="font-headline text-headline-md font-weight-headline-md mb-3">
                  Montacargas y Elevadores
                </h3>
                <ul className="space-y-2 text-on-surface-variant font-body">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>{" "}
                    Sólidos y neumáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>{" "}
                    No manchantes para interiores
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]">
                      check_circle
                    </span>{" "}
                    Máxima tracción en carga pesada
                  </li>
                </ul>
              </div>
              <img
                className="absolute right-0 bottom-0 w-2/3 h-full object-cover object-left-bottom opacity-40 group-hover:scale-105 transition-transform duration-700"
                src="/images/industrial-forklift.jpg"
                alt="Montacargas eléctrico en almacén industrial"
              />
              <button className="z-10 w-fit text-primary font-label-bold flex items-center gap-xs group-hover:translate-x-2 transition-transform">
                Explorar Catálogo Montacargas{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>

            {/* Heavy Machinery */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low ghost-border p-lg flex flex-col justify-between">
              <div className="z-10 relative">
                <span className="text-secondary font-label-bold uppercase tracking-widest block mb-2">
                  Construcción
                </span>
                <h3 className="font-headline text-headline-md font-weight-headline-md mb-3">
                  Maquinaria Pesada
                </h3>
              </div>
              <div className="z-10 relative">
                <p className="text-on-surface-variant mb-4 font-body">
                    <span className="text-on-surface">Resistencia superior al corte y al desgaste para excavadoras
                    y retroexcavadoras.</span>
                </p>
                <button className="bg-on-surface text-background px-4 py-2 font-label-bold text-label-sm font-weight-label-sm uppercase">
                  Ver Medidas
                </button>
              </div>
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                  src="/images/industrial-heavy.jpg"
                  alt="Excavadora de maquinaria pesada en obra de construcción"
                />
              </div>
            </div>

            {/* Mining */}
            <div className="md:col-span-4 group relative overflow-hidden bg-surface-container-low ghost-border p-lg flex flex-col justify-between min-h-[300px]">
              <div className="z-10 relative">
                <span className="text-on-tertiary-container font-label-bold uppercase tracking-widest block mb-2">
                  Minería
                </span>
                <h3 className="font-headline text-headline-md font-weight-headline-md">
                  Operaciones OTR
                </h3>
              </div>
              <div className="z-10 relative mt-4">
                <p className="text-on-surface-variant mb-4 font-body text-label-sm">
                    <span className="text-on-surface">Dureza Extrema E-4 / L-4: Diseñada para terrenos rocosos con
                    alto riesgo de cortes.</span>
                </p>
              </div>
              <div className="absolute bottom-4 left-4 z-10">
                <div className="flex items-center gap-2 bg-background/80 backdrop-blur p-2 border border-outline-variant">
                  <span className="material-symbols-outlined text-primary">
                    priority_high
                  </span>
                  <span className="text-label-sm font-weight-label-sm font-label-bold">
                    Dureza Extrema E-4 / L-4
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700"
                  src="/images/industrial-mining.jpg"
                  alt="Bulldozer minero en operación de cantera"
                />
              </div>
            </div>

            {/* Brands */}
            <div className="md:col-span-8 bg-surface-container-highest ghost-border p-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <h3 className="font-headline text-headline-md font-weight-headline-md">
                  Opciones Multimarca
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["MICHELIN OTR", "CAMSO", "TRELLEBORG", "CONTINENTAL"].map(
                    (brand) => (
                      <span
                        key={brand}
                        className="px-2 py-1 bg-surface-container border border-outline-variant text-label-sm font-weight-label-sm uppercase"
                      >
                        {brand}
                      </span>
                    )
                  )}
                </div>
              </div>
              <p className="text-on-surface font-body mb-lg">
                Cotizamos opciones multimarca como Michelin OTR, Camso,
                Trelleborg y Continental.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                {["MICHELIN OTR", "CAMSO", "TRELLEBORG", "CONTINENTAL"].map(
                  (partner) => (
                    <div
                      key={partner}
                      className="h-16 bg-surface-container flex items-center justify-center border border-outline-variant group hover:border-primary transition-all cursor-pointer"
                    >
                      <span className="font-bold opacity-60 group-hover:opacity-100 group-hover:text-primary transition-all text-label-sm">
                        {partner}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Industriales */}
        <section className="bg-surface-container-low py-xl relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-xl items-center relative z-10">
            <div>
              <div className="inline-block border-l-2 border-primary pl-4 mb-md">
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase">
                  SERVICIOS INDUSTRIALES
                </h2>
              </div>
              <div className="space-y-md">
                {[
                  {
                    icon: "straighten",
                    title: "Identificación de Medida",
                  },
                  {
                    icon: "compare_arrows",
                    title: "Comparación de Alternativas",
                  },
                  {
                    icon: "currency_exchange",
                    title: "Cotización Multimarca",
                  },
                  {
                    icon: "local_shipping",
                    title: "Suministro sobre Pedido",
                  },
                  {
                    icon: "handyman",
                    title: "Coordinación de Instalación",
                  },
                  {
                    icon: "visibility",
                    title: "Inspección Visual Programada",
                  },
                  {
                    icon: "monitor_heart",
                    title: "Seguimiento de Desgaste",
                  },
                  {
                    icon: "school",
                    title: "Capacitación de Operadores",
                  },
                ].map((service) => (
                  <div key={service.title} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary flex items-center justify-center text-on-primary">
                      <span className="material-symbols-outlined">
                        {service.icon}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-label-bold text-lg mb-1 uppercase group-hover:text-primary transition-colors">
                        {service.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="bg-surface-container-high p-lg ghost-border relative z-10">
                <h3 className="font-headline text-headline-md font-weight-headline-md mb-lg">
                  Cotización de Llantas Industriales
                </h3>
                <p className="text-on-surface font-body mb-lg">
                  Cotizamos llantas para montacargas, minicargadores,
                  retroexcavadoras y otros equipos de trabajo. La disponibilidad,
                  instalación y tiempo de entrega se confirman según medida,
                  equipo, ubicación y condiciones operativas.
                </p>
                <div>
                  <Link
                    href="/#contacto-industrial"
                    className="block w-full bg-primary text-on-primary py-4 font-label-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:brightness-110 text-center"
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <SectionHeader
                badge="Nuestra Experiencia"
                badgeIcon="verified"
                title="Experiencia con"
                titleHighlight="Empresas Industriales"
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-body-lg text-on-surface">
                  Atendemos necesidades de llantas para equipos de trabajo, con
                  identificación de medida, cotización multimarca y seguimiento
                  a cada unidad.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contacto-industrial"
          className="bg-surface py-xl border-t border-outline-variant section-glow"
        >
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-2 gap-xl">
              <div>
                <div className="inline-block border-l-2 border-primary pl-4 mb-md">
                  <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase">
                    SOLICITA TU COTIZACIÓN
                  </h2>
                </div>
                <p className="text-on-surface font-body mb-lg">
                  Optimiza tus costos operativos. Nuestro equipo te cotiza
                  llantas multimarca para tu equipo de trabajo, con opciones
                  según medida, equipo y condiciones operativas.{" "}
                  <strong className="text-primary">
                    Cotización sin compromiso.
                  </strong>
                </p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">
                        call
                      </span>
                    </div>
                    <div>
                      <p className="text-label-sm font-weight-label-sm text-on-surface-variant uppercase font-label-bold">
                        Línea Directa
                      </p>
                      <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_TEL || "9933987711"}`} className="font-label-bold text-lg mono-numbers hover:text-primary transition-colors">
                        {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "993 398 7711"}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 border border-outline-variant flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">
                        location_on
                      </span>
                    </div>
                    <div>
                      <p className="text-label-sm font-weight-label-sm text-on-surface-variant uppercase font-label-bold">
                        Punto de Atención
                      </p>
                      <p className="font-label-bold text-lg">
                        Av Universidad 494, El Recreo, 86020 Villahermosa, Tab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm segment="industrial" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
