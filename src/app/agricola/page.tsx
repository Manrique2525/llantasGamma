import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AgricolaPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative min-h-[500px] lg:min-h-[819px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center opacity-40"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCybZWgBjltZfyt0_RAbFXcslf4sqmW9V_U1Hbi_AF8ISZKfYnzdoqQCFEakr3LpUAsfp4kZBsY-NPz9--k6S8dB6dpnByiz0TnEHJa-n3ghmvQHL_z-CvMUGobTRfCSoiH4Ktu24YUupKSQczDFDbZUotMR3Ai5OuumLB1ncBt_12LuiH8yCHB3ZhcuF-fIBTx-tp07tQpf_uJLZ6oLYCRoAzIrbSNTY8guh4Pf7as5BWS5GCW0c6OcivqxKuTT299t2_TPMgo-08')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop w-full py-xl">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-primary text-on-primary font-bold text-label-bold tracking-label-bold font-weight-label-bold mb-md tracking-widest">
                AGRÍCOLA PROFESIONAL
              </div>
              <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-white mb-md leading-tight">
                PRECISIÓN EN <span className="text-primary">CADA SURCO.</span>
              </h1>
              <p className="font-body text-body-lg text-on-surface-variant mb-lg">
                Equipamos el motor de la industria alimentaria con tecnología de
                neumáticos diseñada para máxima tracción y mínima compactación
                de suelo.
              </p>
              <div className="flex flex-col sm:flex-row gap-md">
                <button className="bg-primary text-on-primary px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold primary-glow transition-all hover:scale-105 active:scale-95">
                  Ver Catálogo
                </button>
                <button className="ghost-border text-white px-xl py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold hover:bg-surface-container transition-all">
                  Servicio en Campo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery Bento Grid */}
        <section className="py-xl bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-end mb-xl gap-4">
              <div>
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg text-white">
                  Especialización por{" "}
                  <span className="text-primary">Maquinaria</span>
                </h2>
                <p className="text-on-surface-variant max-w-md mt-2">
                  Soluciones específicas para cada etapa del ciclo agrícola.
                </p>
              </div>
              <span className="mono-numbers text-primary text-label-sm font-weight-label-sm tracking-tighter">
                SEC_TYPE_AG_04
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
              <div className="md:col-span-2 group relative overflow-hidden h-80 ghost-border header-strip">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCHJwV7Kb1mllKxXzNY7SB27WtySxgX2gLSoyqGHbXLWa0oAMybe0sFrYwIBiz_PAdxyltMFHbjvfTgnTPQEqrBo-Cc_GUOCnLDmam02gqJ0wLONeogMOGpV_ud5J54Qf2au4Sfw5A7K3h0rWPw7uBwXofjdMowYUH69am_lwGOnQeY8v32p-JiZwN5AEon96L9YyEPeYT1qPnirc6zIHmd1_F2WMAoDGAhSup6IcrG7UIHATLG1leurn5-hn8JewSKYo_lrOlvvUo')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-lg">
                  <h3 className="font-headline text-headline-md font-weight-headline-md text-white mb-1">
                    Tractores
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    Tracción extrema para laboreo pesado.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden h-80 ghost-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD4PYj2qa-xD1b4Tl69BwN-8bWnxN4DUf_ApAsfPAcu_3X22M3tVSkiPkF1b2AVO21RpD-AKT3qSpjK4aSWdqPdERf0itnYMIxh1Lvyrol6Qg3MTtBz4B45DPmIoQqFFjYO4XKQywABqqVdQLcOin3ITzpHuuz1NpoMBfoX27b1YShG8_vKlY_CjpFhNgXkWtO1CAd9LrfhdRX5teXKy-xAZVMKkCdfUp2tDt0TtAgRIixhzuABhZwqWLNuJGl2nRhZkYF8rjvVfh4')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-lg">
                  <h3 className="font-headline text-headline-md font-weight-headline-md text-white mb-1">
                    Cosechadoras
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    Flotación avanzada.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden h-80 ghost-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAplBBvNOID77hI_yLpYrMcJyfvnZWCRkGtB1O-hNS25xm79fNQFRX2WB7T7WPbdCtdhLZ1UcGVkQEn71hfFLsT52jjvIgAUACf-ztGg4y2571XiSsKS_yX-b-KzmMStfyxlGnXTlEgu4yaNtZLfFXLxp-IWuBKLtZY1Ddz77JhunL0xMk4T5roOhK1ZlJH7cXonb9B1ne_dPjaEaTHuEHcBseTBnzuNn7MCPuknDDCsaXawuBCXJObDIK5d2yQJiHKcyz3YLUAJU0')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-lg">
                  <h3 className="font-headline text-headline-md font-weight-headline-md text-white mb-1">
                    Pulverizadoras
                  </h3>
                  <p className="text-on-surface-variant text-body-md">
                    Precisión entre surcos.
                  </p>
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
                <p className="text-on-surface-variant mb-lg">
                  Distribuimos las marcas líderes a nivel mundial, garantizando
                  medidas para cualquier aplicación.
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
                    { label: "Ancho de Sección", options: ["420 mm", "520 mm", "650 mm"] },
                    { label: "Relación de Aspecto", options: ["85", "70", "65"] },
                    { label: "Diámetro de Rin", options: ["R24", "R30", "R38", "R42"] },
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
                <div className="mt-xl pt-xl border-t border-outline-variant">
                  <div className="flex items-center gap-lg">
                    <div className="text-center">
                      <div className="text-primary font-bold text-headline-md font-weight-headline-md mono-numbers">
                        250+
                      </div>
                      <div className="text-label-sm font-weight-label-sm text-on-surface-variant uppercase">
                        SKUs Agrícolas
                      </div>
                    </div>
                    <div className="w-px h-10 bg-outline-variant" />
                    <div className="text-center">
                      <div className="text-primary font-bold text-headline-md font-weight-headline-md mono-numbers">
                        24H
                      </div>
                      <div className="text-label-sm font-weight-label-sm text-on-surface-variant uppercase">
                        Entrega Local
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-xl bg-surface-container-high ghost-border p-lg md:p-xl">
              <div>
                <h2 className="font-headline text-[22px] md:text-[26px] lg:text-headline-lg tracking-headline-lg font-weight-headline-lg text-white mb-md">
                  Hable con un{" "}
                  <span className="text-primary">Especialista</span>
                </h2>
                <p className="text-on-surface-variant mb-lg">
                  Nuestro equipo técnico está listo para asesorarlo sobre la
                  mejor configuración de neumáticos para su flota.
                </p>
                <div className="space-y-sm">
                  {[
                    { icon: "location_on", title: "Centro de Distribución Regional", text: "Sector Industrial Norte, Nave 42. CDMX." },
                    { icon: "call", title: "Línea Directa Agrícola", text: "01-800-GAMA-AGRO" },
                    { icon: "mail", title: "Consultas Técnicas", text: "agro@llantasgama.com" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 ghost-border">
                        <span className="material-symbols-outlined text-primary">
                          {item.icon}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{item.title}</h4>
                        <p className="text-on-surface-variant">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <form className="space-y-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                  <div>
                    <label className="text-label-sm font-weight-label-sm text-on-surface-variant block mb-2 uppercase">
                      Nombre Completo
                    </label>
                    <input
                      className="w-full bg-surface border border-outline-variant text-white py-3 px-4 focus:border-primary focus:ring-0"
                      placeholder="Juan Pérez"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-label-sm font-weight-label-sm text-on-surface-variant block mb-2 uppercase">
                      Empresa / Rancho
                    </label>
                    <input
                      className="w-full bg-surface border border-outline-variant text-white py-3 px-4 focus:border-primary focus:ring-0"
                      placeholder="Agropecuaria del Norte"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-label-sm font-weight-label-sm text-on-surface-variant block mb-2 uppercase">
                    Correo Electrónico
                  </label>
                  <input
                    className="w-full bg-surface border border-outline-variant text-white py-3 px-4 focus:border-primary focus:ring-0"
                    placeholder="juan@ejemplo.com"
                    type="email"
                  />
                </div>
                <div>
                  <label className="text-label-sm font-weight-label-sm text-on-surface-variant block mb-2 uppercase">
                    Asunto
                  </label>
                  <select className="w-full bg-surface border border-outline-variant text-white py-3 px-4 focus:border-primary focus:ring-0">
                    <option>Cotización de Llantas</option>
                    <option>Solicitud de Servicio en Campo</option>
                    <option>Asesoría Técnica de Suelo</option>
                  </select>
                </div>
                <div>
                  <label className="text-label-sm font-weight-label-sm text-on-surface-variant block mb-2 uppercase">
                    Mensaje
                  </label>
                  <textarea
                    className="w-full bg-surface border border-outline-variant text-white py-3 px-4 focus:border-primary focus:ring-0"
                    placeholder="Describa su necesidad técnica..."
                    rows={4}
                  />
                </div>
                <button className="w-full bg-primary text-on-primary py-4 font-bold uppercase text-label-bold tracking-label-bold font-weight-label-bold primary-glow transition-all hover:scale-[1.02] active:scale-[0.98]">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
