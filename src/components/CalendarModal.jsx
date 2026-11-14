// Lokasi: src/components/CalendarModal.jsx
import React from 'react';

export default function CalendarModal({ profile, onClose }) {
  const completed = profile.completedMissions || [];
  
  const agendas = [
    { date: '12 Nov 2026', title: 'Orientation & Onboarding', status: 'Selesai', desc: 'Pengenalan lingkungan kerja dan pembuatan profil karyawan.' },
    { date: '15 Nov 2026', title: 'Administration Division Audit', status: completed.includes('admin_5') ? 'Selesai' : 'Berlangsung', desc: 'Pemeriksaan klasifikasi dokumen dan pengarsipan arsip masuk.' },
    { date: '18 Nov 2026', title: 'Executive Secretary Schedule Briefing', status: completed.includes('sec_5') ? 'Selesai' : 'Agenda Berikutnya', desc: 'Penyusunan jadwal rapat direksi dan konfirmasi undangan mitra.' },
    { date: '22 Nov 2026', title: 'Finance Quarter Invoice Review', status: 'Mendatang', desc: 'Pencocokan purchase order dan audit laporan kas sederhana.' },
    { date: '28 Nov 2026', title: 'Global Fashion Launch Event (PR)', status: 'Mendatang', desc: 'Simulasi penanganan krisis media dan rilis pers resmi perusahaan.' }
  ];

  return (
    <div style={styles.overlay}>
      <div style={styles.modalCard}>
        <div style={styles.header}><h3 style={{color: '#243D69'}}>🗓️ Office Calendar & Agenda</h3><button onClick={onClose} style={styles.closeBtn}>✕</button></div>
        <div style={styles.body}>
          <p style={styles.subtitle}>Jadwal pelatihan korporat dan agenda penting 4SHO COMPANY.</p>
          <div style={styles.list}>
            {agendas.map((item, idx) => (
              <div key={idx} style={styles.itemCard}>
                <div style={styles.dateBadge}>{item.date}</div>
                <div style={styles.itemContent}>
                  <div style={styles.rowTitle}>
                    <strong>{item.title}</strong>
                    <span style={{
                      ...styles.statusTag,
                      backgroundColor: item.status === 'Selesai' ? '#e8f5e9' : item.status === 'Berlangsung' ? '#e3f2fd' : '#fff3e0',
                      color: item.status === 'Selesai' ? '#2e7d32' : item.status === 'Berlangsung' ? '#1565c0' : '#e65100'
                    }}>{item.status}</span>
                  </div>
                  <p style={styles.itemDesc}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onClose} style={styles.okBtn}>Tutup Kalender</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' },
  modalCard: { backgroundColor: '#FFFFFF', border: '3px solid #243D69', borderRadius: '12px', width: '100%', maxWidth: '520px', padding: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #C6D9F1', paddingBottom: '10px', marginBottom: '15px' },
  closeBtn: { backgroundColor: '#c62828', color: '#FFF', border: 'none', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  body: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' },
  subtitle: { fontSize: '12px', color: '#666', marginBottom: '5px' },
  list: { display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: '300px', overflowY: 'auto' },
  itemCard: { backgroundColor: '#F9F6F0', border: '1px solid #739BCB', borderRadius: '8px', padding: '10px 12px', display: 'flex', gap: '12px', alignItems: 'flex-start' },
  dateBadge: { backgroundColor: '#243D69', color: '#FFF', padding: '4px 8px', borderRadius: '6px', fontSize: '10px', fontWeight: 'bold', minWidth: '75px', textAlign: 'center' },
  itemContent: { display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 },
  rowTitle: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', color: '#243D69' },
  statusTag: { fontSize: '10px', padding: '2px 6px', borderRadius: '4px', fontWeight: 'bold' },
  itemDesc: { fontSize: '11px', color: '#555', lineHeight: '1.3' },
  okBtn: { backgroundColor: '#243D69', color: '#FFF', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '14px' }
};