// Lokasi: src/pages/CharacterCreationPage.jsx
import React, { useState } from 'react';
import CharacterSprite from '../components/CharacterSprite';

export default function CharacterCreationPage({ profile, onSaveCharacter }) {
  const existing = profile?.character || {};

  const [gender, setGender] = useState(existing.gender || 'girl');
  const [hairstyle, setHairstyle] = useState(existing.hairstyle || 'long');
  const [hairColor, setHairColor] = useState(existing.hairColor || 'black');
  const [outfit, setOutfit] = useState(existing.outfit || 'formal');
  const [accessory, setAccessory] = useState(existing.accessory || 'lanyard');
  const [expression, setExpression] = useState(existing.expression || 'happy');

  const handleGenderChange = (newGender) => {
    setGender(newGender);
    if (newGender === 'girl' && !['short', 'long', 'bob'].includes(hairstyle)) {
      setHairstyle('long');
    } else if (newGender === 'boy' && !['textured', 'neat', 'fringe'].includes(hairstyle)) {
      setHairstyle('textured');
    }
  };

  const currentCharacter = {
    gender,
    hairstyle,
    hairColor,
    outfit,
    accessory,
    expression
  };

  const handleConfirm = () => {
    onSaveCharacter(currentCharacter);
  };

  const hairOptions = gender === 'girl'
    ? [
        { id: 'long', label: 'Long Layer' },
        { id: 'short', label: 'Short Bob' },
        { id: 'bob', label: 'Classic Bob' }
      ]
    : [
        { id: 'textured', label: 'Short Textured' },
        { id: 'neat', label: 'Neat Corporate' },
        { id: 'fringe', label: 'Casual Fringe' }
      ];

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <span style={styles.badge}>🏢 4SHO COMPANY</span>
          <h1 style={styles.title}>Kustomisasi Karakter Chibi</h1>
          <p style={styles.subtitle}>Rancang avatar profesional impianmu untuk memulai karier korporat.</p>
        </div>

        <div style={styles.contentGrid}>
          {/* PANEL KIRI: PRATINJAU KARAKTER */}
          <div style={styles.previewPanel}>
            <div style={styles.avatarFrame}>
              <CharacterSprite character={currentCharacter} size={150} expression={expression} />
            </div>
            <h3 style={styles.empName}>{profile?.name || 'Karyawan Baru'}</h3>
            <span style={styles.empRole}>Kandidat Magang 4SHO COMPANY</span>

            <div style={styles.divider} />

            <p style={styles.expLabel}>Ekspresi Bawaan:</p>
            <div style={styles.expBtnGroup}>
              {[
                { id: 'happy', label: 'Ceria 😊' },
                { id: 'thinking', label: 'Analisis 🤔' },
                { id: 'confused', label: 'Bingung 😵' }
              ].map((exp) => (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => setExpression(exp.id)}
                  style={expression === exp.id ? styles.expBtnActive : styles.expBtn}
                >
                  {exp.label}
                </button>
              ))}
            </div>
          </div>

          {/* PANEL KANAN: OPSI KUSTOMISASI */}
          <div style={styles.controlsPanel}>
            {/* 1. GENDER */}
            <div style={styles.controlGroup}>
              <label style={styles.label}>Karakter Dasar (Gender):</label>
              <div style={styles.optionRow2}>
                <button
                  type="button"
                  onClick={() => handleGenderChange('girl')}
                  style={gender === 'girl' ? styles.optBtnActive : styles.optBtn}
                >
                  👩 Girl Character
                </button>
                <button
                  type="button"
                  onClick={() => handleGenderChange('boy')}
                  style={gender === 'boy' ? styles.optBtnActive : styles.optBtn}
                >
                  👦 Boy Character
                </button>
              </div>
            </div>

            {/* 2. HAIRSTYLE */}
            <div style={styles.controlGroup}>
              <label style={styles.label}>Gaya Rambut (Hairstyle):</label>
              <div style={styles.optionRow3}>
                {hairOptions.map((h) => (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setHairstyle(h.id)}
                    style={hairstyle === h.id ? styles.optBtnActive : styles.optBtn}
                  >
                    {h.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. HAIR COLOR */}
            <div style={styles.controlGroup}>
              <label style={styles.label}>Warna Rambut:</label>
              <div style={styles.optionRow3}>
                {[
                  { id: 'black', label: 'Hitam Pekat' },
                  { id: 'darkbrown', label: 'Cokelat Tua' },
                  { id: 'ashbrown', label: 'Ash Brown' }
                ].map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setHairColor(c.id)}
                    style={hairColor === c.id ? styles.optBtnActive : styles.optBtn}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. OUTFIT */}
            <div style={styles.controlGroup}>
              <label style={styles.label}>Pakaian Kerja (Outfit):</label>
              <div style={styles.optionRow3}>
                {[
                  { id: 'formal', label: 'Formal Blazer' },
                  { id: 'semiformal', label: 'Semi-Formal' },
                  { id: 'casual', label: 'Office Casual' }
                ].map((o) => (
                  <button
                    key={o.id}
                    type="button"
                    onClick={() => setOutfit(o.id)}
                    style={outfit === o.id ? styles.optBtnActive : styles.optBtn}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. ACCESSORIES */}
            <div style={styles.controlGroup}>
              <label style={styles.label}>Aksesori Pelengkap:</label>
              <div style={styles.optionRow4}>
                {[
                  { id: 'none', label: 'Tanpa' },
                  { id: 'lanyard', label: 'ID Lanyard' },
                  { id: 'glasses', label: 'Glasses' },
                  { id: 'coffee', label: 'Coffee Cup' }
                ].map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setAccessory(a.id)}
                    style={accessory === a.id ? styles.optBtnActive : styles.optBtn}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <button type="button" onClick={handleConfirm} style={styles.saveBtn}>
          Simpan Karakter & Lanjutkan ➔
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { minHeight: '100vh', backgroundColor: '#F5F1E8', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '25px' },
  card: { backgroundColor: '#FFFFFF', border: '3px solid #243D69', borderRadius: '16px', width: '100%', maxWidth: '880px', padding: '30px', boxShadow: '0 10px 30px rgba(36,61,105,0.1)', display: 'flex', flexDirection: 'column', gap: '20px' },
  header: { textAlign: 'center', borderBottom: '2px solid #C6D9F1', paddingBottom: '15px' },
  badge: { backgroundColor: '#C6D9F1', color: '#243D69', padding: '4px 12px', borderRadius: '12px', fontSize: '11px', fontWeight: 'bold' },
  title: { color: '#243D69', fontSize: '24px', marginTop: '8px', fontWeight: 'bold' },
  subtitle: { color: '#739BCB', fontSize: '13px', marginTop: '4px' },
  contentGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px', alignItems: 'stretch' },
  previewPanel: { backgroundColor: '#F9F6F0', border: '2px solid #739BCB', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' },
  avatarFrame: { backgroundColor: '#FFFFFF', border: '2px solid #C6D9F1', borderRadius: '50%', width: '165px', height: '165px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', marginBottom: '12px' },
  empName: { color: '#243D69', fontSize: '18px', fontWeight: 'bold' },
  empRole: { color: '#739BCB', fontSize: '12px', marginTop: '2px' },
  divider: { width: '100%', borderTop: '1px dashed #739BCB', margin: '15px 0' },
  expLabel: { fontSize: '12px', color: '#243D69', fontWeight: 'bold', marginBottom: '8px' },
  expBtnGroup: { display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'center' },
  expBtn: { backgroundColor: '#E2E8F0', color: '#243D69', border: 'none', padding: '6px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' },
  expBtnActive: { backgroundColor: '#243D69', color: '#FFFFFF', border: 'none', padding: '6px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' },
  controlsPanel: { display: 'flex', flexDirection: 'column', gap: '14px', justifyContent: 'center' },
  controlGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '12px', fontWeight: 'bold', color: '#243D69' },
  optionRow2: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' },
  optionRow3: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' },
  optionRow4: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' },
  optBtn: { backgroundColor: '#FFFFFF', color: '#243D69', border: '1.5px solid #739BCB', padding: '9px 6px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' },
  optBtnActive: { backgroundColor: '#C6D9F1', color: '#243D69', border: '2px solid #243D69', padding: '9px 6px', borderRadius: '8px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' },
  saveBtn: { backgroundColor: '#243D69', color: '#FFFFFF', border: 'none', padding: '14px', borderRadius: '10px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', marginTop: '5px' }
};