import { type ComponentProps } from 'react';
import RecommendationBlock from './RecommendationBlock';
import { useArticlesData } from '~/helpers/useArticlesData';
import useStore from '~/store/store';

type Props = Omit<ComponentProps<typeof RecommendationBlock>, 'data' | 'lang'>;

export default function SmartRecommendationBlock(props: Props) {
  const lang = useStore((s) => s.lang);
  const { data = [] } = useArticlesData();
  return <RecommendationBlock {...props} lang={lang} data={data} />;
}
