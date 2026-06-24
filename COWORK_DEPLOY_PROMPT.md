# 🤝 Prompt untuk Cowork — Finalisasi & Verifikasi Deploy GEKRAFS Ponorogo

Salin SELURUH blok di bawah ke agent **cowork** kamu (yang punya akses ke akun
Vercel, Supabase, dan DomaiNesia). Tujuannya: memastikan situs LIVE & benar di
**https://gekrafsponorogo.my.id**, mengaktifkan database + panel admin, dan
verifikasi semua alur sampai tuntas.

---

```
ROLE: Kamu DevOps + QA engineer. Situs sudah ada di GitHub & sudah pernah
deploy ke Vercel dengan domain gekrafsponorogo.my.id. Tugasmu FINALISASI:
pastikan production live & benar setelah perubahan terbaru (homepage kini
versi 3D), set/verifikasi semua environment variable, aktifkan Supabase +
panel admin, dan verifikasi end-to-end. Kerjakan sampai tuntas, jangan
berhenti sebelum semua checklist VERIFIKASI hijau.

KONTEKS REPO
- Repo    : https://github.com/panjivr/gekrafsponorogo
- Branch  : main  (Vercel auto-deploy setiap push ke main)
- Stack   : Next.js 15 (App Router) + TypeScript + Tailwind v4
- Domain  : gekrafsponorogo.my.id (registrar DomaiNesia, status Active)
- Node    : 20 atau 22

APA YANG SUDAH ADA DI KODE
- Root "/"  = landing 3D WebGL immersive multi-scene (Three.js + GSAP, tema
  BIRU GEKRAFS: royal blue #1B4DC4 + cyan #2FD8FF; 8+ scene berbeda),
  dilayani lewat rewrite next.config "/" -> "/3d/index.html"
  (file: public/3d/index.html ; sumber: webgl/index.html).
- Halaman fungsional (Next.js): /daftar (form pendaftaran -> tabel Supabase
  `members`), /berita, /berita/[slug], /event, /anggota (direktori, hanya
  status approved), /program, /tentang, /struktur, /kontak.
- Panel admin: /admin (login pakai ADMIN_PASSWORD) -> lihat & kelola pendaftar
  (Setujui/Tolak). Anggota approved otomatis tampil di /anggota.
- Tanpa env Supabase, situs tetap tampil (seed data) & /admin tampil instruksi.

LANGKAH 1 — SUPABASE (database)
1. Login supabase.com. Pakai project yang sudah ada, atau buat baru
   "gekrafs-ponorogo" (region Singapore). Simpan DB password.
2. SQL Editor -> jalankan isi file repo `supabase/schema.sql`
   (tabel news, events, members + Row Level Security). Aman bila sudah ada.
3. SQL Editor -> jalankan `supabase/seed.sql` (isi 3 berita + 3 event awal,
   idempotent).
4. Ambil kredensial:
   - Settings -> API:
       Project URL      -> NEXT_PUBLIC_SUPABASE_URL
       anon public      -> NEXT_PUBLIC_SUPABASE_ANON_KEY
       service_role     -> SUPABASE_SERVICE_ROLE_KEY  (RAHASIA)
   - Settings -> Database -> Connection string:
       Pooled  (6543)   -> DATABASE_URL  (tambah ?pgbouncer=true)
       Direct  (5432)   -> DIRECT_URL

LANGKAH 2 — VERCEL (environment variables + redeploy)
Set 6 env ini di Vercel (Production + Preview). CLI:
   npm i -g vercel && vercel login
   git clone https://github.com/panjivr/gekrafsponorogo && cd gekrafsponorogo
   vercel link            # link ke project Vercel yang sudah ada
   vercel env add NEXT_PUBLIC_SUPABASE_URL production
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
   vercel env add SUPABASE_SERVICE_ROLE_KEY production
   vercel env add DATABASE_URL production
   vercel env add DIRECT_URL production
   vercel env add ADMIN_PASSWORD production     # tentukan password kuat utk /admin
   vercel --prod          # redeploy production
(atau lewat Dashboard: Settings -> Environment Variables, isi 6 di atas,
 lalu Deployments -> Redeploy. Pastikan Production Branch = main.)

LANGKAH 3 — DOMAIN (verifikasi, harusnya sudah aktif)
- Vercel -> Settings -> Domains: pastikan gekrafsponorogo.my.id "Valid
  Configuration" + SSL aktif. Bila belum, di DomaiNesia -> DNS Management:
      A     @    76.76.21.21
      CNAME www  cname.vercel-dns.com
  (ikuti nilai yang ditampilkan Vercel bila beda).

LANGKAH 4 — VERIFIKASI END-TO-END (semua harus PASS)
[ ] curl -I https://gekrafsponorogo.my.id  -> HTTP 200 + HTTPS
[ ] Buka https://gekrafsponorogo.my.id  -> tampil landing 3D (jaringan/partikel
    biru-cyan bergerak, background biru-hitam gelap; scene berganti saat scroll).
    Cek di desktop & mobile.
[ ] https://gekrafsponorogo.my.id/daftar -> isi form -> submit sukses, lalu
    cek di Supabase Table Editor `members` ada baris baru status 'pending'.
[ ] https://gekrafsponorogo.my.id/admin -> login pakai ADMIN_PASSWORD ->
    pendaftar tadi muncul -> klik "Setujui".
[ ] https://gekrafsponorogo.my.id/anggota -> nama yang disetujui muncul.
[ ] https://gekrafsponorogo.my.id/berita dan /event -> tampil data.
[ ] Console browser bersih (tidak ada error merah fatal).

LAPORKAN
URL production, status SSL, hasil tiap item checklist (PASS/FAIL), dan
screenshot homepage 3D + halaman /admin.

ATURAN
- Jangan commit secret ke repo; semua key hanya di Vercel Env Vars.
- Jika build/deploy error, baca log Vercel, perbaiki, redeploy sampai hijau.
- DNS DomaiNesia via dashboard bila tak ada API.
- Jangan ubah desain/konten tanpa diminta; fokus deploy + verifikasi.
```

---

### Ringkasan env yang wajib ada di Vercel

| Variable | Sumber | Sifat |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → API → Project URL | publik |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → API → anon | publik |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → API → service_role | **rahasia** |
| `DATABASE_URL` | Supabase → Database → pooled (6543) | **rahasia** |
| `DIRECT_URL` | Supabase → Database → direct (5432) | **rahasia** |
| `ADMIN_PASSWORD` | tentukan sendiri (login /admin) | **rahasia** |

> Opsional: deploy juga versi 3D standalone ke Cloudflare Pages dari folder
> `webgl/` (lihat `webgl/README.md`) bila ingin mirror di subdomain.
