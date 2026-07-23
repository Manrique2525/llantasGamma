"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/auto", label: "Auto/Camioneta" },
  { href: "/camion", label: "Camión" },
  { href: "/agricola", label: "Agrícola" },
  { href: "/industrial", label: "Industrial" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav aria-label="Navegación principal" className="sticky top-0 z-50 bg-background border-b border-outline-variant">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 mx-auto max-w-7xl">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Llantas Gama - Inicio"
        >
          <img
            src="/images/logo/logo-light-bg.jpeg"
            alt="Llantas Gama"
            className="h-10 w-auto"
            width={160}
            height={66}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-gutter">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-body-md transition-colors ${
                pathname === link.href
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-sm">
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711"}?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20llantas`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border border-outline px-4 py-2 text-label-bold font-label-bold hover:bg-surface-variant transition-all active:scale-95"
          >
            WhatsApp
          </a>
          <Link
            href="/#contacto"
            className="bg-primary-container text-on-primary px-6 py-2 text-label-bold font-label-bold uppercase tracking-wider active:scale-95 transition-all text-center"
          >
            Cotizar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-on-surface p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
          aria-expanded={mobileOpen}
        >
          <span className="material-symbols-outlined text-[28px]">
            {mobileOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-margin-mobile pb-4 space-y-1 border-t border-outline-variant">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 font-body text-body-md transition-colors border-b border-outline-variant/50 ${
                pathname === link.href
                  ? "text-primary font-bold"
                  : "text-on-surface hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-sm pt-3">
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711"}?text=Hola%2C%20me%20interesa%20una%20cotizaci%C3%B3n%20de%20llantas`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-transparent border border-outline px-4 py-3 text-label-bold font-label-bold hover:bg-surface-variant transition-all"
            >
              WhatsApp
            </a>
            <Link
              href="/#contacto"
              className="flex-1 bg-primary-container text-on-primary px-4 py-3 text-label-bold font-label-bold uppercase tracking-wider transition-all text-center"
            >
              Cotizar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
