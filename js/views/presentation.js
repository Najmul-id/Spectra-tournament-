const slides = [
  {
    section: 'PEMBUKAAN',
    title: 'WELCOME',
    accent: 'COMPETITORS.',
    text: 'Selamat datang di Technical Meeting SPECTRA Tournament Mobile Legends: Bang Bang. Sesi ini menjadi acuan bersama agar seluruh tim memahami alur, aturan, jadwal, dan tanggung jawab selama kompetisi.',
    bullets: [
      'Tanggal kegiatan: 13–14 November 2026.',
      'Tempat: Universitas Hamzanwadi.',
      'Platform: Mobile Legends: Bang Bang.',
      'Mohon setiap tim diwakili ketua tim atau perwakilan resmi.'
    ]
  },
  {
    section: 'TUJUAN KEGIATAN',
    title: 'PLAY WITH',
    accent: 'PURPOSE.',
    text: 'SPECTRA menjadi wadah kompetisi yang positif dan menjunjung sportivitas.',
    bullets: [
      'Menyalurkan minat dan bakat peserta di bidang esports.',
      'Melatih kerja sama tim, strategi, dan komunikasi.',
      'Meningkatkan sportivitas antar peserta.',
      'Mempererat hubungan antar komunitas, kelas, fakultas, sekolah, dan kampus.'
    ]
  },
  {
    section: 'PERSYARATAN PESERTA',
    title: 'TEAM',
    accent: 'ELIGIBILITY.',
    text: 'Peserta yang bertanding adalah tim yang telah mendaftar resmi dan menerima konfirmasi tertulis dari panitia.',
    bullets: [
      'Satu tim terdiri dari 5 pemain inti dan maksimal 1 pemain cadangan.',
      'Setiap pemain hanya boleh terdaftar dan bermain pada satu tim.',
      'Setiap tim wajib menunjuk satu ketua tim sebagai penghubung panitia.',
      'Peserta wajib menggunakan akun Mobile Legends milik sendiri.',
      'Peserta wajib hadir di lokasi dan online di dalam game sesuai jadwal.'
    ]
  },
  {
    section: 'ADMINISTRASI',
    title: 'REGISTRATION',
    accent: '& ROSTER.',
    text: 'Data pendaftaran menjadi dasar verifikasi identitas dan roster pertandingan.',
    bullets: [
      'Data tim: nama tim, asal sekolah/kampus/komunitas, nama ketua, dan nomor WhatsApp.',
      'Data pemain: nama peserta, nickname MLBB, ID server, dan role.',
      'Pendaftaran ditutup 11 November 2026.',
      'Biaya pendaftaran: Rp100.000 per tim; pembayaran melalui DANA, QRIS, atau tunai kepada panitia.',
      'Pergantian pemain sebelum bracket dirilis diperbolehkan. Setelah bracket dirilis, wajib mendapat persetujuan panitia dengan alasan yang dapat dibuktikan.'
    ]
  },
  {
    section: 'SISTEM KOMPETISI',
    title: 'DOUBLE',
    accent: 'ELIMINATION.',
    text: 'Setiap tim memiliki kesempatan bertanding di Upper Bracket dan, setelah kekalahan pertama, Lower Bracket.',
    bullets: [
      'Upper Bracket: jalur tim yang belum pernah kalah.',
      'Kalah di Upper Bracket: turun ke Lower Bracket, bukan langsung tersingkir.',
      'Lower Bracket: jalur tim yang sudah mengalami satu kekalahan.',
      'Kalah di Lower Bracket: tereliminasi dari turnamen.',
      'Pemenang Upper Bracket Final langsung menuju Grand Final.'
    ]
  },
  {
    section: 'FORMAT PERTANDINGAN',
    title: 'BEST OF',
    accent: 'THREE / FIVE.',
    text: 'Pemenang seri ditentukan dari jumlah game yang dimenangkan, bukan dari total kill atau gold.',
    bullets: [
      'Pertandingan reguler menggunakan BO3: tim pertama yang menang 2 game memenangkan seri.',
      'Grand Final dan Grand Final Reset menggunakan BO5: tim pertama yang menang 3 game memenangkan seri.',
      'Jika tim dari Lower Bracket menang di Grand Final, pertandingan dilanjutkan dengan Grand Final Reset BO5.',
      'Mode pertandingan: Custom Draft Pick dengan server Indonesia.',
      'Room pertandingan dibuat oleh panitia.'
    ]
  },
  {
    section: 'ALUR BRACKET',
    title: 'ROAD TO',
    accent: 'CHAMPION.',
    text: 'Setiap hasil pertandingan menentukan jalur tim berikutnya di dalam bracket.',
    bullets: [
      'Pemenang Upper Bracket melaju ke babak Upper berikutnya.',
      'Tim yang kalah di Upper Bracket masuk ke slot Lower Bracket sesuai bagan resmi.',
      'Pemenang Lower Bracket melaju ke babak Lower berikutnya.',
      'Pemenang Lower Bracket Final menjadi lawan pemenang Upper Bracket di Grand Final.',
      'Hasil bracket resmi mengikuti bagan yang telah diumumkan panitia.'
    ]
  },
  {
    section: 'CHECK-IN & KETERLAMBATAN',
    title: 'BE ON',
    accent: 'TIME.',
    text: 'Ketepatan waktu penting agar jadwal pertandingan dan penggunaan dua arena dapat berjalan tertib.',
    bullets: [
      'Setiap tim wajib check-in kepada panitia 10 menit sebelum jadwal pertandingan.',
      'Terlambat lebih dari 5 menit tanpa pemberitahuan: teguran pertama.',
      'Terlambat lebih dari 10 menit: dinyatakan kalah walkover (WO) dengan skor 2–0.',
      'Ketua tim wajib aktif memantau grup WhatsApp informasi.',
      'Jadwal ditentukan panitia dan tidak dapat diganggu gugat kecuali ada alasan yang disetujui.'
    ]
  },
  {
    section: 'ATURAN IN-GAME',
    title: 'DRAFT',
    accent: '& SIDE.',
    text: 'Seluruh game mengikuti ketentuan draft dan sisi yang ditetapkan panitia.',
    bullets: [
      'Game pertama: sisi Blue atau Red ditentukan oleh admin.',
      'Game berikutnya: kedua tim wajib berganti sisi.',
      'Draft mengikuti sistem Draft Pick resmi MLBB yang berlaku saat turnamen.',
      'Berlaku 5 ban hero untuk setiap tim.',
      'Pemain wajib menggunakan nickname dan ID yang telah didaftarkan.'
    ]
  },
  {
    section: 'JEDA & TECHNICAL PAUSE',
    title: 'PAUSE',
    accent: 'PROTOCOL.',
    text: 'Pause hanya digunakan untuk kendala teknis dan harus melalui PJ atau panitia.',
    bullets: [
      'Jeda antar-game dalam satu seri: 5 menit.',
      'Jeda pergantian tim antarseri: 10 menit.',
      'Setiap tim mendapat maksimal 2 technical pause per seri.',
      'Durasi setiap technical pause maksimal 2 menit.',
      'Technical pause hanya dapat diaktifkan melalui PJ/panitia untuk kendala teknis.'
    ]
  },
  {
    section: 'GANGGUAN & REMATCH',
    title: 'FAIR',
    accent: 'PLAY.',
    text: 'Keputusan rematch berada pada PJ berdasarkan kondisi yang tercantum dalam juknis.',
    bullets: [
      'Rematch dapat dipertimbangkan jika terjadi error sistem game sebelum menit ke-3.',
      'Disconnect sebelum first blood dan belum melewati menit ke-3 dapat menjadi alasan rematch.',
      'Bug berat pada room dapat menjadi alasan rematch jika disetujui PJ.',
      'Disconnect akibat jaringan/perangkat pribadi bukan alasan rematch.',
      'Tidak berlaku rematch jika tim sengaja keluar, atau pertandingan telah melewati menit ke-3 maupun terjadi first blood.'
    ]
  },
  {
    section: 'KONEKSI & AREA TIM',
    title: 'DEVICE',
    accent: '& COMMS.',
    text: 'Setiap tim bertanggung jawab memastikan perangkat dan koneksi siap sebelum pertandingan.',
    bullets: [
      'Gunakan smartphone sendiri dengan game versi terbaru.',
      'Pastikan baterai, perangkat, dan jaringan dalam kondisi siap.',
      'Gunakan jaringan stabil dan hindari mengunduh file besar saat bermain.',
      'Selama game berlangsung, hanya pemain yang bertanding yang boleh berada di area tim.',
      'Satu official tim (pelatih/manager) berada di barisan penonton dan hanya boleh memberi arahan saat jeda resmi.'
    ]
  },
  {
    section: 'LARANGAN',
    title: 'STRICTLY',
    accent: 'PROHIBITED.',
    text: 'Pelanggaran terhadap ketentuan berikut dapat dikenai sanksi sesuai tingkat pelanggaran.',
    bullets: [
      'Cheat, script, hack, bug exploit, atau aplikasi pihak ketiga/ilegal yang memberi keuntungan.',
      'Menggunakan akun orang lain, joki, pemain pengganti tidak terdaftar, atau mengganti pemain tanpa izin.',
      'Toxic, berkata kasar, pelecehan, provokasi berlebihan, ujaran kebencian, rasisme, SARA, atau diskriminasi.',
      'Spam chat berlebihan dan mengulur waktu tanpa alasan jelas.',
      'Kerja sama tidak sportif, mengatur hasil pertandingan (match fixing), atau menyebarkan informasi palsu tentang event.'
    ]
  },
  {
    section: 'SANKSI',
    title: 'DISCIPLINE',
    accent: '& PENALTIES.',
    text: 'Sanksi diberikan berdasarkan jenis dan tingkat pelanggaran. Pelanggaran berat dapat langsung dikenai sanksi berat.',
    bullets: [
      'Ringan: contoh terlambat check-in atau komunikasi tidak sopan — teguran tertulis.',
      'Sedang: contoh pelanggaran draft/sisi atau komunikasi dengan pihak luar saat game — pengurangan satu game atau kehilangan hak pilih sisi.',
      'Berat: contoh cheat, joki, match fixing, atau pelecehan — diskualifikasi tim dan pencabutan hadiah.',
      'Sanksi lain yang tercantum: teguran, pengurangan hak pause, kekalahan match, diskualifikasi, dan blacklist event berikutnya.',
      'Pemain yang melewati batas mendapat 2 peringatan; peringatan berikutnya membuat pemain dikeluarkan.'
    ]
  },
  {
    section: 'HASIL & PROTES',
    title: 'REPORT',
    accent: '& APPEAL.',
    text: 'Hasil pertandingan dan keberatan harus disampaikan melalui jalur resmi.',
    bullets: [
      'Room ID dan password dibagikan oleh panitia; tim wajib masuk sesuai waktu yang ditentukan.',
      'Setelah pertandingan selesai, pemenang wajib mengirim screenshot hasil pertandingan kepada panitia.',
      'Protes diajukan kepada PJ paling lambat 10 menit setelah game terakhir selesai.',
      'Protes wajib disertai bukti screenshot atau rekaman layar. Protes yang melewati batas waktu tidak diproses.',
      'Keputusan panitia bersifat final dan mengikat.'
    ]
  },
  {
    section: 'TATA KERJA PANITIA • USULAN OPERASIONAL',
    title: 'OFFICIAL',
    accent: 'RESPONSIBILITY.',
    text: 'Bagian ini merupakan usulan pembagian tugas operasional untuk mendukung aturan juknis; bukan bab ketentuan panitia yang tertulis di dokumen juknis.',
    bullets: [
      'Koordinator turnamen: mengesahkan jadwal, bracket, keputusan teknis, dan koordinasi antarbagian.',
      'Admin bracket/data: memverifikasi roster, mengelola undian, memasukkan skor, dan memastikan hasil sesuai bukti.',
      'PJ/wasit arena: memimpin check-in, membuat/mengelola room, mengawasi draft, pause, dan melaporkan insiden.',
      'Operator arena 1 dan 2: menjaga agar dua pertandingan berjalan terpisah, mencatat waktu, serta mencegah benturan jadwal tim.',
      'Dokumentasi/komunikasi: mengarsipkan screenshot hasil, menyampaikan jadwal dan perubahan resmi, serta menjaga informasi tetap satu pintu.',
      'Seluruh panitia wajib netral, tidak mengubah hasil tanpa bukti, menjaga data peserta, dan mencatat setiap keputusan penting.'
    ]
  },
  {
    section: 'ALUR DUA ARENA • USULAN OPERASIONAL',
    title: 'TWO ARENAS',
    accent: 'ONE STANDARD.',
    text: 'Dua pertandingan dapat berjalan bersamaan selama tidak ada tim yang dijadwalkan di dua arena pada waktu yang sama.',
    bullets: [
      'Arena 1 dan Arena 2 memiliki PJ/operator serta pencatatan hasil masing-masing.',
      'Sebelum menetapkan pertandingan paralel, pastikan kedua match sudah memiliki dua tim dan tidak saling bergantung pada hasil yang belum selesai.',
      'Jangan menjadwalkan tim yang sama pada dua arena secara bersamaan.',
      'Sediakan jeda 10 menit untuk pergantian seri dan 5 menit antar-game.',
      'Jika terjadi keterlambatan atau gangguan, koordinator menjadwalkan ulang dan mengumumkannya melalui kanal resmi.'
    ]
  },
  {
    section: 'CATATAN FINALISASI',
    title: 'BRACKET',
    accent: 'CONFIRMATION.',
    text: 'Ada satu hal yang harus dikonfirmasi panitia sebelum undian dan bracket resmi diumumkan.',
    bullets: [
      'Juknis menyebut format dirancang untuk 20 tim.',
      'Namun tabel daftar pertandingan M1–M15 hanya menampilkan Seed 1 sampai Seed 8.',
      'Karena itu, bagan 20 tim, penempatan bye, dan alur perpindahan tim harus disahkan terlebih dahulu oleh koordinator.',
      'Jangan mengunci undian atau mempublikasikan bracket final sebelum ketidaksesuaian ini diselesaikan.',
      'Jika ada perubahan juknis, sampaikan secara resmi kepada seluruh ketua tim.'
    ]
  },
  {
    section: 'PENUTUP',
    title: 'COMPETE WITH',
    accent: 'HONOR.',
    text: 'Seluruh peserta dianggap telah membaca dan menyetujui juknis dengan melakukan pendaftaran. Mari menjaga kompetisi tetap aman, tertib, dan sportif.',
    bullets: [
      'Hadiah juknis: Juara 1 uang tunai + sertifikat + plakat; Juara 2 dan 3 uang tunai + sertifikat; MVP uang tunai + sertifikat.',
      'Jika ada update besar Mobile Legends sebelum event, panitia berhak menyesuaikan aturan.',
      'Sesi tanya jawab: sampaikan pertanyaan melalui ketua tim atau moderator.',
      'Terima kasih dan selamat bertanding di SPECTRA Tournament 2026!'
    ]
  }
];

let index = 0;
let keyHandlerAttached = false;

export function initPresentation() {
  const modal = document.getElementById('presentation');
  const number = document.getElementById('slideNumber');
  const title = document.getElementById('slideTitle');
  const text = document.getElementById('slideText');
  const section = document.getElementById('slideSection');
  const prev = document.getElementById('prevSlide');
  const next = document.getElementById('nextSlide');

  if (!modal || !number || !title || !text || !prev || !next) return;

  const paint = () => {
    const slide = slides[index];
    number.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
    if (section) section.textContent = slide.section;
    title.innerHTML = `${slide.title}<br><span>${slide.accent}</span>`;
    text.innerHTML = `<p>${slide.text}</p><ul>${slide.bullets.map(item => `<li>${item}</li>`).join('')}</ul>`;
    prev.disabled = index === 0;
    next.textContent = index === slides.length - 1 ? 'SELESAI ✓' : 'NEXT →';
  };

  const close = () => modal.classList.add('hidden');
  const advance = () => {
    if (index < slides.length - 1) {
      index += 1;
      paint();
    } else {
      close();
    }
  };

  document.getElementById('startPresentation')?.addEventListener('click', () => {
    index = 0;
    paint();
    modal.classList.remove('hidden');
  });
  document.getElementById('closePresentation')?.addEventListener('click', close);
  next.addEventListener('click', advance);
  prev.addEventListener('click', () => {
    index = Math.max(0, index - 1);
    paint();
  });

  if (!keyHandlerAttached) {
    document.addEventListener('keydown', event => {
      if (modal.classList.contains('hidden')) return;
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') advance();
      if (event.key === 'ArrowLeft') {
        index = Math.max(0, index - 1);
        paint();
      }
    });
    keyHandlerAttached = true;
  }
}
