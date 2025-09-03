import React, { useMemo } from 'react';
import { View, ScrollView, Text, ActivityIndicator, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query';
import { colors, spacing, typography } from '@/lib/theme';
import VideoCard from '@/components/VideoCard';
import PersonagemCard from '@/components/PersonagemCard';
import { getHomeFeed, type HomeFeed } from '@/lib/api';

function SectionHeader({ title }: { title: string }) {
  const insets = useSafeAreaInsets();
  return (
    <Text
      accessibilityRole="header"
      accessibilityLabel={`Seção ${title}`}
      style={[typography.h2, { marginBottom: spacing.md, paddingHorizontal: insets.left }]}
    >
      {title}
    </Text>
  );
}

function RowContainer({ children }: { children: React.ReactNode }) {
  const insets = useSafeAreaInsets();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: spacing.md, paddingHorizontal: insets.left }}
    >
      {children}
    </ScrollView>
  );
}

function VideoSkeleton({ width = 300 }: { width?: number }) {
  return (
    <View
      accessibilityLabel="Carregando"
      accessibilityState={{ busy: true }}
      style={{ width, backgroundColor: colors.card, borderRadius: 16 }}
    >
      <View
        style={{
          width: '100%',
          aspectRatio: 16 / 9,
          backgroundColor: '#2A2A2A',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      />
      <View style={{ padding: spacing.md }}>
        <View style={{ height: 18, backgroundColor: '#2A2A2A', borderRadius: 6, width: '80%' }} />
      </View>
    </View>
  );
}

function AvatarSkeleton() {
  return (
    <View
      accessibilityLabel="Carregando"
      accessibilityState={{ busy: true }}
      style={{
        width: 140,
        alignItems: 'center',
        padding: spacing.md,
        backgroundColor: colors.card,
        borderRadius: 16,
      }}
    >
      <View
        style={{
          width: 96,
          height: 96,
          borderRadius: 48,
          backgroundColor: '#2A2A2A',
          marginBottom: spacing.sm,
        }}
      />
      <View style={{ height: 18, backgroundColor: '#2A2A2A', borderRadius: 6, width: '90%' }} />
    </View>
  );
}

export default function FamilyHome() {
  const insets = useSafeAreaInsets();
  const { data, isLoading, isError, refetch, isRefetching } = useQuery<HomeFeed>({
    queryKey: ['home-feed'],
    queryFn: getHomeFeed,
  });

  const isEmpty = useMemo(() => {
    return (
      !data ||
      ((data.videos?.length ?? 0) === 0 &&
        (data.music?.length ?? 0) === 0 &&
        (data.characters?.length ?? 0) === 0 &&
        (data.devotionals?.length ?? 0) === 0)
    );
  }, [data]);

  if (isLoading) {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: colors.background }}
        contentContainerStyle={{
          paddingHorizontal: spacing.md,
          paddingTop: spacing.md + insets.top,
          paddingBottom: spacing.lg + insets.bottom,
          gap: spacing.lg,
        }}
        accessibilityLabel="Carregando conteúdo da Home"
        accessibilityState={{ busy: true }}
      >
        <View>
          <SectionHeader title="Todos os vídeos" />
          <RowContainer>
            <VideoSkeleton />
            <VideoSkeleton />
            <VideoSkeleton />
          </RowContainer>
        </View>
        <View>
          <SectionHeader title="Músicas" />
          <RowContainer>
            <VideoSkeleton width={220} />
            <VideoSkeleton width={220} />
          </RowContainer>
        </View>
        <View>
          <SectionHeader title="Personagens" />
          <RowContainer>
            <AvatarSkeleton />
            <AvatarSkeleton />
            <AvatarSkeleton />
          </RowContainer>
        </View>
        <View>
          <SectionHeader title="Devocionais" />
          <RowContainer>
            <VideoSkeleton width={220} />
            <VideoSkeleton width={220} />
          </RowContainer>
        </View>
      </ScrollView>
    );
  }

  if (isError) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.lg + insets.top,
          paddingBottom: spacing.lg + insets.bottom,
        }}
      >
        <Text
          accessibilityRole="alert"
          style={[typography.h3, { color: colors.error, marginBottom: spacing.md }]}
        >
          Ocorreu um erro ao carregar
        </Text>
        <Pressable
          onPress={() => refetch()}
          accessibilityRole="button"
          accessibilityLabel="Tentar novamente"
          style={{
            backgroundColor: colors.primary,
            paddingHorizontal: spacing.xl,
            paddingVertical: spacing.md,
            borderRadius: 12,
          }}
        >
          <Text style={[typography.button, { color: colors.onPrimary }]}>Tentar novamente</Text>
        </Pressable>
        {isRefetching && (
          <ActivityIndicator style={{ marginTop: spacing.md }} color={colors.onBackground} />
        )}
      </View>
    );
  }

  if (isEmpty) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.lg + insets.top,
          paddingBottom: spacing.lg + insets.bottom,
        }}
      >
        <Text accessibilityRole="text" style={typography.h3}>
          Nada por aqui ainda
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{
        paddingHorizontal: spacing.md,
        paddingTop: spacing.md + insets.top,
        paddingBottom: spacing.lg + insets.bottom,
        gap: spacing.lg,
      }}
      accessibilityLabel="Home Família"
    >
      <View accessible accessibilityLabel="Seção Todos os vídeos">
        <SectionHeader title="Todos os vídeos" />
        <RowContainer>
          {data!.videos.map((v) => (
            <View key={v.id} style={{ width: 300 }}>
              <VideoCard id={v.id} title={v.title} thumbnail={v.thumbnail} />
            </View>
          ))}
        </RowContainer>
      </View>

      <View accessible accessibilityLabel="Seção Músicas">
        <SectionHeader title="Músicas" />
        <RowContainer>
          {data!.music.map((m) => (
            <View key={m.id} style={{ width: 300 }}>
              <VideoCard id={m.id} title={m.title} thumbnail={m.thumbnail} />
            </View>
          ))}
        </RowContainer>
      </View>

      <View accessible accessibilityLabel="Seção Personagens">
        <SectionHeader title="Personagens" />
        <RowContainer>
          {data!.characters.map((c) => (
            <View key={c.id}>
              <PersonagemCard
                id={c.id}
                name={c.name}
                avatar={c.avatar}
                onPress={() => {
                  /* TODO: navigate to character page */
                }}
              />
            </View>
          ))}
        </RowContainer>
      </View>

      <View accessible accessibilityLabel="Seção Devocionais">
        <SectionHeader title="Devocionais" />
        <RowContainer>
          {data!.devotionals.map((d) => (
            <View key={d.id}>
              <VideoCard id={d.id} title={d.title} thumbnail={d.thumbnail} />
            </View>
          ))}
        </RowContainer>
      </View>
    </ScrollView>
  );
}
