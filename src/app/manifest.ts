import type { MetadataRoute } from "next";
import { site } from "@/lib/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Apollos",
    description: site.oneLiner,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fcd307",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
