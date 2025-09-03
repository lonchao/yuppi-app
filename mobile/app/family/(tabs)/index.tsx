import React from 'react';
import { View, ScrollView } from 'react-native';
import CategoryRow from '@/components/CategoryRow';
import { spacing, colors } from '@/lib/theme';

export default function FamilyHome() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.md }}>
      <CategoryRow title="Desenhos" />
      <CategoryRow title="Música" />
      <CategoryRow title="Educação" />
    </ScrollView>
  );
}
