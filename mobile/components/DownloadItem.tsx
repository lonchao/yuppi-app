import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors, spacing, typography } from '@/lib/theme';

type Props = { id: string; title: string; onRemove?: (id: string) => void };

export default function DownloadItem({ id, title, onRemove }: Props) {
  return (
    <View style={{ backgroundColor: colors.card, padding: spacing.md, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
      <Text style={typography.body}>{title}</Text>
      <Pressable accessibilityRole="button" accessibilityLabel={`Remover ${title}`} onPress={() => onRemove?.(id)} style={{ paddingVertical: 10, paddingHorizontal: 16, backgroundColor: colors.error, borderRadius: 10 }}>
        <Text style={[typography.button, { color: colors.onPrimary }]}>Remover</Text>
      </Pressable>
    </View>
  );
}
