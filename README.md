# Media Pembelajaran Interaktif Spesimen Awetan Farmasi

## Deskripsi Proyek
Proyek ini merupakan rancang bangun media pembelajaran interaktif berbasis Raspberry Pi 4 yang memadukan spesimen awetan hasil fiksasi formalin dan embedding resin bening dengan konten audio-visual serta layar sentuh. Sistem ini dirancang untuk mengatasi keterbatasan media pembelajaran konvensional pada pendidikan farmasi dengan menyajikan informasi farmakologis secara digital, interaktif, dan multisensori. Proyek ini dikembangkan sebagai Karya Tulis Ilmiah (KTI) di Program Studi D-III Teknik Elektromedik, Politeknik Unggulan Kalimantan.

## Fitur Utama
*   **Antarmuka Layar Sentuh (Touchscreen):** Pengguna dapat berinteraksi dan menavigasi menu pembelajaran secara langsung menggunakan DFRobot LCD Touchscreen Capacitive IPS 5" DSI.
*   **Materi Farmakognosi Audio-Visual:** Menyajikan informasi morfologi, nama ilmiah, manfaat, serta video animasi dan penjelasan suara untuk enam spesimen dasar: Jahe, Kunyit, Daun Sirih, Lidah Buaya, Temulawak, dan Kencur.
*   **Kuis Evaluasi Interaktif:** Dilengkapi dengan fitur kuis di akhir sesi untuk mengevaluasi pemahaman pengguna terhadap materi, lengkap dengan perhitungan skor otomatis.
*   **Sistem Audio Terintegrasi:** Menggunakan speaker aktif untuk memberikan *feedback* suara dan narasi materi guna memperkuat retensi informasi pengguna.

## Spesifikasi Perangkat Keras (Hardware)
*   **Mini Computer:** Raspberry Pi 4 Model B sebagai pusat pemrosesan utama.
*   **Layar:** DFRobot LCD Touchscreen Capacitive IPS 5" DSI.
*   **Penyimpanan:** Memory Card SD SanDisk Extreme Pro 128 GB.
*   **Audio & Pendingin:** Speaker aktif dan Fan Brushless DC 12V-0.2A (Exhaust Fan) dipasang pada bodi akrilik untuk sirkulasi udara.
*   **Sistem Daya:** Menggunakan sistem dua jalur (Dual Power Supply). Adaptor DC 5V/3A khusus untuk menyuplai daya ke Raspberry Pi 4, serta Adaptor DC 12V/3A yang diteruskan melalui DC to DC Buck Converter untuk menyuplai daya ke speaker dan kipas.

## Teknologi Perangkat Lunak (Software)
*   **Sistem Operasi:** Raspberry Pi OS.
*   **Aplikasi Web (Front-End):** HTML, CSS, JavaScript, dan framework Bootstrap 5.
*   **Editor & Desain:** Visual Studio Code, Figma, Canva, dan Fritzing untuk desain skematik.

## Standar Operasional Pengoperasian (SOP)
Untuk menjalankan media pembelajaran ini, ikuti langkah-langkah berikut:
1. Hubungkan kabel daya ke stopkontak, lalu tekan sakelar pada posisi ON.
2. Tunggu proses *booting* hingga *desktop* utama muncul di layar LCD.
3. Buka aplikasi media pembelajaran dari desktop, klik "Execute" jika diminta, lalu masuk ke mode layar penuh (*full screen*) pada peramban.
4. Klik "Mulai" pada halaman utama, pilih spesimen yang ingin dipelajari, baca deskripsi, lalu klik "Tonton Video" untuk melihat animasi dan mendengar penjelasan.
5. Setelah selesai mempelajari materi, kembali ke halaman menu untuk memulai kuis dan kerjakan hingga skor akhir ditampilkan.
6. **Prosedur Shutdown:** Tutup aplikasi dan peramban, buka menu utama di desktop lalu pilih "Shutdown". Tunggu hingga layar benar-benar hitam dan sistem mati sepenuhnya, baru kemudian tekan sakelar ke posisi OFF.
