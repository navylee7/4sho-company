// Lokasi: src/pages/OfficeLobbyPage.jsx
import React, { useState } from 'react';
import CharacterSprite from '../components/CharacterSprite';
import HowToPlayModal from '../components/HowToPlayModal';
import AboutCompanyModal from '../components/AboutCompanyModal';
import { npcsData } from '../data/npcsData';
import { divisionsData } from '../data/divisionsData';

export default function OfficeLobbyPage({ profile, onStartJourney, onLogout }) {
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div style={styles.container}>
      {/* Header Korporat */}
      <header style={styles.header}>
        <div style={styles.brandTitle}>🏢 4SHO COMPANY — Office Lobby</div>
        <div style={styles.userHeaderInfo}>
          {profile && profile.character && (
            <div style={styles.miniAvatar}>
              <CharacterSprite character={profile.character} size={32} />
              <span style={styles.miniName}>{profile.name}</span>
            </div>
          )}
          <button onClick={onLogout} style={styles.logoutBtn}>Ganti Profil</button>
        </div>
      </header>

      {/* Hero Section (Suasana Lobi Kantor & Sambutan NPC Mr. Jay) */}
      <main style={styles.main}>
        <div style={styles.heroCard}>
          <div style={styles.heroContentLeft}>
            <span style={styles.badge}>New Employee Training Program</span>
            <h1 style={styles.headline}>Your First Day Starts Here!</h1>
            <p style={styles.tagline}>Play. Learn. Grow.</p>
            <p style={styles.description}>
              Selamat datang di simulasi perkantoran divisi fesyen global. Jalani rotasi divisi, selesaikan tugas analitis perkantoran bersama arahan <strong>{npcsData.headManager.name}</strong> dan <strong>{npcsData.assistantManager.name}</strong>, lalu raih sertifikat kelulusanmu!
            </p>

            {/* Sapaan NPC Mr. Jay */}
            <div style={styles.npcGreetingBox}>
              <p>🗣️ <strong>{npcsData.headManager.name} ({npcsData.headManager.role}):</strong></p>
              <p style={styles.npcQuote}>"{npcsData.headManager.greeting}"</p>
            </div>

            {/* Tombol Navigasi Utama (Fungsional Nyata) */}
            <div style={styles.actionButtonGroup}>
              <button onClick={onStartJourney} style={styles.primaryBtn}>
                🚀 {profile && profile.score > 0 ? 'Lanjutkan Pelatihan / Peta Divisi' : 'Start Your Journey'}
              </button>
              <div style={styles.subBtnGroup}>
                <button onClick={() => setShowHowToPlay(true)} style={styles.secondaryBtn}>
                  📖 How to Play
                </button>
                <button onClick={() => setShowAbout(true)} style={styles.secondaryBtn}>
                  🏢 About the Company
                </button>
              </div>
            </div>
          </div>

          <div style={styles.heroContentRight}>
            <div style={styles.avatarDisplayBox}>
              {profile && profile.character ? (
                <>
                  <CharacterSprite character={profile.character} size={110} expression="happy" />
                  <p style={styles.employeeName}>{profile.name}</p>
                  <span style={styles.employeeRole}>Kandidat Karyawan Magang</span>
                  <span style={styles.scoreBadge}>Skor Kinerja: {profile.score || 0} Poin</span>
                </>
              ) : (
                <div style={styles.noCharacterPlaceholder}>
                  <p>Belum ada karakter.</p>
                  <button onClick={onStartJourney} style={styles.smallCreateBtn}>Buat Karakter Sekarang</button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Preview 4 Divisi & Staf Spesialis NPC */}
        <section style={styles.departmentSection}>
          <h2 style={styles.sectionTitle}>Explore Our Departments & Mentors</h2>
          <div style={styles.deptGrid}>
            {divisionsData.map((div, idx) => {
              const staffKeys = ['administration', 'secretary', 'finance', 'pr'];
              const staffKey = staffKeys[idx];
              const staff = npcsData.specialists[staffKey];

              return (
                <div key={div.id} style={{ ...styles.deptCard, borderColor: div.color }}>
                  <div style={{ ...styles.deptBadge, backgroundColor: div.color }}>Divisi {idx + 1}</div>
                  <h3 style={{ color: div.color, marginTop: '8px', fontSize: '16px' }}>{div.name}</h3>
                  <p style={styles.deptDesc}>{div.description}</p>
                  <div style={styles.mentorBox}>
                    <p style={styles.mentorTitle}>Staf Mentor:</p>
                    <p style={styles.mentorName}>👤 {staff.name}</p>
                    <p style={styles.mentorQuote}>"{staff.quote}"</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Footer Korporat */}
      <footer style={styles.footer}>
        <p>© 2026 4SHO COMPANY • Prodistik Office Simulation Game. All rights reserved.</p>
      </footer>

      {/* Modal Pop-up */}
      {showHowToPlay && <HowToPlayModal onClose={() => setShowHowToPlay(false)} />}
      {showAbout && <AboutCompanyModal onClose={() => setShowAbout(false)} />}
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F5F1E8' },
  header: { backgroundColor: '#243D69', color: '#FFFFFF', padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' },
  brandTitle: { fontSize: '15px', fontWeight: 'bold', letterSpacing: '0.5px' },
  userHeaderInfo: { display: 'flex', alignItems: 'center', gap: '15px' },
  miniAvatar: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#739BCB', padding: '4px 12px 4px 4px', borderRadius: '30px' },
  miniName: { color: '#FFF', fontSize: '13px', fontWeight: 'bold' },
  logoutBtn: { padding: '6px 12px', backgroundColor: '#C6D9F1', color: '#243D69', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  main: { padding: '30px 20px', maxWidth: '1000px', margin: '0 auto', width: '100%', flex: 1, display: 'flex', flexDirection: 'column', gap: '35px' },
  heroCard: { backgroundColor: '#FFFFFF', border: '3px solid #243D69', borderRadius: '16px', padding: '35px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', alignItems: 'center', boxShadow: '0 8px 30px rgba(0,0,0,0.06)' },
  heroContentLeft: { display: 'flex', flexDirection: 'column', gap: '12px' },
  badge: { fontSize: '11px', backgroundColor: '#C6D9F1', color: '#243D69', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold', width: 'fit-content' },
  headline: { fontSize: '28px', color: '#243D69', fontWeight: 'bold', lineHeight: '1.2' },
  tagline: { fontSize: '14px', color: '#739BCB', fontWeight: 'bold', fontStyle: 'italic', marginTop: '-8px' },
  description: { fontSize: '13px', color: '#555', lineHeight: '1.5' },
  npcGreetingBox: { backgroundColor: '#F9F6F0', borderLeft: '3px solid #739BCB', padding: '10px 14px', borderRadius: '6px', fontSize: '12px', color: '#243D69' },
  npcQuote: { fontStyle: 'italic', marginTop: '2px', color: '#333' },
  actionButtonGroup: { display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' },
  primaryBtn: { backgroundColor: '#2e7d32', color: '#FFFFFF', border: 'none', padding: '14px 20px', borderRadius: '8px', fontSize: '14px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center', boxShadow: '0 4px 12px rgba(46,125,50,0.2)' },
  subBtnGroup: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' },
  secondaryBtn: { backgroundColor: '#243D69', color: '#FFFFFF', border: 'none', padding: '10px 15px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'center' },
  heroContentRight: { display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  avatarDisplayBox: { backgroundColor: '#F9F6F0', border: '2px dashed #739BCB', borderRadius: '12px', padding: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '240px', textAlign: 'center', gap: '6px' },
  employeeName: { fontSize: '16px', fontWeight: 'bold', color: '#243D69', marginTop: '8px' },
  employeeRole: { fontSize: '12px', color: '#739BCB' },
  scoreBadge: { fontSize: '11px', backgroundColor: '#C6D9F1', color: '#243D69', padding: '3px 8px', borderRadius: '6px', fontWeight: 'bold', marginTop: '5px' },
  noCharacterPlaceholder: { display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', padding: '20px 0', fontSize: '13px', color: '#555' },
  smallCreateBtn: { backgroundColor: '#243D69', color: '#FFF', border: 'none', padding: '8px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' },
  departmentSection: { display: 'flex', flexDirection: 'column', gap: '15px' },
  sectionTitle: { fontSize: '18px', color: '#243D69', fontWeight: 'bold', textAlign: 'center' },
  deptGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '15px' },
  deptCard: { backgroundColor: '#FFFFFF', border: '2px solid', borderRadius: '10px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' },
  deptBadge: { color: '#FFFFFF', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold', width: 'fit-content' },
  deptDesc: { fontSize: '12px', color: '#666', lineHeight: '1.4' },
  mentorBox: { marginTop: 'auto', backgroundColor: '#F5F1E8', padding: '8px', borderRadius: '6px', fontSize: '11px', color: '#333', borderLeft: '2px solid #739BCB' },
  mentorTitle: { fontWeight: 'bold', color: '#243D69', marginBottom: '2px' },
  mentorName: { fontWeight: 'bold', color: '#243D69' },
  mentorQuote: { fontStyle: 'italic', color: '#555', marginTop: '2px' },
  footer: { backgroundColor: '#243D69', color: '#C6D9F1', padding: '15px', textAlign: 'center', fontSize: '12px', marginTop: 'auto' }
};