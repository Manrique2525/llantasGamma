# Llantas Gamma

> Tu proveedor de llantas con entrega en 24-48 horas en Villahermosa, Tabasco

Sitio web de venta de llantas B2B diseñado para llanteras, talleres mecánicos, refaccionarias, empresas con flotillas y distribuidores.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **UI**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Despliegue**: [Vercel](https://vercel.com/)

## Características

- **4 Segmentos de Mercado**: Auto, Camión, Agrícola, Industrial
- **Formularios Funcionales**: Envío directo a WhatsApp con validación
- **WhatsApp Button Flotante**: Canal de contacto siempre visible
- **Exit Popup**: Recuperación de visitantes con oferta del 10%
- **Urgency Banner**: Banner de stock dinámico que crea urgencia
- **SEO Optimizado**: Schema.org, metadata por página, Open Graph
- **Diseño Responsive**: Mobile-first, funciona en todos los dispositivos
- **Componentes Reutilizables**: 14 componentes modulares
- **Scroll Reveal**: Animaciones de entrada al hacer scroll
- **Animated Counters**: Contadores animados en estadísticas
- **FAQ Interactivo**: Acordeón de preguntas frecuentes
- **Image Lightbox**: Modal para ver imágenes de galería
- **Sticky CTA (Móvil)**: Barra fija con WhatsApp y Cotizar
- **Social Proof Toast**: Notificación de actividad reciente

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Manrique2525/llantasGamma.git

# Navegar al directorio
cd llantasGamma

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Construcción para producción |
| `npm run start` | Iniciar servidor de producción |
| `npm run lint` | Verificar código con ESLint |

## Estructura del Proyecto

```
llantasGamma/
├── public/                    # Archivos estáticos
├── src/
│   ├── app/                   # App Router (Next.js 16)
│   │   ├── layout.tsx         # Layout raíz (SEO global, schema.org)
│   │   ├── page.tsx           # Homepage principal
│   │   ├── globals.css        # Tokens de diseño (colores, tipografía)
│   │   ├── auto/              # Segmento: Llantas de Auto
│   │   ├── camion/            # Segmento: Llantas de Camión
│   │   ├── agricola/          # Segmento: Llantas Agrícolas
│   │   └── industrial/        # Segmento: Llantas Industriales
│   └── components/            # Componentes reutilizables
│       ├── Navbar.tsx         # Navegación principal
│       ├── Footer.tsx         # Pie de página
│       ├── WhatsAppButton.tsx # Botón flotante de WhatsApp
│       ├── ContactForm.tsx    # Formulario multi-segmento
│       ├── ExitPopup.tsx      # Popup de salida con oferta
│       ├── UrgencyBanner.tsx  # Banner de urgencia dinámico
│       ├── SectionHeader.tsx  # Encabezado de sección reutilizable
│       ├── TestimonialCard.tsx # Tarjeta de testimonio
│       ├── ServiceCard.tsx    # Tarjeta de servicio
│       ├── ScrollReveal.tsx   # Animación de scroll
│       ├── AnimatedCounter.tsx # Contador animado
│       ├── StickyCTA.tsx      # CTA fijo en móvil
│       ├── FAQAccordion.tsx   # Acordeón de preguntas frecuentes
│       ├── ImageLightbox.tsx  # Modal de imágenes
│       ├── SocialProofToast.tsx # Toast de prueba social
│       └── Toast.tsx          # Sistema de notificaciones
├── .opencode/                 # Configuración de opencode
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## Componentes Reutilizables

### WhatsAppButton
Botón flotante que aparece después de 3 segundos. Incluye tooltip y animación de notificación.

### ContactForm
Formulario funcional que envía datos a WhatsApp. Soporta 5 segmentos: General, Auto, Camión, Agrícola, Industrial.

### ExitPopup
Popup de salida que se activa cuando el usuario va a abandonar la página. Ofrece 10% de descuento en la primera compra.

### UrgencyBanner
Banner dinámico que muestra stock disponible. El contador se decrementa cada 45 segundos para crear urgencia.

### SectionHeader
Encabezado reutilizable para secciones. Incluye badge, título, título destacado y subtítulo.

### TestimonialCard
Tarjeta de testimonio con iniciales del cliente, empresa, rol, métrica de resultado y rating.

### ServiceCard
Tarjeta de servicio con icono, título, descripción, precio y CTA.

### ScrollReveal
Componente wrapper que agrega animaciones de entrada al hacer scroll. Soporta delay para animaciones escalonadas.

### AnimatedCounter
Contador animado que cuenta desde 0 hasta un valor objetivo. Se activa cuando el elemento es visible en el viewport.

### StickyCTA
Barra fija en la parte inferior del viewport en móvil. Muestra botones de WhatsApp y Cotizar. Se oculta al llegar al footer.

### FAQAccordion
Acordeón interactivo con preguntas frecuentes. Incluye 7 preguntas comunes sobre entrega, garantía, flotillas, marcas, instalación y pagos.

### ImageLightbox
Modal para ver imágenes de galería en tamaño completo. Soporta navegación con teclado (ESC, flechas) y contador de imágenes.

### SocialProofToast
Notificación toast que muestra actividad reciente de clientes. Aparece cada 25 segundos con datos de ubicación y acción.

### Toast
Sistema de notificaciones para feedback. Soporta tipos success, info y error.

## Segmentos de Mercado

| Segmento | Precio Desde | Productos | Página |
|----------|--------------|-----------|--------|
| Auto | $899 | 50+ marcas, 200+ medidas | `/auto` |
| Camión | $1,499 | 30+ marcas, 100+ medidas | `/camion` |
| Agrícola | $2,999 | 20+ marcas, 50+ medidas | `/agricola` |
| Industrial | $3,999 | 15+ marcas, 80+ medidas | `/industrial` |

## Diseño

### Tokens de Color

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-primary` | `#a7d64a` | Verde primario (CTAs, acentos) |
| `--color-surface` | `#121212` | Fondo principal |
| `--color-surface-2` | `#1e1e1e` | Superficies elevadas |
| `--color-surface-3` | `#2a2a2a` | Tarjetas, headers |

### Tipografía

- **Display**: 700-900 weight, grande para títulos
- **Heading**: 600-700 weight, títulos de sección
- **Body**: 400-500 weight, texto normal
- **Label**: 500-600 weight, etiquetas y CTAs

## SEO

- **Title Template**: `%s | Llantas Gamma - Villahermosa, Tabasco`
- **Schema.org**: LocalBusiness con dirección, teléfono, horarios
- **Open Graph**: Título, descripción e imagen por página
- **Metadata**: Descripciones únicas por página

## Próximos Pasos

- [ ] Agregar fotos reales de clientes
- [ ] Implementar Google Reviews widget
- [ ] Agregar tracking de conversiones (GA4, Meta Pixel)
- [ ] Migrar imágenes a `/public` y usar `next/image`
- [ ] Crear landing pages para campañas de tráfico pagado
- [ ] Agregar tests unitarios con Vitest
- [ ] Implementar chat en vivo

## Autor

**Manrique2525** - [GitHub](https://github.com/Manrique2525)

## Licencia

Este proyecto es privado. Todos los derechos reservados.
