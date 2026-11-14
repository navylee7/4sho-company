// Lokasi: src/App.jsx
import React, { useState } from 'react';
import { getActiveProfile, setActiveProfile, clearActiveProfile, getProfiles, saveProfiles } from './utils/storage';
import ProfileSelectionPage from './pages/ProfileSelectionPage';
import OfficeLobbyPage from './pages/OfficeLobbyPage';
import CharacterCreationPage from './pages/CharacterCreationPage';
import DivisionMapPage from './pages/DivisionMapPage';
import MissionSessionPage from './pages/MissionSessionPage';
import FinalAssessmentPage from './pages/FinalAssessmentPage';
import CertificateModal from './components/CertificateModal';

export default function App() {
  const [activeProfile, setActiveProfileState] = useState(getActiveProfile());
  const [currentView, setCurrentView] = useState('lobby'); // 'lobby', 'character', 'map', 'mission', 'assessment'
  const [activeMission, setActiveMission] = useState(null);
  const [divisionColor, setDivisionColor] = useState('#243D69');
  const [showCertificate, setShowCertificate] = useState(false);

  // Jika belum memilih profil sama sekali
  if (!activeProfile) {
    return (
      <ProfileSelectionPage
        onProfileSelected={(profile) => {
          setActiveProfileState(profile);
          if (!profile.character) {
            setCurrentView('character');
          } else {
            setCurrentView('lobby');
          }
        }}
      />
    );
  }

  // Jika profil belum punya karakter atau sedang di menu kustomisasi
  if (!activeProfile.character || currentView === 'character') {
    const handleSaveCharacter = (characterData) => {
      const updatedProfile = { ...activeProfile, character: characterData };
      setActiveProfileState(updatedProfile);
      setActiveProfile(updatedProfile);

      const profiles = getProfiles();
      const updatedProfiles = profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p));
      saveProfiles(updatedProfiles);

      setCurrentView('lobby');
    };

    return <CharacterCreationPage profile={activeProfile} onSaveCharacter={handleSaveCharacter} />;
  }

  // Jika sedang dalam sesi misi
  if (activeMission) {
    const handleCompleteMission = (missionId, scoreEarned) => {
      const completed = activeProfile.completedMissions || [];
      const newCompleted = completed.includes(missionId) ? completed : [...completed, missionId];
      const newScore = (activeProfile.score || 0) + scoreEarned;

      const updatedProfile = {
        ...activeProfile,
        score: newScore,
        completedMissions: newCompleted,
      };

      setActiveProfileState(updatedProfile);
      setActiveProfile(updatedProfile);

      const profiles = getProfiles();
      const updatedProfiles = profiles.map((p) => (p.id === updatedProfile.id ? updatedProfile : p));
      saveProfiles(updatedProfiles);

      setActiveMission(null);
      setCurrentView('map');
    };

    return (
      <MissionSessionPage
        mission={activeMission}
        divisionColor={divisionColor}
        profile={activeProfile}
        onCompleteMission={handleCompleteMission}
        onBackToMap={() => setActiveMission(null)}
      />
    );
  }

  // Jika sedang di halaman Final Assessment
  if (currentView === 'assessment') {
    return (
      <>
        <FinalAssessmentPage
          profile={activeProfile}
          onViewCertificate={() => setShowCertificate(true)}
          onBackToMap={() => setCurrentView('map')}
        />

        {showCertificate && (
          <CertificateModal
            profile={activeProfile}
            recommendedDivision="Executive Secretary & Corporate Strategist"
            onClose={() => setShowCertificate(false)}
          />
        )}
      </>
    );
  }

  // Jika sedang di Peta Divisi
  if (currentView === 'map') {
    return (
      <>
        <DivisionMapPage
          profile={activeProfile}
          onSelectMission={(mission, color) => {
            setActiveMission(mission);
            setDivisionColor(color);
          }}
          onOpenAssessment={() => setCurrentView('assessment')}
          onLogout={() => {
            clearActiveProfile();
            setActiveProfileState(null);
          }}
          onBackToLobby={() => setCurrentView('lobby')}
          onEditAvatar={() => setCurrentView('character')}
        />

        {showCertificate && (
          <CertificateModal
            profile={activeProfile}
            recommendedDivision="Executive Secretary & Corporate Strategist"
            onClose={() => setShowCertificate(false)}
          />
        )}
      </>
    );
  }

  // Tampilan Default: Office Lobby (Halaman Beranda Utama)
  return (
    <OfficeLobbyPage
      profile={activeProfile}
      onStartJourney={() => {
        if (!activeProfile.character) {
          setCurrentView('character');
        } else {
          setCurrentView('map');
        }
      }}
      onLogout={() => {
        clearActiveProfile();
        setActiveProfileState(null);
      }}
    />
  );
}