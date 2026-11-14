// Lokasi: src/pages/ProfileSelectionPage.jsx
import React, { useState } from 'react';
import { getProfiles, saveProfiles, setActiveProfile } from '../utils/storage';

export default function ProfileSelectionPage({ onProfileSelected }) {
  const [profiles, setProfiles] = useState(getProfiles());
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState('');
  const [reason, setReason] = useState('');

  const handleCreateProfile = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const newProfile = {
      id: Date.now().toString(),
      name: name.trim(),
      reason: reason.trim() || 'Ingin menguasai administrasi perkantoran modern dan AI.',
      score: 0,
      completedMissions: [],
      character: null
    };

    const updatedProfiles = [...profiles, newProfile];
    saveProfiles(updatedProfiles);
    setActiveProfile(newProfile);
    onProfileSelected(newProfile);
  };

  const handleSelectExisting = (profile) => {
    setActiveProfile(profile);
    onProfileSelected(profile);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.headerBadge}>🏢 4SHO COMPANY</div>
        <h2 style={styles.title}>Portal Onboarding Karyawan</h2>
        <p style={styles.subtitle}>Simulasi Perkantoran & Pelatihan Profesional Prodistik</p>

        {!isCreating ? (
          <div>
            {profiles.length > 0 && (
              <div style={styles.profileListSection}>
                <h4 style={{ color: '#243D69', marginBottom: '10px' }}>Pilih Profil Tersimpan:</h4>
                <div style={styles.profileGrid}>
                  {profiles.map((p) => (
                    <div key={p.id} style={styles.profileCard} onClick={() => handleSelectExisting(p)}>
                      <div style={styles.avatarPlaceholder}>👤</div>
                      <div>
                        <strong>{p.name}</strong>
                        <p style={styles.profileMeta}>Skor: {p.score || 0} Poin</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button onClick={() => setIsCreating(true)} style={styles.primaryBtn}>
              + Buat Profil Karyawan Baru
            </button>
          </div>
        ) : (
          <form onSubmit={handleCreateProfile} style={styles.form}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Nama Lengkap / Panggilan:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: Ryul Kim"
                required
                style={styles.inputField}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Alasan Bergabung / Tujuan Karier:</label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Contoh: Ingin menguasai administrasi perkantoran modern dan mengoptimalkan efisiensi kerja berbasis kecerdasan buatan (AI)."
                rows={3}
                style={styles.textareaField}
              />
            </div>

            <div style={styles.formActions}>
              <button type="submit" style={styles.primaryBtn}>
                Lanjut ke Pembuatan Karakter ➔
              </button>
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                style={styles.secondaryBtn}
              >
                ← Kembali
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#F5F1E8',
    padding: '20px',
  },
  card: {
    backgroundColor: '#FFFFFF',
    border: '3px solid #243D69',
    borderRadius: '12px',
    padding: '30px',
    width: '100%',
    maxWidth: '500px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  headerBadge: {
    fontSize: '12px',
    backgroundColor: '#C6D9F1',
    color: '#243D69',
    padding: '4px 10px',
    borderRadius: '20px',
    fontWeight: 'bold',
    width: 'fit-content',
    margin: '0 auto 10px auto',
  },
  title: {
    color: '#243D69',
    fontSize: '22px',
    marginBottom: '5px',
  },
  subtitle: {
    fontSize: '13px',
    color: '#739BCB',
    marginBottom: '25px',
  },
  profileListSection: {
    marginBottom: '20px',
    textAlign: 'left',
  },
  profileGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxHeight: '200px',
    overflowY: 'auto',
    marginBottom: '15px',
  },
  profileCard: {
    backgroundColor: '#F9F6F0',
    border: '1px solid #739BCB',
    borderRadius: '8px',
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    cursor: 'pointer',
  },
  avatarPlaceholder: {
    fontSize: '20px',
    backgroundColor: '#C6D9F1',
    padding: '8px',
    borderRadius: '50%',
  },
  profileMeta: {
    fontSize: '12px',
    color: '#555',
    marginTop: '2px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    textAlign: 'left',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: 'bold',
    color: '#243D69',
  },
  inputField: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #739BCB',
    fontSize: '14px',
    outline: 'none',
  },
  textareaField: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #739BCB',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical',
    fontFamily: 'inherit',
  },
  formActions: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '10px',
  },
  primaryBtn: {
    backgroundColor: '#243D69',
    color: '#FFFFFF',
    border: 'none',
    padding: '12px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #739BCB',
    color: '#243D69',
    padding: '10px',
    borderRadius: '8px',
    fontSize: '13px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%',
  },
};