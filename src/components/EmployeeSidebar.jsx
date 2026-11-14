// Lokasi: src/components/EmployeeSidebar.jsx
import React, { useState } from 'react';
import CharacterSprite from './CharacterSprite';
import AchievementModal from './AchievementModal';
import CalendarModal from './CalendarModal';
import { npcsData } from '../data/npcsData';
import { missionsData } from '../data/missionsData';

export default function EmployeeSidebar({ profile, onEditAvatar, onBackToHome, onOpenHowToPlay, activeDivisionId }) {
  const [showAchievements, setShowAchievements] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const completed = profile.completedMissions || [];
  const totalMissionsCount = Object.values(missionsData).reduce((acc, curr) => acc + curr.length, 0);
  const progressPercent = Math.round((completed.length / totalMissionsCount) * 100);

  const unlockedCount = [
    completed.length >= 1,
    (profile.score || 0) >= 300,
    ['admin_1', 'admin_2', 'admin_3', 'admin_4', 'admin_5'].every(m => completed.includes(m)),
    ['sec_1', 'sec_2', 'sec_3', 'sec_4', 'sec_5'].every(m => completed.includes(m)),
    ['pr_1', 'pr_2', 'pr_3', 'pr_4', 'pr_5'].every(m => completed.includes(m)),
    completed.length >= 20
  ].filter(Boolean).length;

  const unreadCount = completed.length === 0 ? 1 : 0;

  const tips = {
    administration: 'Always double-check your documents and classification codes before filing.',
    secretary: 'Confirm meeting schedules and prepare meeting minutes in advance.',
    finance: 'Check every invoice transaction record and calculation carefully.',
    pr: 'Always communicate professionally and calmly with media partners during a crisis.'
  };
  const activeTip = activeDivisionId ? tips[activeDivisionId] : 'Review your SOP guidelines before starting any corporate mission.';

  return (
    <aside style={styles.sidebar}>
      {/* 1. CHARACTER PROFILE */}
      <div style={styles.sectionCard}>
        <div style={styles.avatarBox}>
          <CharacterSprite character={profile.character} size={70} expression="happy" />
        </div>
        <h3 style={styles.empName}>{profile.name}</h3>
        <p style={styles.empId}>ID: 4SHO-{profile.id ? profile.id.slice(-4) : '2026'}</p>
        <span style={styles.statusBadge}>🟢 New Employee</span>
        <button 
          type="button" 
          onClick={(e) => { e.stopPropagation(); onEditAvatar && onEditAvatar(); }} 
          style={styles.editAvatarBtn}
        >
          ✏️ Edit Avatar
        </button>
      </div>

      {/* 2. EMPLOYEE STATS */}
      <div style={styles.sectionCard}>
        <h4 style={styles.sectionTitle}>📊 Employee Stats</h4>
        <div style={styles.statsGrid}>
          <div style={styles.statItem}>
            <span>⭐ XP</span>
            <strong>{profile.score || 0} Pts</strong>
          </div>
          <div 
            onClick={() => setShowAchievements(true)} 
            style={{ ...styles.statItem, cursor: 'pointer' }}
          >
            <span>🏅 Badges</span>
            <strong>{unlockedCount}/6</strong>
          </div>
          <div style={styles.statItem}>
            <span>📋 Misi</span>
            <strong>{completed.length} Selesai</strong>
          </div>
        </div>
        <div style={styles.progressContainer}>
          <div style={styles.progressLabel}>
            <span>Training Progress</span>
            <span>{progressPercent}%</span>
          </div>
          <div style={styles.barBg}>
            <div style={{ ...styles.barFill, width: `${progressPercent}%` }}></div>
          </div>
        </div>
      </div>

      {/* 3. ACHIEVEMENT COLLECTION */}
      <div style={{ ...styles.sectionCard, cursor: 'pointer' }} onClick={() => setShowAchievements(true)}>
        <div style={styles.rowBetween}>
          <h4 style={styles.sectionTitle}>🏆 Achievements</h4>
          <span style={styles.linkText}>Lihat Semua ➔</span>
        </div>
        <p style={styles.smallText}>Klik untuk membuka koleksi badge kehormatan.</p>
      </div>

      {/* 4. OFFICE NOTIFICATIONS */}
      <div style={styles.sectionCard}>
        <div style={styles.rowBetween}>
          <h4 style={styles.sectionTitle}>📬 Notifications</h4>
          {unreadCount > 0 && <span style={styles.notifBadge}>{unreadCount} Baru</span>}
        </div>
        <div style={styles.notifBox}>
          <p style={styles.notifSender}>📌 {npcsData.assistantManager.name} ({npcsData.assistantManager.role})</p>
          <p style={styles.notifText}>
            {completed.length === 0 
              ? 'Selamat datang! Silakan selesaikan misi pertamamu di Divisi Administration.' 
              : 'Kerja bagus! Lanjutkan progres pelatihanmu ke tahap berikutnya.'}
          </p>
        </div>
      </div>

      {/* 5. DAILY OFFICE TIP */}
      <div style={styles.sectionCard}>
        <h4 style={styles.sectionTitle}>💡 Daily Office Tip</h4>
        <p style={styles.tipText}>"{activeTip}"</p>
      </div>

      {/* 6. OFFICE CALENDAR */}
      <div style={{ ...styles.sectionCard, cursor: 'pointer' }} onClick={() => setShowCalendar(true)}>
        <div style={styles.rowBetween}>
          <h4 style={styles.sectionTitle}>🗓️ Office Calendar</h4>
          <span style={styles.linkText}>Jadwal ➔</span>
        </div>
        <p style={styles.smallText}>Ketuk untuk melihat agenda meeting dan deadline.</p>
      </div>

      {/* 7. QUICK MENU */}
      <div style={styles.sectionCard}>
        <h4 style={styles.sectionTitle}>⚡ Quick Menu</h4>
        <div style={styles.quickMenuCol}>
          <button 
            type="button" 
            onClick={(e) => { e.stopPropagation(); onBackToHome && onBackToHome(); }} 
            style={styles.quickBtn}
          >
            🏠 Back to Home
          </button>
          <button 
            type="button" 
            onClick={(e) => { e.stopPropagation(); setShowAchievements(true); }} 
            style={styles.quickBtn}
          >
            📈 My Progress
          </button>
          <button 
            type="button" 
            onClick={(e) => { e.stopPropagation(); onOpenHowToPlay && onOpenHowToPlay(); }} 
            style={styles.quickBtn}
          >
            📖 How to Play
          </button>
        </div>
      </div>

      {/* MODALS */}
      {showAchievements && <AchievementModal profile={profile} onClose={() => setShowAchievements(false)} />}
      {showCalendar && <CalendarModal profile={profile} onClose={() => setShowCalendar(false)} />}
    </aside>
  );
}

const styles = {
  sidebar: { display: 'flex', flexDirection: 'column', gap: '15px', width: '100%', maxWidth: '320px', zIndex: 10, position: 'relative' },
  sectionCard: { backgroundColor: '#FFFFFF', border: '2px solid #243D69', borderRadius: '12px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' },
  avatarBox: { backgroundColor: '#F9F6F0', border: '1px solid #739BCB', borderRadius: '50%', width: '75px', height: '75px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto 4px auto' },
  empName: { color: '#243D69', fontSize: '15px', fontWeight: 'bold', textAlign: 'center' },
  empId: { fontSize: '11px', color: '#739BCB', textAlign: 'center', marginTop: '-4px' },
  statusBadge: { fontSize: '10px', backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold', width: 'fit-content', margin: '0 auto 4px auto' },
  editAvatarBtn: { backgroundColor: '#243D69', color: '#FFF', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', marginTop: '4px', zIndex: 5 },
  sectionTitle: { color: '#243D69', fontSize: '13px', fontWeight: 'bold' },
  statsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center' },
  statItem: { backgroundColor: '#F9F6F0', border: '1px solid #739BCB', borderRadius: '6px', padding: '6px 4px', fontSize: '10px', display: 'flex', flexDirection: 'column', gap: '2px', color: '#555' },
  progressContainer: { display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' },
  progressLabel: { display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#555', fontWeight: 'bold' },
  barBg: { backgroundColor: '#eee', borderRadius: '4px', height: '6px', width: '100%', overflow: 'hidden' },
  barFill: { backgroundColor: '#243D69', height: '100%', borderRadius: '4px' },
  rowBetween: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  linkText: { fontSize: '11px', color: '#739BCB', fontWeight: 'bold' },
  smallText: { fontSize: '11px', color: '#666', lineHeight: '1.3' },
  notifBadge: { backgroundColor: '#c62828', color: '#FFF', fontSize: '9px', padding: '2px 6px', borderRadius: '8px', fontWeight: 'bold' },
  notifBox: { backgroundColor: '#F5F1E8', borderLeft: '3px solid #243D69', padding: '8px', borderRadius: '4px', fontSize: '11px', color: '#333' },
  notifSender: { fontWeight: 'bold', color: '#243D69', marginBottom: '2px' },
  notifText: { fontStyle: 'italic', color: '#555' },
  tipText: { fontSize: '11px', fontStyle: 'italic', color: '#444', backgroundColor: '#F9F6F0', padding: '8px', borderRadius: '6px', borderLeft: '3px solid #739BCB' },
  quickMenuCol: { display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' },
  quickBtn: { backgroundColor: '#F5F1E8', border: '1px solid #739BCB', color: '#243D69', padding: '8px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', textAlign: 'left', zIndex: 5 }
};