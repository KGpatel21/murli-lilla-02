import type { MetadataRoute } from "next";

const BASE = "https://murli-lila1.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/pratik-petro",
    "/furniture",
    "/real-estate",
    "/technology",
    "/education",
    "/trust-charity",
    "/pharma",
    "/agriculture",
    "/careers",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
