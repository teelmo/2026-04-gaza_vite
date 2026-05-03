import type { FeatureCollection, Point } from 'geojson';

export const points: VideoPoint[] = [
  {
    id: 'Ainikin päiväkoti',
    coordinates: [24.07296, 61.46331],
    videoUrl:
      'https://yleerilliset.akamaized.net/plus/Feature-videot/2025/10/Ainikin_paivakoti.mp4',
  },
  {
    id: 'Amurin päiväkoti',
    coordinates: [24.1249, 61.43681],
    videoUrl: 'https://yleerilliset.akamaized.net/plus/Feature-videot/2025/10/Amurin_paivakoti.mp4',
  },
  {
    id: 'Spratlysaaria 1992',
    coordinates: [110.8517, 10.0617],
    videoUrl: '/video/spratlysaaria_31_07_1992_uutiset.mp4',
  },
];

export const pointsToGeoJSON = (): FeatureCollection<Point> => ({
  type: 'FeatureCollection',
  features: points.map((p) => ({
    id: p.id,
    type: 'Feature' as const,
    geometry: {
      type: 'Point' as const,
      coordinates: p.coordinates,
    },
    properties: {
      id: p.id,
      videoUrl: p.videoUrl,
    },
  })),
});
