"use client";

import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/constants";

interface TireSearchFormProps {
  fields: { label: string; placeholder: string }[];
  commonSizes?: string[];
  whatsappMessage: string;
  fallbackLabel?: string;
}

export default function TireSearchForm({
  fields,
  commonSizes,
  whatsappMessage,
  fallbackLabel = "Llámanos",
}: TireSearchFormProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  const handleChange = (label: string, value: string) => {
    setValues((prev) => ({ ...prev, [label]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filled = fields
      .filter((f) => values[f.label])
      .map((f) => `${f.label}: ${values[f.label]}`)
      .join(" | ");
    const msg = filled
      ? `${whatsappMessage} — Medida: ${filled}`
      : whatsappMessage;
    window.open(buildWhatsAppUrl(msg), "_blank");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-4 gap-gutter">
        {fields.map((field) => (
          <div key={field.label}>
            <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
              {field.label}
            </label>
            <input
              className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface mono-numbers transition-colors"
              placeholder={field.placeholder}
              type="text"
              value={values[field.label] || ""}
              onChange={(e) => handleChange(field.label, e.target.value)}
            />
          </div>
        ))}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-primary-container text-on-primary py-3 font-label-bold uppercase hover:brightness-110 transition-all active:scale-95"
          >
            Buscar en Stock
          </button>
        </div>
      </form>
      {commonSizes && commonSizes.length > 0 && (
        <div className="mt-md">
          <p className="text-label-sm text-on-surface-variant mb-2">
            Medidas comunes:
          </p>
          <div className="flex flex-wrap gap-2">
            {commonSizes.map((size) => (
              <a
                key={size}
                href={buildWhatsAppUrl(`${whatsappMessage} — Medida: ${size}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-label-sm font-label-bold mono-numbers text-primary border border-primary/30 px-3 py-1 hover:bg-primary/10 transition-colors"
              >
                {size}
              </a>
            ))}
          </div>
        </div>
      )}
      <p className="text-label-sm text-on-surface-variant mt-4">
        ¿{fallbackLabel}?{" "}
        <a
          href={buildWhatsAppUrl(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Escríbenos por WhatsApp
        </a>
      </p>
    </div>
  );
}
