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
                  Tecnología de Alto Impacto
                </span>
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface">
                INGENIERÍA EN{" "}
                <span className="text-primary">MOVIMIENTO</span> PRECISO.
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant">
                Suministramos soluciones de neumáticos para los sectores más
                exigentes. Desde flotas de transporte hasta maquinaria pesada,
                garantizamos tracción, durabilidad y eficiencia en cada
                kilómetro.
              </p>
              <div className="flex flex-wrap gap-sm pt-xs">
                <button className="bg-primary-container text-on-primary px-xl py-md font-label-bold text-label-bold tracking-label-bold font-weight-label-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 duration-200">
                  Ver Catálogo
                </button>
                <button className="border border-outline text-on-surface px-xl py-md font-label-bold text-label-bold tracking-label-bold font-weight-label-bold uppercase tracking-widest hover:bg-white hover:text-background transition-all active:scale-95 duration-200">
                  Asesoría Técnica
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Segment Grid */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-md">
            <div>
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-xs">
                SEGMENTOS ESPECIALIZADOS
              </h2>
              <p className="text-on-surface-variant max-w-md">
                Diseñadas matemáticamente para cada tipo de ruta y exigencia de
                carga.
              </p>
            </div>
            <div className="h-1 w-24 bg-primary" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              {
                title: "Auto & Camioneta",
                icon: "directions_car",
                desc: "Seguridad y confort para el camino diario con marcas premium.",
                link: "/auto",
              },
              {
                title: "Camión",
                icon: "local_shipping",
                desc: "Máximo rendimiento kilométrico y renovabilidad para tu flota.",
                link: "/camion",
              },
              {
                title: "Agrícola",
                icon: "agriculture",
                desc: "Tracción superior y baja compactación para la máxima productividad.",
                link: "/agricola",
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
        <section className="bg-surface-container-lowest py-sm border-y border-outline-variant">
          <div className="px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-lg">
            {[
              { value: "20,000+", label: "Llantas en stock", icon: "inventory" },
              {
                value: "<4 Horas",
                label: "Tiempo de respuesta",
                icon: "schedule",
              },
              { value: "24/7", label: "Soporte técnico", icon: "headset_mic" },
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

              {/* Misión, Visión, Valores */}
              <div className="space-y-md">
                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      flag
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Misión
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Mantener los vehículos de nuestros clientes seguros,
                    confiables y productivos mediante servicios automotrices
                    profesionales.
                  </p>
                </div>

                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      visibility
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Visión
                    </h3>
                  </div>
                  <p className="text-body-md text-on-surface-variant">
                    Convertirnos en la empresa automotriz más confiable de
                    Tabasco para particulares y flotillas.
                  </p>
                </div>

                <div className="p-lg bg-surface-container ghost-border">
                  <div className="flex items-center gap-3 mb-sm">
                    <span className="material-symbols-outlined text-primary">
                      verified
                    </span>
                    <h3 className="font-headline text-headline-md font-weight-headline-md tracking-headline-lg">
                      Valores
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-sm">
                    {[
                      "Integridad",
                      "Profesionalismo",
                      "Seguridad",
                      "Servicio",
                      "Responsabilidad",
                      "Mejora continua",
                    ].map((val) => (
                      <div
                        key={val}
                        className="flex items-center gap-2 text-body-md text-on-surface-variant"
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                Tecnología de Alto Impacto
              </span>
            </div>
            <h2 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-xs">
              Nuestras <span className="text-primary">Operaciones</span>
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Vistazo rápido a la precisión técnica y el equipamiento de
              vanguardia que utilizamos en cada servicio.
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
              </div>
            </div>

            {[
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCa6cyYk3Tf0L3zqAaX3pYkXhiLqGjJyBsauq0WlAhUhBT2cybamNzFQhHk2G4RybayBhLKsmjEO0n3-IM9owKPyteZCOCDqTtWj7Bg6CCww48evlm6J9FiCcWhc9RLzu7R4JlPIm9S9qE3rDE96Hp3wEFneOq_okLRSkDCVTwtKBctFrzr_maxMhavOjV9701odSRrIfNae0KyWnyfWNcjoqFHBSEOhG3M2b4acwqipCnv6wfbS2n-7TOhtMqSL669NT24smP8OcY",
                label: "Inflado Precisión",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCno7QeiwUOpGIYyGJUYWn7pmD1uWJJPUilqdoA3JfQsGV-kbQZgsqpHF9IwubNvm9aEASBsf0eucIyv_Haa6fvljN00qiXGOC2z-kKaLAplqUSbbNVU2RcIojU-2bsmg_z02W6laCrRkKg5xfFbdjWwvJ9Lk0JjcugoPdEBZXQf-ZsOzU-DOCJ-eZW5cUFFcawqulE4XO480FFcaZDO8cypdhnsPaXZs28gVAHzOMhdV5JCaa95c0aS1pRQxAwmbgt4r9H7flRozg",
                label: "Alineación 3D",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6xqiWWzSu0ukHfL1lG1E5OnBwGRWNtXvPDA-mJAFKJ4w2WPO0TlpUV_MnpHep4r6Vk_-rIpZezOOcgSA7_fBZAfgQa-CegA2wM_Q6fUybQt0_tQThJNHnG2zFkZvDItpwWTqpkO3VVrSu73-FGh7cajCHiZk1FE8exnpft8gFZWD7aYO1fvh3nGklTMJxWSVFlW0iaIhq_YwaIc6YTX1qR9YizYqRZ7uT54rwPmUOU0ByGwX-vkkcsb2IbXD22KTCjz81AIwBqZk",
                label: "平衡ado Industrial",
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
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brand Slider */}
        <section className="bg-surface-container-highest py-6 overflow-hidden relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-surface-container-highest to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-surface-container-highest to-transparent z-10" />
          <div className="animate-marquee flex items-center gap-lg whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity">
            {[
              "Michelin",
              "Bridgestone",
              "Goodyear",
              "Continental",
              "Pirelli",
              "Firestone",
              "Yokohama",
              "Michelin",
              "Bridgestone",
              "Goodyear",
              "Continental",
              "Pirelli",
              "Firestone",
              "Yokohama",
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

        {/* Contact & Map */}
        <section className="py-xl px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-xl">
          <div className="space-y-4">
            <div className="inline-block border-l-2 border-primary pl-4">
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg uppercase mb-xs">
                Contacto Directo
              </h2>
              <p className="text-on-surface-variant">
                Estamos listos para optimizar el desempeño de tus vehículos.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: "location_on",
                  title: "Ubicación Central",
                  text: "Sector Industrial 7, Tech Park, Nave 45-B",
                },
                {
                  icon: "call",
                  title: "Línea Directa",
                  text: "01-800-GAMA-TYRES",
                },
                {
                  icon: "mail",
                  title: "Email Corporativo",
                  text: "ventas@llantasgama.com",
                },
                {
                  icon: "schedule",
                  title: "Horarios Operativos",
                  text: "Lunes a Viernes: 9am - 6pm | Sábados: 9am - 2pm",
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
          <div className="bg-surface-container-high min-h-[300px] lg:min-h-[500px] ghost-border overflow-hidden relative">
            <div className="absolute inset-0 z-0 bg-surface-container flex items-center justify-center">
              <div className="text-center p-4">
                <span className="material-symbols-outlined text-primary text-6xl mb-4">
                  map
                </span>
                <div className="text-on-surface-variant font-label-bold uppercase">
                  Mapa Interactivo
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
