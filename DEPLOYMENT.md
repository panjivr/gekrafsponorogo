# 🚀 Panduan Deploy — gekrafsponorogo.my.id

Panduan lengkap men-deploy website GEKRAFS Ponorogo ke **Vercel** dan
menyambungkannya ke domain **gekrafsponorogo.my.id** (terdaftar di DomaiNesia).

> Repo sudah 100% siap deploy. `npm run build` lolos, semua route 200.
> Tanpa database pun situs tampil penuh (memakai seed data).

---

## A. Deploy ke Vercel (±5 menit)

1. Buka **https://vercel.com** → **Sign Up / Login** pakai akun **GitHub** (`panjivr`).
2. Klik **Add New… → Project**.
3. Pilih repository **`panjivr/gekrafsponorogo`** → **Import**.
4. Vercel otomatis mendeteksi **Next.js**. Biarkan setting default
   (Build: `next build`, Output: `.next`).
5. (Opsional) Buka **Environment Variables** dan isi dari bagian **C** di bawah.
   Boleh dilewati dulu — situs tetap jalan dengan seed data.
6. Klik **Deploy**. Tunggu ±1–2 menit hingga muncul URL `*.vercel.app`.

> **Production branch:** pastikan di **Settings → Git → Production Branch**
> terpilih branch yang berisi kode (`main` setelah di-merge, atau
> `claude/intelligent-goldberg-pr5vjz`).

---

## B. Sambungkan domain gekrafsponorogo.my.id

### Di Vercel
1. Buka project → **Settings → Domains**.
2. Ketik `gekrafsponorogo.my.id` → **Add**. (Tambah juga `www.gekrafsponorogo.my.id` bila mau.)
3. Vercel menampilkan record DNS yang harus dibuat.

### Di DomaiNesia (Domains → gekrafsponorogo.my.id → **DNS Management**)
Tambahkan record berikut:

| Type  | Name / Host | Value / Target            | TTL  |
|-------|-------------|---------------------------|------|
| A     | `@`         | `76.76.21.21`             | 3600 |
| CNAME | `www`       | `cname.vercel-dns.com`    | 3600 |

> Jika Vercel menampilkan nilai berbeda, **ikuti yang ditampilkan Vercel**.
> Propagasi DNS biasanya 5–60 menit. Setelah valid, Vercel otomatis
> menerbitkan sertifikat **HTTPS** (SSL) gratis.

### Alternatif (pakai Cloudflare)
1. Tambahkan situs `gekrafsponorogo.my.id` di Cloudflare → salin 2 nameserver Cloudflare.
2. Di DomaiNesia → **Nameservers** → ganti ke nameserver Cloudflare.
3. Di Cloudflare DNS, buat record A `@ → 76.76.21.21` (Proxy **DNS only/abu-abu**)
   dan CNAME `www → cname.vercel-dns.com`.

---

## C. (Opsional) Aktifkan database Supabase

Tanpa ini, Berita/Event/Anggota memakai seed data dan form pendaftaran tetap
menampilkan sukses (data tidak tersimpan). Untuk data nyata:

1. Buat project gratis di **https://supabase.com**.
2. **SQL Editor** → tempel & jalankan isi file `supabase/schema.sql`.
3. **Project Settings → API**, salin:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (rahasia, server saja)
4. **Project Settings → Database → Connection string** untuk `DATABASE_URL`
   (pooled, port 6543) dan `DIRECT_URL` (direct, port 5432).
5. Masukkan semua nilai itu ke **Vercel → Settings → Environment Variables**
   (Production + Preview), lalu **Redeploy**.

---

## D. Checklist selesai

- [ ] Project ter-import & deploy di Vercel (URL `*.vercel.app` hidup)
- [ ] Domain `gekrafsponorogo.my.id` ditambahkan di Vercel & DNS dibuat di DomaiNesia
- [ ] HTTPS aktif (gembok hijau)
- [ ] (Opsional) Env Supabase diisi & redeploy → data live
