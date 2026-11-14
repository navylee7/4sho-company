// Lokasi: src/pages/MissionSessionPage.jsx
import React, { useState } from 'react';
import CharacterSprite from '../components/CharacterSprite';
import { npcsData } from '../data/npcsData';

export default function MissionSessionPage({ mission, divisionColor, profile, onCompleteMission, onBackToMap }) {
  const [step, setStep] = useState('story');
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showHint, setShowHint] = useState(false);
  const [scoreEarned, setScoreEarned] = useState(100);

  // State khusus untuk Admin Stage 0 (Sorting)
  const [unassignedDocs, setUnassignedDocs] = useState(
    mission.stages?.[0]?.items || []
  );
  const [classifiedDocs, setClassifiedDocs] = useState({});

  const stages = mission.stages || [];
  const currentStage = stages[currentStageIndex];

  const handleAssignCategory = (doc, category) => {
    const updatedUnassigned = unassignedDocs.filter((d) => d.id !== doc.id);
    setUnassignedDocs(updatedUnassigned);
    const currentCatList = classifiedDocs[category] || [];
    setClassifiedDocs({ ...classifiedDocs, [category]: [...currentCatList, doc] });
  };

  const handleReturnDoc = (doc, category) => {
    const updatedCatList = classifiedDocs[category].filter((d) => d.id !== doc.id);
    setClassifiedDocs({ ...classifiedDocs, [category]: updatedCatList });
    setUnassignedDocs([...unassignedDocs, doc]);
  };

  const handleSelectOption = (stageIdx, option) => {
    setSelectedAnswers({ ...selectedAnswers, [stageIdx]: option });
  };

  const handleNextStage = () => {
    const currentAns = selectedAnswers[currentStageIndex];
    if (currentAns && !currentAns.correct) {
      setScoreEarned((prev) => Math.max(40, prev - 15));
    }

    if (currentStageIndex < stages.length - 1) {
      setCurrentStageIndex(currentStageIndex + 1);
    } else {
      setStep('evaluation');
    }
  };

  const handleFinish = () => {
    onCompleteMission(mission.id, scoreEarned);
  };

  const isSortingComplete = unassignedDocs.length === 0;

  return (
    <div style={styles.container}>
      <header style={{ ...styles.header, backgroundColor: divisionColor }}>
        <h2>🏢 4SHO COMPANY - Sesi Pelatihan Profesional</h2>
        <div style={styles.profileBadge}>
          <CharacterSprite character={profile.character} size={32} />
          <span>{profile.name}</span>
        </div>
      </header>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <div style={styles.missionHeaderTag}>
            <span style={styles.themeBadge}>{mission.theme}</span>
            <h3>{mission.title}</h3>
          </div>

          {/* TAHAP 1: STORY */}
          {step === 'story' && (
            <div style={styles.sectionBox}>
              <div style={styles.npcBox}>
                <div style={styles.npcAvatarPlaceholder}>👨‍💼</div>
                <div>
                  <strong>{npcsData.assistantManager.name}</strong> ({npcsData.assistantManager.role})
                  <p style={styles.dialogueText}>"{mission.story}"</p>
                </div>
              </div>
              <button onClick={() => setStep('material')} style={{ ...styles.primaryBtn, backgroundColor: divisionColor }}>
                Pelajari Materi & SOP Kantor ➔
              </button>
            </div>
          )}

          {/* TAHAP 2: LEARNING MATERIAL */}
          {step === 'material' && (
            <div style={styles.sectionBox}>
              <h4 style={{ color: divisionColor, marginBottom: '10px' }}>{mission.materialTitle}</h4>
              <p style={styles.materialContentText}>{mission.materialContent}</p>
              
              <div style={styles.hintContainer}>
                <button onClick={() => setShowHint(!showHint)} style={styles.hintToggleBtn}>
                  {showHint ? '▲ Sembunyikan Petunjuk Mr. Jay' : '💡 Minta Arahan Profesional dari Mr. Jay'}
                </button>
                {showHint && (
                  <div style={styles.hintBox}>
                    <em>{npcsData.assistantManager.hint}</em>
                  </div>
                )}
              </div>

              <button onClick={() => setStep('game')} style={{ ...styles.primaryBtn, backgroundColor: divisionColor, marginTop: '15px' }}>
                Mulai 5 Tahap Tantangan Analisis 🎮
              </button>
            </div>
          )}

          {/* TAHAP 3: 5 TAHAP TANTANGAN */}
          {step === 'game' && currentStage && (
            <div style={styles.sectionBox}>
              <div style={styles.progressIndicator}>
                Tahap {currentStageIndex + 1} dari {stages.length}: <strong>{currentStage.stepName}</strong>
              </div>

              <p style={styles.instructionText}>{currentStage.instruction}</p>

              {/* Sorting Khusus Admin Tahap 1 */}
              {currentStage.items && (
                <div style={styles.sortingContainer}>
                  <div style={styles.unsortedBox}>
                    <h5 style={{ color: '#243D69', marginBottom: '8px' }}>📄 Dokumen Masuk ({unassignedDocs.length})</h5>
                    {unassignedDocs.length === 0 ? (
                      <p style={styles.emptyText}>Semua dokumen telah ditempatkan ke folder!</p>
                    ) : (
                      unassignedDocs.map((doc) => (
                        <div key={doc.id} style={styles.docItemCard}>
                          <span>{doc.name}</span>
                          <span style={styles.instructionSub}>Pilih kategori di bawah ➔</span>
                        </div>
                      ))
                    )}
                  </div>

                  <div style={styles.categoriesGrid}>
                    {currentStage.categories.map((cat) => (
                      <div key={cat} style={styles.folderBox}>
                        <h5 style={{ color: divisionColor, marginBottom: '8px' }}>📁 {cat}</h5>
                        <div style={styles.folderContentArea}>
                          {(classifiedDocs[cat] || []).map((doc) => (
                            <div key={doc.id} style={styles.classifiedItemCard} onClick={() => handleReturnDoc(doc, cat)}>
                              <span>✓ {doc.name}</span>
                              <span style={styles.removeText}>(klik batal)</span>
                            </div>
                          ))}
                          {(classifiedDocs[cat] || []).length === 0 && (
                            <span style={styles.dropPlaceholder}>Letakkan dokumen di sini</span>
                          )}
                        </div>
                        {unassignedDocs.length > 0 && (
                          <div style={styles.quickAssignBar}>
                            {unassignedDocs.map((doc) => (
                              <button
                                key={doc.id}
                                onClick={() => handleAssignCategory(doc, cat)}
                                style={styles.assignBtn}
                              >
                                + {doc.name.substring(0, 12)}...
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pilihan Analitis Profesional */}
              {currentStage.options && (
                <div style={styles.optionsGrid}>
                  {currentStage.options.map((opt) => {
                    const isSelected = selectedAnswers[currentStageIndex]?.id === opt.id;
                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(currentStageIndex, opt)}
                        style={{
                          ...styles.optionBtn,
                          borderColor: isSelected ? divisionColor : '#739BCB',
                          backgroundColor: isSelected ? '#C6D9F1' : '#FFF'
                        }}
                      >
                        {opt.text}
                      </button>
                    );
                  })}
                </div>
              )}

              <button
                disabled={currentStage.items ? !isSortingComplete : !selectedAnswers[currentStageIndex]}
                onClick={handleNextStage}
                style={{
                  ...styles.primaryBtn,
                  backgroundColor: (currentStage.items ? isSortingComplete : selectedAnswers[currentStageIndex]) ? divisionColor : '#ccc',
                  cursor: (currentStage.items ? isSortingComplete : selectedAnswers[currentStageIndex]) ? 'pointer' : 'not-allowed',
                  marginTop: '20px'
                }}
              >
                {currentStageIndex < stages.length - 1 ? 'Lanjut ke Tahap Berikutnya ➔' : 'Selesaikan & Evaluasi Hasil 📋'}
              </button>
            </div>
          )}

          {/* TAHAP 4: EVALUASI AKHIR */}
          {step === 'evaluation' && (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '10px' }}>⭐</div>
              <h3 style={{ color: '#243D69', marginBottom: '10px' }}>Laporan Evaluasi Kerja - Mr. Jay</h3>
              <p style={{ marginBottom: '15px', color: '#555' }}>
                "Kamu telah menyelesaikan 5 tahapan analisis di divisi ini dengan standar korporat 4SHO COMPANY."
              </p>
              
              <div style={styles.scoreBox}>
                Skor Diperoleh: <strong>{scoreEarned} Poin</strong> / 100
              </div>

              <div style={styles.feedbackList}>
                <p>✓ <strong>Accuracy & Detail:</strong> Seluruh 5 tantangan analisis berhasil diverifikasi.</p>
                <p>✓ <strong>SOP Adherence:</strong> Keputusan operasional mematuhi standar kerja profesional.</p>
              </div>

              <button onClick={handleFinish} style={{ ...styles.primaryBtn, backgroundColor: divisionColor, marginTop: '20px' }}>
                Simpan Progres & Kembali ke Peta Divisi ➔
              </button>
            </div>
          )}

          <button onClick={onBackToMap} style={styles.backLinkBtn}>
            ← Batal / Kembali ke Peta
          </button>
        </div>
      </main>
    </div>
  );
}

const styles = {
  container: { display: 'flex', flexDirection: 'column', flex: 1, backgroundColor: '#F5F1E8', minHeight: '100vh' },
  header: { color: '#FFFFFF', padding: '12px 25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  profileBadge: { display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#739BCB', padding: '4px 12px 4px 4px', borderRadius: '30px', color: '#FFF', fontWeight: 'bold' },
  mainContent: { padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1 },
  card: { backgroundColor: '#FFFFFF', padding: '30px', borderRadius: '12px', border: '2px solid #243D69', width: '100%', maxWidth: '750px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' },
  missionHeaderTag: { borderBottom: '2px solid #C6D9F1', paddingBottom: '12px', marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '5px' },
  themeBadge: { fontSize: '11px', backgroundColor: '#739BCB', color: '#FFF', padding: '2px 8px', borderRadius: '4px', width: 'fit-content', fontWeight: 'bold' },
  sectionBox: { display: 'flex', flexDirection: 'column', gap: '15px' },
  npcBox: { display: 'flex', gap: '15px', backgroundColor: '#F5F1E8', padding: '15px', borderRadius: '8px', border: '1px solid #739BCB', alignItems: 'flex-start' },
  npcAvatarPlaceholder: { fontSize: '28px', backgroundColor: '#C6D9F1', padding: '8px', borderRadius: '6px' },
  dialogueText: { fontSize: '14px', color: '#333', marginTop: '5px', fontStyle: 'italic' },
  materialContentText: { fontSize: '14px', color: '#444', lineHeight: '1.6', backgroundColor: '#F5F1E8', padding: '15px', borderRadius: '8px' },
  hintContainer: { marginTop: '10px' },
  hintToggleBtn: { backgroundColor: '#C6D9F1', border: 'none', color: '#243D69', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' },
  hintBox: { fontSize: '13px', color: '#243D69', backgroundColor: '#fff', border: '1px dashed #739BCB', padding: '10px', borderRadius: '6px', marginTop: '8px' },
  progressIndicator: { fontSize: '13px', color: '#739BCB', fontWeight: 'bold', marginBottom: '5px' },
  instructionText: { fontSize: '15px', color: '#243D69', fontWeight: 'bold', marginBottom: '15px' },
  sortingContainer: { display: 'flex', flexDirection: 'column', gap: '15px' },
  unsortedBox: { backgroundColor: '#F5F1E8', padding: '12px', borderRadius: '8px', border: '1px solid #739BCB' },
  emptyText: { fontSize: '13px', color: '#2e7d32', fontStyle: 'italic' },
  docItemCard: { backgroundColor: '#FFF', padding: '8px 12px', borderRadius: '6px', border: '1px solid #739BCB', marginBottom: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' },
  instructionSub: { fontSize: '11px', color: '#739BCB', fontStyle: 'italic' },
  categoriesGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' },
  folderBox: { backgroundColor: '#F9F6F0', border: '2px dashed #739BCB', borderRadius: '8px', padding: '10px', display: 'flex', flexDirection: 'column', minHeight: '120px' },
  folderContentArea: { flex: 1, display: 'flex', flexDirection: 'column', gap: '5px', marginBottom: '8px' },
  classifiedItemCard: { backgroundColor: '#e8f5e9', border: '1px solid #a5d6a7', padding: '6px 8px', borderRadius: '4px', fontSize: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' },
  removeText: { fontSize: '10px', color: '#c62828' },
  dropPlaceholder: { fontSize: '12px', color: '#999', fontStyle: 'italic', textAlign: 'center', marginTop: '15px' },
  quickAssignBar: { borderTop: '1px solid #ddd', paddingTop: '6px', display: 'flex', flexDirection: 'column', gap: '4px' },
  assignBtn: { backgroundColor: '#243D69', color: '#FFF', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', cursor: 'pointer', textAlign: 'left' },
  optionsGrid: { display: 'flex', flexDirection: 'column', gap: '12px' },
  optionBtn: { padding: '14px 18px', borderRadius: '8px', border: '2px solid', textAlign: 'left', fontSize: '14px', cursor: 'pointer', fontWeight: 'bold', color: '#243D69' },
  scoreBox: { backgroundColor: '#C6D9F1', padding: '15px', borderRadius: '8px', fontSize: '18px', color: '#243D69', fontWeight: 'bold', marginBottom: '15px' },
  feedbackList: { textAlign: 'center', backgroundColor: '#F5F1E8', padding: '15px', borderRadius: '8px', fontSize: '13px', color: '#333', display: 'flex', flexDirection: 'column', gap: '8px' },
  primaryBtn: { width: '100%', padding: '12px', color: '#FFFFFF', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' },
  backLinkBtn: { backgroundColor: 'transparent', border: 'none', color: '#739BCB', cursor: 'pointer', marginTop: '20px', fontSize: '13px', fontWeight: 'bold' }
};