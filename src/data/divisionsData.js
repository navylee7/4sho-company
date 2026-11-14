// Lokasi: src/data/divisionsData.js

export const divisionsData = [
  {
    id: 'administration',
    name: 'Administration Division',
    description: 'Pengelolaan dokumen, surat-menyurat, dan pengarsipan data kantor.',
    color: '#243D69',
    missions: [
      { id: 'admin-1', title: 'Misi 1: Pengenalan Arsip Surat', desc: 'Mempelajari dasar pengelompokan surat masuk dan keluar.' },
      { id: 'admin-2', title: 'Misi 2: Klasifikasi Dokumen Penting', desc: 'Menyortir dokumen kantor ke dalam folder arsip yang tepat.' }
    ]
  },
  {
    id: 'secretary',
    name: 'Secretary Division',
    description: 'Pengaturan jadwal, persiapan rapat, pembuatan undangan, dan notulen.',
    color: '#739BCB',
    missions: [
      { id: 'sec-1', title: 'Misi 1: Menyusun Jadwal Rapat', desc: 'Mengatur agenda manajer agar tidak terjadi jadwal yang bentrok.' },
      { id: 'sec-2', title: 'Misi 2: Penulisan Notulen Singkat', desc: 'Merangkum hasil keputusan rapat penting perusahaan.' }
    ]
  },
  {
    id: 'finance',
    name: 'Finance Division',
    description: 'Pengelolaan invoice, pencatatan transaksi, dan laporan keuangan sederhana.',
    color: '#1B2F4E',
    missions: [
      { id: 'fin-1', title: 'Misi 1: Verifikasi Invoice', desc: 'Memeriksa kesesuaian nominal invoice dengan catatan transaksi.' },
      { id: 'fin-2', title: 'Misi 2: Penyusunan Anggaran Bulanan', desc: 'Menghitung alokasi dana operasional divisi.' }
    ]
  },
  {
    id: 'pr',
    name: 'Public Relations Division',
    description: 'Komunikasi perusahaan, hubungan dengan mitra, dan pengelolaan informasi.',
    color: '#4A6FA5',
    missions: [
      { id: 'pr-1', title: 'Misi 1: Etika Komunikasi Mitra', desc: 'Menentukan respons profesional untuk membalas email klien.' },
      { id: 'pr-2', title: 'Misi 2: Penanganan Krisis Publik', desc: 'Memberikan klarifikasi cepat atas informasi keliru di media.' }
    ]
  }
];