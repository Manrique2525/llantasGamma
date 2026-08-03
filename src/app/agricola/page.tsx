import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { PHONE, buildWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: "Llantas Agrícolas - Tractores, Cosechadoras, Pulverizadoras",
  description:
    "Cotización de medidas agrícolas para distintas aplicaciones. Michelin AG, BKT, Firestone, Trelleborg. Servicio en campo sujeto a ubicación, personal y disponibilidad.",
  alternates: {
    canonical: "https://llantasgama.com/agricola",
  },
};

export default function AgricolaPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('/images/agricola-hero.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
            <div className="hero-glow" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-md">
                <div className="inline-block px-3 py-1 bg-primary text-on-primary text-label-bold tracking-label-bold font-weight-label-bold tracking-widest">
                  AGRÍCOLA PROFESIONAL
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <span className="text-label-sm font-bold text-primary tracking-widest uppercase">Lun-Vie 8:30-17:30</span>
                </div>
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                LLANTAS AGRÍCOLAS{" "}
                <span className="text-primary">MULTIMARCA</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface mb-lg">
                <strong className="text-on-surface">
                  Cotización de medidas agrícolas en todas las medidas y
                  aplicaciones
                </strong>{" "}
                para tractores, cosechadoras y pulverizadoras. Michelin AG,
                BKT, Firestone, Trelleborg.{" "}
                <strong className="text-primary">
                  Servicio en campo sujeto a ubicación, personal y
                  disponibilidad.
                </strong>
              </p>
              <div className="flex flex-wrap gap-lg pt-sm">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-primary text-[18px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    agriculture
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    Opciones Agrícolas Multimarca
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
                    Garantía de fábrica
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
                    Entrega Sujeta a Disponibilidad
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md mt-md">
                <Link
                  href="/#contacto-agricola"
                  className="bg-primary text-on-primary px-xl py-4 text-label-bold font-weight-label-bold uppercase tracking-label-bold primary-glow transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Cotizar para Mi Temporada
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

        {/* Seasonal Urgency */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-lg border-y border-primary/20">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop text-center">
            <ScrollReveal>
              <div className="flex items-center justify-center gap-3">
                <span className="material-symbols-outlined text-primary text-[24px]">
                  event
                </span>
                <span className="text-body-lg font-label-bold">
                  <span className="text-primary">Temporada de cosecha</span> —
                  Medidas especiales bajo pedido. Aparta tu pedido hoy.
                </span>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Machinery Bento Grid */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <SectionHeader
                badge="Especialización por Maquinaria"
                badgeIcon="agriculture"
                title="Especialización por"
                titleHighlight="Maquinaria"
                subtitle="Soluciones específicas para cada etapa del ciclo agrícola."
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              <div className="md:col-span-2 group relative overflow-hidden h-80 ghost-border header-strip">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      "url('/images/agricola-bento-1.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-lg">
                  <h3 className="font-headline text-headline-md font-weight-headline-md text-white mb-1">
                    Tractores
                  </h3>
                    <p className="text-on-surface text-body-md">
                      Tracción extrema para laboreo pesado. 30+ medidas.
                    </p>
                  <span className="text-primary text-label-sm font-label-bold uppercase mt-2 inline-block">
                    Ver catálogo →
                  </span>
                </div>
              </div>
              <div className="group relative overflow-hidden h-80 ghost-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      "url('/images/agricola-bento-2.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-lg">
                  <h3 className="font-headline text-headline-md font-weight-headline-md text-white mb-1">
                    Cosechadoras
                  </h3>
                    <p className="text-on-surface text-body-md">
                      Flotación avanzada. 20+ medidas.
                    </p>
                  <span className="text-primary text-label-sm font-label-bold uppercase mt-2 inline-block">
                    Ver catálogo →
                  </span>
                </div>
              </div>
              <div className="group relative overflow-hidden h-80 ghost-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      "url('/images/agricola-bento-3.jpg')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-lg">
                  <h3 className="font-headline text-headline-md font-weight-headline-md text-white mb-1">
                    Pulverizadoras
                  </h3>
                    <p className="text-on-surface text-body-md">
                      Precisión entre surcos. 15+ medidas.
                    </p>
                  <span className="text-primary text-label-sm font-label-bold uppercase mt-2 inline-block">
                    Ver catálogo →
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Brands & Search */}
        <section className="py-xl bg-background">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">
              <div className="lg:col-span-5">
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg text-white mb-md">
                  Alianzas de{" "}
                  <span className="text-primary">Alto Rendimiento</span>
                </h2>
                <p className="text-on-surface mb-lg">
                  Distribuimos marcas agrícolas especializadas y localizamos
                  opciones para distintas aplicaciones agrícolas.
                </p>
                <div className="space-y-sm">
                  {[
                    { brand: "MICHELIN AG", tech: "ULTRAFLEX TECH" },
                    { brand: "BKT TIRES", tech: "HEAVY DUTY" },
                    { brand: "FIRESTONE AG", tech: "AD2 TECHNOLOGY" },
                    { brand: "TRELLEBORG", tech: "PREMIUM SOIL CARE" },
                  ].map((item) => (
                    <div
                      key={item.brand}
                      className="flex justify-between items-center p-lg bg-surface-container ghost-border"
                    >
                      <span className="font-bold text-white uppercase tracking-widest">
                        {item.brand}
                      </span>
                      <span className="mono-numbers text-primary">
                        {item.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-7 bg-surface-container-high p-lg ghost-border relative">
                <h3 className="font-headline text-headline-md font-weight-headline-md text-white mb-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    straighten
                  </span>
                  Buscador de Medidas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  {[
                    {
                      label: "Ancho de Sección",
                      options: [
                        "420 mm",
                        "480 mm",
                        "520 mm",
                        "580 mm",
                        "650 mm",
                        "710 mm",
                      ],
                    },
                    {
                      label: "Relación de Aspecto",
                      options: ["85", "80", "70", "65", "60"],
                    },
                    {
                      label: "Diámetro de Rin",
                      options: ["R24", "R28", "R30", "R34", "R38", "R42"],
                    },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="text-label-sm font-weight-label-sm text-on-surface-variant block mb-2 uppercase">
                        {field.label}
                      </label>
                      <select className="w-full bg-surface text-white border border-outline-variant py-3 px-4 focus:border-primary focus:ring-0 transition-colors">
                        <option>Seleccionar</option>
                        {field.options.map((opt) => (
                          <option key={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  ))}
                  <div className="flex items-end">
                    <button className="w-full bg-primary text-on-primary py-3 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:brightness-110 active:scale-95 transition-all">
                      Buscar Existencia
                    </button>
                  </div>
                </div>
                <p className="text-label-sm text-on-surface-variant mt-4">
                  ¿No encuentras tu medida?{" "}
                  <a
                    href={buildWhatsAppUrl("Hola, necesito una medida agrícola específica")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Escríbenos por WhatsApp
                  </a>
                </p>
                <div className="mt-xl pt-xl border-t border-outline-variant">
                  <div className="flex flex-col md:flex-row items-center gap-md md:gap-lg">
                    <div className="flex-1 text-center">
                      <p className="text-label-sm font-weight-label-sm text-on-surface-variant uppercase">
                        Acceso a opciones agrícolas multimarca
                      </p>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-outline-variant" />
                    <div className="flex-1 text-center">
                      <p className="text-label-sm font-weight-label-sm text-on-surface-variant uppercase">
                        Tiempo de entrega sujeto a medida y disponibilidad
                      </p>
                    </div>
                    <div className="hidden md:block w-px h-10 bg-outline-variant" />
                    <div className="flex-1 text-center">
                      <p className="text-label-sm font-weight-label-sm text-on-surface-variant uppercase">
                        Atención a productores y empresas agrícolas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <SectionHeader
                badge="Nuestra Experiencia"
                badgeIcon="verified"
                title="Experiencia con"
                titleHighlight="Productores y Empresas Agrícolas"
                align="center"
              />
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-body-lg text-on-surface">
                  Atendemos necesidades de llantas agrícolas con asesoría de
                  medida y aplicación, y seguimiento directo a cada unidad.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Form */}
        <section id="contacto-agricola" className="py-xl bg-surface-container-low section-glow">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl bg-surface-container-high ghost-border p-lg md:p-xl">
              <div>
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg text-white mb-md">
                  Hable con un{" "}
                  <span className="text-primary">Especialista</span>
                </h2>
                <p className="text-on-surface mb-lg">
                  Nuestro equipo técnico está listo para asesorarlo sobre la
                  mejor configuración de neumáticos para su flota. Un asesor
                  revisará la medida y aplicación solicitada.
                </p>
                <div className="space-y-sm">
                  {[
                    {
                      icon: "location_on",
                      title: "Punto de Atención en Villahermosa",
                      text: "Av Universidad 494, El Recreo. Villahermosa, Tab.",
                    },
                    {
                      icon: "call",
                      title: "Teléfono / WhatsApp",
                      text: "993 398 7711",
                      href: `tel:${process.env.NEXT_PUBLIC_PHONE_TEL || "9933987711"}`,
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 ghost-border">
                        <span className="material-symbols-outlined text-primary">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        {item.href ? (
                          <a href={item.href} className="text-on-surface-variant hover:text-primary transition-colors">
                            {item.text}
                          </a>
                        ) : (
                          <p className="text-on-surface">{item.text}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <ContactForm segment="agricola" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
