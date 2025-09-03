import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface SettingsState {
  language: 'pt' | 'en';
  textScale: number; // 1.0 = padrão
  highContrast: boolean;
  setLanguage: (lang: 'pt' | 'en') => void;
  setTextScale: (scale: number) => void;
  toggleContrast: () => void;
}

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      language: 'pt',
      textScale: 1.0,
      highContrast: true,
      setLanguage: (language) => set({ language }),
      setTextScale: (textScale) => set({ textScale }),
      toggleContrast: () => set((s) => ({ highContrast: !s.highContrast })),
    }),
    { name: 'yuppi-settings' }
  )
);
