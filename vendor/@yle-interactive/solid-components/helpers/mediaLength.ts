// Utility function to format audio duration
export function formatMediaDuration(duration: number): string {
  const minutes = Math.floor(duration / 60) || 0;
  const seconds = Math.floor(duration % 60) || 0;

  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
