import fs from 'fs';
import rawArticlesFi from '../src/data/rawArticlesFi.js';
import rawArticlesSv from '../src/data/rawArticlesSv.js';
import { sleep, fetchWithRetry, fetchImageData } from './fetchUtils.js';

const fetchForLang = async (ids, lang) => {
  const result = [];
  const total = ids.length;

  for (const id of ids) {
    if (result.length > 0) await sleep(1500);
    const index = result.length + 1;
    process.stdout.write(`Fetching ${lang} article ${index}/${total}: ${id} ... `);
    const response = await fetchWithRetry(
      `https://articles.api.yle.fi/v2/articles.json?app_id=${process.env.ARTICLES_APP_ID}&app_key=${process.env.ARTICLES_APP_KEY}&id=${id}`
    );
    const json = await response.json();
    const data = json.data[0];
    console.log(data?.headline?.full);

    const imageId = data?.headline?.image?.id;
    let blurhash = null;
    if (imageId) {
      await sleep(1500);
      process.stdout.write(`  Fetching image ${imageId} ... `);
      const imageData = await fetchImageData(imageId);
      blurhash = imageData.blurhash;
      console.log('done');
    }

    result.push({
      datePublished: data.datePublished,
      dateContentModified: data.dateContentModified,
      dateJsonModified: data.dateJsonModified,
      subjects: [
        {
          id: data.subjects?.[0]?.id,
          title: {
            fi: data.subjects?.[0]?.title?.fi,
            sv: data.subjects?.[0]?.title?.sv,
          },
        },
      ],
      url: data.url,
      headline: {
        full: data?.headline?.full,
        image: {
          alt: data?.headline?.image?.alt,
          id: data?.headline?.image?.id,
          blurhash,
          crops: data?.headline?.image?.crops,
        },
      },
    });
  }

  return result;
};

const fetchArticles = async () => {
  console.log('--- Finnish ---');
  const fi = await fetchForLang(rawArticlesFi, 'fi');

  console.log('\n--- Swedish ---');
  const sv = await fetchForLang(rawArticlesSv, 'sv');

  fs.writeFileSync(
    './src/data/articles.ts',
    `export const articlesFi = ${JSON.stringify(fi, null, 2)};\n\nexport const articlesSv = ${JSON.stringify(sv, null, 2)};\n`
  );

  console.log('\nArticles fetched successfully!');
};

fetchArticles();
