"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[90] border-t border-outline-variant bg-surface-container p-md md:p-lg pb-20 md:pb-lg shadow-2xl"
      role="dialog"
      aria-label="Aviso de cookies"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-md">
        <p className="text-body-md text-on-surface leading-relaxed">
          Usamos cookies para mejorar tu experiencia. Al continuar, aceptas nuestra{" "}
          <a
            href="/privacidad"
            className="text-primary hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Política de Privacidad
          </a>.
        </p>
        <div className="flex gap-sm w-full md:w-auto">
          <button
            onClick={handleReject}
            className="flex-1 md:flex-none border border-outline text-on-surface px-xl py-md text-label-bold font-weight-label-bold uppercase tracking-label-bold hover:bg-white hover:text-background transition-all active:scale-95"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none bg-primary text-on-primary px-xl py-md text-label-bold font-weight-label-bold uppercase tracking-label-bold hover:brightness-110 transition-all active:scale-95"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
