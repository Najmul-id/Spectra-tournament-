# SPECTRA Esports Tournament System

Frontend statis untuk sistem turnamen esports berbasis HTML, CSS, JavaScript ES Modules, dan Supabase. Dirancang agar dapat diedit melalui Acode di Android dan di-host di GitHub Pages.

## 1. Teknologi
- HTML, CSS, JavaScript (ES Modules)
- Supabase Auth, PostgreSQL, Realtime
- GitHub Pages untuk hosting statis

## 2. Cara memasang melalui Acode
1. Ekstrak ZIP `SPECTRA-ESPORTS.zip`.
2. Salin/replace isi folder hasil ekstrak ke folder proyek `SPECTRA-ESPORTS` yang sudah dibuat di Acode.
3. Buka `index.html` melalui fitur Preview/Run Acode.
4. Pastikan koneksi internet aktif.
5. Buka halaman dan cek status Supabase di kanan atas.

> Jalankan melalui preview server Acode, bukan membuka file HTML sebagai `file://`, karena JavaScript module dan autentikasi lebih konsisten melalui HTTP.

## 3. Konfigurasi Supabase
Buka `js/database/supabase.js`. URL dan publishable key sudah diisi dengan konfigurasi proyek yang sebelumnya diberikan di percakapan. Jika membuat proyek baru, ganti kedua nilai tersebut.

**Jangan pernah memasukkan `service_role` atau secret key ke frontend.** Publishable key boleh digunakan di browser karena keamanan data harus ditegakkan dengan Row Level Security (RLS).

## 4. Database yang dibutuhkan
Kode ini mengasumsikan tabel dan kolom berikut sudah tersedia:
- `profiles`: `id`, `full_name`, `role`
- `tournaments`: `id`, `name`, `format`, `regular_match_format`, `final_match_format`, `status`, `draw_locked`, `bracket_locked`, `created_at`
- `teams`: `id`, `tournament_id`, `name`, `tag`, `captain_name`, `draw_position`, `status`, `created_at`
- `matches`: `id`, `tournament_id`, `match_code`, `bracket`, `round_name`, `match_number`, `team1_id`, `team2_id`, `team1_score`, `team2_score`, `winner_id`, `loser_id`, `status`, `completed_at`
- `event_logs`: `tournament_id`, `user_id`, `action`, `details`

Jalankan SQL schema awal yang sudah digunakan saat membuat proyek Supabase. File `database/schema.sql` adalah daftar pemeriksaan struktur dan catatan tambahan, bukan instruksi untuk menghapus database.

## 5. Data awal
Buat satu baris turnamen di tabel `tournaments`, misalnya:
- name: SPECTRA CHAMPIONSHIP 2026
- format: double_elimination
- regular_match_format: BO3
- final_match_format: BO5
- status: registration
- draw_locked: false
- bracket_locked: false

Pastikan akun panitia memiliki baris `profiles` dengan role `admin` atau `committee`. Role audience hanya dapat membaca sesuai kebijakan RLS.

## 6. Catatan penting versi awal
Paket ini merupakan baseline frontend untuk mulai menguji koneksi, login, daftar tim, undian, tampilan bracket, input skor, dan realtime. **Bracket engine pada versi ini membuat struktur Upper Bracket dan placeholder Lower Bracket/Grand Final; alur promosi pemenang dan penurunan loser belum otomatis lengkap.** Jangan gunakan untuk menjalankan turnamen resmi sebelum tahap debugging dan penyelesaian algoritma Double Elimination dilakukan.

Sebelum mengaktifkan operasi admin, periksa RLS untuk memastikan hanya admin/committee yang dapat menulis dan audience hanya membaca. Perubahan skor harus diaudit dan idealnya dipindahkan ke RPC transaksional agar perubahan hasil tidak meninggalkan bracket yang tidak konsisten.

## 7. Deploy ke GitHub Pages
1. Buat repository GitHub.
2. Upload seluruh isi folder proyek (bukan ZIP).
3. Buka Settings → Pages.
4. Pilih deploy from branch, branch `main`, folder `/root`.
5. Simpan dan tunggu URL GitHub Pages tersedia.
6. Tambahkan URL situs ke Supabase Authentication → URL Configuration → Site URL dan Redirect URLs bila diperlukan.

## 8. Batasan
- Tidak memerlukan Node.js atau backend sendiri.
- Admin login memerlukan akun Supabase Auth yang sudah dibuat.
- Satu turnamen terbaru ditampilkan pada halaman publik.
- Semua operasi harus mengikuti RLS Supabase.
