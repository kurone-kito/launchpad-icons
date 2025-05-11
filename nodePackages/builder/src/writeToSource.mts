import { mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { WritableStream } from 'node:stream/web';
import { format } from 'prettier';
import type { SupportedFrameworks } from './parseArguments.mjs';
import type { StreamContent } from './svgToContent.mjs';

/** The filename containing the icons list. */
export const ICON_NAMES = 'iconNames';

/** The filename containing the index file. */
export const INDEX = 'index.mts';

/** The directory containing the generated source files. */
export const OUTPUT_SRC_DIR = 'generated-src';

/** the extensions for each framework. */
export const extensions = {
  react: 'js',
  'solid-js': 'jsx',
} as const satisfies Readonly<Record<SupportedFrameworks, string>>;

/**
 * Initialize the source directory.
 * @returns the path to the source directory
 */
export const initializeSourceDir = async () => {
  const target = join(process.cwd(), OUTPUT_SRC_DIR);
  await mkdir(target, { recursive: true });
  return target;
};

/**
 * Write the icon names list to a file.
 * @param srcDir The parent path of the file.
 * @param iconsName The names of the SVG files.
 */
export const writeNamesList = async (
  srcDir: string,
  iconsName: readonly string[],
) => {
  const raw = JSON.stringify(iconsName, null, 2);
  const codeline = `export const ${ICON_NAMES} = ${raw} as const;`;
  const defaultExport = `export default ${ICON_NAMES};`;
  const code = [codeline, defaultExport].join('\n');
  const body = await format(code, { parser: 'typescript' });
  await writeFile(join(srcDir, `${ICON_NAMES}.mts`), body);
};

/**
 * Write the content to a file.
 * @param srcDir The parent path of the file.
 */
export const writeToSourceStream = (srcDir: string) =>
  new WritableStream<StreamContent>({
    write: ([name, content]) =>
      writeFile(resolve(srcDir, `${name}.tsx`), content),
  });

/**
 * Write the index file.
 * @param srcDir The parent path of the file.
 * @param names The names of the SVG files.
 */
export const writeToIndex = async (
  srcDir: string,
  names: readonly string[],
  framework: SupportedFrameworks,
) => {
  const exportNames = `export { ${ICON_NAMES} } from './${ICON_NAMES}.mjs';`;
  const ext = extensions[framework];
  const exports = names
    .map((name) => `export { ${name} } from './${name}.${ext}';`)
    .join('\n');
  const raw = `${exportNames}\n${exports}`;
  const body = await format(raw, { parser: 'typescript' });
  await writeFile(resolve(srcDir, INDEX), body);
};
