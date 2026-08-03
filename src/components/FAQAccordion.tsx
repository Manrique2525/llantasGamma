"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "¿Cuánto tarda la entrega?",
    answer:
      "El tiempo de entrega se confirma al cotizar, ya que depende de la medida, marca y disponibilidad. Escríbenos por WhatsApp y te damos una fecha clara antes de comprometerte.",
  },
  {
    question: "¿Ofrecen garantía en las llantas?",
    answer:
      "La garantía aplica según marca, producto y condiciones del fabricante. Al momento de cotizar te confirmamos la cobertura de la llanta que elijas.",
  },
  {
    question: "¿Trabajan con flotillas de empresas?",
    answer:
      "Sí. Ayudamos a empresas a mantener sus unidades disponibles mediante inspecciones, historial de mantenimiento, atención prioritaria y suministro de llantas y refacciones.",
  },
  {
    question: "¿Cuáles son las marcas que manejan?",
    answer:
      "Trabajamos como proveedor multimarca: cotizamos opciones de distintas marcas según la medida, aplicación y presupuesto. Solicita tu cotización por WhatsApp.",
  },
  {
    question: "¿Hacen instalación de llantas?",
    answer:
      "Sí, ofrecemos instalación, balanceo y mantenimiento preventivo. Confirma la disponibilidad del servicio al cotizar.",
  },
  {
    question: "¿Aceptan pagos a crédito?",
    answer:
      "Sí, ofrecemos opciones de pago flexibles para empresas y flotillas. Trabajamos con transferencia bancaria, tarjeta de crédito/débito, y programas de crédito para clientes calificados. Solicita una cotización para conocer las opciones.",
  },
  {
    question: "¿Cómo solicito una cotización?",
    answer:
      "Escríbenos por WhatsApp al 993 398 7711 o completa el formulario de contacto. Un asesor dará seguimiento a tu solicitud.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="bg-surface-container ghost-border overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
              className="w-full flex items-center justify-between p-lg text-left hover:bg-surface-container-high transition-colors"
            >
              <span className="font-headline text-body-lg pr-4">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-lg pb-lg text-on-surface leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
