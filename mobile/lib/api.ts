export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

const BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'https://example.com/api';

export async function api<T = any>(path: string, options: RequestInit & { method?: HttpMethod } = {}) {
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
