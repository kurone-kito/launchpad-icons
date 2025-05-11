import type { Dirent } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Get the path to the assets directory.
 * @returns the path to the assets directory
 */
export const getAssetsDir = () =>
  resolve(dirname(fileURLToPath(import.meta.url)), '..', 'assets');

/**
 * Determine whether a dirent is an SVG file.
 * @param dirent the dirent to check
 * @returns whether the dirent is an SVG file
 */
export const isSvg = (dirent: Dirent) =>
  dirent.isFile() && dirent.name.endsWith('.svg');

/**
 * Get the SVG name from an SVG path.
 * @param name the SVG path
 * @returns the SVG name
 */
export const getSvgName = (name: string) => basename(name, '.svg');

/**
 * Get the SVG names from a list of SVG pathes.
 * @param list the list of SVG pathes
 * @returns the SVG names
 */
export const getSvgNames = (list: readonly string[]) => {
  const set = new Set(list.map(getSvgName));
  return [...set].sort();
};

/**
 * Get all SVG pathes from a parent path.
 * @param path the path to the folder containing the SVG files
 * @returns a promise that resolves to an array of SVG names
 */
export const getSvgPathes = async (
  path: string,
): Promise<readonly string[]> => {
  const rec = async (p = path): Promise<readonly string[]> =>
    (await readdir(p, { withFileTypes: true })).reduce(
      (acc, dirent) =>
        acc.then(async (a) => [
          ...a,
          ...(isSvg(dirent) ? [join(p, dirent.name)] : []),
          ...(dirent.isDirectory() ? await rec(join(p, dirent.name)) : []),
        ]),
      Promise.resolve<readonly string[]>([]),
    );
  return [...(await rec())].sort();
};
