// Lokasi: src/data/missionsData.js

export const missionsData = {
  administration: [
    {
      id: 'admin-1',
      title: 'Misi 1.1: Document Crisis - Audit & Klasifikasi Arsip',
      theme: 'Document Management',
      story: 'Halo, saya Mr. Chris. Menjelang peluncuran koleksi "Aura Spring", meja staf administrasi dibanjiri dokumen mentah. Kamu harus melakukan inspeksi, klasifikasi, audit duplikat, dan validasi arsip kantor.',
      materialTitle: 'Materi: Standar Pengarsipan & Validasi Dokumen Perusahaan',
      materialContent: 'Administrasi perkantoran mengharuskan pemilahan dokumen berdasarkan kategori (Surat Masuk Resmi, Memo Internal, Brosur Pemasok). Dokumen duplikat atau kedaluwarsa wajib diaudit agar tidak mengacaukan basis data.',
      stages: [
        {
          stepName: 'Tahap 1: Klasifikasi Dokumen Masuk',
          instruction: 'Tentukan kategori arsip yang tepat untuk dokumen berikut:',
          items: [
            { id: 'doc-1', name: 'Surat Undangan Vendor Kain v2.pdf', correctCategory: 'Surat Masuk Resmi' },
            { id: 'doc-2', name: 'Memo Internal Jadwal Meeting Desainer.txt', correctCategory: 'Memo Internal' },
            { id: 'doc-3', name: 'Katalog Kancing & Aksesori Baru.png', correctCategory: 'Brosur Pemasok' },
            { id: 'doc-4', name: 'Nota Pembelian Tinta Printer Kantor.pdf', correctCategory: 'Memo Internal' }
          ],
          categories: ['Surat Masuk Resmi', 'Memo Internal', 'Brosur Pemasok']
        },
        {
          stepName: 'Tahap 2: Deteksi Dokumen Duplikat',
          instruction: 'Manakah berkas arsip yang terindikasi cacat atau duplikat kedaluwarsa?',
          options: [
            { id: 'opt-a', text: 'Surat Undangan Vendor Kain v1.pdf (Nomor arsip lama / duplikat)', correct: true },
            { id: 'opt-b', text: 'Laporan Keuangan Resmi Q1 yang sudah diverifikasi Head Manager', correct: false },
            { id: 'opt-c', text: 'Katalog Bahan Musim Semi Edisi Terbaru Aktif', correct: false }
          ]
        },
        {
          stepName: 'Tahap 3: Validasi Surat Keluar',
          instruction: 'Dalam penomoran surat resmi kantor, format bagian manakah yang wajib diletakkan di awal?',
          options: [
            { id: 'opt-a', text: 'Catatan pesan santai untuk rekan kerja', correct: false },
            { id: 'opt-b', text: 'Nomor Urut Surat, Kode Divisi, Bulan, dan Tahun Berjalan', correct: true },
            { id: 'opt-c', text: 'Nama lengkap staf pembuat surat dan hobi pribadinya', correct: false }
          ]
        },
        {
          stepName: 'Tahap 4: Keamanan Arsip Rahasia',
          instruction: 'Bagaimana perlakuan arsip digital yang berisi sketsa desain rahasia koleksi baru?',
          options: [
            { id: 'opt-a', text: 'Disebarkan ke grup media sosial publik agar banyak yang melihat', correct: false },
            { id: 'opt-b', text: 'Dibiarkan di Recycle Bin komputer kantor tanpa sandi', correct: false },
            { id: 'opt-c', text: 'Disimpan dalam folder terenkripsi khusus dengan batasan hak akses manajemen', correct: true }
          ]
        },
        {
          stepName: 'Tahap 5: Rekapitulasi Laporan Arsip',
          instruction: 'Apa tujuan utama dilakukannya audit arsip berkala sebelum peluncuran produk?',
          options: [
            { id: 'opt-a', text: 'Memastikan tidak ada dokumen krusial yang hilang dan mempercepat pencarian data', correct: true },
            { id: 'opt-b', text: 'Menghabiskan waktu kerja staf di depan komputer', correct: false },
            { id: 'opt-c', text: 'Menghapus seluruh sejarah perusahaan tanpa cadangan', correct: false }
          ]
        }
      ]
    },
    {
      id: 'admin-2',
      title: 'Misi 1.2: Audit dan Penataan Dokumen Koleksi',
      theme: 'Document Management',
      story: 'Halo, saya Mr. Chris. Budi melaporkan ada beberapa dokumen penting desain koleksi yang salah tempat di rak arsip. Kita harus segera memindahkannya ke folder digital yang sesuai sebelum audit internal dimulai.',
      materialTitle: 'Materi: Sistem Penomoran & Penyimpanan Arsip',
      materialContent: 'Penyimpanan arsip digital menggunakan sistem penomoran berbasis tanggal dan divisi. Dokumen rahasia perusahaan harus diletakkan pada folder aman berenkripsi.',
      stages: [
        {
          stepName: 'Tahap 1: Identifikasi Folder Arsip',
          instruction: 'Ke folder manakah sketsa desain gaun eksklusif harus dipindahkan?',
          options: [
            { id: 'a2-1', text: 'Folder Publik Umum Kantin', correct: false },
            { id: 'a2-2', text: 'Folder Arsip Rahasia Desain Berenkripsi', correct: true },
            { id: 'a2-3', text: 'Folder Sampah Komputer', correct: false }
          ]
        },
        {
          stepName: 'Tahap 2: Penyortiran File Absensi',
          instruction: 'Di mana rekap absensi staf administrasi harian harus diarsipkan?',
          options: [
            { id: 'a2-4', text: 'Folder Surat Cinta Eksternal', correct: false },
            { id: 'a2-5', text: 'Folder Dokumen Umum Kepegawaian', correct: true }
          ]
        },
        {
          stepName: 'Tahap 3: Pembersihan File Sampah',
          instruction: 'Terdapat file duplikat berukuran besar yang tidak terpakai sejak tahun lalu. Tindakanmu?',
          options: [
            { id: 'a2-6', text: 'Biarkan menumpuk hingga memenuhi memori server utama', correct: false },
            { id: 'a2-7', text: 'Hapus atau pindahkan ke arsip inaktif jangka panjang', correct: true }
          ]
        },
        {
          stepName: 'Tahap 4: Penamaan File Standar Korporat',
          instruction: 'Format penamaan file digital kantor yang paling rapi dan mudah dicari adalah:',
          options: [
            { id: 'a2-8', text: 'file_bagus_banget_final_banget_v10.docx', correct: false },
            { id: 'a2-9', text: '[TANGGAL]_[KODE-DIVISI]_[NAMA-DOKUMEN]', correct: true }
          ]
        },
        {
          stepName: 'Tahap 5: Finalisasi Audit Arsip',
          instruction: 'Setelah seluruh dokumen tertata, apa langkah penutup wajib bagi seorang administrator?',
          options: [
            { id: 'a2-10', text: 'Langsung pulang tanpa memeriksa ulang', correct: false },
            { id: 'a2-11', text: 'Membuat daftar indeks arsip dan melaporkannya kepada Mr. Chris', correct: true }
          ]
        }
      ]
    }
  ],
  secretary: [
    {
      id: 'sec-1',
      title: 'Misi 2.1: Meeting Under Pressure - Manajemen Jadwal & Kalender',
      theme: 'Office Scheduling',
      story: 'Halo, saya Mr. Chris. Jadwal rapat direksi persiapan peluncuran mengalami bentrok dengan kunjungan vendor. Bantu saya menyelesaikan konflik jadwal ini dengan cermat.',
      materialTitle: 'Materi: Manajemen Waktu & Resolusi Bentrok Jadwal (Eisenhower Matrix)',
      materialContent: 'Agenda tingkat direksi dan koordinasi inti memiliki prioritas tertinggi. Jika terjadi bentrok waktu, agenda eksternal non-darurat harus dijadwal ulang ke slot kosong.',
      stages: [
        {
          stepName: 'Tahap 1: Analisis Bentrok Jadwal',
          instruction: 'Rapat Direksi Utama (Pukul 10:00) bertabrakan dengan Kunjungan Vendor Kain. Tindakan penyesuaian apa yang paling tepat?',
          options: [
            { id: 'sec-1', text: 'Batalkan seluruh agenda perusahaan hari ini tanpa pemberitahuan', correct: false },
            { id: 'sec-2', text: 'Geser Kunjungan Vendor ke sesi sore pukul 13:30, pertahankan Rapat Direksi pukul 10:00', correct: true },
            { id: 'sec-3', text: 'Abaikan rapat direksi dan biarkan direktur menunggu', correct: false }
          ]
        },
        {
          stepName: 'Tahap 2: Penyusunan Undangan Resmi',
          instruction: 'Komponen apa saja yang WAJIB tercantum dalam lembar undangan rapat formal?',
          options: [
            { id: 'min-1', text: 'Hari/Tanggal, Waktu, Tempat/Ruangan, Agenda Utama, dan Batas Konfirmasi Hadir', correct: true },
            { id: 'min-2', text: 'Hanya mencantumkan warna pakaian yang harus dipakai peserta', correct: false },
            { id: 'min-3', text: 'Daftar menu makan siang dan hiburan musik', correct: false }
          ]
        },
        {
          stepName: 'Tahap 3: Penanganan Perubahan Mendadak',
          instruction: 'Ruangan rapat utama mendadak bocor saat renovasi. Langkah taktis sekretaris adalah:',
          options: [
            { id: 'opt-a', text: 'Biarkan peserta basah-basahan di dalam ruangan bocor', correct: false },
            { id: 'opt-b', text: 'Membatalkan rapat selamanya', correct: false },
            { id: 'opt-c', text: 'Segera alihkan reservasi ke Ruang Konferensi B dan informasikan peserta via pesan darurat', correct: true }
          ]
        },
        {
          stepName: 'Tahap 4: Penyusunan Notulen Rapat',
          instruction: 'Manakah unsur terpenting yang harus dirangkum dalam dokumen notulen rapat?',
          options: [
            { id: 'opt-a', text: 'Hasil keputusan final beserta pembagian tugas dan tenggat waktu (deadline)', correct: true },
            { id: 'opt-b', text: 'Jumlah sendok teh yang dipakai saatcoffee break', correct: false },
            { id: 'opt-c', text: 'Opini pribadi sekretaris terhadap peserta rapat', correct: false }
          ]
        },
        {
          stepName: 'Tahap 5: Arsip Agenda Kerja Direksi',
          instruction: 'Bagaimana cara menjaga kerahasiaan agenda bulanan Head Manager?',
          options: [
            { id: 'opt-a', text: 'Menulis jadwal di papan pengumuman terbuka umum di lobi', correct: false },
            { id: 'opt-b', text: 'Membagikan akses kalender digital hanya kepada staf berwenang dengan proteksi sandi', correct: true },
            { id: 'opt-c', text: 'Menempelkannya di media sosial pribadi', correct: false }
          ]
        }
      ]
    },
    {
      id: 'sec-2',
      title: 'Misi 2.2: Penulisan Notulen & Konfirmasi Undangan',
      theme: 'Office Scheduling',
      story: 'Halo, saya Mr. Chris. Rapat persiapan telah selesai. Buatlah ringkasan notulen keputusan rapat yang akurat untuk dibagikan kepada seluruh kepala divisi.',
      materialTitle: 'Materi: Teknik Penyusunan Notulen Rapat',
      materialContent: 'Notulen yang baik memuat: Hari/Tanggal, Pimpinan Rapat, Daftar Hadir, Pembahasan Utama, dan Keputusan Akhir.',
      stages: [
        {
          stepName: 'Tahap 1: Format Kepala Notulen',
          instruction: 'Bagian awal notulen rapat wajib mencantumkan informasi berikut, KECUALI:',
          options: [
            { id: 's2-1', text: 'Hari dan tanggal pelaksanaan rapat', correct: false },
            { id: 's2-2', text: 'Nomor rekening pribadi pencatat notulen', correct: true },
            { id: 's2-3', text: 'Nama pimpinan rapat', correct: false }
          ]
        },
        {
          stepName: 'Tahap 2: Pencatatan Keputusan',
          instruction: 'Bagaimanakah cara menuliskan hasil keputusan rapat agar tidak menimbulkan ambiguitas?',
          options: [
            { id: 's2-4', text: 'Menggunakan kalimat kiasan yang puitis', correct: false },
            { id: 's2-5', text: 'Jelas, spesifik, mencantumkan penanggung jawab tugas dan deadline', correct: true }
          ]
        },
        {
          stepName: 'Tahap 3: Distribusi Dokumen',
          instruction: 'Kepada siapa notulen resmi rapat direksi harus segera dikirimkan?',
          options: [
            { id: 's2-6', text: 'Disimpan di laci meja tanpa dibagikan ke siapa pun', correct: false },
            { id: 's2-7', text: 'Seluruh peserta rapat dan pihak terkait yang memerlukan tindak lanjut', correct: true }
          ]
        },
        {
          stepName: 'Tahap 4: Verifikasi Kehadiran',
          instruction: 'Mengapa daftar hadir fisik atau digital wajib direkap oleh sekretaris?',
          options: [
            { id: 's2-8', text: 'Untuk dibagikan ke majalah gosip', correct: false },
            { id: 's2-9', text: 'Sebagai bukti legal kuorum dan kehadiran peserta rapat secara sah', correct: true }
          ]
        },
        {
          stepName: 'Tahap 5: Evaluasi Hasil Rapat',
          instruction: 'Apa tindakan sekretaris setelah notulen selesai diketik?',
          options: [
            { id: 's2-10', text: 'Meminta persetujuan (approval) dari pimpinan rapat sebelum disebarkan resmi', correct: true },
            { id: 's2-11', text: 'Langsung mencetak ribuan brosur tanpa koreksi', correct: false }
          ]
        }
      ]
    }
  ],
  finance: [
    {
      id: 'fin-1',
      title: 'Misi 3.1: Financial Investigation - Audit Invoice & PO Matching',
      theme: 'Financial Administration',
      story: 'Halo, saya Mr. Chris. Bagian keuangan menemukan selisih anggaran logistik panggung. Kamu ditugaskan mencocokkan Purchase Order (PO) dengan Invoice tagihan vendor untuk menemukan kesalahan perhitungan.',
      materialTitle: 'Materi: Rekonsiliasi Keuangan & Pemeriksaan Tagihan Vendor',
      materialContent: 'Rekonsiliasi melibatkan pencocokan nomor transaksi, harga satuan, jumlah barang, dan komponen pajak (PPN). Selisih nominal sekecil apa pun wajib diinvestigasi.',
      stages: [
        {
          stepName: 'Tahap 1: Pencocokan PO dan Invoice',
          instruction: 'PO memesan 100m Kain @ Rp 150.000 (Total Rp 15 Juta). Invoice menagih Rp 17.5 Juta karena biaya extra sepihak. Tindakan auditor:',
          options: [
            { id: 'fin-1', text: 'Langsung transfer kelebihan dana tanpa konfirmasi', correct: false },
            { id: 'fin-2', text: 'Mengabaikan selisih angka tersebut', correct: false },
            { id: 'fin-3', text: 'Tolak tagihan penuh dan minta vendor merevisi invoice sesuai nominal PO resmi', correct: true }
          ]
        },
        {
          stepName: 'Tahap 2: Alokasi Anggaran Sisa',
          instruction: 'Dana dekorasi tersedia Rp 10 Juta. Sewa lampu sorot menghabiskan Rp 6.5 Juta. Sisa dana untuk atribut bunga adalah:',
          options: [
            { id: 'bud-1', text: 'Rp 4.500.000', correct: false },
            { id: 'bud-2', text: 'Rp 3.500.000', correct: true },
            { id: 'bud-3', text: 'Rp 2.000.000', correct: false }
          ]
        },
        {
          stepName: 'Tahap 3: Pemeriksaan Pajak Pertambahan Nilai (PPN)',
          instruction: 'Berapa standar umum persentase tarif PPN resmi yang berlaku pada transaksi barang kena pajak di Indonesia?',
          options: [
            { id: 'opt-a', text: '0% tanpa aturan', correct: false },
            { id: 'opt-b', text: '11%', correct: true },
            { id: 'opt-c', text: '50%', correct: false }
          ]
        },
        {
          stepName: 'Tahap 4: Verifikasi Bukti Transaksi Kas',
          instruction: 'Mengapa setiap pengeluaran sekecil apa pun wajib dilampirkan kuitansi atau nota fisik/digital yang sah?',
          options: [
            { id: 'opt-a', text: 'Sebagai bukti sah pertanggungjawaban dalam laporan audit keuangan perusahaan', correct: true },
            { id: 'opt-b', text: 'Untuk dikoleksi sebagai mainan meja kerja', correct: false },
            { id: 'opt-c', text: 'Tidak ada gunanya sama sekali', correct: false }
          ]
        },
        {
          stepName: 'Tahap 5: Penyusunan Laporan Arus Kas',
          instruction: 'Apa fungsi utama laporan keuangan ringkas pada akhir bulan di divisi operasional?',
          options: [
            { id: 'opt-a', text: 'Menyembunyikan kerugian perusahaan dari manajemen', correct: false },
            { id: 'opt-b', text: 'Membuat bingung para pimpinan direksi', correct: false },
            { id: 'opt-c', text: 'Mengetahui kesehatan finansial dan efisiensi alokasi anggaran kegiatan', correct: true }
          ]
        }
      ]
    },
    {
      id: 'fin-2',
      title: 'Misi 3.2: Alokasi Anggaran Operasional Sederhana',
      theme: 'Financial Administration',
      story: 'Halo, saya Mr. Chris. Kita perlu menyusun alokasi anggaran operasional logistik peluncuran busana agar tidak mengalami defisit kas.',
      materialTitle: 'Materi: Penyusunan Anggaran Sederhana',
      materialContent: 'Anggaran belanja harus efisien, mendahulukan kebutuhan primer produksi dibandingkan pengeluaran sekunder.',
      stages: [
        {
          stepName: 'Tahap 1: Prioritas Belanja Primer',
          instruction: 'Manakah pengeluaran yang harus diprioritaskan dalam anggaran peluncuran produk?',
          options: [
            { id: 'f2-1', text: 'Pembelian dekorasi ruangan staf yang berlebihan', correct: false },
            { id: 'f2-2', text: 'Bahan baku kain utama dan biaya produksi garmen', correct: true }
          ]
        },
        {
          stepName: 'Tahap 2: Perhitungan Selisih Anggaran',
          instruction: 'Jika anggaran direncanakan Rp 20.000.000 dan realisasi pengeluaran Rp 18.500.000, terdapat:',
          options: [
            { id: 'f2-3', text: 'Kekurangan anggaran (defisit)', correct: false },
            { id: 'f2-4', text: 'Sisa anggaran (surplus) sebesar Rp 1.500.000', correct: true }
          ]
        },
        {
          stepName: 'Tahap 3: Pengendalian Biaya Tak Terduga',
          instruction: 'Berapa persen cadangan dana darurat yang ideal disiapkan dalam perencanaan anggaran proyek?',
          options: [
            { id: 'f2-5', text: '100% dari total anggaran', correct: false },
            { id: 'f2-6', text: 'Sekitar 5% hingga 10% dari total anggaran', correct: true }
          ]
        },
        {
          stepName: 'Tahap 4: Validasi Faktur Pembelian',
          instruction: 'Sebelum faktur disetujui untuk dibayar, bagian keuangan wajib mencocokkan:',
          options: [
            { id: 'f2-7', text: 'Warna kesukaan kasir toko', correct: false },
            { id: 'f2-8', text: 'Kesesuaian spesifikasi barang, jumlah, dan harga satuan pada nota', correct: true }
          ]
        },
        {
          stepName: 'Tahap 5: Pelaporan Keuangan Akhir',
          instruction: 'Kepada siapa laporan pertanggungjawaban keuangan proyek diserahkan setelah acara selesai?',
          options: [
            { id: 'f2-9', text: 'Head Manager dan Divisi Audit Internal', correct: true },
            { id: 'f2-10', text: 'Dibuang ke tempat sampah', correct: false }
          ]
        }
      ]
    }
  ],
  pr: [
    {
      id: 'pr-1',
      title: 'Misi 4.1: Communication Crisis - Resolusi Konflik Mitra Media',
      theme: 'Corporate Communication',
      story: 'Halo, saya Mr. Chris. Mitra media melayangkan protes karena jadwal rilis sampel produk tidak sinkron dengan memo pemasaran. Bantu saya menyusun strategi komunikasi krisis yang profesional.',
      materialTitle: 'Materi: Etika Humas & Komunikasi Pemulihan Krisis (Crisis PR)',
      materialContent: 'Prinsip penanganan krisis PR: Tanggapi dengan cepat, akui kendala secara transparan tanpa menyalahkan pihak lain, sampaikan permohonan maaf profesional, dan berikan solusi nyata.',
      stages: [
        {
          stepName: 'Tahap 1: Penyusunan Balasan Email Protes',
          instruction: 'Pilih kalimat balasan email resmi yang paling menunjukkan empati dan profesionalitas kepada mitra:',
          options: [
            { id: 'pr-1', text: '"Bukan urusan kami, silakan baca sendiri kontrak Anda di web."', correct: false },
            { id: 'pr-2', text: '"Kepada Tim Mitra, kami memohon maaf atas kekeliruan jadwal ini. Dokumen revisi dan sampel kilat dikirim hari ini."', correct: true },
            { id: 'pr-3', text: '"Jangan mengirim email komplain terus menerus, kami sedang sibuk."', correct: false }
          ]
        },
        {
          stepName: 'Tahap 2: Verifikasi Data Kesepakatan',
          instruction: 'Sebelum merilis klarifikasi publik di media sosial, langkah krusial apa yang harus dilakukan Humas?',
          options: [
            { id: 'opt-a', text: 'Membuat asumsi cerita sendiri agar terlihat menarik', correct: false },
            { id: 'opt-b', text: 'Mengabaikan komplain publik selama seminggu', correct: false },
            { id: 'opt-c', text: 'Memeriksa kembali isi dokumen kontrak dan memo internal untuk memastikan data faktual', correct: true }
          ]
        },
        {
          stepName: 'Tahap 3: Etika Pelayanan Mitra (Client Relations)',
          instruction: 'Bagaimana cara merespons mitra bisnis yang datang dengan nada emosi tinggi ke kantor?',
          options: [
            { id: 'opt-a', text: 'Menerima dengan tenang di ruang khusus, mendengarkan keluhannya, dan menawarkan solusi konstruktif', correct: true },
            { id: 'opt-b', text: 'Membalas berteriak dan mengusir mitra keluar kantor', correct: false },
            { id: 'opt-c', text: 'Bersembunyi di bawah meja kerja', correct: false }
          ]
        },
        {
          stepName: 'Tahap 4: Publikasi Siaran Pers Resmi (Press Release)',
          instruction: 'Media saluran apa yang paling tepat digunakan untuk mempublikasikan klarifikasi resmi perusahaan?',
          options: [
            { id: 'opt-a', text: 'Catatan dinding kertas di lorong kantor', correct: false },
            { id: 'opt-b', text: 'Website resmi perusahaan, portal pers terverifikasi, dan akun media sosial resmi', correct: true },
            { id: 'opt-c', text: 'Pesan berantai anonim tanpa sumber', correct: false }
          ]
        },
        {
          stepName: 'Tahap 5: Evaluasi Pasca-Krisis Komunikasi',
          instruction: 'Apa tujuan jangka panjang dari penanganan krisis komunikasi yang sukses oleh Public Relations?',
          options: [
            { id: 'opt-a', text: 'Membuat perusahaan dibenci oleh seluruh pelanggan', correct: false },
            { id: 'opt-b', text: 'Memulihkan kepercayaan mitra dan memperkuat reputasi citra positif perusahaan', correct: true },
            { id: 'opt-c', text: 'Menghilangkan departemen humas selamanya', correct: false }
          ]
        }
      ]
    },
    {
      id: 'pr-2',
      title: 'Misi 4.2: Penanganan Krisis Informasi Publik',
      theme: 'Corporate Communication',
      story: 'Halo, saya Mr. Chris. Terdapat disinformasi isu di media sosial mengenai tanggal rilis koleksi baru. Bantu saya menyusun draf klarifikasi publik.',
      materialTitle: 'Materi: Publikasi & Klarifikasi Krisis Media',
      materialContent: 'Klarifikasi publik harus disebarkan secara cepat, transparan, dan menggunakan saluran resmi perusahaan agar tidak terjadi kesalahpahaman.',
      stages: [
        {
          stepName: 'Tahap 1: Deteksi Sumber Disinformasi',
          instruction: 'Apa langkah awal humas saat mendapati berita bohong (hoaks) tentang produk perusahaan di media sosial?',
          options: [
            { id: 'p2-1', text: 'Ikut membagikan berita bohong tersebut ke akun pribadi', correct: false },
            { id: 'p2-2', text: 'Melakukan screenshot bukti postingan dan menganalisis dampak penyebarannya', correct: true }
          ]
        },
        {
          stepName: 'Tahap 2: Koordinasi Tim Internal',
          instruction: 'Sebelum merilis hak jawab, humas wajib berkoordinasi dengan divisi apa?',
          options: [
            { id: 'p2-3', text: 'Manajemen eksekutif dan departemen hukum/pemasaran', correct: true },
            { id: 'p2-4', text: 'Divisi kebersihan gedung', correct: false }
          ]
        },
        {
          stepName: 'Tahap 3: Pemilihan Nada Komunikasi (Tone of Voice)',
          instruction: 'Nada komunikasi yang paling tepat dalam siaran pers klarifikasi krisis adalah:',
          options: [
            { id: 'p2-5', text: 'Marah-marah dan menantang pembaca di kolom komentar', correct: false },
            { id: 'p2-6', text: 'Tenang, objektif, profesional, dan berorientasi pada fakta', correct: true }
          ]
        },
        {
          stepName: 'Tahap 4: Transparansi Informasi',
          instruction: 'Mengapa perusahaan harus transparan dan cepat merespons isu publik?',
          options: [
            { id: 'p2-7', text: 'Agar perusahaan sering masuk koridor gosip', correct: false },
            { id: 'p2-8', text: 'Mencegah spekulasi liar dan menjaga kepercayaan publik serta mitra', correct: true }
          ]
        },
        {
          stepName: 'Tahap 5: Monitoring Efektivitas Klarifikasi',
          instruction: 'Apa yang dilakukan humas setelah siaran pers klarifikasi resmi disebarkan?',
          options: [
            { id: 'p2-9', text: 'Memantau tanggapan media dan sentimen publik secara berkala', correct: true },
            { id: 'p2-10', text: 'Langsung menutup perusahaan dan cuti panjang', correct: false }
          ]
        }
      ]
    }
  ]
};