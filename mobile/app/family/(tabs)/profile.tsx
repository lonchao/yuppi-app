import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { colors, spacing, typography } from '@/lib/theme';
import ParentalGateModal from '@/components/ParentalGateModal';

export default function FamilyProfile() {
  const [gateVisible, setGateVisible] = useState(false);

  return (
    <View style={{ flex: 1, padding: spacing.lg, backgroundColor: colors.background }}>
      <Text style={[typography.h1, { marginBottom: spacing.md }]}>Perfil Familiar</Text>
      <Text style={[typography.body, { marginBottom: spacing.xl }]}>Gerencie preferências com segurança.</Text>
      <Pressable
        onPress={() => setGateVisible(true)}
        accessibilityRole="button"
        accessibilityLabel="Abrir controle parental"
        style={{ backgroundColor: colors.primary, padding: 16, borderRadius: 12, alignSelf: 'flex-start' }}
      >
        <Text style={[typography.button, { color: colors.onPrimary }]}>Abrir Parental Gate</Text>
      </Pressable>

      <ParentalGateModal visible={gateVisible} onClose={() => setGateVisible(false)} />
    </View>
  );
}
