import type { MetadataRoute } from "next";
import { getNews } from "@/lib/queries";

const base = "https://gekrafsponorogo.my.id";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/tentang",
    "/subsektor",
    "/struktur",
    "/program",
    "/berita",
    "/event",
    "/anggota",
    "/daftar",
    "/kontak",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const news = await getNews();
  const newsRoutes = news.map((n) => ({
    url: `${base}/berita/${n.slug}`,
    lastModified: new Date(n.published_at),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...newsRoutes];
}
