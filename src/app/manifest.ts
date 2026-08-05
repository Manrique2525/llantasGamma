import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Llantas Gama | Llantera en Villahermosa",
    short_name: "Llantas Gama",
    description:
      "Llantera multimarca en Villahermosa, Tabasco. Venta e instalación de llantas para auto, camión, agrícola e industrial.",
    start_url: "/",
    id: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#7CAD2B",
    lang: "es",
    categories: ["shopping", "automotive"],
    icons: [
      {
        src: "/favicon.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
