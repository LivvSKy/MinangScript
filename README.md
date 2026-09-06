🐃 MinangScript

# Bahasa pemrograman dengan cita rasa Minangkabau.

MinangScript adalah bahasa pemrograman eksperimental turunan JavaScript yang menggunakan sintaks bahasa Minangkabau.

Kode tetap memiliki kekuatan dan fleksibilitas JavaScript, tetapi keyword-nya diganti dengan kosakata Minangkabau.

JavaScript       →       MinangScript

let              →       buek
const            →       pasti
function         →       karajo
return           →       pulangkan
if               →       jiko
else             →       lainnyo
console.log      →       kicekkan
true             →       bana
false            →       salah

MinangScript berjalan menggunakan Node.js dan menerjemahkan sintaks MinangScript menjadi JavaScript sebelum dieksekusi.

---

✨ Fitur

- Sintaks JavaScript dengan keyword Minangkabau
- Mendukung file ".minang" dan ".ms"
- Berjalan di atas Node.js
- Mendukung variable, function, conditional, loop, class, dan error handling
- Mendukung input pengguna melalui "tanyokan()"
- Bisa digunakan sebagai command "minang"
- Open source dengan lisensi MIT
- Tidak membutuhkan framework besar

---

⚡ Instalasi

Cara tercepat

Pastikan Node.js sudah terpasang.

Kemudian jalankan:

```npm install -g minangscript```

Setelah selesai, cek instalasi:

```minang```

Untuk menjalankan program:

minang program.minang

«Tidak perlu "git clone". Tidak perlu masuk ke folder repository. Install langsung dari npm.»

Alternatif: menggunakan "npx"

Kalau tidak ingin memasang package secara permanen:

npx minangscript program.minang

---

🚀 Quick Start

Buat file:

halo.minang

Isi dengan:

buek namo = "Sanak";

kicekkan("Halo " + namo + "!");

Kemudian jalankan:

minang halo.minang

Output:

Halo Sanak!

Selamat datang di dunia MinangScript. 🐃

---

🧠 Contoh Program

MinangScript sengaja mempertahankan struktur JavaScript sehingga programmer JavaScript dapat beradaptasi dengan cepat.

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

---

📖 Sintaks

MinangScript| JavaScript| Fungsi
"buek"| "let"| Membuat variable
"pasti"| "const"| Membuat konstanta
"karajo"| "function"| Membuat fungsi
"pulangkan"| "return"| Mengembalikan nilai
"jiko"| "if"| Kondisi
"lainnyo"| "else"| Kondisi alternatif
"untuak"| "for"| Perulangan
"salamo"| "while"| Perulangan
"baranti"| "break"| Menghentikan loop
"lanjuik"| "continue"| Melanjutkan loop
"bana"| "true"| Boolean benar
"salah"| "false"| Boolean salah
"kosong"| "null"| Nilai null
"indak_jaleh"| "undefined"| Nilai undefined
"kicekkan"| "console.log"| Output terminal
"tanyokan"| "prompt"| Input pengguna
"cubo"| "try"| Mencoba eksekusi
"tangkok"| "catch"| Menangkap error
"akhirnyo"| "finally"| Eksekusi akhir
"kelas"| "class"| Membuat class
"iko"| "this"| Referensi object
"baru"| "new"| Membuat instance
"bantuak"| "typeof"| Mengecek tipe data

---

🔄 Variable

JavaScript:

let nama = "Livio";
const umur = 17;

MinangScript:

buek namo = "Livio";
pasti umua = 17;

Variable yang dibuat dengan "buek" tetap mengikuti perilaku "let" JavaScript.

---

🔧 Function

karajo tambah(a, b) {
    pulangkan a + b;
}

buek hasil = tambah(10, 20);

kicekkan(hasil);

Output:

30

---

🔀 Conditional

buek umua = 20;

jiko (umua >= 18) {
    kicekkan("Buliah masuak.");
} lainnyo {
    kicekkan("Indak buliah masuak.");
}

---

🔁 For Loop

untuak (buek i = 1; i <= 5; i++) {
    kicekkan("Angko: " + i);
}

Output:

Angko: 1
Angko: 2
Angko: 3
Angko: 4
Angko: 5

---

⏳ While Loop

buek angko = 0;

salamo (angko < 3) {
    kicekkan("Angko: " + angko);
    angko++;
}

---

🧯 Error Handling

MinangScript juga mendukung "try", "catch", dan "finally".

cubo {
    buek data = kosong;

    kicekkan(data.panjang);
} tangkok (error) {
    kicekkan("Ado nan salah: " + error.message);
} akhirnyo {
    kicekkan("Program salasai.");
}

---

💬 Input Pengguna

Gunakan "tanyokan()" untuk meminta input dari terminal.

buek namo = tanyokan("Sia namo sanak? ");

jiko (namo) {
    kicekkan("Rancak bana, " + namo + "!");
} lainnyo {
    kicekkan("Kok diam se?");
}

Pastikan dependency "prompt-sync" tersedia ketika menggunakan fitur input.

---

📁 Extension File

MinangScript mendukung dua extension:

.minang
.ms

Contoh:

program.minang
hello.ms
game.minang
test.ms

Menjalankannya:

minang program.minang

atau:

minang hello.ms

---

🏗️ Cara Kerja

MinangScript menggunakan pendekatan sederhana:

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

Contoh:

buek nama = "Livio";

diterjemahkan menjadi:

let nama = "Livio";

Sedangkan:

kicekkan("Halo!");

menjadi:

console.log("Halo!");

Kemudian kode tersebut dieksekusi oleh Node.js.

---

🛠️ Menjalankan dari Source

Kalau ingin ikut mengembangkan MinangScript, clone repository:

git clone https://github.com/LivvSKy/MinangScript.git
cd MinangScript

Install dependency:

npm install

Jalankan interpreter:

node minang.js contoh.minang

Atau buat command global untuk development:

npm link

Kemudian:

minang contoh.minang

---

📦 Struktur Project

MinangScript/
├── minang.js
├── contoh.minang
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

---

🧪 Testing

Contoh program dapat dijalankan dengan:

npm test

Atau secara langsung:

node minang.js contoh.minang

---

🗺️ Roadmap

MinangScript masih dalam tahap awal pengembangan.

[x] Interpreter dasar
[x] Keyword Minangkabau
[x] File .minang
[x] File .ms
[x] Variable
[x] Function
[x] Conditional
[x] Loop
[x] Error handling
[x] Input terminal
[x] npm package

[ ] Lexer & parser sendiri
[ ] AST
[ ] Error message khusus MinangScript
[ ] Module system
[ ] Standard library
[ ] Formatter
[ ] Syntax highlighting
[ ] VS Code extension
[ ] REPL interaktif

---

🤝 Contributing

Pull request, issue, ide sintaks, dan eksperimen baru sangat dipersilakan.

Alur sederhana:

git clone https://github.com/LivvSKy/MinangScript.git
cd MinangScript
npm install

Buat perubahan, kemudian test:

npm test

Setelah itu buat pull request.

---

📜 License

MinangScript dirilis menggunakan lisensi MIT.

Bebas digunakan, dipelajari, dimodifikasi, dan dikembangkan sesuai ketentuan lisensi.

---

👤 Author

LivvSKy

GitHub:

https://github.com/LivvSKy

Repository:

https://github.com/LivvSKy/MinangScript

---

<div align="center">🐃 MinangScript

Koding jo bahaso awak.

Made with JavaScript, Node.js, and a little bit of Minangkabau.

</div>
