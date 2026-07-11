import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
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
                <span className="text-primary">LLANTAS</span> CON ENTREGA EN 24 HORAS.
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant">
                25,000+ llantas en stock de 8 marcas oficiales. Auto, camión, agrícola e
                industrial. Cotización en menos de 10 minutos.
              </p>
              <div className="flex flex-wrap gap-lg pt-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-label-sm text-on-surface-variant">Distribuidor Oficial Certificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>group</span>
                  <span className="text-label-sm text-on-surface-variant">1,200+ Clientes Activos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                  <span className="text-label-sm text-on-surface-variant">Entrega en 24-48 hrs</span>
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
                  href="https://wa.me/5218123456789?text=Hola%2C%20necesito%20asesor%C3%ADa%20t%C3%A9cnica"
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
          <div className="max-w-2xl mb-xl">
            <div className="inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary mb-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                category
              </span>
              <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
                Soluciones por Sector
              </span>
            </div>
            <h2 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-xs">
              Segmentos <span className="text-primary">Especializados</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Diseñadas matemáticamente para cada tipo de ruta y exigencia de
              carga.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {[
              {
                title: "Auto & Camioneta",
                icon: "directions_car",
                desc: "Michelin, Bridgestone, Continental desde $899. Instalación incluida.",
                link: "/auto",
              },
              {
                title: "Camión",
                icon: "local_shipping",
                desc: "Programa de flotillas: ahorra 15% en costos operativos. Soporte 24/7.",
                link: "/camion",
              },
              {
                title: "Agrícola",
                icon: "agriculture",
                desc: "250+ medidas. Servicio en campo durante cosecha. Entrega en 24 hrs.",
                link: "/agricola",
              },
              {
                title: "Industrial",
                icon: "precision_manufacturing",
                desc: "Montacargas, minería, excavadoras. 99.8% uptime garantizado.",
                link: "/industrial",
              },
            ].map((seg) => (
              <a
                key={seg.title}
                href={seg.link}
                className="metallic-edge bg-surface-container p-lg flex flex-col justify-between group hover:border-primary transition-all cursor-pointer"
              >
                <div>
                  <div className="text-primary mb-md">
                    <span className="material-symbols-outlined text-[48px]">
                      {seg.icon}
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
              </a>
            ))}
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-surface-container-lowest py-sm border-y border-outline-variant overflow-x-hidden">
          <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-lg">
            {[
              { value: "25,000+", label: "Llantas en stock de 8 marcas oficiales", icon: "inventory" },
              {
                value: "<4 Horas",
                label: "Tiempo de respuesta en zona metropolitana",
                icon: "schedule",
              },
              { value: "24/7", label: "Soporte técnico y asistencia en ruta", icon: "headset_mic" },
              { value: "15 Años", label: "De experiencia en el sector automotriz", icon: "history" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div className="text-primary">
                  <span
                    className="material-symbols-outlined scale-[2]"
                    style={{ fontVariationSettings: "'wght' 200" }}
                  >
                    {stat.icon}
                  </span>
                </div>
                <div>
                  <div className="font-headline text-headline-md font-bold">
                    {stat.value}
                  </div>
                  <div className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Nosotros */}
        <section className="py-xl bg-surface-container-low">
          <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl">
              {/* Texto */}
              <div>
                <div className="inline-block border-l-2 border-primary pl-4 mb-md">
                  <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase">
                    Sobre Nosotros
                  </h2>
                </div>
                <p className="text-body-lg text-on-surface-variant mb-lg leading-relaxed">
                  En GAMA creemos que un vehículo es mucho más que un medio de
                  transporte: es una herramienta de trabajo, una inversión y
                  parte fundamental de la vida de nuestros clientes. Por eso
                  ofrecemos soluciones automotrices integrales con un enfoque
                  profesional, transparente y orientado a resultados.
                </p>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  Desde llantas y mantenimiento preventivo hasta mecánica
                  especializada y atención a flotillas, nuestro compromiso es
                  brindar servicios confiables que mantengan cada vehículo
                  seguro, eficiente y en movimiento. Trabajamos con altos
                  estándares de calidad, personal capacitado y una atención
                  cercana que nos permite construir relaciones de largo plazo
                  basadas en la confianza.
                </p>
              </div>

              {/* ¿Por qué elegirnos? */}
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
                    Cotización en menos de 10 minutos. Entrega en 24-48 horas. Si no
                    respondemos en 4 horas, te damos 10% de descuento en tu compra.
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
                    Somos distribuidor certificado de Michelin, Bridgestone, Continental,
                    Goodyear y 4 marcas más. Garantía directa de fábrica.
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
                    Nuestro equipo técnico está disponible cuando nos necesitas.
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
                    de 10+ unidades, precios especiales con programa de renovado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-2xl mb-xl">
            <div className="inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary mb-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
                Lo Que Dicen Nuestros Clientes
              </span>
            </div>
            <h2 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-xs">
              +1,200 Clientes <span className="text-primary">Confían en Nosotros</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                name: "Carlos Mendoza",
                company: "Transportes del Sureste",
                text: "Llevamos 5 años con Gama. Nuestros costos operativos bajaron 18% con su programa de flotillas. El soporte 24/7 ha sido clave.",
                rating: 5,
              },
              {
                name: "María García",
                company: "Agropecuaria La Esperanza",
                text: "Las llantas Michelin AG que nos instalaron duraron 2 temporadas más que las competidoras. Servicio en campo excelente.",
                rating: 5,
              },
              {
                name: "Roberto Sánchez",
                company: "Minera del Carmen",
                text: "La auditoría de flotilla nos ahorró $500,000 en el primer año. El equipo técnico es de primer nivel.",
                rating: 5,
              },
            ].map((test) => (
              <div
                key={test.name}
                className="p-lg bg-surface-container ghost-border flex flex-col"
              >
                <div className="flex gap-1 mb-md">
                  {[...Array(test.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      star
                    </span>
                  ))}
                </div>
                <p className="text-body-md text-on-surface-variant mb-lg flex-1">
                  &ldquo;{test.text}&rdquo;
                </p>
                <div>
                  <div className="font-label-bold text-on-surface">{test.name}</div>
                  <div className="text-label-sm text-on-surface-variant">{test.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Work Gallery */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-2xl mb-xl">
            <div className="inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary mb-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                precision_manufacturing
              </span>
              <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
                Nuestras Instalaciones
              </span>
            </div>
            <h2 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-xs">
              Capacidad <span className="text-primary">Operativa</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Más de 50,000 llantas montadas este año con precisión técnica y
              equipamiento de vanguardia.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
            <div className="lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto bg-surface-container overflow-hidden ghost-border group relative">
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDwf97d3xYB_v4xhZaPzwJA0SB3mQmzz2IptS0ygumaNDGU-Fc9Q2g7KI5pTPxy30qriXqVq8GiySS1y4oCqLf1FPTdbB-4D6ly70b7oDYfNP3873RPeKC4yOlgsK3qvKuK8rc7HjV_C3zITBwFs_i_aNgxLjFSta4DMKca9qpb3fB9OzgDuXSTRJvf3KLQBpjAUnYjhZFOgskWDPYmXYZW_5RGntHjLjzDhm6ZOzZ9UdQDQ8V85rBpCVtQoOtnob-4EHnUe4l1l3g",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-lg translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-label-sm font-label-bold uppercase tracking-widest text-primary">
                  Servicio Pesado
                </span>
                <p className="text-label-sm text-on-surface-variant mt-1">Montaje de llantas mineras — Equipo especializado</p>
              </div>
            </div>

            {[
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6cyYk3Tf0L3zqAaX3pYkXhiLqGjJyBsauq0WlAhUhBT2cybamNzFQhHk2G4RybayBhLKsmjEO0n3-IM9owKPyteZCOCDqTtWj7Bg6CCww48evlm6J9FiCcWhc9RLzu7R4JlPIm9S9qE3rDE96Hp3wEFneOq_okLRSkDCVTwtKBctFrzr_maxMhavOjV9701odSRrIfNae0KyWnyfWNcjoqFHBSEOhG3M2b4acwqipCnv6wfbS2n-7TOhtMqSL669NT24smP8OcY",
                label: "Inflado Precisión",
                desc: "Presión calibrada al PSI exacto",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCno7QeiwUOpGIYyGJUYWn7pmD1uWJJPUilqdoA3JfQsGV-kbQZgsqpHF9IwubNvm9aEASBsf0eucIyv_Haa6fvljN00qiXGOC2z-kKaLAplqUSbbNVU2RcIojU-2bsmg_z02W6laCrRkKg5xfFbdjWwvJ9Lk0JjcugoPdEBZXQf-ZsOzU-DOCJ-eZW5cUFFcawqulE4XO480FFcaZDO8cypdhnsPaXZs28gVAHzOMhdV5JCaa95c0aS1pRQxAwmbgt4r9H7flRozg",
                label: "Alineación 3D",
                desc: "Precisión láser milimétrica",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6xqiWWzSu0ukHfL1lG1E5OnBwGRWNtXvPDA-mJAFKJ4w2WPO0TlpUV_MnpHep4r6Vk_-rIpZezOOcgSA7_fBZAfgQa-CegA2wM_Q6fUybQt0_tQThJNHnG2zFkZvDItpwWTqpkO3VVrSu73-FGh7cajCHiZk1FE8exnpft8gFZWD7aYO1fvh3nGklTMJxWSVFlW0iaIhq_YwaIc6YTX1qR9YizYqRZ7uT54rwPmUOU0ByGwX-vkkcsb2IbXD22KTCjz81AIwBqZk",
                label: "Balanceado Industrial",
                desc: "50,000+ llantas montadas este año",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square bg-surface-container overflow-hidden ghost-border group relative"
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
                  <p className="text-label-sm text-on-surface-variant mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Slider */}
        <section className="bg-surface-container-highest py-6 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-highest to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-highest to-transparent z-10" />
          <div className="mb-4 text-center">
            <span className="text-label-sm font-label-bold font-weight-label-sm uppercase tracking-widest text-on-surface-variant">
              Distribuidor Oficial Certificado de 8 Marcas Líderes Mundiales
            </span>
          </div>
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

        {/* Contact & Form */}
        <section id="contacto" className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="space-y-4">
            <div className="inline-block border-l-2 border-primary pl-4">
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
                },
                {
                  icon: "chat",
                  title: "WhatsApp 24/7",
                  text: "+52 1 81 2345 6789",
                },
                {
                  icon: "mail",
                  title: "Email Corporativo",
                  text: "ventas@llantasgama.com",
                },
                {
                  icon: "location_on",
                  title: "Ubicación",
                  text: "Av Universidad 494, El Recreo, 86029 Villahermosa, Tab.",
                },
              ].map((item) => (
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
              ))}
            </div>
          </div>
          <div className="bg-surface-container p-lg ghost-border">
            <form className="space-y-sm">
              <div>
                <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                  Nombre
                </label>
                <input
                  className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface"
                  placeholder="Tu nombre completo"
                  type="text"
                  required
                />
              </div>
              <div>
                <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                  Teléfono / WhatsApp
                </label>
                <input
                  className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface mono-numbers"
                  placeholder="10 dígitos"
                  type="tel"
                  required
                />
              </div>
              <div>
                <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                  ¿Qué necesitas?
                </label>
                <select className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface">
                  <option>Cotización de llantas</option>
                  <option>Asesoría técnica</option>
                  <option>Servicio de instalación</option>
                  <option>Programa para flotillas</option>
                </select>
              </div>
              <button className="w-full bg-primary-container text-on-primary py-4 font-label-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95">
                Recibir Cotización Gratis
              </button>
              <p className="text-label-sm text-on-surface-variant text-center">
                Te llamamos en menos de 10 minutos | 10% dto. si no respondemos
              </p>
            </form>
          </div>
        </section>

        {/* Map */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="max-w-2xl mb-lg">
            <div className="inline-flex items-center gap-xs px-3 py-1 bg-surface-container border-l-4 border-primary mb-sm">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                location_on
              </span>
              <span className="text-label-sm font-label-bold font-weight-label-sm tracking-widest uppercase">
                Nuestra Ubicación
              </span>
            </div>
            <h2 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-xs">
              Visítanos en <span className="text-primary">Villahermosa</span>
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
