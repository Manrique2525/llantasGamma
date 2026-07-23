"use client";

import { useState, useEffect, useCallback } from "react";

interface Image {
  src: string;
  alt: string;
  label?: string;
  desc?: string;
}

interface ImageLightboxProps {
  images: Image[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageLightbox({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen) return null;

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Galería de imágenes"
    >
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
        aria-label="Cerrar"
      >
        <span className="material-symbols-outlined text-[32px]">close</span>
      </button>

      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
        aria-label="Imagen anterior"
      >
        <span className="material-symbols-outlined text-[32px]">
          arrow_back
        </span>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10 bg-black/50 rounded-full p-2"
        aria-label="Imagen siguiente"
      >
        <span className="material-symbols-outlined text-[32px]">
          arrow_forward
        </span>
      </button>

      <div className="relative z-10 max-w-4xl w-full animate-in fade-in zoom-in-95 duration-200">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto max-h-[70vh] object-contain"
        />
        {(image.label || image.desc) && (
          <div className="mt-4 text-center">
            {image.label && (
              <p className="text-primary font-label-bold uppercase tracking-wider">
                {image.label}
              </p>
            )}
            {image.desc && (
              <p className="text-white/70 text-sm mt-1">{image.desc}</p>
            )}
          </div>
        )}
        <div className="text-center mt-4 text-white/50 text-sm" aria-live="polite">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
