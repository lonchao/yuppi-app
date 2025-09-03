import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type DownloadItem = { id: string; title: string; type: 'video' | 'pdf'; path: string };

interface DownloadsState {
  items: DownloadItem[];
  add: (item: DownloadItem) => void;
  remove: (id: string) => void;
  clear: () => void;
}

export const useDownloads = create<DownloadsState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (item) => set({ items: [...get().items, item] }),
      remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      clear: () => set({ items: [] }),
    }),
    { name: 'yuppi-downloads' }
  )
);
