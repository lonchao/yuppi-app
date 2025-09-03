import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { withLayoutContext } from 'expo-router';
import {
  createMaterialTopTabNavigator,
  type MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import { colors, spacing, typography } from '@/lib/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const TopTabs = createMaterialTopTabNavigator();
const Tabs = withLayoutContext(TopTabs.Navigator);

function TopTabBar({ state, navigation }: MaterialTopTabBarProps) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top + spacing.md,
        paddingLeft: insets.left + spacing.md,
        paddingRight: insets.right + spacing.md,
        backgroundColor: colors.headerBackground,
      }}
    >
      {/* Header: Avatar + Greeting (left), Icon menu (right) */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: spacing.md,
        }}
      >
        <Pressable
          onPress={() => navigation.navigate('profile' as never)}
          accessibilityRole="button"
          accessibilityLabel="Abrir perfil"
          hitSlop={8}
          style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.sm }}
        >
          <View
            accessibilityLabel="Avatar"
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              backgroundColor: '#2B2E36',
              borderWidth: 2,
              borderColor: colors.accent,
            }}
          />
          <Text style={[typography.h2, { color: colors.onBackground }]}>Bem vinda, Alice</Text>
        </Pressable>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.lg }}>
          {[
            { route: 'index', icon: 'view-grid-plus' },
            { route: 'musicas', icon: 'music' },
            { route: 'leituras', icon: 'book-open-blank-variant' },
          ].map((item) => {
            const idx = state.routes.findIndex((r) => r.name === item.route);
            const isSelected = idx === state.index;
            const onPress = () => navigation.navigate(item.route as never);
            const SIZE = 56;
            const RADIUS = 22;
            return (
              <View key={item.route} style={{ width: SIZE, height: SIZE, borderRadius: RADIUS }}>
                {isSelected && (
                  <View
                    pointerEvents="none"
                    style={{
                      position: 'absolute',
                      top: 6,
                      left: 0,
                      right: 0,
                      bottom: -6,
                      borderRadius: RADIUS,
                      backgroundColor: '#A45319',
                    }}
                  />
                )}
                <Pressable
                  onPress={onPress}
                  style={{
                    width: SIZE,
                    height: SIZE,
                    borderRadius: RADIUS,
                    backgroundColor: isSelected ? colors.accent : 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    shadowColor: '#000',
                    shadowOpacity: isSelected ? 0.35 : 0,
                    shadowRadius: 8,
                    shadowOffset: { width: 0, height: 6 },
                    elevation: isSelected ? 6 : 0,
                  }}
                  hitSlop={8}
                  accessibilityRole="button"
                  accessibilityState={isSelected ? { selected: true } : {}}
                >
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={28}
                    color={isSelected ? colors.onPrimary : colors.icon}
                  />
                </Pressable>
              </View>
            );
          })}
        </View>
      </View>
      {/* Segmented tabs removidos conforme solicitado */}
    </View>
  );
}

export default function FamilyTabs() {
  return (
    <Tabs
      tabBar={(props) => <TopTabBar {...props} />}
      screenOptions={{
        lazy: true,
        swipeEnabled: true,
        sceneStyle: { backgroundColor: colors.background },
      }}
    >
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="musicas" options={{ title: 'Músicas' }} />
      <Tabs.Screen name="leituras" options={{ title: 'Leituras' }} />
      {/* Profile existe como rota, mas não aparece na UI custom */}
      <Tabs.Screen name="profile" options={{ title: 'Perfil' }} />
    </Tabs>
  );
}
