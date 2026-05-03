type Crop = {
  name: string;
  coordinates: { x: number; y: number; width: number; height: number };
};

export const articleImageUrl = (id: string, crops: Crop[]): string | null => {
  const crop = crops.find((c) => c.name === '1:1');
  if (!crop) return null;
  const { x, y, width, height } = crop.coordinates;
  return `https://img.img-cdn.yle.fi/w_${width},h_${height},x_${x},y_${y},crop_extract/w_200/${id}`;
};
