import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { colors, typography, spacing } from '@/lib/theme';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: spacing.lg, backgroundColor: colors.background }}>
      <Text style={[typography.h1, { marginBottom: spacing.lg }]}>Yuppi</Text>
      <Text style={[typography.body, { textAlign: 'center', marginBottom: spacing.lg }]}>Bem-vindo! Selecione um plano para continuar.</Text>
      <Link href="/planSelector" asChild>
        <Pressable accessibilityRole="button" accessibilityLabel="Escolher plano" style={{ backgroundColor: colors.primary, paddingVertical: 16, paddingHorizontal: 24, borderRadius: 12, minWidth: 240 }}>
          <Text style={[typography.button, { color: colors.onPrimary, textAlign: 'center' }]}>Escolher Plano</Text>
        </Pressable>
      </Link>
    </View>
  );
}
