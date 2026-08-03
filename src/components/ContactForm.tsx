"use client";

import { useState } from "react";
import { buildWhatsAppUrl } from "@/lib/constants";

interface ContactFormProps {
  segment?: "general" | "auto" | "camion" | "agricola" | "industrial";
  compact?: boolean;
}

const segmentConfig = {
  general: {
    title: "Solicita Tu Cotización",
    subtitle: "Respuesta en menos de 10 minutos. Sin compromiso.",
    guarantee: "Te llamamos en menos de 10 minutos | 10% dto. si no respondemos",
    options: [
      "Cotización de llantas",
      "Asesoría técnica",
      "Servicio de instalación",
      "Programa para flotillas",
    ],
    whatsappMessage:
      "Hola, me interesa una cotización de llantas. ¿Podrían ayudarme?",
  },
  auto: {
    title: "Solicita Tu Cotización por WhatsApp",
    subtitle:
      "Completa el formulario y un asesor dará seguimiento a tu solicitud.",
    guarantee: "",
    options: [
      "Cotización de llantas nuevas",
      "Llantas usadas",
      "Alineación y balanceo",
    ],
    whatsappMessage:
      "Hola, necesito cotizar llantas para mi auto. ¿Me pueden ayudar?",
  },
  camion: {
    title: "Cotización Corporativa",
    subtitle: "Completa el formulario y recibe una propuesta personalizada.",
    guarantee: "Auditoría sin compromiso incluida",
    options: [
      "1-10 Unidades",
      "11-50 Unidades",
      "50+ Unidades",
    ],
    whatsappMessage:
      "Hola, necesito cotización para llantas de flotilla de camiones.",
  },
  agricola: {
    title: "Hable con un Especialista",
    subtitle:
      "Completa el formulario y un asesor revisará la medida y aplicación solicitada.",
    guarantee: "Asesoría técnica agrícola sin compromiso",
    options: [
      "Cotización de Llantas Agrícolas",
      "Servicio en campo (sujeto a disponibilidad)",
      "Asesoría Técnica de Suelo",
      "Programa de Temporada",
    ],
    whatsappMessage:
      "Hola, necesito cotizar llantas agrícolas para mi hacienda.",
  },
  industrial: {
    title: "Solicitar Cotización",
    subtitle:
      "Cotizamos llantas multimarca para su equipo de trabajo. Sin compromiso.",
    guarantee: "Cotización sin compromiso",
    options: [
      "Logística / Montacargas",
      "Construcción / Minería",
      "Otro",
    ],
    whatsappMessage:
      "Hola, necesito una cotización de llantas industriales.",
  },
};

export default function ContactForm({
  segment = "general",
  compact = false,
}: ContactFormProps) {
  const config = segmentConfig[segment];
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: config.options[0],
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length !== 10) {
      alert("Ingresa un teléfono válido de 10 dígitos (ej. 9933987711)");
      return;
    }

    setIsSubmitting(true);

    let message = config.whatsappMessage;

    if (formData.name) {
      message += `%0A%0ANombre: ${encodeURIComponent(formData.name)}`;
    }
    if (formData.company) {
      message += `%0AEmpresa: ${encodeURIComponent(formData.company)}`;
    }
    if (formData.phone) {
      message += `%0ATeléfono: ${encodeURIComponent(phoneDigits)}`;
    }
    if (formData.email) {
      message += `%0AEmail: ${encodeURIComponent(formData.email)}`;
    }
    if (formData.service) {
      message += `%0AServicio: ${encodeURIComponent(formData.service)}`;
    }
    if (formData.message) {
      message += `%0AMensaje: ${encodeURIComponent(formData.message)}`;
    }

    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "5219933987711";
    const url = `https://wa.me/${phone}?text=${message}`;

    setTimeout(() => {
      window.open(url, "_blank");
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        service: config.options[0],
        message: "",
      });
    }, 800);
  };

  if (showSuccess) {
    return (
      <div className="bg-surface-container p-lg ghost-border text-center">
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-primary text-3xl">
            check_circle
          </span>
        </div>
        <h3 className="font-headline text-headline-md font-weight-headline-md mb-2">
          ¡Mensaje Enviado!
        </h3>
        <p className="text-on-surface mb-4">
          Te redirigimos a WhatsApp. Un asesor dará seguimiento a tu solicitud.
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="text-primary font-label-bold hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface-container p-lg ghost-border">
      <h3 className="font-headline text-headline-md font-weight-headline-md mb-md">
        {config.title}
      </h3>
      <form onSubmit={handleSubmit} aria-label={config.title} className="space-y-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
          <div>
            <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
              Nombre *
            </label>
            <input
              name="name"
              className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface transition-colors"
              placeholder="Tu nombre completo"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
              Teléfono / WhatsApp *
            </label>
            <input
              name="phone"
              className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface mono-numbers transition-colors"
              placeholder="9933987711"
              type="tel"
              inputMode="numeric"
              required
              pattern="[0-9]{10}"
              title="Ingresa 10 dígitos (ej. 9933987711)"
              maxLength={10}
              value={formData.phone}
              onChange={(e) => {
                const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                setFormData({ ...formData, phone: val });
              }}
            />
          </div>
        </div>

        {!compact && (
          <>
            <div>
              <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                Email
              </label>
              <input
                name="email"
                className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface transition-colors"
                placeholder="tu@email.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {(segment === "camion" || segment === "industrial") && (
              <div>
                <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
                  Empresa
                </label>
                <input
                  name="company"
                  className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface transition-colors"
                  placeholder="Nombre de tu empresa"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            )}
          </>
        )}

        <div>
          <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
            {segment === "camion" ? "Tamaño de Flotilla" : "¿Qué necesitas?"}
          </label>
          <select
            name="service"
            className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface transition-colors"
            value={formData.service}
            onChange={handleChange}
          >
            {config.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {!compact && segment !== "auto" && (
          <div>
            <label className="block text-label-sm font-weight-label-sm font-label-sm text-on-surface-variant uppercase mb-2">
              Mensaje (opcional)
            </label>
            <textarea
              name="message"
              className="w-full bg-surface border border-outline p-3 focus:border-primary focus:ring-0 text-on-surface transition-colors"
              placeholder="Cuéntanos más sobre lo que necesitas..."
              rows={3}
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-container text-on-primary py-4 font-label-bold uppercase tracking-widest hover:brightness-110 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined animate-spin text-[20px]">
                progress_activity
              </span>
              Abriendo WhatsApp...
            </span>
          ) : (
            "Enviar por WhatsApp"
          )}
        </button>
        {config.guarantee && (
          <p className="text-label-sm text-on-surface-variant text-center">
            {config.guarantee}
          </p>
        )}
      </form>
    </div>
  );
}
