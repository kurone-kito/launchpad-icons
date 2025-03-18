import { join } from 'node:path';
import { writeFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';

/** The directory containing the destination files. */
const DIST_DIR = 'src';

/** The name of the meta file. */
const DIST_NAME = 'meta.json';

/** The source file to copy to the meta directory. */
const SRC_FILE = '_Meta.json';

/**
 * Copy the source file to the meta directory.
 * @param path The path to the source file.
 */
export const copyToMeta = async (path: string): Promise<void> => {
  const fullPath = pathToFileURL(join(path, SRC_FILE));
  const { default: json } = await import(fullPath.href, {
    with: { type: 'json' },
  });
  const str = JSON.stringify(json, null, 2);
  await writeFile(join(DIST_DIR, DIST_NAME), str);
};
