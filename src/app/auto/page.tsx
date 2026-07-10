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
                DOMINA EL ASFALTO CON{" "}
                <span className="text-primary">PRECISIÓN</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant mb-lg">
                Ingeniería de clase mundial para tu vehículo personal. Seguridad,
                durabilidad y confort diseñados para cada kilómetro de tu
                trayecto.
              </p>
              <div className="flex flex-col sm:flex-row gap-md">
                <button className="bg-primary text-on-primary px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold primary-glow transition-all hover:scale-105 active:scale-95">
                  Ver Catálogo
                </button>
                <button className="ghost-border text-white px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:bg-surface-container transition-all">
                  Asesoría Técnica
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Catalog */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex justify-between items-end mb-lg">
              <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg text-on-surface border-l-4 border-primary pl-4">
                Marcas Premium
              </h2>
              <a
                href="#"
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
                    className="h-20 flex items-center justify-center ghost-border bg-surface text-on-surface-variant font-bold text-lg"
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
                    <button className="w-full bg-primary-container text-on-primary py-3 font-label-bold uppercase">
                      Buscar
                    </button>
                  </div>
                </form>
              </div>
              <div className="md:col-span-4 bg-surface-container-high ghost-border p-lg">
                <h3 className="font-headline text-headline-md font-weight-headline-md mb-md">
                  Medidas comunes
                </h3>
                <ul className="space-y-sm">
                  {["195 / 65 R15", "205 / 55 R16", "215 / 45 R17"].map(
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
                { icon: "straighten", title: "Alineación 3D", desc: "Precisión láser milimétrica" },
                { icon: "balance", title: "Balanceo", desc: "Conducción suave y segura" },
                { icon: "build_circle", title: "Parchado", desc: "Reparación profesional" },
                { icon: "tire_repair", title: "Montaje", desc: "Instalación certificada" },
                { icon: "car_repair", title: "Suspensión", desc: "Checkup integral de seguridad" },
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Lead Gen */}
        <section className="py-xl">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
              <div>
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg mb-md">
                  Agenda tu Servicio
                </h2>
                <p className="text-body-lg text-on-surface-variant mb-lg">
                  Nuestros especialistas están listos para asesorarte. Recibe una
                  cotización personalizada en menos de 10 minutos.
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
                        01-800-GAMA
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
                        +52 1 234 567 89
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
                    />
                  </div>
                  <div>
                    <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                      Servicio de interés
                    </label>
                    <select className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface">
                      <option>Llantas Nuevas</option>
                      <option>Llantas Usadas</option>
                      <option>Alineación y Balanceo</option>
                      <option>Mantenimiento General</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary-container text-on-primary py-4 font-label-bold uppercase tracking-widest hover:glow-active transition-all">
                    Enviar Solicitud
                  </button>
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
