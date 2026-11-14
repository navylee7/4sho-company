// Lokasi: src/components/HowToPlayModal.jsx
import React from 'react';
import { npcsData } from '../data/npcsData';

export default function HowToPlayModal({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modalCard}>
        <div style={styles.header}>
          <h3>📖 Panduan Permainan (How to Play)</h3>
          <button onClick={onClose} style={styles.closeBtn}>✕</button>
        </div>
        <div style={styles.body}>
          <div style={styles.npcSpeechBox}>
            <strong>{npcsData.assistantManager.name} ({npcsData.assistantManager.role}):</strong>
            <p>"{npcsData.assistantManager.hint}"</p>
          </div>
          <ul style={styles.guideList}>
            <li><strong>1. Pilih Divisi Secara Berurutan:</strong> Selesaikan misi dari Divisi Administration, Secretary, Finance, hingga Public Relations.</li>
            <li><strong>2. Tantangan Analitis 5 Tahap:</strong> Setiap misi memiliki 5 tahap tantangan berbasis SOP kantor (audit, klasifikasi, jadwal, krisis).</li>
            <li><strong>3. Kumpulkan Skor Kinerja:</strong> Jawaban yang tepat akan meningkatkan total skor kinerja korporatmu.</li>
            <li><strong>4. Raih Sertifikat Kelulusan:</strong> Setelah seluruh misi selesai, buka Final Assessment untuk mengunduh Sertifikat Resmi 4SHO COMPANY yang ditandatangani oleh Mr. Chris!</li>
          </ul>
        </div>
        <button onClick={onClose} style={styles.okBtn}>Mengerti, Ayo Mulai! ➔</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' },
  modalCard: { backgroundColor: '#FFFFFF', border: '3px solid #243D69', borderRadius: '12px', width: '100%', maxWidth: '550px', padding: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #C6D9F1', paddingBottom: '10px', marginBottom: '15px', color: '#243D69' },
  closeBtn: { backgroundColor: '#c62828', color: '#FFF', border: 'none', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  body: { display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px', color: '#333', fontSize: '13px', lineHeight: '1.5' },
  npcSpeechBox: { backgroundColor: '#F5F1E8', borderLeft: '4px solid #243D69', padding: '10px 15px', borderRadius: '4px', fontSize: '13px', color: '#243D69' },
  guideList: { paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' },
  okBtn: { backgroundColor: '#243D69', color: '#FFF', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '14px' }
};