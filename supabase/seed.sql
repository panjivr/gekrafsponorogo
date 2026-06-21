-- GEKRAFS Ponorogo — data awal (opsional).
-- Jalankan SETELAH supabase/schema.sql untuk mengisi Berita & Event awal.
-- Idempotent: aman dijalankan berulang (pakai ON CONFLICT DO NOTHING).

insert into news (slug, title, excerpt, content, category, cover_color, author, published_at) values
('transisi-volunteer-grebeg-suro-menuju-gekrafs',
 'Transisi Volunteer Grebeg Suro Resmi Menuju GEKRAFS Ponorogo',
 'Energi kepanitiaan event diubah menjadi gerakan ekonomi kreatif berkelanjutan. Dari panitia acara menjadi penggerak ekraf Ponorogo.',
 'Kepanitiaan volunteer Grebeg Suro resmi bertransformasi menjadi gerakan ekonomi kreatif berbasis event. Perpisahan kepanitiaan menjadi awal babak baru: membangun ekosistem ekraf Ponorogo yang hidup dari setiap acara.',
 'Organisasi', '#00aeef', 'Tim Media GEKRAFS', '2026-06-10'),
('membangun-ekosistem-ekraf-berbasis-event',
 'Event sebagai Mesin Penggerak Ekonomi Kreatif Ponorogo',
 'Setiap acara menjadi panggung pelaku kreatif — menghidupkan kuliner, kriya, musik, dan UMKM lokal.',
 'Event adalah mesin penggerak ekonomi kreatif. Dari satu event, tumbuh ekosistem ekonomi yang hidup: kuliner, kriya, musik, hingga UMKM lokal mendapat panggung untuk berkembang dan dikenal lebih luas.',
 'Program', '#0087d1', 'Tim Media GEKRAFS', '2026-06-05'),
('17-subsektor-ruang-gerak-ekraf-ponorogo',
 'Mengenal 17 Subsektor Ekonomi Kreatif di Ponorogo',
 'Dari kuliner hingga periklanan — setiap subsektor punya rumahnya dalam struktur GEKRAFS Ponorogo.',
 'GEKRAFS menaungi 17 subsektor ekonomi kreatif. Di Ponorogo, potensi seperti Reog, kuliner khas, dan talenta digital muda menjadi modal kuat untuk menggerakkan ekonomi kreatif daerah.',
 'Edukasi', '#f7c600', 'Tim Media GEKRAFS', '2026-05-28')
on conflict (slug) do nothing;

insert into events (slug, title, description, location, subsector, status, accent, starts_at) values
('konsolidasi-dpc-ponorogo',
 'Konsolidasi & Musyawarah Cabang DPC Ponorogo',
 'Pembentukan tim inti dan penyusunan arah gerak DPC Ponorogo.',
 'Ponorogo, Jawa Timur', 'Organisasi', 'upcoming', '#00aeef', '2026-07-12'),
('pelantikan-pengurus-dpc',
 'Pelantikan Pengurus DPC GEKRAFS Ponorogo',
 'Pelantikan resmi pengurus oleh Pengurus Pusat / Wilayah.',
 'Ponorogo, Jawa Timur', 'Organisasi', 'upcoming', '#0087d1', '2026-08-17'),
('event-perdana-kolaboratif',
 'Aksi Perdana: Event Kolaboratif Pelaku Kreatif',
 'Panggung pertama bagi pelaku kuliner, kriya, musik, dan UMKM lokal.',
 'Alun-alun Ponorogo', 'Event & Sosialisasi', 'upcoming', '#f7c600', '2026-09-06')
on conflict (slug) do nothing;
