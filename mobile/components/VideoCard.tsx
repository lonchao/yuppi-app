import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { colors, spacing, typography, elevation } from '@/lib/theme';

type Props = { id: string; title: string; thumbnail?: string };

export default function VideoCard({ id, title, thumbnail }: Props) {
  return (
    <Link href={`/player/${id}`} asChild>
      <Pressable accessibilityRole="button" accessibilityLabel={`Abrir vídeo ${title}`} style={{ backgroundColor: colors.card, borderRadius: 16, overflow: 'hidden', ...elevation.sm }}>
        <Image source={{ uri: thumbnail || 'https://placehold.co/640x360?text=Video' }} style={{ width: '100%', aspectRatio: 16 / 9 }} />
        <View style={{ padding: spacing.md }}>
          <Text style={typography.h3}>{title}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
