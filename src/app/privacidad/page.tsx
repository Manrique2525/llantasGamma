import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Aviso de Privacidad",
  description:
    "Aviso de Privacidad de Llantas Gama. Conoce cómo tratamos tus datos personales.",
  alternates: {
    canonical: "https://llantasgama.com/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <section className="py-xl max-w-3xl mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-headline text-[28px] md:text-[36px] lg:text-headline-xl tracking-headline-xl font-weight-headline-xl text-on-surface uppercase mb-md">
            Aviso de <span className="text-primary">Privacidad</span>
          </h1>
          <p className="text-label-sm text-on-surface-variant mb-xl">
            Última actualización: Julio 2026
          </p>

          <div className="space-y-lg text-body-md text-on-surface leading-relaxed">
            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                1. Responsable
              </h2>
              <p>
                Llantas Gama (en adelante, "el Responsable"), con domicilio en
                Av Universidad 494, El Recreo, 86029 Villahermosa, Tabasco,
                México, es el responsable del tratamiento de sus datos
                personales.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                2. Datos que recolectamos
              </h2>
              <p>
                A través de nuestros formularios de contacto y cotización,
                recolectamos los siguientes datos personales:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Nombre completo</li>
                <li>Teléfono / WhatsApp</li>
                <li>Correo electrónico</li>
                <li>Empresa (opcional)</li>
                <li>Mensaje o descripción de su solicitud</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                3. Finalidad del tratamiento
              </h2>
              <p>Sus datos serán utilizados para:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Proporcionar cotizaciones de llantas y servicios</li>
                <li>Contactarlo vía WhatsApp o telefónica para dar seguimiento a su solicitud</li>
                <li>Brindar asesoría técnica especializada</li>
                <li>Dar cumplimiento a obligaciones derivadas de la relación comercial</li>
              </ul>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                4. Transferencia de datos
              </h2>
              <p>
                Sus datos personales pueden ser transferidos a{" "}
                <strong className="text-primary">WhatsApp LLC (Meta Platforms, Inc.)</strong>{" "}
                al momento de enviar el formulario de contacto, con la finalidad
                de establecer comunicación directa. Al aceptar este aviso, usted
                consiente dicha transferencia.
              </p>
              <p className="mt-2">
                No compartimos sus datos con terceros no relacionados sin su
                consentimiento expreso, salvo obligación legal.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                5. Derechos ARCO
              </h2>
              <p>
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Acceso</strong> — Conocer qué datos tenemos de usted</li>
                <li><strong>Rectificación</strong> — Corregir datos inexactos</li>
                <li><strong>Cancelación</strong> — Solicitar la eliminación de sus datos</li>
                <li><strong>Oposición</strong> — Oponerse al tratamiento de sus datos</li>
              </ul>
              <p className="mt-2">
                Para ejercer sus derechos ARCO, envíe su solicitud a:{" "}
                <a href="mailto:ventas@llantasgama.com" className="text-primary hover:underline">
                  ventas@llantasgama.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                6. Uso de cookies
              </h2>
              <p>
                Este sitio utiliza cookies técnicas necesarias para su
                funcionamiento. No utilizamos cookies de rastreo o publicitarias
                sin su consentimiento. Puede aceptar o rechazar las cookies
                mediante el banner disponible en la página.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                7. Cambios al aviso de privacidad
              </h2>
              <p>
                Nos reservamos el derecho de modificar este aviso en cualquier
                momento. Las modificaciones serán publicadas en esta misma
                página. Le recomendamos revisar periódicamente esta sección.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
