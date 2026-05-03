import { type FC } from 'react';
import { useArticlesData } from '~/helpers/useArticlesData';
import { articleImageUrl } from '~/helpers/articleImageUrl';
import useStore from '~/store/store';
import { l } from '~/data/LYHYET';

type Crop = {
  name: string;
  aspect: number;
  coordinates: { x: number; y: number; width: number; height: number };
};

type Article = {
  datePublished: string;
  subjects: { id: string; title: { fi: string; sv: string } }[];
  url: { full: string };
  headline: {
    full: string;
    image?: { id: string; alt?: string; blurhash?: string; crops: Crop[] };
  };
};

const LueMyos: FC = () => {
  const lang = useStore((s) => s.lang);
  const { data: articles = [] } = useArticlesData();
  const t = l(lang);

  return (
    <div className="flex flex-col gap-y-6 px-4 md:px-0">
      <h2 className="px-0">{t.read_more}</h2>
      <div className="flex flex-col gap-6">
        {(articles as Article[]).map((article, index) => {
          const imageUrl =
            article.headline.image?.id && article.headline.image?.crops
              ? articleImageUrl(article.headline.image.id, article.headline.image.crops)
              : null;
          const topic = article.subjects?.[0]?.title?.[lang] ?? '';
          return (
            <a
              className="flex justify-between gap-4"
              key={`link-${index}`}
              href={article.url.full}
            >
              <div className="flex flex-col gap-2">
                <div className="text-xs font-bold sm:text-sm">{topic}</div>
                <h3 className="text-sm font-bold sm:text-base">{article.headline.full}</h3>
                <div className="text-xs">
                  {new Date(article.datePublished).toLocaleDateString(
                    lang === 'fi' ? 'fi-FI' : 'sv-SE'
                  )}
                </div>
              </div>
              {imageUrl && (
                <img
                  className="aspect-square max-h-24 max-w-24 rounded-lg object-cover object-left blur-[0.2px]"
                  src={imageUrl}
                  alt={article.headline.image?.alt ?? ''}
                  width={100}
                  loading="eager"
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LueMyos;
