"use client";

import { useState } from "react";

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
    title: "Cotiza en 2 Minutos",
    subtitle:
      "Completa el formulario y te llamamos en menos de 10 minutos con precio especial.",
    guarantee: "Te llamamos en <10 minutos | 10% dto. si no respondemos",
    options: [
      "Cotización de llantas nuevas",
      "Llantas usadas",
      "Alineación y balanceo",
      "Pack Seguridad ($899)",
    ],
    whatsappMessage:
      "Hola, necesito cotizar llantas para mi auto. ¿Me pueden ayudar?",
  },
  camion: {
    title: "Cotización Corporativa",
    subtitle:
      "Completa el formulario y recibe una propuesta personalizada en menos de 2 horas.",
    guarantee:
      "Te llamamos en <2 horas | Auditoría sin compromiso incluida",
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
      "Nuestro equipo técnico está listo para asesorarlo. Respuesta en menos de 2 horas.",
    guarantee:
      "Especialista te responde en <2 horas durante temporada",
    options: [
      "Cotización de Llantas Agrícolas",
      "Servicio en Campo",
      "Asesoría Técnica de Suelo",
      "Programa de Temporada",
    ],
    whatsappMessage:
      "Hola, necesito cotizar llantas agrícolas para mi hacienda.",
  },
  industrial: {
    title: "Agendar Auditoría GRATIS",
    subtitle:
      "Optimice sus costos operativos. Diagnóstico detallado sin compromiso.",
    guarantee:
      "Te llamamos en <2 horas | Incluye diagnóstico de 12 puntos",
    options: [
      "Logística / Montacargas",
      "Construcción / Minería",
      "Otro",
    ],
    whatsappMessage:
      "Hola, necesito una auditoría de neumáticos industriales.",
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
    setIsSubmitting(true);

    const phone = "5218123456789";
    let message = config.whatsappMessage;

    if (formData.name) {
      message += `%0A%0ANombre: ${encodeURIComponent(formData.name)}`;
    }
    if (formData.company) {
      message += `%0AEmpresa: ${encodeURIComponent(formData.company)}`;
    }
    if (formData.phone) {
      message += `%0ATeléfono: ${encodeURIComponent(formData.phone)}`;
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
        <p className="text-on-surface-variant mb-4">
          Te redirigimos a WhatsApp. Te contactaremos en menos de 10 minutos.
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
      <form onSubmit={handleSubmit} className="space-y-sm">
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
              placeholder="10 dígitos"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
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
        <p className="text-label-sm text-on-surface-variant text-center">
          {config.guarantee}
        </p>
      </form>
    </div>
  );
}
