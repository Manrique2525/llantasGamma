import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Llantas para Camión y Flotillas",
  description:
    "Programa de flotillas: ahorra 15% en costos operativos. 200+ flotillas atendidas. Soporte en ruta 24/7. Cotización corporativa gratis.",
};

export default function CamionPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmY5xLvEDpHW-9Dy2lQpUChWvyQiHxOnNlYAkHdy1OAXZOeCvuOCvoJYkQLsUc8rxVQvUyR-W1AxVPJGrZ3yXDkxOCtolGNMn8LgvJ8K_j9PmO4P6V2xMqEgLty7vEEFQWz2fdo_OGnwVkOpZWmrEn2FAavAKYVpWdJ8OZdY24vOBPZuBQUNCCM5dXPFDf3c-u_YOmlGYOU35dFZcT27iwj3Zl1WLuQj-OxuVLlfaduoI3dAWA_UcRz8YV_ETFgucvIxr70ajZ98M')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary text-on-primary font-bold text-label-bold tracking-label-bold font-weight-label-bold mb-md tracking-widest">
                CAMIÓN
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                LLANTAS PARA FLOTILLAS |{" "}
                <span className="text-primary">AHORRA 15%</span> EN COSTOS
                OPERATIVOS
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant mb-lg">
                <strong className="text-on-surface">200+ flotillas nos eligen.</strong>{" "}
                Programa de mantenimiento predictivo + soporte en ruta 24/7.
                Precios especiales para 10+ unidades.
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
                    200+ Flotillas Atendidas
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
                    Soporte en Ruta 24/7
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md mt-md">
                <Link
                  href="/#contacto-camion"
                  className="bg-primary text-on-primary px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold primary-glow transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Solicitar Auditoría GRATIS
                </Link>
                <a
                  href="https://wa.me/5218123456789?text=Hola%2C%20necesito%20cotizaci%C3%B3n%20para%20mi%20flotilla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-border text-white px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:bg-surface-container transition-all text-center"
                >
                  WhatsApp Flotillas
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Banner */}
        <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 py-lg border-y border-primary/20">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-headline text-[36px] font-bold text-primary">
                  15%
                </div>
                <div className="text-label-sm font-label-bold uppercase tracking-wider text-on-surface-variant">
                  Ahorro promedio en costos operativos
                </div>
              </div>
              <div>
                <div className="font-headline text-[36px] font-bold text-primary">
                  200+
                </div>
                <div className="text-label-sm font-label-bold uppercase tracking-wider text-on-surface-variant">
                  Flotillas atendidas en el sureste
                </div>
              </div>
              <div>
                <div className="font-headline text-[36px] font-bold text-primary">
                  &lt;2 hrs
                </div>
                <div className="text-label-sm font-label-bold uppercase tracking-wider text-on-surface-variant">
                  Tiempo de respuesta en zona metropolitana
                </div>
              </div>
            </div>
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
                tag: "120,000 KM GARANTIZADOS",
                cta: "Ver opciones Long Haul",
              },
              {
                icon: "local_shipping",
                title: "Regional",
                desc: "Versatilidad para paradas frecuentes y diversos tipos de pavimentos urbanos.",
                tag: "80,000 KM GARANTIZADOS",
                cta: "Ver opciones Regional",
                active: true,
              },
              {
                icon: "construction",
                title: "Servicio Mixto",
                desc: "Resistencia extrema para aplicaciones dentro y fuera de carretera (On/Off Road).",
                tag: "60,000 KM GARANTIZADOS",
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
                  <p className="text-on-surface-variant font-body text-body-md mb-lg">
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
              Distribuidor Oficial:
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
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCw2dyB6w2zs4aBa_AanrXhqiXf9jLfS6a2d1bH2lRgFgRH8qzNs1sKiHStWI7ZdCJfzoRljTSeR6frsDjRpQPET8Lbej14OMUa2xQbo4WUx_BnlBDiWcqWyzgxwkjFPVBpN1_zXkO0ToOeY5EkLU3s4LAvsTgWGaBRW-ymFvsiqLtU-56-LEdo7rqKXBtkoTj6a6DJ9FRPxmbCkAiN_-vBUTRiicAJ6xW1XnZlxtF-W9pyoruqciEBQgg_CuGre9TgkVvE4mgOU3U')",
                  }}
                />
                <div className="absolute bottom-4 right-4 bg-primary text-on-primary p-4 ghost-border">
                  <p className="font-headline text-headline-md font-weight-headline-md leading-none">
                    24/7
                  </p>
                  <p className="text-label-sm font-weight-label-sm uppercase">
                    Asistencia en Ruta
                  </p>
                </div>
              </div>
              <div className="space-y-lg">
                <div>
                  <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-md">
                    ATENCIÓN A FLOTILLAS Y LOGÍSTICA
                  </h2>
                  <p className="text-body-lg font-body text-on-surface-variant mb-md">
                    Entendemos que{" "}
                    <strong className="text-on-surface">
                      un camión detenido es pérdida de dinero
                    </strong>
                    . Nuestro programa de mantenimiento predictivo reduce costos
                    operativos hasta un 15%. Ya lo hacen 200+ flotillas en el
                    sureste.
                  </p>
                </div>
                <div className="space-y-md">
                  {[
                    {
                      title: "Capacidad de Carga Optimizada",
                      desc: "Análisis técnico de distribución de peso y presión para maximizar vida útil.",
                    },
                    {
                      title: "Servicio en Carretera Nacional",
                      desc: "Red de cobertura en 15 estados con respuesta en menos de 4 horas.",
                    },
                    {
                      title: "Gestión de Cascos y Renovado",
                      desc: "Maximizamos la vida útil de cada neumático mediante procesos certificados.",
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
                <div className="bg-surface-container p-4 ghost-border">
                  <div className="flex justify-between mb-2">
                    <span className="font-label-bold text-label-bold tracking-label-bold font-weight-label-bold uppercase">
                      Disponibilidad de Stock
                    </span>
                    <span className="mono-numbers text-primary">99%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary-container">
                    <div
                      className="h-full bg-primary glow-active"
                      style={{ width: "99%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Flotillas */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <SectionHeader
              badge="Resultados Comprobados"
              badgeIcon="trending_up"
              title="Lo Que Dicen"
              titleHighlight="Nuestros Clientes"
              subtitle="200+ flotillas ya optimizan sus costos operativos con nosotros."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <TestimonialCard
                name="Ing. Carlos Mendoza"
                role="Director de Operaciones"
                company="Transportes del Sureste"
                text="Llevamos 5 años con Gama. Nuestros costos operativos bajaron 18% con su programa de flotillas. El soporte 24/7 ha sido clave para mantener nuestra flota en movimiento."
                rating={5}
                metric="-18%"
                metricLabel="Costos operativos reducidos"
              />
              <TestimonialCard
                name="Ing. Fernando López"
                role="Gerente de Flotilla"
                company="Grupo Logístico del Sur"
                text="La auditoría inicial nos identificó 3 camiones con desgaste irregular. Con su programa de rotación,延长amos la vida útil 40%."
                rating={5}
                metric="+40%"
                metricLabel="Vida útil extendida"
              />
              <TestimonialCard
                name="Lic. Roberto Sánchez"
                role="Gerente de Mantenimiento"
                company="Minera del Carmen"
                text="La auditoría de flotilla nos ahorró $500,000 en el primer año. El equipo técnico es de primer nivel y siempre disponibles cuando los necesitamos."
                rating={5}
                metric="$500K MXN"
                metricLabel="Ahorro primer año"
              />
            </div>
          </div>
        </section>

        {/* Service Photos Grid */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="mb-md">
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg">
                REALIDAD OPERATIVA
              </h2>
              <p className="text-on-surface-variant">
                Nuestros equipos en acción, garantizando precisión en cada
                montaje. 50,000+ llantas montadas este año.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {[
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuATQ3xnNcTRAMk1WRA80bARpCusQIcV8pcer8SnBLnlcdZs7UQ5kGX9felvD_qAF3r79HzDA0k_Qw3LfEF2fuDNt7jT7oqd1XcbjGSRgzeUdNFJUKzoferV3ZKaJmK3HIWSdf_Ymm_XpV1hBxOxIdbWeFni3_8GaaDyiEkUV_sb5FImD59OwTZXUj8qDRHrPyK3S2QvyMn8pJqZqd8tBvsywxnz9tRunrDQw2n9lVJS9mtnx48okCzOavAhIbt-pELewlu7eEgmqPU",
                  label: "Montaje de Llantas",
                  desc: "Equipo especializado",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Udt5yzb7x1qCr2LLANWrlyJSZ7W00-L4PawjjQXC6x-Qg5DbujMiWTpniwXYQVVL2kuxTmvg56KBbXGW95E4JocXngUR3vw2cpDQtMF4ENuHAO8UutiquX7YP6GjENrSEgbHXvceFn5jbNozoW3a0jter8wn-GkWe4bEdkIADClcT6K6REhICJiYz6V5o3Q6yuFStdIjCvNpXy-uz0U9EXioR05wQoY9D9YQQwybbACYGqieTAmM2kDWjr8wE3KshaW8BYtSUSI",
                  label: "Alineación 3D",
                  desc: "Precisión láser",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhyHi9KYeIGeX5QHLu290ewGIQz7nTgJv-Kh2QWXsiAjdLHPRLdujomKPkgEyl3duSxS3Ys0ojGLAPb_dF4TmpquwxiCGhNS8utBoJ_il180CVRJqAGHJPm5ud-rAEM9ysdWS41xKuoQDp3_8jHBSY1XW4JXcRfO9hCdtMoj_kC-yCFAVQp1cjuCSzVFVRUpVdRvoNZ0v82cbf4QVZE5J3bbuYxpj8UprhI9Ncm5lzH13TGdfCFR4synuYIXfJXJJoO3FZJUKLguU",
                  label: "Balanceado",
                  desc: "Conducción suave",
                },
                {
                  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDK2meZBOs191QEFmmIwUKdJldhaaa1zsVeRmUrqc7K8d_7MW4P3wq-xu4RTQeWsVi7Pd94cCiOTy_uCmDGHF55Gg-rUOHsriD7SbGOgmIjZ8fqvTNfkVeY4bqDcqWWXvo96tAT5NQhhHeoQNoPJLfZGZuUBOsAm5ihBEOhVgz3kwBTFfoaMsSxgLB58-Z_yUDunmTt8c0SRJn3s57ID_UqH8iIIFo4zDDxWglEzjKZixuFoknqJvrer5v5f1rhsOionB_0KJ_6uaU",
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
          className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-xl"
        >
          <div className="lg:col-span-5 space-y-lg">
            <div>
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-md">
                COBERTURA DE SERVICIO
              </h2>
              <p className="text-on-surface-variant">
                Operamos en los principales nodos industriales: Monterrey,
                Bajío, CDMX y Veracruz. Nuestra red de respuesta garantiza
                atención en menos de 2 horas en zonas metropolitanas.
              </p>
            </div>
            <div className="aspect-video w-full ghost-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.8!2d-92.9163!3d18.0150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85efd5e3b3b3b3b3%3A0x1234567890abcdef!2sAv%20Universidad%20494%2C%20El%20Recreo%2C%2086029%20Villahermosa%2C%20Tab.!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
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
