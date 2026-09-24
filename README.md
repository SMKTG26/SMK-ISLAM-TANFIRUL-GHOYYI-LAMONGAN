# Website SPMB SMK Islam Tanfirul Ghoyyi 2027/2028

Website statis yang siap diunggah ke repository GitHub Pages.

## Isi

- `index.html` — halaman utama
- `style.css` — tampilan website
- `script.js` — fungsi halaman utama
- `data.js` — seluruh data yang ditampilkan
- `admin.html` — editor konten
- `admin.css` / `admin.js` — tampilan dan fungsi editor
- `assets/` — gambar placeholder

## Data SPMB yang sudah terpasang

### Waktu pendaftaran
- INDENT: 1 September s.d. 31 Desember 2026 — Gratis paket seragam
- GELOMBANG 1: 1 Januari s.d. 31 Maret 2027 — Potongan 50% paket seragam
- GELOMBANG 2: 1 April s.d. 30 Juni 2027

### Cara pendaftaran
- Scan barcode atau buka link
- Fotokopi KK
- NISN
- Akta kelahiran

Link pendaftaran:
https://bit.ly/SPMB-SMKTG-2027-2028

### Kegiatan
Harian:
- Lalaran Alfiyah
- Tartil Al-Qur'an
- Setoran Hafalan Al-Qur'an
- English Class

Bulanan:
- Munaqosah
- Khitobah
- Istighosah
- Ziarah Muasis
- Seminar & Workshop
- Manaqib

Tahunan:
- Kunjungan Industri
- Praktek Kerja Lapangan

## Cara upload ke GitHub

1. Buat repository baru dan pilih **Public**.
2. Upload seluruh isi ZIP ke **root repository**, bukan ke folder tambahan.
3. Pastikan `index.html` ada langsung di root.
4. Buka **Settings → Pages**.
5. Pada Source pilih **Deploy from a branch**.
6. Branch: `main`, folder: `/ (root)`.
7. Klik **Save**.
8. Tunggu deployment selesai.
9. Buka alamat Pages yang diberikan GitHub.

## Cara mengedit

Buka:
`https://USERNAME.github.io/NAMA-REPOSITORY/admin.html`

Edit/upload foto di halaman editor, lalu klik **SIMPAN & DOWNLOAD data.js**.

Kemudian:
1. Download `data.js`.
2. Masuk repository GitHub.
3. Ganti `data.js` lama dengan file baru.
4. Commit perubahan.
5. Tunggu GitHub Pages memperbarui website.

## Foto dan video

Foto utama dapat diupload melalui editor dan akan dimasukkan ke `data.js` sebagai data URL. Untuk menjaga repository tetap ringan, gunakan foto yang sudah dikompres.

Untuk video, editor menggunakan URL video. Video besar sebaiknya ditempatkan pada hosting video/CDN lalu URL-nya dimasukkan ke editor.

## Catatan

Editor adalah editor statis dan tidak memiliki database/login. Siapa pun yang memiliki URL editor dan akses repository sesuai konfigurasi dapat mengubah data yang kemudian diunggah.
