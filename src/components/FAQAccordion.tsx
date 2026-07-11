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
      "La entrega es en 24-48 horas en Villahermosa y zona metropolitana. Para otras zonas de Tabasco, coordinamos la entrega en menos de 72 horas. Contáctanos para confirmar disponibilidad en tu zona.",
  },
  {
    question: "¿Ofrecen garantía en las llantas?",
    answer:
      "Sí, todas nuestras llantas cuentan con garantía directa de fábrica. El tiempo de garantía varía según la marca y modelo, pero generalmente es de 12 a 36 meses. Además, ofrecemos garantía adicional en instalación.",
  },
  {
    question: "¿Trabajan con flotillas de empresas?",
    answer:
      "Absolutamente. Tenemos un programa especial para flotillas de 10+ unidades con descuentos de hasta 15%, soporte técnico 24/7, y un equipo dedicado para gestionar tu cuenta. Muchas empresas de transportes en Tabasco ya confían en nosotros.",
  },
  {
    question: "¿Cuáles son las marcas que manejan?",
  answer:
      "Somos distribuidores oficiales de 8 marcas líderes mundiales: Michelin, Bridgestone, Continental, Goodyear, Pirelli, Firestone, Yokohama y Hankook. Ofrecemos opciones para cada tipo de vehículo y presupuesto.",
  },
  {
    question: "¿Hacen instalación de llantas?",
    answer:
      "Sí, contamos con equipo profesional de instalación. Ofrecemos servicio de inflado, balanceo, alineación 3D y rotación. La instalación está incluida en la mayoría de nuestros paquetes.",
  },
  {
    question: "¿Aceptan pagos a crédito?",
    answer:
      "Sí, ofrecemos opciones de pago flexibles para empresas y flotillas. Trabajamos con transferencia bancaria, tarjeta de crédito/débito, y programas de crédito para clientes calificados. Solicita una cotización para conocer las opciones.",
  },
  {
    question: "¿Qué pasa si no responden en 4 horas?",
    answer:
      "Si no te respondemos en un plazo de 4 horas, te damos un 10% de descuento en tu compra. Es nuestra garantía de servicio. Puedes contactarnos por WhatsApp, teléfono o formulario y siempre cumplimos con el tiempo de respuesta.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="bg-surface-container ghost-border overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-lg text-left hover:bg-surface-container-high transition-colors"
          >
            <span className="font-headline text-body-lg pr-4">
              {item.question}
            </span>
            <span
              className={`material-symbols-outlined text-primary transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            >
              expand_more
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="px-lg pb-lg text-on-surface-variant leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
