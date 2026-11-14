// =========================================
// Utility untuk mengelola localStorage
// =========================================

const PROFILES_KEY = '4sho_company_profiles';
const ACTIVE_PROFILE_KEY = '4sho_company_active_profile';

// Mengambil semua daftar profil karyawan
export const getProfiles = () => {
  const data = localStorage.getItem(PROFILES_KEY);
  return data ? JSON.parse(data) : [];
};

// Menyimpan daftar profil baru
export const saveProfiles = (profiles) => {
  localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
};

// Mengambil profil yang sedang aktif dimainkan
export const getActiveProfile = () => {
  const data = localStorage.getItem(ACTIVE_PROFILE_KEY);
  return data ? JSON.parse(data) : null;
};

// Mengatur profil aktif
export const setActiveProfile = (profile) => {
  localStorage.setItem(ACTIVE_PROFILE_KEY, JSON.stringify(profile));
};

// Menghapus sesi aktif (Logout)
export const clearActiveProfile = () => {
  localStorage.removeItem(ACTIVE_PROFILE_KEY);
};