import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
                SOLUCIONES DE ALTO RENDIMIENTO PARA{" "}
                <span className="text-primary">FLOTILLAS</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant mb-lg">
                Maximizamos la rentabilidad de su transporte con llantas de
                ingeniería superior y asistencia técnica especializada 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-md">
                <button className="bg-primary text-on-primary px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold primary-glow transition-all hover:scale-105 active:scale-95">
                  Explorar Catálogo
                </button>
                <button className="ghost-border text-white px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:bg-surface-container transition-all">
                  Asesoría Técnica
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid - Tire Types */}
        <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
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
                icon: "distance",
                title: "Long Haul",
                desc: "Máxima eficiencia de combustible para trayectos de larga distancia en autopista.",
                tag: "ALTA DURABILIDAD",
              },
              {
                icon: "local_shipping",
                title: "Regional",
                desc: "Versatilidad para paradas frecuentes y diversos tipos de pavimentos urbanos.",
                tag: "TRACCIÓN SUPERIOR",
                active: true,
              },
              {
                icon: "construction",
                title: "Servicio Mixto",
                desc: "Resistencia extrema para aplicaciones dentro y fuera de carretera (On/Off Road).",
                tag: "CARGA PESADA",
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
                <div className="flex items-center justify-between">
                  <span className="font-label-bold text-primary">
                    {seg.tag}
                  </span>
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands Ticker */}
        <section className="py-sm bg-surface-container-lowest border-y border-outline-variant overflow-hidden">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop flex items-center gap-lg opacity-60">
            <span className="whitespace-nowrap font-label-bold uppercase text-on-surface-variant">
              Marcas Premium:
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
                    Entendemos que un camión detenido es pérdida de dinero. Nuestro
                    programa de mantenimiento predictivo reduce costos operativos
                    hasta un 15%.
                  </p>
                </div>
                <div className="space-y-md">
                  {[
                    {
                      title: "Capacidad de Carga Optimizada",
                      desc: "Análisis técnico de distribución de peso y presión (PSI) monospaced: 120 PSI MAX",
                    },
                    {
                      title: "Servicio en Carretera Nacional",
                      desc: "Red de cobertura en las principales arterias logísticas del país.",
                    },
                    {
                      title: "Gestión de Cascos y Renovado",
                      desc: "Maximizamos la vida útil de cada neumático mediante procesos de renovado certificados.",
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
                    <span className="mono-numbers text-primary">94%</span>
                  </div>
                  <div className="w-full h-2 bg-secondary-container">
                    <div
                      className="h-full bg-primary glow-active"
                      style={{ width: "94%" }}
                    />
                  </div>
                </div>
              </div>
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
                montaje.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuATQ3xnNcTRAMk1WRA80bARpCusQIcV8pcer8SnBLnlcdZs7UQ5kGX9felvD_qAF3r79HzDA0k_Qw3LfEF2fuDNt7jT7oqd1XcbjGSRgzeUdNFJUKzoferV3ZKaJmK3HIWSdf_Ymm_XpV1hBxOxIdbWeFni3_8GaaDyiEkUV_sb5FImD59OwTZXUj8qDRHrPyK3S2QvyMn8pJqZqd8tBvsywxnz9tRunrDQw2n9lVJS9mtnx48okCzOavAhIbt-pELewlu7eEgmqPU",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Udt5yzb7x1qCr2LLANWrlyJSZ7W00-L4PawjjQXC6x-Qg5DbujMiWTpniwXYQVVL2kuxTmvg56KBbXGW95E4JocXngUR3vw2cpDQtMF4ENuHAO8UutiquX7YP6GjENrSEgbHXvceFn5jbNozoW3a0jter8wn-GkWe4bEdkIADClcT6K6REhICJiYz6V5o3Q6yuFStdIjCvNpXy-uz0U9EXioR05wQoY9D9YQQwybbACYGqieTAmM2kDWjr8wE3KshaW8BYtSUSI",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBhyHi9KYeIGeX5QHLu290ewGIQz7nTgJv-Kh2QWXsiAjdLHPRLdujomKPkgEyl3duSxS3Ys0ojGLAPb_dF4TmpquwxiCGhNS8utBoJ_il180CVRJqAGHJPm5ud-rAEM9ysdWS41xKuoQDp3_8jHBSY1XW4JXcRfO9hCdtMoj_kC-yCFAVQp1cjuCSzVFVRUpVdRvoNZ0v82cbf4QVZE5J3bbuYxpj8UprhI9Ncm5lzH13TGdfCFR4synuYIXfJXJJoO3FZJUKLguU",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDK2meZBOs191QEFmmIwUKdJldhaaa1zsVeRmUrqc7K8d_7MW4P3wq-xu4RTQeWsVi7Pd94cCiOTy_uCmDGHF55Gg-rUOHsriD7SbGOgmIjZ8fqvTNfkVeY4bqDcqWWXvo96tAT5NQhhHeoQNoPJLfZGZuUBOsAm5ihBEOhVgz3kwBTFfoaMsSxgLB58-Z_yUDunmTt8c0SRJn3s57ID_UqH8iIIFo4zDDxWglEzjKZixuFoknqJvrer5v5f1rhsOionB_0KJ_6uaU",
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square bg-cover bg-center ghost-border grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ backgroundImage: `url('${src}')` }}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Coverage */}
        <section className="py-xl max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-xl">
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
              <div className="w-full h-full bg-surface-container flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#a7d64a_1px,_transparent_1px)] bg-[length:24px_24px]" />
                <div className="relative text-center z-10">
                  <span className="material-symbols-outlined text-primary text-[64px] mb-4">
                    map
                  </span>
                  <p className="font-label-bold uppercase">
                    Mapa Interactivo de Red
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-surface-container p-lg ghost-border relative">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <span className="material-symbols-outlined text-[120px]">
                  request_quote
                </span>
              </div>
              <h3 className="font-headline text-headline-md font-weight-headline-md mb-lg">
                SOLICITE UNA COTIZACIÓN CORPORATIVA
              </h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-md relative z-10">
                {[
                  { label: "Nombre de la Empresa", type: "text" },
                  { label: "Correo Electrónico", type: "email" },
                ].map((field) => (
                  <div key={field.label} className="space-y-xs">
                    <label className="font-label-bold text-label-sm font-weight-label-sm uppercase opacity-70">
                      {field.label}
                    </label>
                    <input
                      className="w-full bg-background border border-outline p-3 text-on-surface focus:border-primary focus:ring-0 outline-none transition-colors"
                      type={field.type}
                    />
                  </div>
                ))}
                <div className="space-y-xs">
                  <label className="font-label-bold text-label-sm font-weight-label-sm uppercase opacity-70">
                    Tamaño de Flotilla
                  </label>
                  <select className="w-full bg-background border border-outline p-3 text-on-surface focus:border-primary focus:ring-0 outline-none transition-colors">
                    <option>1-10 Unidades</option>
                    <option>11-50 Unidades</option>
                    <option>50+ Unidades</option>
                  </select>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-bold text-label-sm font-weight-label-sm uppercase opacity-70">
                    Tipo de Aplicación
                  </label>
                  <select className="w-full bg-background border border-outline p-3 text-on-surface focus:border-primary focus:ring-0 outline-none transition-colors">
                    <option>Larga Distancia</option>
                    <option>Reparto Regional</option>
                    <option>Construcción / Minería</option>
                  </select>
                </div>
                <div className="md:col-span-2 space-y-xs">
                  <label className="font-label-bold text-label-sm font-weight-label-sm uppercase opacity-70">
                    Mensaje / Requerimientos Especiales
                  </label>
                  <textarea
                    className="w-full bg-background border border-outline p-3 text-on-surface focus:border-primary focus:ring-0 outline-none transition-colors"
                    rows={4}
                  />
                </div>
                <div className="md:col-span-2">
                  <button
                    className="w-full bg-primary-container text-on-primary py-4 font-label-bold text-label-bold tracking-label-bold font-weight-label-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all"
                    type="submit"
                  >
                    Enviar Solicitud de Servicio
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
