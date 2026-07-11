import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AutoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative w-full min-h-[500px] lg:min-h-[716px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCD9czaz_dqHtWIMWWEOwZZFt3Iuo4W8XFW9S6sn6owQnOiFkk-Vuau_GNI-_ZCfH89I0i8z4fg9gMoyegbCYSX-GuEQSga3b1dJwdft0yj2WeUWpOMOlms3EtA7zqbZQvIxmdPZLER8s-bOr2StPonNZ4cSiMCrJ77F0DKsZuuRe2NTJWvXiXxLHl7CiAzg-FwwPc1dywy3mizA5QEpEsCul6VX75vyeVfcmdHUwo5NgldG7Z6LpkzZEln31Gtq9VKT9B5PSQqts')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary text-on-primary font-bold text-label-bold tracking-label-bold font-weight-label-bold mb-md tracking-widest">
                AUTO / CAMIONETA
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                LLANTAS PARA TU AUTO{" "}
                <span className="text-primary">DESDE $899</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant mb-lg">
                Marcas premium: Michelin, Bridgestone, Continental. Instalación
                profesional incluida. Cotiza en 2 minutos.
              </p>
              <div className="flex flex-wrap gap-lg pt-sm">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-label-sm text-on-surface-variant">Distribuidor Oficial Certificado</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                  <span className="text-label-sm text-on-surface-variant">Entrega en 24-48 hrs</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-md mt-md">
                <Link
                  href="/#contacto-auto"
                  className="bg-primary text-on-primary px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold primary-glow transition-all hover:scale-105 active:scale-95 text-center"
                >
                  Cotizar Mi Par de Llantas
                </Link>
                <a
                  href="https://wa.me/5218123456789?text=Hola%2C%20necesito%20llantas%20para%20mi%20auto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-border text-white px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:bg-surface-container transition-all text-center"
                >
                  Asesoría por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Catalog */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-lg gap-4">
              <div>
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg text-on-surface border-l-4 border-primary pl-4">
                  Marcas Premium
                </h2>
                <p className="text-label-sm text-on-surface-variant mt-2 pl-4">Distribuidor oficial certificado con garantía de fábrica</p>
              </div>
              <a
                href="/auto"
                className="text-primary font-label-bold hover:underline"
              >
                Ver todas las marcas →
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-gutter items-center grayscale opacity-60 hover:opacity-100 transition-opacity">
              {["MICHELIN", "BRIDGESTONE", "CONTINENTAL", "GOODYEAR", "PIRELLI", "HANKOOK"].map(
                (brand) => (
                  <div
                    key={brand}
                    className="h-20 flex items-center justify-center ghost-border bg-surface text-on-surface-variant font-bold text-lg cursor-pointer hover:border-primary hover:text-primary transition-all"
                  >
                    {brand}
                  </div>
                )
              )}
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
                <form className="grid grid-cols-1 sm:grid-cols-4 gap-gutter">
                  {[
                    { label: "Ancho", placeholder: "205" },
                    { label: "Perfil", placeholder: "55" },
                    { label: "Rin", placeholder: "R16" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                        {field.label}
                      </label>
                      <input
                        className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface mono-numbers"
                        placeholder={field.placeholder}
                        type="text"
                      />
                    </div>
                  ))}
                  <div className="flex items-end">
                    <button type="button" className="w-full bg-primary-container text-on-primary py-3 font-label-bold uppercase hover:brightness-110 transition-all">
                      Buscar en Stock
                    </button>
                  </div>
                </form>
                <p className="text-label-sm text-on-surface-variant mt-4">
                  ¿No encuentras tu medida? <a href="https://wa.me/5218123456789?text=Hola%2C%20necesito%20una%20medida%20espec%C3%ADfica" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Llámanos al 01-800-GAMA-99</a>
                </p>
              </div>
              <div className="md:col-span-4 bg-surface-container-high ghost-border p-lg">
                <h3 className="font-headline text-headline-md font-weight-headline-md mb-md">
                  Medidas Comunes
                </h3>
                <ul className="space-y-sm">
                  {["195 / 65 R15", "205 / 55 R16", "215 / 45 R17", "225 / 50 R17", "235 / 45 R18"].map(
                    (size) => (
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
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Service Cards */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-xl text-center">
              Servicios Especializados
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
              {[
                { icon: "straighten", title: "Alineación 3D", desc: "Desde $350", cta: "Agendar" },
                { icon: "balance", title: "Balanceo", desc: "Desde $200", cta: "Agendar" },
                { icon: "build_circle", title: "Parchado", desc: "Desde $150", cta: "Agendar" },
                { icon: "tire_repair", title: "Montaje", desc: "Incluido con compra", cta: "Cotizar" },
                { icon: "car_repair", title: "Suspensión", desc: "Checkup desde $500", cta: "Agendar" },
              ].map((service) => (
                <div
                  key={service.title}
                  className="group bg-surface ghost-border p-lg text-center hover:bg-primary-container transition-all duration-300 cursor-pointer"
                >
                  <div className="w-16 h-16 mx-auto mb-3 bg-surface-variant flex items-center justify-center rounded-full group-hover:bg-on-primary transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-primary-container text-4xl">
                      {service.icon}
                    </span>
                  </div>
                  <h4 className="font-headline text-[18px] group-hover:text-on-primary">
                    {service.title}
                  </h4>
                  <p className="text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant mt-1 group-hover:text-on-primary/70">
                    {service.desc}
                  </p>
                  <span className="inline-block mt-2 text-label-sm font-label-bold text-primary group-hover:text-on-primary uppercase">
                    {service.cta} →
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-label-sm text-on-surface-variant mt-6">
              Pack Seguridad: Alineación + Balanceo + Parchado = <span className="text-primary font-bold">$899</span> | Ahorra 20%
            </p>
          </div>
        </section>

        {/* Contact & Lead Gen */}
        <section id="contacto-auto" className="py-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div>
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-md">
                  Cotiza en 2 Minutos
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-lg">
                  Completa el formulario y te llamamos en menos de 10 minutos
                  con precio especial. Sin compromiso.
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
                      <p className="text-headline-md font-weight-headline-md mono-numbers">
                        01-800-GAMA-99
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 ghost-border bg-surface-container-high">
                    <span className="material-symbols-outlined text-primary text-3xl">
                      chat
                    </span>
                    <div>
                      <p className="text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase">
                        WhatsApp 24/7
                      </p>
                      <p className="text-headline-md font-weight-headline-md mono-numbers">
                        +52 1 81 2345 6789
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container p-lg ghost-border header-strip shadow-2xl">
                <form className="space-y-sm">
                  <div>
                    <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                      Nombre Completo
                    </label>
                    <input
                      className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface"
                      placeholder="Ej. Juan Pérez"
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
                      Servicio de interés
                    </label>
                    <select className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface">
                      <option>Cotización de llantas nuevas</option>
                      <option>Llantas usadas</option>
                      <option>Alineación y balanceo</option>
                      <option>Pack Seguridad ($899)</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary-container text-on-primary py-4 font-label-bold uppercase tracking-widest hover:glow-active transition-all">
                    Recibir Cotización Gratis
                  </button>
                  <p className="text-label-sm text-on-surface-variant text-center">
                    Te llamamos en &lt;10 minutos | 10% dto. si no respondemos
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
