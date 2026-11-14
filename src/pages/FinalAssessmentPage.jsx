// Lokasi: src/pages/FinalAssessmentPage.jsx
import React from 'react';
import CharacterSprite from '../components/CharacterSprite';

export default function FinalAssessmentPage({ profile, onViewCertificate, onBackToMap }) {
  const completedCount = (profile.completedMissions || []).length;
  const isAllComplete = completedCount >= 4;

  // Tentukan rekomendasi karier berdasarkan total skor
  const score = profile.score || 400;
  let recommendedRole = 'Senior Corporate Administrator';
  let descRole = 'Memiliki ketelitian luar biasa dalam pengarsipan dokumen dan manajemen data perusahaan.';

  if (score >= 450) {
    recommendedRole = 'Executive Secretary & Corporate Strategist';
    descRole = 'Sangat handal dalam manajemen jadwal kompleks, komunikasi tingkat direksi, dan penyelesaian krisis di bawah tekanan.';
  } else if (score >= 400) {
    recommendedRole = 'Financial Auditor & Administrative Controller';
    descRole = 'Menunjukkan ketelitian tinggi dalam audit tagihan vendor, rekonsiliasi PO, dan alokasi anggaran operasional.';
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h2>🏢 4SHO COMPANY - Final Assessment & Karier</h2>
        <div style={styles.profileBadge}>
          <CharacterSprite character={profile.character} size={32} />
          <span>{profile.name}</span>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.badgeTop}>🎉 Program Pelatihan Selesai</div>
          <h2 style={{ color: '#243D69', marginBottom: '10px' }}>Hasil Evaluasi Kinerja Akhir</h2>
          <p style={{ color: '#555', fontSize: '14px', marginBottom: '20px' }}>
            Selamat, {profile.name}! Kamu telah melalui seluruh rangkaian rotasi divisi di 4SHO COMPANY dengan dedikasi luar biasa.
          </p>

          <div style={styles.scoreOverviewBox}>
            <div>
              <span style={styles.scoreLabel}>Total Akumulasi Skor:</span>
              <h1 style={{ color: '#243D69' }}>{score} Poin</h1>
            </div>
            <div>
              <span style={styles.scoreLabel}>Misi Dituntaskan:</span>
              <h3 style={{ color: '#2e7d32' }}>{completedCount} dari 4 Divisi Utama</h3>
            </div>
          </div>

          <div style={styles.recommendationBox}>
            <h4 style={{ color: '#243D69', marginBottom: '8px' }}>🎯 Rekomendasi Jalur Karier Profesional:</h4>
            <h3 style={{ color: '#739BCB', marginBottom: '5px' }}>{recommendedRole}</h3>
            <p style={{ fontSize: '13px', color: '#444' }}>{descRole}</p>
          </div>

          {isAllComplete ? (
            <div style={styles.certActionBox}>
              <p style={{ fontSize: '13px', color: '#2e7d32', fontWeight: 'bold' }}>
                ✓ Kamu memenuhi syarat mutlak untuk menerima Sertifikat Kelulusan Resmi!
              </p>
              <button onClick={onViewCertificate} style={styles.certBtn}>
                🏆 Buka Sertifikat Kelulusan Resmi 4SHO COMPANY
              </button>
            </div>
          ) : (
            <p style={{ fontSize: '13px', color: '#c62828', textAlign: 'center' }}>
              Selesaikan seluruh misi divisi untuk membuka Sertifikat Kelulusan Resmi.
            </p>
          )}

          <button onClick={onBackToMap} style={styles.backBtn}>
            ← Kembali ke Peta Divisi
          </button>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F5F1E8', minHeight: '100vh' },
  header: { backgroundColor: '#243D69', color: '#FFFFFF', padding: '12px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  profileBadge: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#739BCB', padding: '4px 12px 4px 4px', borderRadius: '30px', color: '#FFF', fontWeight: 'bold' },
  mainContent: { padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 },
  card: { backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '2px solid #243D69', width: '100%', maxWidth: '650px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', textAlign: 'center' },
  badgeTop: { backgroundColor: '#C6D9F1', color: '#243D69', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold', width: 'fit-content', margin: '0 auto 15px auto' },
  scoreOverviewBox: { display: 'flex', justifyContent: 'space-around', backgroundColor: '#F5F1E8', padding: '15px', borderRadius: '8px', marginBottom: '20px', border: '1px solid #739BCB' },
  scoreLabel: { fontSize: '12px', color: '#555' },
  recommendationBox: { backgroundColor: '#F9F6F0', border: '1px solid #243D69', padding: '15px', borderRadius: '8px', marginBottom: '20px', textAlign: 'left' },
  certActionBox: { display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' },
  certBtn: { backgroundColor: '#2e7d32', color: '#FFF', border: 'none', padding: '14px', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' },
  backBtn: { backgroundColor: 'transparent', border: 'none', color: '#739BCB', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }
};