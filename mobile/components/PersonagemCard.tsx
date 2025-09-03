import React, { useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { colors, spacing, typography, elevation } from '@/lib/theme';

export type PersonagemCardProps = { id: string; name: string; avatar?: string; onPress?: (id: string) => void };

export default function PersonagemCard({ id, name, avatar, onPress }: PersonagemCardProps) {
  const [errored, setErrored] = useState(false);
  return (
    <Pressable
      onPress={() => onPress?.(id)}
      accessibilityRole="button"
      accessibilityLabel={`Abrir personagem ${name}`}
      focusable
      // Give first card preferred focus on TV when needed via parent list
      style={{
        width: 140,
        alignItems: 'center',
        padding: spacing.md,
        backgroundColor: colors.card,
        borderRadius: 16,
        ...elevation.sm,
      }}
    >
      {errored ? (
        <View style={{ width: 96, height: 96, borderRadius: 48, marginBottom: spacing.sm, backgroundColor: '#2A2A2A', alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: '#777' }}>sem avatar</Text>
        </View>
      ) : (
        <Image
          source={{ uri: avatar || 'https://picsum.photos/256/256.jpg' }}
          style={{ width: 96, height: 96, borderRadius: 48, marginBottom: spacing.sm }}
          contentFit="cover"
          onError={() => setErrored(true)}
          accessibilityIgnoresInvertColors
        />
      )}
      <Text numberOfLines={2} style={[typography.h3, { textAlign: 'center' }]}>
        {name}
      </Text>
    </Pressable>
  );
}
