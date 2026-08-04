import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://llantasgama.com",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://llantasgama.com/auto",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://llantasgama.com/camion",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://llantasgama.com/agricola",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://llantasgama.com/industrial",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://llantasgama.com/privacidad",
      lastModified: new Date("2026-07-01"),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
