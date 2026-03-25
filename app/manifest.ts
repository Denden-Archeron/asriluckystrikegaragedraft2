import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asri LuckyStrike Garage",
    short_name: "ASLG",
    description:
      "Trusted vintage motorcycle repair and restoration services.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/assets/images/AsriLuckyStrikeGarage.jpg",
        sizes: "192x192",
        type: "image/jpeg",
      },
      {
        src: "/assets/images/AsriLuckyStrikeGarage.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
      {
        src: "/assets/images/AsriLuckyStrikeGarage.jpg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
