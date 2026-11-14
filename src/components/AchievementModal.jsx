// Lokasi: src/components/AchievementModal.jsx
import React from 'react';

export default function AchievementModal({ profile, onClose }) {
  const completed = profile.completedMissions || [];
  const totalScore = profile.score || 0;

  // Daftar Definisi Achievement
  const achievements = [
    {
      id: 'first_day',
      title: 'First Day',
      desc: 'Menyelesaikan misi pelatihan pertamamu di 4SHO COMPANY.',
      unlocked: completed.length >= 1,
      icon: '🎯'
    },
    {
      id: 'fast_learner',
      title: 'Fast Learner',
      desc: 'Berhasil mengumpulkan setidaknya 300 Poin Kinerja.',
      unlocked: totalScore >= 300,
      icon: '⚡'
    },
    {
      id: 'detail_detective',
      title: 'Detail Detective',
      desc: 'Menyelesaikan seluruh 5 tahap di Divisi Administration.',
      unlocked: ['admin_1', 'admin_2', 'admin_3', 'admin_4', 'admin_5'].every(m => completed.includes(m)),
      icon: '🔍'
    },
    {
      id: 'perfect_organizer',
      title: 'Perfect Organizer',
      desc: 'Menyelesaikan seluruh tahap di Divisi Secretary.',
      unlocked: ['sec_1', 'sec_2', 'sec_3', 'sec_4', 'sec_5'].every(m => completed.includes(m)),
      icon: '📅'
    },
    {
      id: 'communication_star',
      title: 'Communication Star',
      desc: 'Menyelesaikan seluruh tahap di Divisi Public Relations.',
      unlocked: ['pr_1', 'pr_2', 'pr_3', 'pr_4', 'pr_5'].every(m => completed.includes(m)),
      icon: '🌐'
    },
    {
      id: 'training_complete',
      title: 'Training Complete',
      desc: 'Menyelesaikan seluruh rangkaian misi di 4 Divisi Perusahaan.',
      unlocked: completed.length >= 20, // Total 20 misi
      icon: '🏆'
    }
  ];

  return (
    <div style={styles.overlay}>
      <div style={styles.modalCard}>
        <div style={styles.header}>
          <h3>🏅 Koleksi Achievement Karyawan</h3>
          <button onClick={onClose} style={styles.closeBtn}>✕</button>
        </div>
        <div style={styles.body}>
          <p style={styles.subtitle}>Dapatkan badge kehormatan dengan menyelesaikan misi dan tantangan korporat.</p>
          <div style={styles.grid}>
            {achievements.map((ach) => (
              <div 
                key={ach.id} 
                style={{
                  ...styles.badgeCard,
                  opacity: ach.unlocked ? 1 : 0.5,
                  borderColor: ach.unlocked ? '#243D69' : '#ccc',
                  backgroundColor: ach.unlocked ? '#F9F6F0' : '#f5f5f5'
                }}
              >
                <div style={styles.badgeIcon}>{ach.icon}</div>
                <div style={styles.badgeInfo}>
                  <h4 style={{ color: ach.unlocked ? '#243D69' : '#888' }}>
                    {ach.title} {ach.unlocked ? '✅' : '🔒'}
                  </h4>
                  <p style={styles.badgeDesc}>{ach.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={onClose} style={styles.okBtn}>Tutup</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000, padding: '20px' },
  modalCard: { backgroundColor: '#FFFFFF', border: '3px solid #243D69', borderRadius: '12px', width: '100%', maxWidth: '550px', padding: '25px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #C6D9F1', paddingBottom: '10px', marginBottom: '15px', color: '#243D69' },
  closeBtn: { backgroundColor: '#c62828', color: '#FFF', border: 'none', padding: '4px 10px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' },
  body: { display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' },
  subtitle: { fontSize: '12px', color: '#666', marginBottom: '5px' },
  grid: { display: 'grid', gridTemplateColumns: '1fr', gap: '10px', maxHeight: '300px', overflowY: 'auto' },
  badgeCard: { border: '2px solid', borderRadius: '8px', padding: '12px', display: 'flex', alignItems: 'center', gap: '15px' },
  badgeIcon: { fontSize: '28px', backgroundColor: '#C6D9F1', padding: '8px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px' },
  badgeInfo: { display: 'flex', flexDirection: 'column', gap: '2px' },
  badgeDesc: { fontSize: '11px', color: '#555', lineHeight: '1.3' },
  okBtn: { backgroundColor: '#243D69', color: '#FFF', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer', width: '100%', fontSize: '14px' }
};