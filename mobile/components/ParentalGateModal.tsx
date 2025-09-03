import React, { useMemo, useState } from 'react';
import { Modal, View, Text, TextInput, Pressable } from 'react-native';
import { colors, spacing, typography } from '@/lib/theme';

type Props = { visible: boolean; onClose: () => void };

export default function ParentalGateModal({ visible, onClose }: Props) {
  const a = useMemo(() => Math.floor(Math.random() * 8) + 1, [visible]);
  const b = useMemo(() => Math.floor(Math.random() * 8) + 1, [visible]);
  const [answer, setAnswer] = useState('');
  const correct = a + b;

  const closeAllowed = Number(answer) === correct;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={{ flex: 1, backgroundColor: '#0008', alignItems: 'center', justifyContent: 'center', padding: spacing.lg }}>
        <View style={{ backgroundColor: colors.card, padding: spacing.lg, borderRadius: 16, width: '100%' }}>
          <Text style={[typography.h2, { marginBottom: spacing.md }]}>Controle Parental</Text>
          <Text style={[typography.body, { marginBottom: spacing.md }]}>Para continuar, responda: {a} + {b} = ?</Text>
          <TextInput
            accessibilityLabel="Resposta"
            keyboardType="number-pad"
            value={answer}
            onChangeText={setAnswer}
            style={{ backgroundColor: colors.background, padding: 16, borderRadius: 12, marginBottom: spacing.lg }}
          />
          <Pressable
            accessibilityRole="button"
            disabled={!closeAllowed}
            onPress={onClose}
            style={{ backgroundColor: closeAllowed ? colors.primary : '#888', padding: 16, borderRadius: 12 }}
          >
            <Text style={[typography.button, { color: colors.onPrimary, textAlign: 'center' }]}>Confirmar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
