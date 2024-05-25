import { readdir, writeFile } from 'node:fs/promises';

/** icons directory */
const ICONS = 'public/icons';

/** destination file */
const DEST = 'src/dynamic.json';

/** icons list */
const icons = (await readdir(ICONS, { withFileTypes: true }))
  .filter((file) => file.isFile() && file.name.endsWith('.svg'))
  .map((file) => file.name.replace(/\.svg$/, ''))
  .sort();

await writeFile(DEST, JSON.stringify({ icons }, null, 2));
