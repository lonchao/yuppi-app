import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors, typography, spacing } from '@/lib/theme';
import { router } from 'expo-router';

export default function PlanSelector() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: spacing.lg, backgroundColor: colors.background }}>
      <Text style={[typography.h1, { textAlign: 'center', marginBottom: spacing.xl }]}>Escolha seu plano</Text>
      <View style={{ gap: spacing.lg }}>
        <Pressable
          onPress={() => router.replace('/family/(tabs)/')}
          accessibilityRole="button"
          accessibilityLabel="Plano Familiar"
          style={{ backgroundColor: colors.card, padding: 24, borderRadius: 16 }}
        >
          <Text style={[typography.h2, { marginBottom: 8 }]}>Familiar</Text>
          <Text style={typography.body}>Conteúdos organizados por categorias e controle parental.</Text>
        </Pressable>
        <Pressable
          onPress={() => router.replace('/business/(tabs)/')}
          accessibilityRole="button"
          accessibilityLabel="Plano Business"
          style={{ backgroundColor: colors.card, padding: 24, borderRadius: 16 }}
        >
          <Text style={[typography.h2, { marginBottom: 8 }]}>Business</Text>
          <Text style={typography.body}>Coleções por volume e gestão de downloads.</Text>
        </Pressable>
      </View>
    </View>
  );
}
