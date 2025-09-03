import React from 'react';
import { ScrollView } from 'react-native';
import CategoryRow from '@/components/CategoryRow';
import { spacing, colors } from '@/lib/theme';

export default function BusinessHome() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.md }}>
      <CategoryRow title="Volume 1" />
      <CategoryRow title="Volume 2" />
      <CategoryRow title="Volume 3" />
    </ScrollView>
  );
}
