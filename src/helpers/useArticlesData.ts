import { useQuery } from '@tanstack/react-query';
import useStore from '~/store/store';
import { articlesFi, articlesSv } from '~/data/articles';

export function useArticlesData() {
  const lang = useStore((s) => s.lang);
  return useQuery({
    queryKey: ['articles', lang],
    queryFn: () => Promise.resolve(lang === 'sv' ? articlesSv : articlesFi),
  });
}
