import Link from "next/link";
import { buildWhatsAppUrl } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">
        <div className="space-y-4">
          <img
            src="/images/logo/logo-light-bg.jpeg"
            alt="Llantas Gama"
            className="h-20 sm:h-16 w-auto"
            width={160}
            height={66}
          />
          <p className="text-on-surface text-body-md">
            Ingeniería de precisión y rendimiento para la industria moderna. 15 años de experiencia.
          </p>
          <div className="flex gap-3 pt-2">
            <a
              href="https://facebook.com/llantasgama"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-container flex items-center justify-center hover:text-primary transition-colors border border-outline-variant"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a
              href={buildWhatsAppUrl("Hola, me interesa una cotización de llantas")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-surface-container flex items-center justify-center hover:text-primary transition-colors border border-outline-variant"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-label-bold uppercase text-primary tracking-widest">
            Contacto
          </h4>
          <ul className="space-y-2 text-on-surface-variant text-body-md">
            <li>Av Universidad 494, El Recreo</li>
            <li>86020 Villahermosa, Tab.</li>
            <li>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_TEL || "9933987711"}`} className="hover:text-primary transition-colors">
                Tel/WhatsApp: {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "993 398 7711"}
              </a>
            </li>
            <li>Lun-Vie 8:30-17:30 · Sáb 8:30-13:30</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-label-bold uppercase text-primary tracking-widest">
            Enlaces
          </h4>
          <ul className="space-y-2">
            <li>
              <Link
                href="/auto"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Auto/Camioneta
              </Link>
            </li>
            <li>
              <Link
                href="/camion"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Camión
              </Link>
            </li>
            <li>
              <Link
                href="/agricola"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Agrícola
              </Link>
            </li>
            <li>
              <Link
                href="/industrial"
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                Industrial
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-label-bold uppercase text-primary tracking-widest">
            Newsletter
          </h4>
          <p className="text-on-surface-variant text-label-sm">
            Ofertas exclusivas y tips técnicos directo a tu WhatsApp.
          </p>
          <a
            href={buildWhatsAppUrl("Hola, quiero suscribirme al newsletter de ofertas y tips técnicos")}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Suscribirse al newsletter por WhatsApp"
            className="flex items-center justify-center gap-2 bg-primary-container text-on-primary px-4 py-3 hover:brightness-110 transition-all text-label-sm font-label-bold uppercase"
          >
            <span className="material-symbols-outlined text-[18px]">
              chat
            </span>
            Suscribirme
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-sm border-t border-outline-variant/30 text-center md:text-left">
        <p className="text-on-surface-variant text-label-sm">
          &copy; {new Date().getFullYear()} Llantas Gama. Todos los derechos
          reservados. Precision Performance Engineering.
        </p>
      </div>
    </footer>
  );
}
