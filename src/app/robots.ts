import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://gekrafsponorogo.id/sitemap.xml",
    host: "https://gekrafsponorogo.id",
  };
}
