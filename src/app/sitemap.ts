import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";
import { SPACES } from "@/lib/data/spaces";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/spaces",
    "/types",
    "/hosts",
    "/cities",
    "/list",
    "/saved",
    "/about",
    "/guidelines",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  const baseEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/spaces" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/spaces" ? 0.9 : 0.7,
  }));

  const spaceEntries: MetadataRoute.Sitemap = SPACES.map((space) => ({
    url: `${site.url}/spaces/${space.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...baseEntries, ...spaceEntries];
}
