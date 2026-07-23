"use client";

import { useState, useEffect } from "react";

const socialProofData = [
  { name: "Carlos", location: "Villahermosa", action: "solicitó una cotización", time: "hace 2 min" },
  { name: "Transportes del Sureste", location: "Tabasco", action: "compró 50 llantas", time: "hace 15 min" },
  { name: "Ing. María García", location: "Teapa", action: "agendó una auditoría", time: "hace 30 min" },
  { name: "Minera del Carmen", location: "Cárdenas", action: "renovó su flotilla", time: "hace 1 hora" },
  { name: "Refaccionarias Gama", location: "Centro", action: "recibió su pedido", time: "hace 2 horas" },
];

export default function SocialProofToast() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
      setHasShown(true);
    }, 10000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!hasShown) return;

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % socialProofData.length);
        setIsVisible(true);
      }, 500);
    }, 25000);

    return () => clearInterval(interval);
  }, [hasShown]);

  if (!hasShown) return null;

  const proof = socialProofData[currentIndex];

  return (
    <div
      aria-hidden="true"
      className={`fixed bottom-24 md:bottom-6 left-6 z-40 max-w-[300px] bg-surface-container border border-outline-variant p-4 shadow-xl transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="material-symbols-outlined text-primary text-[20px]">
            person
          </span>
        </div>
        <div className="min-w-0">
          <p className="text-sm text-on-surface">
            <span className="font-bold">{proof.name}</span>{" "}
            <span className="text-on-surface-variant">de {proof.location}</span>
          </p>
          <p className="text-sm text-primary font-medium">{proof.action}</p>
          <p className="text-xs text-on-surface-variant mt-1">{proof.time}</p>
        </div>
      </div>
    </div>
  );
}
