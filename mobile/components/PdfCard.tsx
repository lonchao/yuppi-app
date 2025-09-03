import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { colors, spacing, typography, elevation } from '@/lib/theme';

type Props = { id: string; title: string };

export default function PdfCard({ id, title }: Props) {
  return (
    <Link href={`/pdf/${id}`} asChild>
      <Pressable accessibilityRole="button" accessibilityLabel={`Abrir PDF ${title}`} style={{ backgroundColor: colors.card, borderRadius: 16, padding: spacing.md, ...elevation.sm }}>
        <Text style={typography.h3}>{title}</Text>
      </Pressable>
    </Link>
  );
}
