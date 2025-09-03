import React from 'react';
import { ScrollView } from 'react-native';
import { spacing, colors } from '@/lib/theme';
import CategoryRow from '@/components/CategoryRow';

export default function Leituras() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.md }}>
      <CategoryRow title="Histórias" />
      <CategoryRow title="Fábulas" />
      <CategoryRow title="Educação" />
    </ScrollView>
  );
}
