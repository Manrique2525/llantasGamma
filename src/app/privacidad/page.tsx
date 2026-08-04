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
            Última actualización: agosto de 2026
          </p>

          <div className="space-y-lg text-body-md text-on-surface leading-relaxed">
            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                1. Identidad y Domicilio del Responsable
              </h2>
              <p>
                LLANTEROS GAMA VAZQUEZ (en adelante, &ldquo;GAMA&rdquo;), con domicilio en
                Avenida Universidad 494, Col. El Recreo, C.P. 86020, Villahermosa,
                Tabasco, es el responsable del tratamiento de sus datos
                personales.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                2. Datos Personales Sometidos a Tratamiento
              </h2>
              <p>
                Para las finalidades establecidas en este aviso, GAMA recabará
                las siguientes categorías de datos:
              </p>
              <p className="mt-2">
                <strong className="text-primary">Datos de Identificación y Contacto:</strong>{" "}
                Nombre, identificación oficial, RFC, comprobante de domicilio y
                correos electrónicos.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                3. Finalidades del Tratamiento
              </h2>
              <p>
                La información recabada será utilizada para las siguientes
                finalidades necesarias para la relación jurídica:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Gestión Comercial:</strong> Suministro de productos (llantas y refacciones) y prestación de servicios de mantenimiento.</li>
                <li><strong>Seguridad Operativa:</strong> Identificación de personal autorizado para la solicitud y recepción de mercancías.</li>
              </ul>
              <p className="mt-2">
                <strong className="text-primary">Finalidades secundarias:</strong>{" "}
                Envío de promociones o actualizaciones técnicas sobre nuestros
                servicios.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                4. Transferencia de Datos
              </h2>
              <p>
                GAMA podrá transferir sus datos personales a terceros nacionales
                o extranjeros en los siguientes supuestos:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Autoridades competentes para el cumplimiento de obligaciones legales.</li>
                <li>Instituciones bancarias para la gestión de pagos.</li>
                <li>Despachos jurídicos y agencias de cobranza para la recuperación de cartera vencida.</li>
                <li>Burós o sociedades de información crediticia para la validación de perfiles de riesgo.</li>
              </ul>
              <p className="mt-2">
                Adicionalmente, al enviar nuestros formularios web, sus datos
                son transferidos a{" "}
                <strong className="text-primary">WhatsApp LLC (Meta Platforms, Inc.)</strong>{" "}
                para establecer comunicación directa con usted.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                5. Derechos ARCO
              </h2>
              <p>
                Usted tiene derecho a conocer qué datos tenemos de su persona
                (<strong>Acceso</strong>), solicitar su corrección (
                <strong>Rectificación</strong>), pedir que los eliminemos de
                nuestros registros (<strong>Cancelación</strong>) u oponerse al
                uso de los mismos para fines específicos (
                <strong>Oposición</strong>).
              </p>
              <p className="mt-2">
                Para ejercer estos derechos, puede enviar una solicitud por
                escrito al correo electrónico{" "}
                <a
                  href="mailto:grupollanterogama@gmail.com"
                  className="text-primary hover:underline"
                >
                  grupollanterogama@gmail.com
                </a>{" "}
                o directamente en nuestras oficinas.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                6. Mecanismos de Seguridad
              </h2>
              <p>
                GAMA implementa medidas de seguridad técnicas, administrativas y
                físicas para proteger su información contra daño, pérdida,
                alteración o uso no autorizado, garantizando que el acceso a los
                datos patrimoniales esté limitado exclusivamente al personal
                encargado de la gestión de riesgos y dirección general.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                7. Cambios al Aviso de Privacidad
              </h2>
              <p>
                Cualquier modificación a este aviso le será comunicada a través
                de nuestro correo electrónico.
              </p>
            </div>

            <div>
              <h2 className="font-headline text-headline-md font-weight-headline-md mb-sm">
                8. Uso de cookies
              </h2>
              <p>
                Este sitio utiliza cookies técnicas necesarias para su
                funcionamiento. No utilizamos cookies de rastreo o publicitarias
                sin su consentimiento. Puede aceptar o rechazar las cookies
                mediante el banner disponible en la página.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
