import { writeFile } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import srcData from './conf.json' with { type: 'json' };

const relativePath = (d) => join(dirname(fileURLToPath(import.meta.url)), d);

const targetPath = relativePath('../dist/conf.json');
const stringifiedSrc = JSON.stringify(srcData, null, 2);

writeFile(targetPath, stringifiedSrc, (error) => {
  if (error) throw error;
  console.log(`Wrote ${targetPath}`);
});
