"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function ExitPopup() {
  const [show, setShow] = useState(false);
  const dismissedRef = useRef(false);

  const handleDismiss = useCallback(() => {
    setShow(false);
    dismissedRef.current = true;
    sessionStorage.setItem("exit-popup-seen", "true");
  }, []);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (!dismissedRef.current && e.clientY <= 0) {
      setShow(true);
    }
  }, []);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("exit-popup-seen");
    if (hasSeen) {
      dismissedRef.current = true;
      return;
    }
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (show && closeRef.current) {
      closeRef.current.focus();
    }
  }, [show]);

  useEffect(() => {
    if (!show) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleDismiss();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [show, handleDismiss]);

  const handleAccept = useCallback(() => {
    window.open(
      `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711"}?text=${encodeURIComponent("Hola, vi la oferta en la página y me interesa un 10% de descuento")}`,
      "_blank"
    );
    handleDismiss();
  }, [handleDismiss]);

  if (!show) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Oferta especial de descuento"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={handleDismiss}
      />
      <div className="relative bg-surface-container border border-primary/30 shadow-2xl max-w-lg w-full animate-in fade-in zoom-in-95 duration-200">
        <button
          ref={closeRef}
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors z-10"
          aria-label="Cerrar"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="p-xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 mb-md">
            <span className="material-symbols-outlined text-primary text-[20px]">
              local_offer
            </span>
            <span className="text-label-sm font-label-bold uppercase text-primary tracking-wider">
              Oferta Especial
            </span>
          </div>

          <h2 className="font-headline text-[28px] md:text-[32px] font-weight-headline-xl text-on-surface mb-sm uppercase">
            <span className="text-primary">10% OFF</span> en tu primera compra
          </h2>

          <p className="text-body-lg text-on-surface-variant mb-lg max-w-sm mx-auto">
            Escríbenos ahora y obtén descuento exclusivo en llantas Michelin,
            Bridgestone, Continental y más.
          </p>

          <div className="space-y-3 mb-lg">
            <div className="flex items-center gap-3 text-left justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              <span className="text-on-surface-variant text-body-md">
                Cotización en menos de 10 minutos
              </span>
            </div>
            <div className="flex items-center gap-3 text-left justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              <span className="text-on-surface-variant text-body-md">
                Entrega en 24-48 horas
              </span>
            </div>
            <div className="flex items-center gap-3 text-left justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">
                check_circle
              </span>
              <span className="text-on-surface-variant text-body-md">
                Instalación profesional incluida
              </span>
            </div>
          </div>

          <button
            onClick={handleAccept}
            className="w-full bg-primary-container text-on-primary py-4 font-label-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95"
          >
            Reclamar Mi 10% de Descuento
          </button>

          <button
            onClick={handleDismiss}
            className="mt-3 text-label-sm text-on-surface-variant hover:text-on-surface transition-colors"
          >
            No gracias, prefiero precio normal
          </button>
        </div>
      </div>
    </div>
  );
}
