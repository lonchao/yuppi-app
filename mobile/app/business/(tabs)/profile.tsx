import React from 'react';
import { View, Text } from 'react-native';
import { colors, spacing, typography } from '@/lib/theme';

export default function BusinessProfile() {
  return (
    <View style={{ flex: 1, padding: spacing.lg, backgroundColor: colors.background }}>
      <Text style={[typography.h1, { marginBottom: spacing.md }]}>Perfil Business</Text>
      <Text style={typography.body}>Configurações de conta e preferências.</Text>
    </View>
  );
}
