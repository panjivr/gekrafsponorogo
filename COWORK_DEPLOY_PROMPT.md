# 🤝 Prompt untuk Cowork — Deploy GEKRAFS Ponorogo (end-to-end)

Salin SELURUH blok di bawah ini dan paste ke agent **cowork** kamu (yang sudah
punya akses terminal/browser ke akun Vercel, Supabase, dan DomaiNesia).

---

```
ROLE: Kamu adalah DevOps engineer. Tugasmu men-deploy sebuah website Next.js 15
ke Vercel sampai LIVE di domain kustom, mengaktifkan database Supabase, dan
mengatur DNS. Kerjakan sampai tuntas, verifikasi tiap langkah, dan laporkan
URL final + status HTTPS. Jangan berhenti sebelum situs bisa diakses di
https://gekrafsponorogo.my.id.

KONTEKS PROYEK
- Repo GitHub  : https://github.com/panjivr/gekrafsponorogo
- Branch deploy: main
- Framework    : Next.js 15 (App Router), build "next build", output ".next"
- Node         : 20 atau 22
- Domain       : gekrafsponorogo.my.id (registrar: DomaiNesia, sudah Active)
- Tujuan       : Vercel (hosting) + Supabase (DB) + DNS di DomaiNesia
- Catatan      : Tanpa env Supabase, situs tetap jalan pakai seed data. Dengan
                 Supabase, konten Berita/Event/Anggota & form pendaftaran live.

LANGKAH 1 — SUPABASE (database)
1. Login ke https://supabase.com, buat project baru (region Singapore/SEA),
   nama "gekrafs-ponorogo". Simpan DB password.
2. Buka SQL Editor, jalankan isi file repo `supabase/schema.sql`
   (membuat tabel news, events, members + Row Level Security).
3. Jalankan juga `supabase/seed.sql` (mengisi 3 berita + 3 event awal).
4. Ambil kredensial:
   - Settings → API:
       Project URL          -> nilai untuk NEXT_PUBLIC_SUPABASE_URL
       anon public key      -> nilai untuk NEXT_PUBLIC_SUPABASE_ANON_KEY
       service_role key     -> nilai untuk SUPABASE_SERVICE_ROLE_KEY  (RAHASIA)
   - Settings → Database → Connection string:
       Pooled (port 6543)   -> DATABASE_URL  (tambahkan ?pgbouncer=true)
       Direct (port 5432)   -> DIRECT_URL

LANGKAH 2 — VERCEL (deploy)
Opsi A (CLI, paling otomatis):
   npm i -g vercel
   vercel login
   git clone https://github.com/panjivr/gekrafsponorogo && cd gekrafsponorogo
   vercel link        # buat/link project "gekrafs-ponorogo"
   # set environment variables (Production) — ganti <...> dengan nilai Langkah 1:
   vercel env add NEXT_PUBLIC_SUPABASE_URL production
   vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production
   vercel env add SUPABASE_SERVICE_ROLE_KEY production
   vercel env add DATABASE_URL production
   vercel env add DIRECT_URL production
   vercel --prod      # deploy production
Opsi B (Dashboard):
   - vercel.com → Add New → Project → import panjivr/gekrafsponorogo
   - Production Branch: main (Settings → Git)
   - Settings → Environment Variables: tambahkan 5 variabel di atas (Production+Preview)
   - Deploy / Redeploy
Verifikasi: buka URL *.vercel.app, pastikan halaman "/", "/berita", "/daftar" 200.

LANGKAH 3 — DOMAIN gekrafsponorogo.my.id
1. Vercel → Project → Settings → Domains → Add: gekrafsponorogo.my.id
   (tambah juga www.gekrafsponorogo.my.id, set redirect www → apex).
2. Vercel akan menampilkan record DNS yang diminta. Catat nilainya.
3. Login DomaiNesia → Domains → gekrafsponorogo.my.id → DNS Management,
   buat record (ikuti tampilan Vercel; default Vercel saat ini):
       Type A     | Host @   | Value 76.76.21.21          | TTL 3600
       Type CNAME | Host www | Value cname.vercel-dns.com | TTL 3600
   Jika sudah ada record A/CNAME konflik di @ atau www, hapus/ganti.
4. Tunggu propagasi (5–60 menit). Cek: `dig gekrafsponorogo.my.id +short`
   harus mengembalikan 76.76.21.21. Vercel akan auto-issue SSL (HTTPS).

LANGKAH 4 — VERIFIKASI AKHIR
- curl -I https://gekrafsponorogo.my.id  -> HTTP/2 200, ada header SSL
- Buka di browser: hero + video + marquee tampil, menu jalan, /daftar bisa submit
  (data masuk ke tabel members Supabase dengan status 'pending').
- Laporkan: URL vercel, status domain, status HTTPS, dan screenshot homepage.

ATURAN
- Jangan commit secret ke repo. Semua key hanya di Environment Variables Vercel.
- Jika DomaiNesia tak punya API, lakukan langkah DNS via dashboard secara manual.
- Jika ada error build, baca log Vercel, perbaiki, redeploy sampai hijau.
```

---

### Env variables yang dibutuhkan (ringkas)

| Variable | Sumber | Sifat |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase → Settings → API → Project URL | publik |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase → Settings → API → anon | publik |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role | **rahasia** |
| `DATABASE_URL` | Supabase → Database → Connection (pooled 6543) | **rahasia** |
| `DIRECT_URL` | Supabase → Database → Connection (direct 5432) | **rahasia** |

### Record DNS DomaiNesia (ringkas)

| Type | Host | Value | TTL |
|---|---|---|---|
| A | `@` | `76.76.21.21` | 3600 |
| CNAME | `www` | `cname.vercel-dns.com` | 3600 |

> Selalu utamakan nilai yang DITAMPILKAN Vercel di Settings → Domains bila berbeda.
