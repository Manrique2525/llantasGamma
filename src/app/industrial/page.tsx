import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Llantas Industriales - Montacargas, Minería, Excavadoras",
  description:
    "99.8% uptime garantizado. Montacargas, excavadoras, minería OTR. Soporte técnico en <4 horas. Auditoría sin compromiso.",
};

export default function IndustrialPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
            <img
              className="w-full h-full object-cover grayscale brightness-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw9TxZ3uxmUFXZxfOuLYkYYXOKWQDZSMMFqBG8myw8hUVaTSIhmSL0PuK4QUdQYb60hiMFru8ZODdpMMRDzFi5gqi4COo39yI0bL1K6ZZYjGzHwCZxTbfmavG35pXmiktfYDv45kGw_UJKLojnN3V8BnJpiSyWEdcqh2qvyOhR02KRv7XZ_0K524dSAYEGHZi4K3_PH3Ei8fHoedc7Ws_UE6etPjv5_lFVFnmI-LW8Oz8Du-mebMXjb6rEQ57jR6LDdM7HRQLmGfE"
              alt="Industrial machinery"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary text-on-primary font-bold text-label-bold tracking-label-bold font-weight-label-bold mb-md tracking-widest">
                DIVISIÓN INDUSTRIAL
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                99.8% DE <span className="text-primary">UPTIME</span>{" "}
                GARANTIZADO
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant mb-lg">
                Montacargas, excavadoras, minería OTR.{" "}
                <strong className="text-on-surface">
                  Soporte técnico en &lt;4 horas.
                </strong>{" "}
                Si no llegamos, 10% de descuento.
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
                    99.8% Uptime Garantizado
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
                    Respuesta en &lt;4 horas
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md mt-md">
                <Link
                  href="/#contacto-industrial"
                  className="bg-primary text-on-primary px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold primary-glow transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Solicitar Auditoría GRATIS
                </Link>
                <a
                  href="https://wa.me/5218123456789?text=Hola%2C%20necesito%20llantas%20industriales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-border text-white px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:bg-surface-container transition-all text-center"
                >
                  WhatsApp Industrial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Response Time Banner */}
        <section className="bg-surface-container-lowest py-sm border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex flex-wrap justify-between items-center gap-lg overflow-hidden whitespace-nowrap">
            <div className="flex items-center gap-sm">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                timer
              </span>
              <span className="font-label-bold uppercase">
                Tiempo de Respuesta:
              </span>
              <span className="text-primary font-label-bold mono-numbers">
                &lt; 4 HORAS EN SITIO
              </span>
              <span className="text-label-sm text-on-surface-variant ml-2">
                | GARANTÍA: 10% DTO. SI NO LLEGAMOS
              </span>
            </div>
            <div className="hidden md:flex items-center gap-lg opacity-50">
              <span className="font-label-bold italic">PRECISION</span>
              <span className="font-label-bold italic">PERFORMANCE</span>
              <span className="font-label-bold italic">RELIABILITY</span>
            </div>
          </div>
        </section>

        {/* Tire Types Bento Grid */}
        <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeader
            badge="Neumáticos Especializados"
            badgeIcon="precision_manufacturing"
            title="Neumáticos"
            titleHighlight="Especializados"
            subtitle="Diseñados para resistir las condiciones más extremas en logística, construcción y extracción."
          />
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
                    Sólidos y Neumáticos — 50+ medidas
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBs-q7IvdMUjnaGI69ZTUA1Fo7faykMQ_aVjmey2xZgDaNFZJn3GDeQsuy7U4E1YxrhuUKYElGfi60EPGW3-PG_8GOxc7S-vBH9oXdRy0VqbQTNV6ykNAWILuHbYyGrdLtL1tYAT_O9ZWpQj7TT5uqHijkFMB9yKGCWtlmwTcnn4IjX59HWu5R3NG1C3kRej9HG86oMv0ZmazujewHdyPqlrIK8DB5OzmbdtvL3EqAdq2WKZhu5PcgwbgrOz2jNZDpPHTts7PgDNk4"
                alt="Montacargas"
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
                  Resistencia superior al corte y al desgaste para excavadoras
                  y retroexcavadoras. 30+ medidas disponibles.
                </p>
                <button className="bg-on-surface text-background px-4 py-2 font-label-bold text-label-sm font-weight-label-sm uppercase">
                  Ver Medidas
                </button>
              </div>
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs_1eQLT9cwXptLLLGFQrFcgxeT8cj2xAZMyYjfNxjwgiOPeX0CdKF64e1Cd5TCvm1kZ6idcv3vtfLR_i_QTCudndPFc6px0Fgo_oacyLi_Plmph5raXQs0ehaI85ks2WROkSnZkMv0NxAMk1G40B7N25YKRGkk6x9NknWjoF9YrLaV-GrFMvZTpi9gWYZFMtgU-Cn-Sawu51Oa8Z777sxbGMlyAWa5OVMw9lwbinNYafSK4hz-8PHeCqk0N4a5yXGHj1EBUrq0gg"
                  alt="Maquinaria pesada"
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
                  Dureza Extrema E-4 / L-4: Diseñada para terrenos rocosos con
                  alto riesgo de cortes. 20+ medidas.
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsrHFVG0gb5XYo3Ix4UAU5-wnAkDqiCEobLqpxwOFZFqNr8rMHX6BUZAwmE9zVQqyR_eShJjajZHOfaho0NTcONQ5ZoR9G2ePva8hUWjnrQ_-dbUTla1Z6ivUf5prQ3lSYMJHKAnvCnWdgEPOH1JuvRiRlQLuibZZJ-kkR9gG7__ywQKN9h6zibWIaCE8dAZ-s565wZdSL6UfYWfyqprDxriY5wseryxxswggBIht-h1q_r9PxIigmfqDDlAIvEoRMrrRMh1QAtQA"
                  alt="Minería OTR"
                />
              </div>
            </div>

            {/* Brands */}
            <div className="md:col-span-8 bg-surface-container-highest ghost-border p-lg">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                <h3 className="font-headline text-headline-md font-weight-headline-md">
                  Alianzas Estratégicas
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
              <p className="text-on-surface-variant font-body mb-lg">
                Distribuidores oficiales de las marcas líderes en el sector
                industrial global. Garantía directa de fábrica.
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

        {/* Corporate Services */}
        <section className="bg-surface-container-low py-xl relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-2 gap-xl items-center relative z-10">
            <div>
              <div className="inline-block border-l-2 border-primary pl-4 mb-md">
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase">
                  SERVICIOS CORPORATIVOS
                </h2>
              </div>
              <div className="space-y-md">
                {[
                  {
                    icon: "engineering",
                    title: "Mantenimiento Predictivo",
                    desc: "Monitoreo de presión y temperatura en tiempo real para flotas industriales. Evite fallas catastróficas.",
                  },
                  {
                    icon: "package_2",
                    title: "Gestión de Stock In-Situ",
                    desc: "Administramos su inventario crítico directamente en sus instalaciones para respuesta inmediata.",
                  },
                  {
                    icon: "groups",
                    title: "Capacitación de Operadores",
                    desc: "Talleres técnicos sobre cuidado y prolongación de la vida útil del neumático.",
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
                      <p className="text-on-surface-variant font-body">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
              <div className="bg-surface-container-high p-lg ghost-border relative z-10">
                <div className="flex justify-between items-center mb-lg">
                  <h3 className="font-headline text-headline-md font-weight-headline-md">
                    Plan Empresarial
                  </h3>
                  <span className="bg-primary/20 text-primary border border-primary/40 px-3 py-1 text-label-sm font-weight-label-sm font-label-bold uppercase">
                    Más Solicitado
                  </span>
                </div>
                <div className="space-y-3 mb-lg">
                  {[
                    "Soporte 24/7",
                    "Visitas Técnicas Mensuales",
                    "Precios Flotantes de Fábrica",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex justify-between items-center py-2 border-b border-outline-variant"
                    >
                      <span className="text-on-surface-variant font-body">
                        {feature}
                      </span>
                      <span className="material-symbols-outlined text-primary">
                        done
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <Link
                    href="/#contacto-industrial"
                    className="block w-full bg-primary text-on-primary py-4 font-label-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:brightness-110 text-center"
                  >
                    Solicitar Propuesta Personalizada
                  </Link>
                  <p className="text-label-sm text-on-surface-variant text-center mt-2">
                    Planes desde $5,000/mes | Incluye soporte 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Industrial */}
        <section className="py-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <SectionHeader
              badge="Resultados Industriales"
              badgeIcon="factory"
              title="Clientes"
              titleHighlight="Industriales"
              subtitle="Empresas que confían en nosotros para mantener su operación al 100%."
              align="center"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              <TestimonialCard
                name="Ing. Fernando López"
                role="Gerente de Mantenimiento"
                company="Grupo Industrial del Sur"
                text="La auditoría de neumáticos nos identificó $800,000 en ahorro potencial. Su plan de mantenimiento predictivo eliminó las paradas no programadas."
                rating={5}
                metric="$800K MXN"
                metricLabel="Ahorro anual identificado"
              />
              <TestimonialCard
                name="Ing. Carlos Ruiz"
                role="Director de Operaciones"
                company="Minera del Carmen, S.A."
                text="Sus llantas OTR Michelin duraron 40% más que las competidoras. El soporte en sitio es excepcional — siempre响应en en menos de 4 horas."
                rating={5}
                metric="+40%"
                metricLabel="Vida útil extendida"
              />
              <TestimonialCard
                name="Lic. María García"
                role="Jefa de Logística"
                company="Almacenes Centrales"
                text="Pasamos de 3 paradas mensuales a cero. El plan empresarial con visitas técnicas mensuales transformó nuestra operación de montacargas."
                rating={5}
                metric="0 Paradas"
                metricLabel="Paradas no programadas"
              />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section
          id="contacto-industrial"
          className="bg-surface py-xl border-t border-outline-variant"
        >
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid md:grid-cols-2 gap-xl">
              <div>
                <div className="inline-block border-l-2 border-primary pl-4 mb-md">
                  <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase">
                    SOLICITE UNA AUDITORÍA
                  </h2>
                </div>
                <p className="text-on-surface-variant font-body mb-lg">
                  Optimice sus costos operativos. Nuestros expertos realizarán un
                  diagnóstico detallado del estado de sus neumáticos y sugerirán
                  el plan de mantenimiento ideal para su operación.{" "}
                  <strong className="text-primary">
                    Auditoría sin compromiso.
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
                        Atención Inmediata
                      </p>
                      <p className="font-label-bold text-lg mono-numbers">
                        01-800-GAMA-IND
                      </p>
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
                        Sede Industrial
                      </p>
                      <p className="font-label-bold text-lg">
                        Av Universidad 494, El Recreo, 86029 Villahermosa, Tab.
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
