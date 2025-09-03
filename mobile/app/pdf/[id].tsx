import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';
import { colors } from '@/lib/theme';

export default function PdfReader() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const pdfUrl = `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`;

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <WebView
        source={{ uri: pdfUrl }}
        startInLoadingState
        renderLoading={() => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )}
      />
    </View>
  );
}
