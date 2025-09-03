import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { colors, spacing, typography } from '@/lib/theme';
import VideoCard from './VideoCard';
import PdfCard from './PdfCard';

type Props = { title: string };

export default function CategoryRow({ title }: Props) {
  return (
    <View style={{ marginBottom: spacing.lg }}>
      <Text style={[typography.h2, { marginBottom: spacing.md }]}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing.md }}>
        <VideoCard id="1" title={`${title} Vídeo 1`} />
        <VideoCard id="2" title={`${title} Vídeo 2`} />
        <PdfCard id="10" title={`${title} PDF`} />
      </ScrollView>
    </View>
  );
}
