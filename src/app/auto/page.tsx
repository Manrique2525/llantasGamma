import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TireSearchForm from "@/components/TireSearchForm";
import SectionHeader from "@/components/SectionHeader";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import { PHONE, buildWhatsAppUrl } from "@/lib/constants";

export const metadata = {
  title: "Llantas para Auto y Camioneta",
  description:
    "Llantas Michelin, Bridgestone, Continental desde $899 por pieza en medidas participantes. Sujeto a disponibilidad. Instalación profesional incluida. Solicita tu cotización por WhatsApp.",
  alternates: {
    canonical: "https://llantasgama.com/auto",
  },
};

export default function AutoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-20">
        {/* Hero */}
        <section className="relative w-full min-h-[500px] lg:min-h-[716px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('/images/auto-hero.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="hero-glow" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="flex flex-wrap items-center gap-3 mb-md">
                <div className="inline-block px-3 py-1 bg-primary text-on-primary text-label-bold tracking-label-bold font-weight-label-bold tracking-widest">
                  AUTO / CAMIONETA
                </div>
                <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/30">
                  <span className="material-symbols-outlined text-primary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <span className="text-label-sm font-bold text-primary tracking-widest uppercase">Lun-Vie 8:30-17:30</span>
                </div>
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                LLANTAS PARA TU AUTO{" "}
                <span className="text-primary">DESDE $899</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface mb-lg">
                Marcas premium: Michelin, Bridgestone, Continental.{" "}
                <strong className="text-on-surface">
                  Instalación profesional incluida.
                </strong>{" "}
                Llantas desde $899 por pieza en medidas participantes. Sujeto a
                disponibilidad.
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
                    Opciones multimarca
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
                    local_shipping
                  </span>
                  <span className="text-label-sm text-on-surface-variant">
                    Entrega sujeta a disponibilidad
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md mt-md">
                <Link
                  href="/#contacto-auto"
                  className="bg-primary text-on-primary px-xl py-4 text-label-bold font-weight-label-bold uppercase tracking-label-bold primary-glow transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Cotizar Llantas Para Mi Vehículo
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

        {/* Brand Catalog */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-lg gap-4">
                <div>
                  <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg text-on-surface border-l-4 border-primary pl-4">
                    Marcas Premium
                  </h2>
                  <p className="text-label-sm text-on-surface-variant mt-2 pl-4">
                    Opciones multimarca
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-gutter items-center grayscale opacity-60 hover:opacity-100 transition-opacity">
              {[
                "MICHELIN",
                "BRIDGESTONE",
                "CONTINENTAL",
                "GOODYEAR",
                "PIRELLI",
                "HANKOOK",
              ].map((brand) => (
                <div
                  key={brand}
                  className="h-20 flex items-center justify-center ghost-border bg-surface text-on-surface-variant font-bold text-lg cursor-pointer hover:border-primary hover:text-primary transition-all"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Search */}
        <section className="py-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="md:col-span-8 bg-surface-container ghost-border p-lg header-strip">
                <h3 className="font-headline text-headline-md font-weight-headline-md mb-md">
                  Buscador por Medida
                </h3>
                <TireSearchForm
                  fields={[
                    { label: "Ancho", placeholder: "205" },
                    { label: "Perfil", placeholder: "55" },
                    { label: "Rin", placeholder: "R16" },
                  ]}
                  whatsappMessage="Hola, busco llantas para auto"
                  fallbackLabel="No encuentras tu medida"
                />
              </div>
              <div className="md:col-span-4 bg-surface-container-high ghost-border p-lg">
                <h3 className="font-headline text-headline-md font-weight-headline-md mb-md">
                  Medidas Comunes
                </h3>
                <ul className="space-y-sm">
                  {[
                    "195 / 65 R15",
                    "205 / 55 R16",
                    "215 / 45 R17",
                    "225 / 50 R17",
                    "235 / 45 R18",
                  ].map((size) => (
                    <li
                      key={size}
                      className="flex justify-between items-center py-2 border-b border-outline-variant hover:bg-surface-variant px-2 transition-colors cursor-pointer"
                    >
                      <span className="mono-numbers text-on-surface">
                        {size}
                      </span>
                      <span className="material-symbols-outlined text-primary">
                        chevron_right
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <SectionHeader
                badge="Servicios"
                badgeIcon="build"
                title="Servicios"
                titleHighlight="Especializados"
                subtitle="Llantas y servicio automotriz completo para tu vehículo."
                align="center"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {[
                {
                  icon: "tire_repair",
                  title: "Llantas",
                  items: [
                    "Montaje y desmontaje",
                    "Balanceo computarizado",
                    "Rotación de llantas",
                    "Reparación de ponchaduras",
                    "Reparación de cejas",
                    "Cambio de válvulas",
                  ],
                },
                {
                  icon: "car_repair",
                  title: "Frenos",
                  items: [
                    "Balatas delanteras y traseras",
                    "Zapatas",
                    "Discos y tambores",
                    "Calipers",
                    "Purgado convencional y ABS",
                    "Servicio completo de frenos",
                  ],
                },
                {
                  icon: "handyman",
                  title: "Suspensión",
                  items: [
                    "Amortiguadores",
                    "Bases y horquillas",
                    "Bujes y rótulas",
                    "Bieletas",
                    "Gomas y barras estabilizadoras",
                    "Resortes",
                  ],
                },
                {
                  icon: "steering",
                  title: "Dirección",
                  items: [
                    "Terminales y varillas",
                    "Cremalleras y cajas de dirección",
                    "Bombas y mangueras hidráulicas",
                    "Diagnóstico de dirección eléctrica (EPS)",
                  ],
                },
                {
                  icon: "build",
                  title: "Afinación",
                  items: [
                    "Afinación menor y mayor",
                    "Cambio de bujías y bobinas",
                    "Cambio de filtros",
                    "Limpieza de cuerpo de aceleración",
                    "Limpieza de inyectores",
                  ],
                },
                {
                  icon: "ac_unit",
                  title: "Sistema de Enfriamiento",
                  items: [
                    "Radiadores",
                    "Bombas de agua",
                    "Termostatos",
                    "Mangueras y depósitos recuperadores",
                    "Cambio de anticongelante",
                  ],
                },
                {
                  icon: "settings",
                  title: "Transmisión y Mecánica",
                  items: [
                    "Clutch y collarín",
                    "Soportes de motor y transmisión",
                    "Bandas, poleas y tensores",
                    "Alternadores y marchas",
                    "Baterías",
                    "Diagnóstico electrónico",
                  ],
                },
                {
                  icon: "diagnosis",
                  title: "Diagnóstico y TPMS",
                  items: [
                    "Escaneo computarizado",
                    "Diagnóstico electrónico y preventivo",
                    "Inspección multipuntos",
                    "Diagnóstico de desgaste irregular",
                    "Programación TPMS",
                    "Cambio de sensores TPMS",
                  ],
                },
              ].map((cat) => (
                <div
                  key={cat.title}
                  className="bg-surface ghost-border p-lg flex flex-col hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-md">
                    <span className="w-11 h-11 bg-surface-variant rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">
                        {cat.icon}
                      </span>
                    </span>
                    <h3 className="font-headline text-[18px]">
                      {cat.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="material-symbols-outlined text-primary text-[18px] mt-0.5"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="text-label-sm text-on-surface">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contacto-auto"
                    className="mt-md text-label-sm font-label-bold text-primary uppercase hover:text-primary/70 transition-colors"
                  >
                    Cotizar →
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-lg text-center text-label-sm text-on-surface-variant">
              Precios de referencia: Balanceo desde $200 · Parchado desde $150 ·
              Montaje incluido con compra · Checkup de suspensión desde $500.
              Precios sujetos a confirmación según servicio y vehículo.
            </p>
          </div>
        </section>

        {/* Refacciones */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <SectionHeader
                badge="Refacciones"
                badgeIcon="inventory_2"
                title="Refacciones"
                titleHighlight="Disponibles"
                subtitle="Cotizamos refacciones según marca, medida y disponibilidad."
                align="center"
              />
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {[
                { icon: "car_repair", label: "Suspensión" },
                { icon: "steering", label: "Dirección" },
                { icon: "car_repair", label: "Frenos" },
                { icon: "build", label: "Afinación" },
                { icon: "ac_unit", label: "Enfriamiento" },
                { icon: "bolt", label: "Sistema eléctrico" },
                { icon: "settings", label: "Transmisión" },
                { icon: "water_drop", label: "Lubricantes y consumibles" },
              ].map((ref) => (
                <Link
                  key={ref.label}
                  href="#contacto-auto"
                  className="ghost-border bg-surface p-lg flex flex-col items-center gap-3 text-center hover:border-primary transition-all group"
                >
                  <span className="material-symbols-outlined text-primary text-[36px]">
                    {ref.icon}
                  </span>
                  <span className="text-label-sm font-label-bold uppercase text-on-surface">
                    {ref.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Programa Fast Lane Flotillas */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <ScrollReveal>
              <SectionHeader
                badge="Programa Empresarial"
                badgeIcon="speed"
                title="Programa Fast Lane"
                titleHighlight="Flotillas"
                subtitle="Administración, mantenimiento y control de llantas para tu flotilla de autos y camionetas."
                align="center"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {[
                {
                  icon: "folder_open",
                  title: "Administración de Flotillas",
                  items: [
                    "Expediente por unidad",
                    "Historial de mantenimiento",
                    "Recordatorios de servicio",
                    "Control de llantas",
                    "Reportes de desgaste",
                  ],
                },
                {
                  icon: "build",
                  title: "Mantenimiento Preventivo",
                  items: [
                    "Servicios programados",
                    "Inspecciones periódicas",
                    "Revisiones de seguridad",
                  ],
                },
                {
                  icon: "car_repair",
                  title: "Mantenimiento Correctivo",
                  items: [
                    "Frenos",
                    "Suspensión",
                    "Dirección",
                    "Afinación",
                    "Sistema de enfriamiento",
                    "Mecánica general",
                  ],
                },
                {
                  icon: "tire_repair",
                  title: "Gestión de Llantas",
                  items: [
                    "Venta de llantas",
                    "Rotación",
                    "Control de desgaste",
                    "Reportes de rendimiento",
                    "Diagnóstico de fallas",
                  ],
                },
                {
                  icon: "priority_high",
                  title: "Atención Prioritaria",
                  items: [
                    "Agenda preferente",
                    "Diagnóstico rápido",
                    "Entrega prioritaria",
                  ],
                },
                {
                  icon: "local_shipping",
                  title: "Servicio Móvil",
                  items: [
                    "Atención en instalaciones del cliente",
                    "Cambio de llantas",
                    "Reparaciones menores",
                    "Diagnósticos",
                  ],
                },
              ].map((block) => (
                <div
                  key={block.title}
                  className="bg-surface ghost-border p-lg flex flex-col hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 mb-md">
                    <span className="w-11 h-11 bg-surface-variant rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">
                        {block.icon}
                      </span>
                    </span>
                    <h3 className="font-headline text-[18px]">
                      {block.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 flex-1">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="material-symbols-outlined text-primary text-[18px] mt-0.5"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          check_circle
                        </span>
                        <span className="text-label-sm text-on-surface">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contacto-auto"
                    className="mt-md text-label-sm font-label-bold text-primary uppercase hover:text-primary/70 transition-colors"
                  >
                    Solicitar información →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="py-xl bg-surface-container-lowest border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-lg text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    verified
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-headline-md font-weight-headline-md">
                    Garantía
                  </h3>
                  <p className="text-on-surface text-body-md mt-1">
                    Garantía aplicable según marca, producto y condiciones del
                    fabricante.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-primary text-3xl">
                   engineering
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-headline-md font-weight-headline-md">
                    Personal Técnico
                  </h3>
                  <p className="text-on-surface text-body-md mt-1">
                    Personal técnico con procedimientos estandarizados.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-primary/10 flex items-center justify-center rounded-full">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    schedule
                  </span>
                </div>
                <div>
                  <h3 className="font-headline text-headline-md font-weight-headline-md">
                    Entrega sujeta a disponibilidad
                  </h3>
                  <p className="text-on-surface text-body-md mt-1">
                    Disponibilidad local y con nuestra red de proveedores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Lead Gen */}
        <section id="contacto-auto" className="py-xl section-glow">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div>
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-md">
                  Solicita Tu Cotización por WhatsApp
                </h2>
                <p className="text-body-lg text-on-surface mb-lg">
                  Completa el formulario y un asesor dará seguimiento a tu
                  solicitud.{" "}
                  <strong className="text-primary">Sin compromiso.</strong>
                </p>
                <div className="space-y-sm">
                  <div className="flex items-center gap-4 p-4 ghost-border bg-surface-container-high">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      phone_in_talk
                    </span>
                    <div>
                      <p className="text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase">
                        Línea Directa
                      </p>
                      <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_TEL || "9933987711"}`} className="text-headline-md font-weight-headline-md mono-numbers hover:text-primary transition-colors">
                        {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "993 398 7711"}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 ghost-border bg-surface-container-high">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      chat
                    </span>
                    <div>
                      <p className="text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase">
                        WhatsApp
                      </p>
                      <a
                        href={buildWhatsAppUrl(
                          "Hola, me interesa una cotización de llantas"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-headline-md font-weight-headline-md mono-numbers hover:text-primary transition-colors"
                      >
                        {process.env.NEXT_PUBLIC_PHONE_DISPLAY ||
                          "993 398 7711"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm segment="auto" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
