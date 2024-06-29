import { readdir, readFile, writeFile } from 'node:fs/promises';
import { parse } from 'marked';

/** icons directory */
const ICONS = 'public/icons';

/** destination file */
const DEST = 'src/dynamic.json';

/** texts directory */
const MDS = 'src/assets/texts';

/** icons list */
const icons = (await readdir(ICONS, { withFileTypes: true }))
  .filter((file) => file.isFile() && file.name.endsWith('.svg'))
  .map((file) => file.name.replace(/\.svg$/, ''))
  .sort();

/**
 * empty texts
 * @type {Readonly<Record<string, string>>}
 */
const emptyTexts = {};

const texts = await (
  await readdir(MDS, { withFileTypes: true })
)
  .filter((file) => file.isFile() && file.name.endsWith('.md'))
  .reduce(
    (acc, file) =>
      acc.then(async (texts) => {
        const key = file.name.replace(/\.md$/, '');
        const text = await readFile(`${MDS}/${file.name}`, 'utf8');
        return { ...texts, [key]: await parse(text) };
      }),
    Promise.resolve(emptyTexts),
  );

await writeFile(DEST, JSON.stringify({ icons, texts }, null, 2));
