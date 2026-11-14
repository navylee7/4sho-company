// Lokasi: src/components/AboutCompanyModal.jsx
import React from 'react';
import { npcsData } from '../data/npcsData';

export default function AboutCompanyModal({ onClose }) {
  return (
    <div style={styles.overlay}>
      <div style={styles.modalCard}>
        <div style={styles.header}>
          <h3>🏢 Tentang 4SHO COMPANY</h3>
          <button onClick={onClose} style={styles.closeBtn}>✕</button>
        </div>
        <div style={styles.body}>
          <div style={styles.npcSpeechBox}>
            <strong>{npcsData.headManager.name} ({npcsData.headManager.role}):</strong>
            <p>"{npcsData.headManager.greeting}"</p>
          </div>
          <p><strong>4SHO COMPANY</strong> adalah perusahaan fiksional global di bidang industri mode dan gaya hidup, yang dirancang khusus sebagai simulasi perkantoran interaktif (*Prodistik Office Simulation*).</p>
          <p><strong>Struktur Pimpinan & Staf Divisi:</strong></p>
          <ul style={styles.staffList}>
            <li>👔 <strong>Mr. Jay</strong> (Head Manager)</li>
            <li>📋 <strong>Mr. Chris</strong> (Assistant Manager / Supervisor)</li>
            <li>📁 <strong>Ray</strong> (Staf Arsip - Administration)</li>
            <li>📅 <strong>Lucier</strong> (Staf Jadwal - Secretary)</li>
            <li>💰 <strong>Louis</strong> (Staf Keuangan - Finance)</li>
            <li>🌐 <strong>Chizu</strong> (Staf Humas - Public Relations)</li>
          </ul>
        </div>
        <button onClick={onClose} style={styles.okBtn}>Tutup Informasi</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000', padding: '20px' },
  modalCard: { backgroundColor: '#FFFFFF', border: '3px solid #243D69', borderRadius: '12px', width: '100%', maxWidth: '550px', padding: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #C6D9F1', paddingBottom: '10px', marginBottom: '15px', color: '#243D69' },
  closeBtn: { backgroundColor: '#c62828', color: '#FFF', border: 'none', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  body: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px', color: '#333', fontSize: '13px', lineHeight: '1.5' },
  npcSpeechBox: { backgroundColor: '#F5F1E8', borderLeft: '4px solid #243D69', padding: '10px 15px', borderRadius: '4px', fontSize: '13px', color: '#243D69' },
  staffList: { paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '4px' },
  okBtn: { backgroundColor: '#739BCB', color: '#243D69', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '14px' }
};