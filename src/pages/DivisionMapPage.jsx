// Lokasi: src/pages/DivisionMapPage.jsx
import React, { useState } from 'react';
import { divisionsData } from '../data/divisionsData';
import { missionsData } from '../data/missionsData';
import { npcsData } from '../data/npcsData';
import CharacterSprite from '../components/CharacterSprite';
import EmployeeSidebar from '../components/EmployeeSidebar';
import HowToPlayModal from '../components/HowToPlayModal';

export default function DivisionMapPage({ profile, onSelectMission, onOpenAssessment, onLogout, onBackToLobby, onEditAvatar }) {
  const [activeDivision, setActiveDivision] = useState(null);
  const [showHowToPlay, setShowHowToPlay] = useState(false);
  const completedMissions = profile.completedMissions || [];

  const staffMapping = {
    administration: npcsData.specialists.administration,
    secretary: npcsData.specialists.secretary,
    finance: npcsData.specialists.finance,
    pr: npcsData.specialists.pr
  };

  return (
    <div style={styles.container}>
      {/* Header Korporat */}
      <header style={styles.header}>
        <div style={styles.headerLeft}>
          <button onClick={onBackToLobby} style={styles.lobbyBtn}>🏠 Lobi Kantor</button>
          <h2>🏢 4SHO COMPANY - Peta Pelatihan Divisi</h2>
        </div>
        <div style={styles.userInfo}>
          <div style={styles.miniAvatarContainer}>
            <CharacterSprite character={profile.character} size={32} />
            <span style={styles.userNameText}>{profile.name}</span>
          </div>
          <button onClick={onLogout} style={styles.logoutBtn}>Ganti Profil</button>
        </div>
      </header>

      {/* Background Ilustrasi Kantor / Hero Banner Peta */}
      <div style={styles.officeIllustrationBanner}>
        <div style={styles.bannerOverlay}>
          <div style={styles.bannerTextContent}>
            <h3>Selamat Datang di Lantai Divisi, {profile.name}!</h3>
            <p>Pilih divisi pelatihan kantor secara berurutan untuk menyelesaikan program magangmu.</p>
            <div style={styles.scoreRow}>
              <span>Total Skor Kinerja: <strong>{profile.score || 0} Poin</strong></span>
            </div>
          </div>
          <button onClick={onOpenAssessment} style={styles.assessmentBannerBtn}>
            🏆 Buka Final Assessment & Sertifikat Kelulusan Resmi ➔
          </button>
        </div>
      </div>

      <main style={styles.mainContent}>
        {/* Jika belum pilih divisi: Tampilkan Grid 2 Kolom (Divisi di Kiri, Sidebar di Kanan seperti Foto 1) */}
        {!activeDivision ? (
          <div style={styles.layoutGrid}>
            <div style={styles.leftColumn}>
              <div style={styles.divisionVerticalList}>
                {divisionsData.map((div, index) => {
                  const staff = staffMapping[div.id];
                  return (
                    <div 
                      key={div.id} 
                      style={{ ...styles.divisionCardWide, borderColor: div.color }}
                      onClick={() => setActiveDivision(div)}
                    >
                      <div style={styles.cardTopRow}>
                        <div style={{ ...styles.badgeNo, backgroundColor: div.color }}>
                          Divisi {index + 1}
                        </div>
                        <span style={styles.statusIndicator}>🟢 Buka</span>
                      </div>
                      <h3 style={{ color: div.color, marginTop: '6px', fontSize: '18px' }}>{div.name}</h3>
                      <p style={styles.divDesc}>{div.description}</p>
                      
                      {staff && (
                        <div style={styles.mentorMiniBox}>
                          <p style={styles.mentorName}>👤 <strong>{staff.name}</strong></p>
                          <p style={styles.mentorQuote}>"{staff.quote}"</p>
                        </div>
                      )}

                      <div style={styles.statusBox}>
                        <span style={styles.openText}>Masuk Divisi Pelatihan ➔</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div style={styles.rightColumn}>
              <EmployeeSidebar 
                profile={profile}
                onEditAvatar={onEditAvatar}
                onBackToHome={onBackToLobby}
                onOpenHowToPlay={() => setShowHowToPlay(true)}
                activeDivisionId={null}
              />
            </div>
          </div>
        ) : (
          /* Jika sudah masuk divisi: Daftar Misi Full-Width di Kiri, Sidebar Dihilangkan (seperti Foto 2) */
          <div style={styles.missionViewContainerFull}>
            <button onClick={() => setActiveDivision(null)} style={styles.backBtn}>
              ← Kembali ke Peta Divisi
            </button>
            
            <div style={{ ...styles.divisionHeaderBanner, backgroundColor: activeDivision.color }}>
              <h2>{activeDivision.name}</h2>
              <p>{activeDivision.description}</p>
              {staffMapping[activeDivision.id] && (
                <p style={styles.activeMentorTag}>
                  Mentor Divisi: <strong>{staffMapping[activeDivision.id].name}</strong> — "{staffMapping[activeDivision.id].quote}"
                </p>
              )}
            </div>

            <h3 style={{ marginBottom: '15px', color: '#243D69' }}>Daftar Misi Pelatihan (5 Tahap Analisis):</h3>
            <div style={styles.missionList}>
              {missionsData[activeDivision.id].map((m) => {
                const isCompleted = completedMissions.includes(m.id);
                return (
                  <div key={m.id} style={styles.missionCard}>
                    <div>
                      <h4 style={{ color: '#243D69' }}>{m.title}</h4>
                      <p style={styles.missionDesc}>{m.story.substring(0, 90)}...</p>
                    </div>
                    <div style={styles.missionAction}>
                      {isCompleted && <span style={styles.doneBadge}>✓ Selesai</span>}
                      <button 
                        type="button"
                        onClick={() => onSelectMission(m, activeDivision.color)}
                        style={{ ...styles.missionBtn, backgroundColor: activeDivision.color }}
                      >
                        {isCompleted ? 'Ulangi Misi' : 'Mulai Misi ➔'}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </main>

      {showHowToPlay && <HowToPlayModal onClose={() => setShowHowToPlay(false)} />}
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F5F1E8', minHeight: '100vh' },
  header: { backgroundColor: '#243D69', color: '#FFFFFF', padding: '12px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' },
  headerLeft: { display: 'flex', alignItems: 'center', gap: '15px' },
  lobbyBtn: { backgroundColor: '#739BCB', color: '#FFF', border: 'none', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  userInfo: { display: 'flex', alignItems: 'center', gap: '15px' },
  miniAvatarContainer: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#739BCB', padding: '4px 12px 4px 4px', borderRadius: '30px' },
  userNameText: { color: '#FFFFFF', fontSize: '13px', fontWeight: 'bold' },
  logoutBtn: { padding: '6px 12px', backgroundColor: '#C6D9F1', color: '#243D69', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' },
  
  officeIllustrationBanner: {
    backgroundColor: '#243D69',
    backgroundImage: 'linear-gradient(rgba(36, 61, 105, 0.9), rgba(36, 61, 105, 0.95)), radial-gradient(#739BCB 1px, transparent 1px)',
    backgroundSize: '100% 100%, 20px 20px',
    color: '#FFF',
    padding: '30px 20px',
    borderBottom: '4px solid #739BCB',
  },
  bannerOverlay: { maxWidth: '1050px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' },
  bannerTextContent: { display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '550px' },
  scoreRow: { fontSize: '13px', color: '#C6D9F1', marginTop: '4px' },
  assessmentBannerBtn: { backgroundColor: '#2e7d32', color: '#FFF', border: 'none', padding: '12px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' },
  
  mainContent: { padding: '30px 20px', maxWidth: '1050px', margin: '0 auto', width: '100%', flex: 1 },
  layoutGrid: { display: 'grid', gridTemplateColumns: '1fr 320px', gap: '25px', alignItems: 'start' },
  leftColumn: { display: 'flex', flexDirection: 'column' },
  rightColumn: { display: 'flex', flexDirection: 'column' },

  divisionVerticalList: { display: 'flex', flexDirection: 'column', gap: '15px' },
  divisionCardWide: { backgroundColor: '#FFFFFF', border: '2px solid', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 6px 16px rgba(0,0,0,0.06)', cursor: 'pointer', transition: 'transform 0.2s' },
  cardTopRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  badgeNo: { color: '#FFFFFF', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold' },
  statusIndicator: { fontSize: '11px', color: '#2e7d32', fontWeight: 'bold', backgroundColor: '#e8f5e9', padding: '2px 6px', borderRadius: '4px' },
  divDesc: { fontSize: '12px', color: '#555', margin: '6px 0 10px 0', lineHeight: '1.4' },
  mentorMiniBox: { backgroundColor: '#F9F6F0', borderLeft: '3px solid #739BCB', padding: '8px 10px', borderRadius: '6px', marginBottom: '10px', fontSize: '11px' },
  mentorName: { color: '#243D69', marginBottom: '2px' },
  mentorQuote: { fontStyle: 'italic', color: '#555' },
  statusBox: { marginTop: 'auto', fontSize: '12px', fontWeight: 'bold', color: '#243D69', borderTop: '1px dashed #eee', paddingTop: '8px' },
  
  missionViewContainerFull: { display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' },
  backBtn: { backgroundColor: 'transparent', border: 'none', color: '#243D69', fontWeight: 'bold', cursor: 'pointer', fontSize: '13px', width: 'fit-content' },
  divisionHeaderBanner: { color: '#FFF', padding: '20px', borderRadius: '10px', marginBottom: '15px', display: 'flex', flexDirection: 'column', gap: '6px', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' },
  activeMentorTag: { fontSize: '12px', backgroundColor: 'rgba(0,0,0,0.15)', padding: '6px 10px', borderRadius: '6px', width: 'fit-content', marginTop: '4px' },
  missionList: { display: 'flex', flexDirection: 'column', gap: '12px' },
  missionCard: { backgroundColor: '#FFF', padding: '15px 20px', borderRadius: '8px', border: '1px solid #739BCB', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '15px', flexWrap: 'wrap', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' },
  missionDesc: { fontSize: '12px', color: '#666', marginTop: '4px', maxWidth: '650px' },
  missionAction: { display: 'flex', alignItems: 'center', gap: '10px' },
  doneBadge: { backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' },
  missionBtn: { padding: '8px 15px', color: '#FFF', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '12px' }
};