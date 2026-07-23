import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">
        <div className="space-y-4">
          <img
            src="/images/logo/logo-light-bg.jpeg"
            alt="Llantas Gama"
            className="h-12 w-auto"
            width={160}
            height={66}
          />
          <p className="text-on-surface-variant text-body-md">
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
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "ventas@llantasgama.com"}`}
              className="w-10 h-10 bg-surface-container flex items-center justify-center hover:text-primary transition-colors border border-outline-variant"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711"}`}
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
            <li>86029 Villahermosa, Tab.</li>
            <li>
              <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_TEL || "01800426299"}`} className="hover:text-primary transition-colors">
                Tel: {process.env.NEXT_PUBLIC_PHONE_DISPLAY || "01-800-GAMA-99"}
              </a>
            </li>
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
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711"}?text=${encodeURIComponent("Hola, quiero suscribirme al newsletter de ofertas y tips técnicos")}`}
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
