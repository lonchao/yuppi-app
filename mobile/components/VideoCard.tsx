import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { colors, spacing, typography, elevation } from '@/lib/theme';

type Props = { id: string; title: string; thumbnail?: string };

export default function VideoCard({ id, title, thumbnail }: Props) {
  const [errored, setErrored] = useState(false);
  return (
    <Link href={`/player/${id}`} asChild>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`Abrir vídeo ${title}`}
        style={{
          backgroundColor: colors.card,
          borderRadius: 20,
          overflow: 'hidden',
          ...elevation.sm,
        }}
      >
        {errored ? (
          <View
            style={{
              width: '100%',
              aspectRatio: 16 / 9,
              backgroundColor: '#2A2A2A',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ color: '#777' }}>sem imagem</Text>
          </View>
        ) : (
          <Image
            source={{ uri: thumbnail || 'https://picsum.photos/640/360.jpg' }}
            style={{ width: '100%', aspectRatio: 16 / 9 }}
            contentFit="cover"
            onError={() => setErrored(true)}
          />
        )}
        <View style={{ padding: spacing.md }}>
          <Text style={typography.h3}>{title}</Text>
        </View>
      </Pressable>
    </Link>
  );
}
