import { useVideoPlayer, type VideoSource, type VideoPlayerStatus } from 'expo-video';

// Create a player hook wrapper for convenience
export function usePlayer(source: VideoSource, options?: { shouldPlay?: boolean }) {
  return useVideoPlayer(source, { shouldPlay: options?.shouldPlay ?? false });
}

export function isPlaying(status?: VideoPlayerStatus): boolean {
  return !!status?.isPlaying;
}
