# GEKRAFS Ponorogo — Versi 3D WebGL (immersive)

Landing page 3D immersive bertema **Reog** (emas–merah–hitam), dibangun dengan
**Three.js + GSAP** dalam **satu file `index.html`** (self-contained, semua CSS/JS
inline, library via CDN). Tema visual sengaja berbeda dari situs utama (Next.js)
sesuai master prompt 3D.

## Pratinjau langsung
Sudah disalin ke situs utama dan live di:
**https://gekrafsponorogo.my.id/3d/** (otomatis ikut deploy Vercel).

## Deploy ke Cloudflare Pages (sesuai prompt)
1. Login **dash.cloudflare.com** → **Workers & Pages** → **Create** → **Pages**.
2. **Upload assets** (atau connect repo, build output dir = `webgl`).
3. Drag & drop **isi folder `webgl/`** (file `index.html`).
4. Deploy. Opsional: tambahkan custom domain / subdomain
   (mis. `3d.gekrafsponorogo.my.id`) lewat DNS Cloudflare/DomaiNesia.

## Catatan teknis
- `renderer.setPixelRatio(min(devicePixelRatio, 1.5))`.
- Partikel adaptif: desktop ~46.000, mobile ~14.000, dan −50% bila
  `navigator.hardwareConcurrency < 4`.
- Menghormati `prefers-reduced-motion` (WebGL & animasi dimatikan).
- Hero: partikel emas/merah membentuk siluet Dadak Merak (peacock fan) +
  parallax mouse; finale CTA: "gold dust explosion".
- Three.js via ES module importmap (`three@0.160`), GSAP + ScrollTrigger via CDN.
