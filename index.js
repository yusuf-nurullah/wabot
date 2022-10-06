const wa = require('@open-wa/wa-automate');

wa.create({
  sessionId: "COVID_HELPER",
  multiDevice: true, //required to enable multiDevice support
  authTimeout: 60, //wait only 60 seconds to get a connection with the host account device
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'PT_BR',
  logConsole: false,
  popup: true,
  qrTimeout: 0, //0 means it will wait forever for you to scan the qr code
}).then(client => start(client));

function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Hallo Mas Quick!') {
      await client.sendText(message.from, '👋 *Hallo Bapak/Ibu!*\nLayanan ini merupakan layanan informasi Proses seleksi di CV. Karya Hidup Sentosa (Quick Traktor). Silakan menyesuaikan kebutuhan informasi Anda melalui beberapa pertanyaan yang tersedia di bawah ini:\n\nSilakan inputkan kode nomor pertanyaan (diawali dengan tanda titik) untuk mendapatkan jawaban yang anda inginkan\nContoh: untuk jawaban pertanyaan nomor 1 ketik *.1* \n\n(.1) Info *lowongan pekerjaan*.\n\n(.2) Bagaimana *cara mendaftar/apply kerja* di CV. Karya Hidup Sentosa (Quick)?\n\n(.3) Info penting terkait *E-Recruitment* CV. Karya Hidup Sentosa (Quick).\n\n(.4) Apakah peserta yang sudah pernah *Psikotes* dapat mendaftar kembali?\n\n(.5) Mohon informasi mengenai *Lokasi Pelaksanaan Seleksi* di CV. Karya Hidup Sentosa (Quick)!\n\nPertanyaan lain dapat disampaikan melalui No. Whatsapp 0822-2508-4942 untuk menghubungkan Anda secara langsung ke Tim Seleksi CV. KHS.\n\nTerimakasih!');
    }
    if (message.body === '.1') {
      await client.sendText(message.from, 'Info Lowongan Pekerjaan di CV Karya Hidup Sentosa (QUICK) dapat dicek di Website Resmi kami: *https://quick.co.id/karier* ya, Bapak/Ibu');
    }
    else if (message.body === '.100') {
      await client.sendText(message.from, 'Saat ini, CV Karya Hidup Sentosa (QUICK) sudah menggunakan *Sistem E-Recruitment* atau pendaftaran kerja secara *online*, sehingga Bapak/Ibu tidak perlu mengirimkan berkas lamaran secara soft-file maupun hard-file ya!\n\nSilakan melakukan pendaftaran melalui *link: http://recruit.quick.co.id/ERS*\n\n*LANGKAH PENDAFTARAN E-RECRUITMENT QUICK:*\n\n1. Buka link *(www.recruit.quick.co.id/ERS)* pada browser device Anda, lalu klik *REGISTER.*\n\n2. Isi keterangan tersedia *(JANGAN SAMPAI SALAH PENULISAN KARENA PROSES REGISTRASI AKAN BERMASALAH)* berupa No. KTP, Nama Lengkap, Email, No. Whatsapp dan Password *(Ingat password baik-baik, apabila perlu, dicatat!)*.\n\n3. Buka *E-MAIL* untuk melakukan *Verifikasi Akun QUICK* (apabila tidak tertera di Inbox, mohon untuk melakukan pengecekan di *Trash/Spam/Junk/Sampah*, bila belum mendapatkan E-Mail coba klik *KIRIM ULANG* di laman E-Recruitment)\n\n4. Setelah verifikasi selesai, masuk kembali ke laman E-Recruitment untuk melakukan *LOG IN* menggunakan *E-Mail* dan *Password*, lalu input keterangan data pribadi sesuai dengan kondisi Anda yang sebenarnya *(Ketidaksesuaian data dengan berkas resmi dapat MENGGUGURKAN Anda dari Proses Seleksi di QUICK)*\n\n(.0) Kembali ke Menu Sebelumnya.');
    }
    else if (message.body === '.0') {
      await client.sendText(message.from, '👋 *Hallo Bapak/Ibu!*\nLayanan ini merupakan layanan informasi Proses seleksi di CV. Karya Hidup Sentosa (Quick Traktor). Silakan menyesuaikan kebutuhan informasi Anda melalui beberapa pertanyaan yang tersedia di bawah ini:\n\n(.1) Info *lowongan pekerjaan*.\n\n(.2) Bagaimana *cara mendaftar/apply kerja* di CV. Karya Hidup Sentosa (Quick)?\n\n(.3) Info penting terkait *E-Recruitment* CV. Karya Hidup Sentosa (Quick).\n\n(.4) Apakah peserta yang sudah pernah *Psikotes* dapat mendaftar kembali?\n\n(.5) Mohon informasi mengenai *Lokasi Pelaksanaan Seleksi* di CV. Karya Hidup Sentosa (Quick)!\n\nPertanyaan lain dapat disampaikan melalui No. Whatsapp 0822-2508-4942 untuk menghubungkan Anda secara langsung ke Tim Seleksi CV. KHS.\n\nTerimakasih!');
    }
    else if (message.body === '.3') {
      await client.sendText(message.from, 'Berikut info penting terkait *E-Recruitment.*\n\n1. NIK / No. KTP hanya dapat digunakan untuk 1 akun *(Menggunakan No. KTP pihak lain dapat dikenakan sanksi GUGUR)*.\n\n2. Data Registrasi berupa E-mail akan terhubung dengan NIK sehingga *pastikan penulisan benar*. Apabila terdapat kesalahan, peserta akan mengalami kesulitan untuk melakukan verifikasi maupun pendaftaran.\n\n3. Bila *e-mail verifikasi* tidak ditemukan dalam *Inbox E-mail*, peserta dapat melakukan pengecekan pada *Trash/Spam/Junk/Sampah E-mail*, atau mengunjungi kembali laman E-Recruitment untuk klik pilihan *KIRIM ULANG Verifikasi E-mail*.\n\n4. Data input yang dituliskan harus *valid* dan *dapat dibuktikan dengan menunjukkan berkas/bukti resmi yang diterbitkan oleh Institusi yang berwenang*. Ketidaksesuaian data dapat *MENGGUGURKAN* Anda dari Proses Seleksi QUICK.\n\n5. Pemilihan lokasi kerja disesuaikan dengan *domisili* peserta.\n\n6. Untuk lulusan *SMK Sederajat*, posisi tersedia: Operator, Administrasi, Drafter, dll (sesuai dengan kualifikasi pada Info Lowongan Kerja). Untuk lulusan *D3/S1* Sederajat, posisi tersedia: Staff, Desainer, dll (sesuai dengan kualifikasi pada Info Lowongan Kerja).\n\n(.0) Kembali ke Menu Sebelumnya.');
    }
    else if (message.body === '.4') {
      await client.sendText(message.from, 'Untuk peserta yang sudah *pernah* mengikuti Psikotes hingga tahapan selanjutnya di CV Karya Hidup Sentosa (QUICK) sudah *tidak bisa mendaftar kembali* ya, Bapak/Ibu.\n\n Tapi jangan khawatir, untuk Bapak/Ibu yang pernah terjadwal tes namun *belum hadir*, Anda dapat mengajukan *penjadwalan ulang* ke Tim Seleksi QUICK.\n\n Ketik (.jadwalkan) tanpa tanda kurung untuk Mengajukan Penjadwalan Ulang.\n\n(.0) Kembali ke Menu Sebelumnya.');
    }
    else if (message.body === '.jadwalkan') {
      await client.sendText(message.from, 'Silakan tulis *sesuai format* berikut untuk request pendjadwalan ulang.\n\nPilihan Pendidikan Terakhir:\n\n1. SMK Sederajat\n2. D3/S1\n\n*FORMAT: RESCH_PEND TERAKHIR_NAMA_TANGGAL TES SEBELUM*\n\nCONTOH: RESCH_SMK_AHMAT SAPRI_20 AGUSTUS 2021.');
    }
    else if (message.body === '.5') {
      await client.sendText(message.from, 'Untuk seleksi dengan penempatan area Daerah Istimewa Yogyakarta: *Kantor Pusat Yogyakarta* dan *Plant Kulonprogo*,\n\nPelaksanaan seleksi dilakukan di *Kantor Pusat* kami (Jl. Magelang No. 144 Yogyakarta, gmaps link: https://goo.gl/maps/2KPftP9VMvJMxuSeA).\n\nSedangkan, untuk seleksi dengan *penempatan Cabang* (list cabang dapat dilihat di: www.quick.co.id/kontak-kami),\npelaksanaan seleksi dilakukan di *Area Cabang yang membuka lowongan pekerjaan* saat itu.\n\nSampai dengan saat ini, metode seleksi masih dilakukan secara *OFFLINE*, sehingga memerlukan kehadiran fisik dari Bapak/Ibu ya.\n\n(.0) Kembali ke Menu Sebelumnya.');
    }
    else if (message.body === '.2') {
      await client.sendFile(message.from,'https://quick.co.id/recruit/assets/files/ERecruitment/Flow_Erecruitment.pdf','Flow_Erecruitment.pdf', `Alur recruitment QUICK`);
    }
  });
}