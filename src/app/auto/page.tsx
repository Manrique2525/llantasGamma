import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Llantas para Auto y Camioneta",
  description:
    "Llantas Michelin, Bridgestone, Continental desde $899. Instalación profesional incluida. Cotiza en 2 minutos. Entrega en 24-48 hrs.",
};

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
                Marcas premium: Michelin, Bridgestone, Continental.{" "}
                <strong className="text-on-surface">
                  Instalación profesional incluida.
                </strong>{" "}
                Cotiza en 2 minutos.
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
                    Distribuidor Oficial Certificado
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
                    Entrega en 24-48 hrs
                  </span>
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
                <p className="text-label-sm text-on-surface-variant mt-2 pl-4">
                  Distribuidor oficial certificado con garantía de fábrica
                </p>
              </div>
            </div>
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
                    <button
                      type="button"
                      className="w-full bg-primary-container text-on-primary py-3 font-label-bold uppercase hover:brightness-110 transition-all"
                    >
                      Buscar en Stock
                    </button>
                  </div>
                </form>
                <p className="text-label-sm text-on-surface-variant mt-4">
                  ¿No encuentras tu medida?{" "}
                  <a
                    href="https://wa.me/5218123456789?text=Hola%2C%20necesito%20una%20medida%20espec%C3%ADfica"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Llámanos al 01-800-GAMA-99
                  </a>
                </p>
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

        {/* Service Cards */}
        <section className="py-xl bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop">
            <SectionHeader
              badge="Servicios"
              badgeIcon="build"
              title="Servicios"
              titleHighlight="Especializados"
              subtitle="Pack de seguridad: Alineación + Balanceo + Parchado = $899 (ahorra 20%)"
              align="center"
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
              <ServiceCard
                icon="straighten"
                title="Alineación 3D"
                price="Desde $350"
              />
              <ServiceCard
                icon="balance"
                title="Balanceo"
                price="Desde $200"
              />
              <ServiceCard
                icon="build_circle"
                title="Parchado"
                price="Desde $150"
              />
              <ServiceCard
                icon="tire_repair"
                title="Montaje"
                price="Incluido con compra"
                cta="Cotizar"
              />
              <ServiceCard
                icon="car_repair"
                title="Suspensión"
                price="Checkup desde $500"
              />
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
                    Garantía de Fábrica
                  </h3>
                  <p className="text-on-surface-variant text-body-md mt-1">
                    Todos nuestros productos cuentan con garantía directa del
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
                    Técnicos Certificados
                  </h3>
                  <p className="text-on-surface-variant text-body-md mt-1">
                    Nuestro equipo está certificado por las marcas que
                    distribuimos.
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
                    Entrega en 24-48h
                  </h3>
                  <p className="text-on-surface-variant text-body-md mt-1">
                    Stock permanente de las medidas más demandadas en nuestra
                    bodega.
                  </p>
                </div>
              </div>
            </div>
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
                  con precio especial.{" "}
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
              <ContactForm segment="auto" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
