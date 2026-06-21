/**
 * Single source of truth for static GEKRAFS Ponorogo content.
 * Sourced from the official transition deck (21-slide PDF) and the project brief.
 */

export const org = {
  name: "GEKRAFS Ponorogo",
  longName: "Gerakan Ekonomi Kreatif Nasional — DPC Ponorogo",
  tagline: "Ekraf Bangkit, Indonesia Maju",
  hashtag: "#EkrafBangkitIndonesiaMaju",
  domain: "gekrafsponorogo.my.id",
  description:
    "Wadah resmi pegiat ekonomi kreatif Ponorogo — menghimpun pelaku kreatif, UMKM, komunitas, pemerintah, akademisi, media, dan investor dalam satu ekosistem digital.",
  email: "halo@gekrafsponorogo.my.id",
  whatsapp: "+62 812-0000-0000",
  address: "Ponorogo, Jawa Timur, Indonesia",
  socials: {
    instagram: "https://instagram.com/gekrafsponorogo",
    tiktok: "https://tiktok.com/@gekrafsponorogo",
    youtube: "https://youtube.com/@gekrafsponorogo",
  },
} as const;

export const hero = {
  // Indonesian GEKRAFS copy (Hybrid) rendered in the spec's exact hero layout.
  headline: "Membangun Masa Depan<br />Ekonomi Kreatif Ponorogo",
  subheadline:
    "Kolaborasi pelaku kreatif, UMKM, komunitas, pemerintah, akademisi, media, dan investor dalam satu ekosistem digital yang hidup dari setiap event.",
  primaryCta: { label: "Gabung GEKRAFS", href: "/daftar" },
  secondaryCta: { label: "Lihat Program", href: "/program" },
} as const;

export const nav = [
  { label: "Beranda", href: "/" },
  { label: "Tentang", href: "/tentang" },
  { label: "17 Subsektor", href: "/subsektor" },
  { label: "Struktur", href: "/struktur" },
  { label: "Program", href: "/program" },
  { label: "Berita", href: "/berita" },
  { label: "Event", href: "/event" },
  { label: "Anggota", href: "/anggota" },
  { label: "Kontak", href: "/kontak" },
] as const;

export const stats = [
  { value: 26000, suffix: "+", label: "Anggota di seluruh Indonesia", display: "26K" },
  { value: 31, suffix: "", label: "DPW tingkat provinsi", display: "31" },
  { value: 127, suffix: "", label: "DPC kabupaten & kota", display: "127" },
  { value: 17, suffix: "", label: "Subsektor ekonomi kreatif", display: "17" },
] as const;

/** Marquee logos — kept per the design spec (Hybrid choice): svgl.app brand SVGs. */
export const marqueeLogos = [
  { src: "https://svgl.app/library/procure.svg", alt: "Procure", from: "#1d4ed8", to: "#3b82f6" },
  { src: "https://svgl.app/library/shopify.svg", alt: "Shopify", from: "#eab308", to: "#facc15" },
  { src: "https://svgl.app/library/blender.svg", alt: "Blender", from: "#2563eb", to: "#60a5fa" },
  { src: "https://svgl.app/library/figma.svg", alt: "Figma", from: "#7c3aed", to: "#a855f7" },
  { src: "https://svgl.app/library/spotify.svg", alt: "Spotify", from: "#db2777", to: "#ef4444" },
  { src: "https://svgl.app/library/lottielab.svg", alt: "Lottielab", from: "#ca8a04", to: "#22c55e" },
  { src: "https://svgl.app/library/google-cloud.svg", alt: "Google Cloud", from: "#38bdf8", to: "#93c5fd" },
  { src: "https://svgl.app/library/bing.svg", alt: "Bing", from: "#06b6d4", to: "#14b8a6" },
] as const;

export type Subsector = {
  no: number;
  name: string;
  icon: string; // lucide-react icon name, mapped in the component
  desc: string;
};

export const subsectors: Subsector[] = [
  { no: 1, name: "Kuliner", icon: "UtensilsCrossed", desc: "Cita rasa khas Ponorogo yang siap naik kelas." },
  { no: 2, name: "Fashion", icon: "Shirt", desc: "Busana & wastra dengan identitas lokal." },
  { no: 3, name: "Kriya", icon: "Hammer", desc: "Kerajinan tangan bernilai tambah tinggi." },
  { no: 4, name: "Musik", icon: "Music", desc: "Karya & talenta musik lintas genre." },
  { no: 5, name: "Film, Animasi & Video", icon: "Clapperboard", desc: "Produksi audiovisual & konten kreatif." },
  { no: 6, name: "Fotografi", icon: "Camera", desc: "Dokumentasi visual berkualitas profesional." },
  { no: 7, name: "Aplikasi", icon: "Smartphone", desc: "Produk digital & layanan berbasis software." },
  { no: 8, name: "Game", icon: "Gamepad2", desc: "Pengembangan permainan & gamifikasi." },
  { no: 9, name: "Televisi & Radio", icon: "Radio", desc: "Penyiaran & konten broadcast lokal." },
  { no: 10, name: "Seni Pertunjukan", icon: "Drama", desc: "Reog & pertunjukan panggung kelas dunia." },
  { no: 11, name: "Seni Rupa", icon: "Palette", desc: "Karya visual & galeri seni." },
  { no: 12, name: "Desain Produk", icon: "Package", desc: "Inovasi produk dengan desain fungsional." },
  { no: 13, name: "Desain Interior", icon: "Sofa", desc: "Penataan ruang yang estetis & fungsional." },
  { no: 14, name: "DKV", icon: "PenTool", desc: "Desain komunikasi visual & branding." },
  { no: 15, name: "Arsitektur", icon: "Building2", desc: "Perancangan bangunan & ruang publik." },
  { no: 16, name: "Penerbitan", icon: "BookOpen", desc: "Buku, media, & karya tulis kreatif." },
  { no: 17, name: "Periklanan", icon: "Megaphone", desc: "Strategi promosi & kampanye kreatif." },
];

export const about = {
  what: {
    title: "Apa itu GEKRAFS",
    body: "GEKRAFS (Gerakan Ekonomi Kreatif Nasional) adalah perkumpulan yang menjadi wadah komunikasi, konsultasi, fasilitator, dan kemitraan bagi pegiat ekonomi kreatif di seluruh subsektor — dengan tujuan meningkatkan perekonomian nasional.",
    points: [
      { title: "Wadah resmi pegiat ekraf nasional", desc: "Rumah bersama bagi pelaku kreatif lintas subsektor." },
      { title: "Konsultasi, fasilitasi & kemitraan", desc: "Pendampingan, akses jejaring, dan kolaborasi strategis." },
      { title: "Naikkan perekonomian nasional", desc: "Mendorong ekraf sebagai motor pertumbuhan ekonomi." },
    ],
  },
  legality: {
    title: "Sejarah & Legalitas",
    subtitle: "Berbadan hukum resmi sejak 2019",
    items: [
      { label: "Didirikan", value: "26 November 2019, Jakarta" },
      { label: "Para Pendiri", value: "Sandiaga Uno · Kawendra Lukistian · Laja Lapian · Nur Aprianti · Erwin Soerjadi" },
      { label: "Azas", value: "Pancasila & UUD 1945" },
      { label: "Sifat", value: "Independen, non-partai" },
    ],
  },
  vision: "Menghimpun dan membina pegiat ekonomi kreatif nasional.",
  mission: "Menjadi wadah komunikasi, konsultasi, fasilitator, dan kemitraan bagi pegiat ekonomi kreatif.",
  principles: [
    { title: "Berdaya", desc: "Memberdayakan pelaku kreatif agar mandiri dan berkembang." },
    { title: "Bersinergi", desc: "Berkolaborasi lintas pihak demi ekosistem yang kuat." },
    { title: "Berjuang", desc: "Konsisten memperjuangkan kepentingan ekonomi kreatif." },
  ],
} as const;

export const network = {
  title: "Kekuatan GEKRAFS se-Indonesia",
  subtitle: "Jaringan nasional yang terus tumbuh.",
};

/** Why Grebeg Suro youth fit — the transition narrative. */
export const transition = {
  title: "Dari Grebeg Suro menuju GEKRAFS Ponorogo",
  body: "Transisi resmi volunteer Grebeg Suro menjadi gerakan ekonomi kreatif berbasis event — dari panitia acara menjadi penggerak ekraf Ponorogo. Energi event diubah menjadi gerakan yang berkelanjutan.",
  reasons: [
    { title: "Terbukti mengelola event nasional", desc: "Pengalaman mengeksekusi acara skala besar." },
    { title: "Skill koordinasi, kreatif, teknis & media", desc: "Kapasitas lengkap untuk menggerakkan ekraf." },
    { title: "Ada subsektor Event & Wedding Organizer", desc: "Rumah teknis yang relevan dengan keahlian kalian." },
    { title: "Energi muda adalah aset utama", desc: "Generasi muda adalah motor ekonomi kreatif." },
  ],
} as const;

export const structure = {
  support: {
    title: "Dewan Pendukung",
    subtitle: "Legitimasi & kemitraan strategis",
    items: [
      { title: "Dewan Pembina", desc: "Dari unsur pemerintah daerah." },
      { title: "Dewan Penasehat", desc: "Bupati dan unsur Forkopimda." },
      { title: "Dewan Pakar", desc: "Dari kepala dinas terkait." },
    ],
  },
  daily: {
    title: "Pimpinan Harian",
    subtitle: "Roda harian organisasi",
    items: [
      { title: "Ketua", desc: "Pemimpin cabang DPC Ponorogo." },
      { title: "Wakil Ketua", desc: "Membidangi kelompok bidang kerja." },
      { title: "Sekretaris & Wakil", desc: "Urusan administrasi organisasi." },
      { title: "Bendahara & Wakil", desc: "Urusan keuangan organisasi." },
    ],
  },
  legalBasis: {
    title: "Dasar Hukum Pembentukan DPC",
    subtitle: "Mengacu AD BAB X Pasal 15",
    steps: [
      { step: "Dipilih", desc: "Pengurus Cabang dipilih melalui Musyawarah Cabang." },
      { step: "Disahkan", desc: "Disahkan secara resmi oleh Pengurus Pusat." },
      { step: "Dilantik", desc: "Dilantik oleh Pengurus Pusat atau Pengurus Wilayah." },
    ],
  },
} as const;

/** Eight national standard divisions. */
export const divisions = [
  { no: 1, title: "Program & Strategi" },
  { no: 2, title: "Pengembangan Talenta" },
  { no: 3, title: "Pemasaran, Media & Kerjasama" },
  { no: 4, title: "HAKI, Hukum & Advokasi" },
  { no: 5, title: "Event & Sosialisasi Program" },
  { no: 6, title: "Organisasi & Kaderisasi" },
  { no: 7, title: "Pembinaan Potensi Ekraf" },
  { no: 8, title: "Riset & Pelestarian Budaya" },
] as const;

export const potensi = [
  { title: "Reog Ponorogo", tag: "Seni Pertunjukan", desc: "Ikon seni pertunjukan kelas dunia." },
  { title: "Grebeg Suro", tag: "Wisata Tahunan", desc: "Magnet wisata & ekonomi tahunan." },
  { title: "Kuliner & Kriya", tag: "Produk Unggulan", desc: "Khas Ponorogo, siap dipasarkan." },
  { title: "Talenta Digital Muda", tag: "Generasi Baru", desc: "Terus tumbuh setiap tahun." },
] as const;

export const roadmap = [
  { no: 1, title: "Konsolidasi", desc: "Pembentukan tim & Musyawarah Cabang." },
  { no: 2, title: "Pengesahan SK", desc: "Pengesahan dari Pengurus Pusat." },
  { no: 3, title: "Pelantikan", desc: "Pelantikan Pengurus DPC Ponorogo." },
  { no: 4, title: "Aksi Perdana", desc: "Event kolaboratif & program rutin." },
] as const;

export const onboarding = [
  { no: 1, title: "Mendaftar resmi", desc: "Sebagai anggota GEKRAFS Ponorogo." },
  { no: 2, title: "Mengisi data diri", desc: "Lengkap dengan subsektor keahlian." },
  { no: 3, title: "Mengikuti pembinaan", desc: "Dan pembagian bidang kerja." },
  { no: 4, title: "Mulai bergerak", desc: "Di program perdana bersama tim." },
] as const;

export const program = {
  engine: {
    title: "Event adalah mesin penggerak ekonomi kreatif",
    body: "Setiap acara menjadi panggung pelaku kreatif Ponorogo — menghidupkan kuliner, kriya, musik, dan UMKM lokal. Dari satu event, tumbuh ekosistem ekonomi yang hidup.",
    tags: ["Kuliner", "Kriya", "Musik", "UMKM Lokal"],
  },
  departments: [
    "Event Organizer",
    "Wedding Organizer",
    "Kuliner",
    "Fashion",
    "Kriya",
    "Musik",
    "Film",
    "Fotografi",
    "Pariwisata",
    "Seni Pertunjukan",
    "Kesehatan & Olahraga",
  ],
  roles: [
    { field: "Event & Sosialisasi", desc: "Eksekusi acara di lapangan.", home: true },
    { field: "Program & Strategi", desc: "Konten & media sosial.", home: false },
    { field: "Pemasaran", desc: "Sponsorship & kerjasama.", home: false },
  ],
} as const;

export const membership = {
  requirements: [
    "Berusia 17 tahun atau sudah menikah",
    "Mengikuti pembinaan calon anggota & berikrar",
    "Menaati AD/ART dan membayar iuran",
  ],
  rights: [
    "Hak suara dalam organisasi",
    "Perlindungan hukum",
    "Kartu anggota resmi GEKRAFS",
  ],
} as const;
