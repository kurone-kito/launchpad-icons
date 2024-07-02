import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import JSON5 from 'json5';

const [framework, iconsPath] = process.argv.slice(2);
if (!(iconsPath && framework)) {
  console.error('Usage: lib-codeBuilder <react|solid-js> <iconsPath>');
  process.exit(1);
}

/** The determined parameters from the given framework */
const gotParams = new Map<
  string,
  readonly [component: string, imports: string, svg: string]
>([
  ['react', ['FC', 'FC, SVGProps', 'SVGProps']],
  ['solid-js', ['Component', 'Component, JSX', 'JSX.SvgSVGAttributes']],
]).get(framework);
if (!gotParams) {
  console.error(`Unsupported framework: ${framework}`);
  process.exit(2);
}
const [component, imports, svg] = gotParams;
const react = framework === 'react';

/**
 * Get all icons name from a path
 * @async
 * @param path the path to the folder containing the icons
 * @returns a promise that resolves to an array of icon names
 */
const getIcons = async (path: string): Promise<string[]> =>
  (await readdir(path, { withFileTypes: true }))
    .filter((dirent) => dirent.isFile() && dirent.name.endsWith('.svg'))
    .map(({ name }) => name.replace(/\.svg$/, ''))
    .sort();

/**
 * Get the safe icon name
 * @param iconName the icon name
 * @returns the safe icon name
 */
const toSafeName = (iconName: string): string =>
  iconName.replace(/\+/g, 'Plus');

/**
 * Get the icons mapping
 * @param icons the icons
 * @returns the icons mapping
 */
const toNativeMapping = (icons: readonly string[]): string => {
  const entries = icons.map((icon) => [toSafeName(icon), icon] as const);
  return JSON5.stringify(Object.fromEntries(entries), undefined, 2);
};

/** The icons name */
const icons = await getIcons(iconsPath);
const code = await icons.reduce(
  async (acc, icon) =>
    acc.then(async (array) => {
      const safeName = toSafeName(icon);
      const content = (await readFile(join(iconsPath, `${icon}.svg`), 'utf-8'))
        .replaceAll('<?xml version="1.0" encoding="UTF-8"?>\n', '')
        .replace(/<style>([\s\S]+)<\/style>/gm, '<style>{`$1`}</style>')
        .replace(/\.([a-m])/g, `.${safeName}-$1`)
        .replace(/class="([a-m])"/g, `class="${safeName}-$1"`)
        .replace(/<svg([^>]*)>/g, '<svg$1 {...props}>')
        .replaceAll(' class=', react ? ' className=' : ' class=');
      return [
        ...array,
        `export const ${safeName}: ${component}<${svg}<SVGSVGElement>> = (props) => (${content});`,
      ];
    }),
  Promise.resolve<readonly string[]>([]),
);

console.log(`import type { ${imports} } from '${framework}';`);
if (react) {
  console.log("import React from 'react';");
}
console.log(code.join('\n'));
console.log(`export const iconsMapping = ${toNativeMapping(icons)} as const;`);
