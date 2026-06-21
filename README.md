# GEKRAFS Ponorogo — Website Resmi

Website resmi **GEKRAFS Ponorogo** (Gerakan Ekonomi Kreatif Nasional — DPC Ponorogo).
Modern, profesional, cepat, mobile-first, dan SEO-first — siap menjadi *Creative
Economy Hub* Kabupaten Ponorogo.

> Tagline: **Ekraf Bangkit, Indonesia Maju** · `#EkrafBangkitIndonesiaMaju`

## ✨ Fitur

- **Hero sinematik** dengan video latar, floating navbar, dan marquee logo mulus (CSS murni, pause saat hover, masking tepi).
- **Profil lengkap organisasi**: Tentang, Sejarah & Legalitas (2019), Visi-Misi-Prinsip, narasi transisi Grebeg Suro → GEKRAFS.
- **17 Subsektor Ekraf** dengan ikon dan deskripsi.
- **Struktur DPC**: Dewan Pendukung, Pimpinan Harian, 8 bidang kerja standar nasional, dasar hukum (AD BAB X Pasal 15).
- **Program berbasis event**, departemen subsektor, roadmap pembentukan, dan onboarding.
- **Berita & Event** — *DB-backed* (Supabase) dengan fallback seed data.
- **Direktori Anggota** + **Form Pendaftaran** (server action → Supabase).
- **SEO**: metadata, OpenGraph, Twitter Card, JSON-LD Organization, `sitemap.xml`, `robots.txt`.
- **Animasi**: scroll reveal, counter, stagger — semuanya menghormati `prefers-reduced-motion`.

## 🧱 Tech Stack

| Lapisan | Teknologi |
|---|---|
| Framework | **Next.js 15** (App Router) + **TypeScript** |
| Styling | **Tailwind CSS v4** (`@theme` di CSS) |
| Animasi | **Motion** (`motion/react`) |
| Ikon | **lucide-react** |
| Utilitas | **clsx** + **tailwind-merge** |
| Database | **Supabase** (Postgres) — runtime reads |
| ORM/Schema | **Prisma** (sumber kebenaran skema + migrasi) |
| Deploy | **Vercel** · DNS **Cloudflare** · Domain `gekrafsponorogo.my.id` |

### Warna brand (dari logo)

`#00AEEF` biru utama · `#0087D1` biru sekunder · `#0D1B2A` navy · `#F7C600` kuning aksen · `#F9FAFB` background.

### Font

Inter (`--font-sans`) · Outfit (`--font-display`) · Space Grotesk (`--font-stat`, statistik).

## 🚀 Menjalankan secara lokal

```bash
npm install
npm run dev   # http://localhost:3000
```

Situs langsung tampil penuh **tanpa** konfigurasi database (memakai seed data).

## 🗄️ Mengaktifkan database (Supabase)

1. Buat project di [supabase.com](https://supabase.com).
2. Jalankan `supabase/schema.sql` di **SQL Editor** (membuat tabel `news`, `events`, `members` + RLS).
3. Salin `.env.example` → `.env.local` dan isi kredensial Supabase.
4. (Opsional) Sinkronkan skema penuh via Prisma:
   ```bash
   npm run db:push      # prisma db push ke DATABASE_URL
   ```
5. Restart dev server — Berita/Event/Anggota/Daftar otomatis memakai data live.

## ☁️ Deploy ke Vercel

1. Push repo ke GitHub.
2. Import di Vercel → framework terdeteksi **Next.js**.
3. Tambahkan env vars (lihat `.env.example`) di **Project Settings → Environment Variables**.
4. Deploy. Arahkan domain `gekrafsponorogo.my.id` (DNS via Cloudflare → Vercel).

## 🧠 Skills yang dipakai

Dibangun dengan bantuan dua skill desain yang dipasang di `.claude/skills/`:

- **ui-ux-pro-max** — basis pengetahuan UI/UX (palet, tipografi, struktur landing, checklist aksesibilitas).
- **emil-design-eng** / **review-animations** — filosofi *design engineering* Emil Kowalski untuk animasi & polish (easing kustom, durasi, `prefers-reduced-motion`, scale-on-press).

## 📁 Struktur

```
src/
├─ app/                 # App Router: halaman, layout, server actions, SEO
│  ├─ (pages)           # tentang, subsektor, struktur, program, berita, event, anggota, daftar, kontak
│  ├─ actions/          # server actions (registrasi)
│  ├─ sitemap.ts robots.ts icon.svg
├─ components/          # hero, marquee, sections, cards, forms, site, ui
└─ lib/                 # content.ts (konten statis), queries, supabase, prisma, types, seed-data
prisma/schema.prisma    # model data
supabase/schema.sql     # skema + RLS untuk Supabase
```

---

© GEKRAFS Ponorogo · `gekrafsponorogo.my.id`
