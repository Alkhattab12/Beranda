import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://xeandigital.web.id", changeFrequency: "monthly", priority: 1 }];
}
