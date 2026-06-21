import type { News, EventItem, Member } from "./types";

/**
 * Fallback content used when Supabase is not configured. This keeps the site
 * fully populated and deployable; once env vars are set, live data takes over.
 */

export const seedNews: News[] = [
  {
    id: "n1",
    slug: "transisi-volunteer-grebeg-suro-menuju-gekrafs",
    title: "Transisi Volunteer Grebeg Suro Resmi Menuju GEKRAFS Ponorogo",
    excerpt:
      "Energi kepanitiaan event diubah menjadi gerakan ekonomi kreatif berkelanjutan. Dari panitia acara menjadi penggerak ekraf Ponorogo.",
    content:
      "Kepanitiaan volunteer Grebeg Suro resmi bertransformasi menjadi gerakan ekonomi kreatif berbasis event. Perpisahan kepanitiaan menjadi awal babak baru: membangun ekosistem ekraf Ponorogo yang hidup dari setiap acara.",
    category: "Organisasi",
    cover_color: "#00aeef",
    author: "Tim Media GEKRAFS",
    published_at: "2026-06-10",
  },
  {
    id: "n2",
    slug: "membangun-ekosistem-ekraf-berbasis-event",
    title: "Event sebagai Mesin Penggerak Ekonomi Kreatif Ponorogo",
    excerpt:
      "Setiap acara menjadi panggung pelaku kreatif — menghidupkan kuliner, kriya, musik, dan UMKM lokal.",
    content:
      "Event adalah mesin penggerak ekonomi kreatif. Dari satu event, tumbuh ekosistem ekonomi yang hidup: kuliner, kriya, musik, hingga UMKM lokal mendapat panggung untuk berkembang dan dikenal lebih luas.",
    category: "Program",
    cover_color: "#0087d1",
    author: "Tim Media GEKRAFS",
    published_at: "2026-06-05",
  },
  {
    id: "n3",
    slug: "17-subsektor-ruang-gerak-ekraf-ponorogo",
    title: "Mengenal 17 Subsektor Ekonomi Kreatif di Ponorogo",
    excerpt:
      "Dari kuliner hingga periklanan — setiap subsektor punya rumahnya dalam struktur GEKRAFS Ponorogo.",
    content:
      "GEKRAFS menaungi 17 subsektor ekonomi kreatif. Di Ponorogo, potensi seperti Reog, kuliner khas, dan talenta digital muda menjadi modal kuat untuk menggerakkan ekonomi kreatif daerah.",
    category: "Edukasi",
    cover_color: "#f7c600",
    author: "Tim Media GEKRAFS",
    published_at: "2026-05-28",
  },
];

export const seedEvents: EventItem[] = [
  {
    id: "e1",
    slug: "konsolidasi-dpc-ponorogo",
    title: "Konsolidasi & Musyawarah Cabang DPC Ponorogo",
    description: "Pembentukan tim inti dan penyusunan arah gerak DPC Ponorogo.",
    location: "Ponorogo, Jawa Timur",
    starts_at: "2026-07-12",
    subsector: "Organisasi",
    status: "upcoming",
    accent: "#00aeef",
  },
  {
    id: "e2",
    slug: "pelantikan-pengurus-dpc",
    title: "Pelantikan Pengurus DPC GEKRAFS Ponorogo",
    description: "Pelantikan resmi pengurus oleh Pengurus Pusat / Wilayah.",
    location: "Ponorogo, Jawa Timur",
    starts_at: "2026-08-17",
    subsector: "Organisasi",
    status: "upcoming",
    accent: "#0087d1",
  },
  {
    id: "e3",
    slug: "event-perdana-kolaboratif",
    title: "Aksi Perdana: Event Kolaboratif Pelaku Kreatif",
    description: "Panggung pertama bagi pelaku kuliner, kriya, musik, dan UMKM lokal.",
    location: "Alun-alun Ponorogo",
    starts_at: "2026-09-06",
    subsector: "Event & Sosialisasi",
    status: "upcoming",
    accent: "#f7c600",
  },
];

export const seedMembers: Member[] = [
  { id: "m1", name: "Calon Anggota", subsector: "Kuliner", role: "Pelaku UMKM", district: "Ponorogo", initials: "KU" },
  { id: "m2", name: "Calon Anggota", subsector: "Fotografi", role: "Kreator", district: "Babadan", initials: "FO" },
  { id: "m3", name: "Calon Anggota", subsector: "Musik", role: "Musisi", district: "Jetis", initials: "MU" },
  { id: "m4", name: "Calon Anggota", subsector: "DKV", role: "Desainer", district: "Siman", initials: "DK" },
  { id: "m5", name: "Calon Anggota", subsector: "Kriya", role: "Perajin", district: "Sampung", initials: "KR" },
  { id: "m6", name: "Calon Anggota", subsector: "Aplikasi", role: "Developer", district: "Ponorogo", initials: "AP" },
];
