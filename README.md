<div align="center">
🐃 MinangScript
Koding jo bahaso awak.
npm version

License: MIT

Node.js Version
MinangScript adalah bahasa pemrograman eksperimental turunan JavaScript yang menggunakan sintaks dan kosakata khas Minangkabau. Tetap mempertahankan fleksibilitas dan kekuatan ekosistem JavaScript, namun disajikan dengan sentuhan lokal nan akrab.
</div>
🗺️ Perbandingan Sintaks
| MinangScript | JavaScript | Keterangan |
|---|---|---|
| buek | let | Membuat variable |
| pasti | const | Membuat konstanta |
| karajo | function | Membuat fungsi |
| pulangkan | return | Mengembalikan nilai |
| jiko | if | Kondisi percabangan |
| lainnyo | else | Kondisi alternatif |
| untuak | for | Perulangan for |
| salamo | while | Perulangan while |
| baranti | break | Menghentikan loop |
| lanjuik | continue | Melanjutkan loop |
| bana | true | Boolean benar |
| salah | false | Boolean salah |
| kosong | null | Nilai null |
| indak_jaleh | undefined | Nilai undefined |
| kicekkan | console.log | Output terminal |
| tanyokan | prompt | Input pengguna |
| cubo | try | Blok percobaan error |
| tangkok | catch | Menangkap error |
| akhirnyo | finally | Blok akhir eksekusi |
| kelas | class | Membuat class |
| iko | this | Referensi object |
| baru | new | Membuat instance baru |
| bantuak | typeof | Mengecek tipe data |
✨ Fitur Utama
 * ⚡ Berbasis Node.js: Menerjemahkan sintaks MinangScript menjadi JavaScript murni secara on-the-fly sebelum dieksekusi.
 * 📁 Ekstensi Fleksibel: Mendukung file berformat .minang dan .ms.
 * 🛠️ Fitur Lengkap: Mendukung variabel, fungsi, percabangan, perulangan, object-oriented (class), hingga error handling.
 * 💬 Interaktif: Mendukung input langsung dari terminal melalui fungsi tanyokan().
 * 🪶 Ringan: Tanpa dependensi framework yang berat dan langsung siap digunakan sebagai CLI global (minang).
⚡ Instalasi
Pastikan Node.js sudah terpasang di komputer Anda, lalu jalankan perintah berikut di terminal:
npm install -g minangscript

Cek instalasi dengan mengetik:
minang

> Catatan: Anda juga bisa langsung menjalankannya tanpa instalasi permanen menggunakan npx:
> npx minangscript program.minang
> 
> 
🚀 Quick Start
 * Buat file baru dengan nama halo.minang
 * Masukkan kode berikut:
buek namo = "Sanak";

kicekkan("Halo " + namo + "!");

 * Jalankan program melalui terminal:
minang halo.minang

Output:
Halo Sanak!

Selamat datang di dunia MinangScript. 🐃
🧠 Contoh Program
Struktur kode MinangScript dirancang mirip dengan JavaScript agar programmer dapat beradaptasi dengan cepat:
buek namo = "Uda Coding";
pasti umua = 20;

karajo sapa(n) {
    kicekkan("Halo sanak " + n + "!");
}

sapa(namo);

jiko (umua >= 18) {
    kicekkan("Sanak alah gadang.");
} lainnyo {
    kicekkan("Sanak masih mudo.");
}

Output:
Halo sanak Uda Coding!
Sanak alah gadang.

🏗️ Cara Kerja
MinangScript bekerja dengan menerjemahkan barisan kode bahasa Minangkabau menjadi kode standar JavaScript yang kemudian dieksekusi oleh runtime Node.js.
┌──────────────────────┐
│  File .minang / .ms  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ MinangScript         │
│ Interpreter          │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ Translasi Keyword    │
│ Minang → JavaScript  │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ JavaScript           │
│ Runtime / Node.js    │
└──────────────────────┘

🛠️ Pengembangan (Development)
Jika Anda ingin ikut berkontribusi atau memodifikasi source code MinangScript:
# Clone repository
git clone https://github.com/LivvSKy/MinangScript.git
cd MinangScript

# Install dependensi
npm install

# Hubungkan package secara lokal untuk development
npm link

# Jalankan file contoh
minang contoh.minang

🗺️ Roadmap
 * [x] Interpreter dasar
 * [x] Dukungan keyword Minangkabau
 * [x] Ekstensi .minang & .ms
 * [x] Variabel, Function, & Conditional
 * [x] Perulangan (Loop) & Error Handling
 * [x] Input terminal & Publikasi Package NPM
 * [ ] Pembuatan Lexer & Parser mandiri
 * [ ] Abstract Syntax Tree (AST)
 * [ ] Pesan error khusus berbahasa Minang
 * [ ] Sistem Modul & Standard Library
 * [ ] Ekstensi & Syntax Highlighting untuk VS Code
 * [ ] REPL Interaktif
🤝 Contributing
Kontribusi, laporan issue, ide kosakata baru, maupun kritik dan saran sangat dipersilakan! Silakan buat Pull Request atau buka Issue pada repository GitHub.
📜 License
Distribusi di bawah lisensi MIT. Bebas digunakan, dipelajari, dimodifikasi, dan disebarluaskan.
👤 Author
LivvSKy
 * GitHub: LivvSKy
 * Repository: MinangScript
<div align="center">
Made with JavaScript, Node.js, and a little bit of Minangkabau.
</div>
