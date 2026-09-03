import type { MetadataRoute } from "next";

const siteUrl = "https://www.evergreenlogistics.com.gh";

const routes = [
  "",
  "/about",
  "/academy",
  "/academy/level-1-orientation",
  "/academy/level-2-basic-qualification",
  "/academy/level-3-operational-certification",
  "/academy/level-4-advanced-certification",
  "/academy/level-5-leadership-development",
  "/academy/level-6-executive",
  "/apply",
  "/contact",
  "/driver-careers",
  "/elecer",
  "/news",
  "/spare-parts",
  "/spare-parts-shop",
  "/tricycles",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));
}
