import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Xean Digital", short_name: "Xean", start_url: "/", display: "standalone",
    background_color: "#f6f1e7", theme_color: "#0d0d0d",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
