"use client";

import { useState, useEffect } from "react";

interface UrgencyBannerProps {
  stock?: number;
  message?: string;
}

export default function UrgencyBanner({
  stock = 247,
  message = "Unidades disponibles en bodega — precio de temporada por tiempo limitado",
}: UrgencyBannerProps) {
  const [currentStock, setCurrentStock] = useState(stock);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStock((prev) => {
        const change = Math.random() > 0.7 ? -1 : 0;
        return Math.max(prev + change, stock - 30);
      });
    }, 45000);
    return () => clearInterval(interval);
  }, [stock]);

  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border-y border-primary/20 py-3 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 text-center">
        <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">
          local_fire_department
        </span>
        <span className="text-label-sm font-label-bold uppercase tracking-wider">
          <span className="text-primary font-bold">{currentStock}+ llantas</span>{" "}
          <span className="text-on-surface-variant hidden sm:inline">
            {message}
          </span>
          <span className="text-on-surface-variant sm:hidden">
            en stock — precio de temporada
          </span>
        </span>
        <span className="material-symbols-outlined text-primary text-[20px] animate-pulse">
          local_fire_department
        </span>
      </div>
    </div>
  );
}
