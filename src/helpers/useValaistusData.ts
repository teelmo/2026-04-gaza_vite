import { useQuery } from '@tanstack/react-query';

export type ValaistusRow = {
  date: string;
  label: string;
  max: number;
};

function parseTsv(text: string): ValaistusRow[] {
  const lines = text.trim().split('\n');
  return lines.slice(1).map((line) => {
    const [date, label, max] = line.split('\t');
    return { date: date.trim(), label: label.trim(), max: parseFloat(max) };
  });
}

export function useValaistusData(filePath: string) {
  return useQuery<ValaistusRow[]>({
    queryKey: ['valaistus', filePath],
    queryFn: () => fetch(filePath).then((r) => r.text()).then(parseTsv),
  });
}
