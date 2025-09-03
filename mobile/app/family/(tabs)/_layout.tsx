import React from 'react';
import { Tabs } from 'expo-router';
import { colors } from '@/lib/theme';

export default function FamilyTabs() {
  return (
    <Tabs screenOptions={{ headerShown: true, headerTitle: 'Yuppi – Familiar', tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen name="index" options={{ title: 'Categorias' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
