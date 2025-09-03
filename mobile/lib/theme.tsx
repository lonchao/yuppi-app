import React, { createContext, useContext, useMemo, useState } from 'react';
import { useColorScheme, type TextStyle } from 'react-native';

export const colors = {
  primary: '#2563EB',
  onPrimary: '#FFFFFF',
  background: '#0A0A0A',
  headerBackground: '#45484F',
  onBackground: '#FFFFFF',
  card: '#1E1E1E',
  error: '#DC2626',
  accent: '#FF7919',
  icon: '#8B8E95',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
};

export const typography = {
  h1: { fontSize: 28, fontWeight: '700', color: colors.onBackground },
  h2: { fontSize: 22, fontWeight: '700', color: colors.onBackground },
  h3: { fontSize: 18, fontWeight: '600', color: colors.onBackground },
  body: { fontSize: 18, color: colors.onBackground },
  button: { fontSize: 18, fontWeight: '700' },
} satisfies Record<string, TextStyle>;

export const elevation = {
  sm: {
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
};

type ThemeValue = { scheme: 'light' | 'dark'; toggle: () => void };
const ThemeCtx = createContext<ThemeValue>({ scheme: 'dark', toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const system = useColorScheme();
  const [scheme, setScheme] = useState<'light' | 'dark'>(system || 'dark');
  const value = useMemo(
    () => ({ scheme, toggle: () => setScheme((s) => (s === 'light' ? 'dark' : 'light')) }),
    [scheme],
  );
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export const useTheme = () => useContext(ThemeCtx);
