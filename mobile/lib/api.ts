export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://example.com/api';

export async function api<T = any>(path: string, options: { method?: HttpMethod } & Record<string, any> = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`API ${res.status}: ${txt}`);
  }
  const contentType = res.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return (await res.json()) as T;
  }
  // @ts-ignore
  return (await res.text()) as T;
}

// ---------- HOME FEED (mock first) ----------
export type HomeVideo = { id: string; title: string; thumbnail?: string };
export type HomeMusic = { id: string; title: string; thumbnail?: string };
export type HomeCharacter = { id: string; name: string; avatar?: string };
export type HomeDevotional = { id: string; title: string; thumbnail?: string };

export type HomeFeed = {
  videos: HomeVideo[];
  music: HomeMusic[];
  characters: HomeCharacter[];
  devotionals: HomeDevotional[];
};

export async function getHomeFeed(): Promise<HomeFeed> {
  // Simulate network latency
  await new Promise((r) => setTimeout(r, 600));
  // TODO: swap to real endpoint: return api<HomeFeed>('/home');
  return {
    videos: [
      { id: 'v1', title: 'A Arca de Noé', thumbnail: 'https://placehold.co/640x360/png?text=Noe' },
      { id: 'v2', title: 'Daniel na Cova dos Leões', thumbnail: 'https://placehold.co/640x360/png?text=Daniel' },
      { id: 'v3', title: 'Jonas e a Baleia', thumbnail: 'https://placehold.co/640x360/png?text=Jonas' },
    ],
    music: [
      { id: 'm1', title: 'Louvai ao Senhor', thumbnail: 'https://placehold.co/640x360/png?text=Louvor' },
      { id: 'm2', title: 'Alegria do Coração', thumbnail: 'https://placehold.co/640x360/png?text=Alegria' },
    ],
    characters: [
      { id: 'c1', name: 'Yuppi', avatar: 'https://placehold.co/256x256/png?text=Y' },
      { id: 'c2', name: 'Luna', avatar: 'https://placehold.co/256x256/png?text=L' },
      { id: 'c3', name: 'Bento', avatar: 'https://placehold.co/256x256/png?text=B' },
    ],
    devotionals: [
      { id: 'd1', title: 'Gratidão Diária', thumbnail: 'https://placehold.co/640x360/png?text=Gratid%C3%A3o' },
      { id: 'd2', title: 'Coragem e Fé', thumbnail: 'https://placehold.co/640x360/png?text=F%C3%A9' },
    ],
  };
}
