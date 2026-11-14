// Lokasi: src/components/CertificateModal.jsx
import React from 'react';
import CharacterSprite from './CharacterSprite';

export default function CertificateModal({ profile, recommendedDivision, onClose }) {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const handlePrint = () => {
    window.print();
  };

  // Tentukan level/kinerja berdasarkan skor
  const score = profile.score || 1000;
  const performanceLevel = score >= 900 ? 'Expert Corporate Professional (Grade A+)' : 'Advanced Intern';

  return (
    <div style={styles.overlay}>
      <div style={styles.certificateCard}>
        <button onClick={onClose} style={styles.closeBtn}>✕ Tutup</button>

        <div style={styles.certBorder}>
          <div style={styles.headerSection}>
            <div style={styles.logoBadge}>🏢 4SHO COMPANY</div>
            <h1 style={styles.certTitle}>CERTIFICATE OF COMPLETION</h1>
            <p style={styles.subtitle}>Sertifikat Resmi Kelulusan Program Pelatihan Magang Korporat</p>
          </div>

          <div style={styles.bodySection}>
            <p style={styles.diberikanKepada}>Diberikan dengan bangga kepada:</p>
            <h2 style={styles.userName}>{profile.name}</h2>
            
            <div style={styles.profileMetaGrid}>
              <span><strong>Level / Kinerja:</strong> {performanceLevel}</span>
              <span><strong>Total Skor Pelatihan:</strong> {score} Poin</span>
              <span><strong>Alasan Bergabung:</strong> "{profile.reason || 'Ingin mendalami simulasi kantor & AI'}"</span>
              <span><strong>Rekomendasi Karier:</strong> {recommendedDivision}</span>
            </div>

            <div style={styles.avatarDisplayBox}>
              <CharacterSprite character={profile.character} size={85} />
              <p style={styles.avatarCaption}>Kandidat Karyawan Teladan 4SHO COMPANY</p>
            </div>

            <p style={styles.certDescription}>
              Telah berhasil menyelesaikan seluruh rangkaian Divisi Pelatihan Profesional (Administration, Secretary, Finance, Public Relations) dengan standar kinerja unggul, ketelitian tinggi, dan pemecahan masalah perkantoran yang sangat memuaskan.
            </p>
          </div>

          <div style={styles.footerSection}>
            <div style={styles.signatureBlock}>
              <p style={styles.dateText}>Jawa Timur, {currentDate}</p>
              <div style={styles.signatureLine}></div>
              <p style={styles.signName}>Mr. Chris</p>
              <p style={styles.signRole}>Assistant Manager / Supervisor</p>
            </div>
          </div>
        </div>

        <div style={styles.actionToolbar}>
          <button onClick={handlePrint} style={styles.printBtn}>🖨️ Cetak / Unduh Sertifikat (PDF)</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '20px',
  },
  certificateCard: {
    backgroundColor: '#F5F1E8',
    borderRadius: '12px',
    border: '4px solid #243D69',
    width: '100%',
    maxWidth: '850px',
    padding: '30px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  closeBtn: {
    position: 'absolute',
    top: '15px', right: '15px',
    backgroundColor: '#c62828',
    color: '#FFF',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  certBorder: {
    border: '2px solid #739BCB',
    padding: '25px',
    backgroundColor: '#FFFFFF',
    borderRadius: '8px',
  },
  headerSection: {
    textAlign: 'center',
    borderBottom: '2px solid #C6D9F1',
    paddingBottom: '15px',
    marginBottom: '20px',
  },
  logoBadge: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#243D69',
    marginBottom: '5px',
  },
  certTitle: {
    fontSize: '24px',
    color: '#243D69',
    letterSpacing: '1px',
    marginBottom: '5px',
  },
  subtitle: {
    fontSize: '12px',
    color: '#739BCB',
    fontStyle: 'italic',
  },
  bodySection: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  diberikanKepada: {
    fontSize: '14px',
    color: '#555',
  },
  userName: {
    fontSize: '28px',
    color: '#243D69',
    borderBottom: '2px solid #243D69',
    width: 'fit-content',
    margin: '0 auto',
    paddingBottom: '4px',
  },
  profileMetaGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    backgroundColor: '#F5F1E8',
    padding: '12px',
    borderRadius: '6px',
    fontSize: '13px',
    color: '#333',
    textAlign: 'left',
  },
  avatarDisplayBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
    margin: '5px 0',
  },
  avatarCaption: {
    fontSize: '11px',
    color: '#739BCB',
    fontStyle: 'italic',
  },
  certDescription: {
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.5',
    padding: '0 15px',
  },
  footerSection: {
    marginTop: '25px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  signatureBlock: {
    textAlign: 'center',
    width: '220px',
  },
  dateText: {
    fontSize: '12px',
    color: '#555',
    marginBottom: '15px',
  },
  signatureLine: {
    borderBottom: '1px solid #243D69',
    marginBottom: '5px',
  },
  signName: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#243D69',
  },
  signRole: {
    fontSize: '11px',
    color: '#739BCB',
  },
  actionToolbar: {
    marginTop: '20px',
    textAlign: 'center',
  },
  printBtn: {
    backgroundColor: '#243D69',
    color: '#FFF',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};