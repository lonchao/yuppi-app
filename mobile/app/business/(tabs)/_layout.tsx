import React from 'react';
import { Tabs } from 'expo-router';
import { colors } from '@/lib/theme';

export default function BusinessTabs() {
  return (
    <Tabs screenOptions={{ headerShown: true, headerTitle: 'Yuppi – Business', tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen name="index" options={{ title: 'Volumes' }} />
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
