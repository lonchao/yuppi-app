/// <reference types="expo-router/types" />
import 'expo-router/entry';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ExpoRouter.RootParamList {}
  }
}
