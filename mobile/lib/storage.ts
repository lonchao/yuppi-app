import * as SecureStore from 'expo-secure-store';
import * as FileSystem from 'expo-file-system';

// Secure key-value
export const secure = {
  set: (key: string, value: string) => SecureStore.setItemAsync(key, value),
  get: (key: string) => SecureStore.getItemAsync(key),
  del: (key: string) => SecureStore.deleteItemAsync(key),
};

// File helpers
export const files = {
  dir: FileSystem.documentDirectory || FileSystem.cacheDirectory!,
  async save(name: string, content: string) {
    const path = `${this.dir}${name}`;
    await FileSystem.writeAsStringAsync(path, content, { encoding: FileSystem.EncodingType.UTF8 });
    return path;
  },
  async read(name: string) {
    const path = `${this.dir}${name}`;
    return FileSystem.readAsStringAsync(path, { encoding: FileSystem.EncodingType.UTF8 });
  },
  async remove(name: string) {
    const path = `${this.dir}${name}`;
    return FileSystem.deleteAsync(path, { idempotent: true });
  },
  async exists(name: string) {
    const path = `${this.dir}${name}`;
    const info = await FileSystem.getInfoAsync(path);
    return info.exists;
  },
};
