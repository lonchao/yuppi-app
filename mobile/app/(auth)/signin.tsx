import React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { colors, spacing, typography } from '@/lib/theme';
import { router } from 'expo-router';

export default function SignIn() {
  return (
    <View style={{ flex: 1, padding: spacing.lg, backgroundColor: colors.background }}>
      <Text style={[typography.h1, { marginBottom: spacing.lg }]}>Entrar</Text>
      <TextInput accessibilityLabel="Email" placeholder="Email" placeholderTextColor="#888" style={{ backgroundColor: colors.card, padding: 16, borderRadius: 12, marginBottom: spacing.md }} />
      <TextInput accessibilityLabel="Senha" placeholder="Senha" placeholderTextColor="#888" secureTextEntry style={{ backgroundColor: colors.card, padding: 16, borderRadius: 12, marginBottom: spacing.xl }} />
      <Pressable onPress={() => router.replace('/planSelector')} style={{ backgroundColor: colors.primary, padding: 16, borderRadius: 12 }}>
        <Text style={[typography.button, { color: colors.onPrimary, textAlign: 'center' }]}>Continuar</Text>
      </Pressable>
    </View>
  );
}
