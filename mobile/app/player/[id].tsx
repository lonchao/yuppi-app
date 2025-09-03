import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { VideoView, useVideoPlayer } from 'expo-video';
import { colors, spacing, typography } from '@/lib/theme';

export default function Player() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const player = useVideoPlayer(
    { uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { shouldPlay: true }
  );

  return (
    <View style={{ flex: 1, backgroundColor: 'black', paddingTop: spacing.md }}>
      <VideoView
        style={{ width: '100%', aspectRatio: 16 / 9, backgroundColor: '#000' }}
        player={player}
        contentFit="contain"
        allowsFullscreen
        allowsPictureInPicture
      />
      <View style={{ padding: spacing.lg }}>
        <Text style={[typography.h2, { color: colors.onBackground }]}>Vídeo #{id}</Text>
      </View>
    </View>
  );
}
