import { readdir } from 'node:fs/promises';
import { parse } from 'node:path';
import { defineConfig } from '@solidjs/start/config';

/** The base URL. */
const baseURL = process.env?.['BASE_PATH'];

/**
 * Get the names of the files in a directory.
 * @param dir The directory.
 * @returns The names of the files.
 */
const getNames = async (dir: string) =>
  (await readdir(dir, { withFileTypes: true }))
    .filter((dirent) => dirent.isFile())
    .map(({ name }) => parse(name).name);

/** The locales. */
const locales = (await getNames('src/i18n')).filter((name) =>
  /^[a-z]{2}$/.test(name),
);

/** The pages. */
const pages = await getNames('src/routes/[[language]]');

export default defineConfig({
  server: {
    hooks: {
      'prerender:routes': async (routes) => {
        pages.forEach((route) => {
          routes.add(`/${route}`);
          locales.forEach((locale) => routes.add(`/${locale}/${route}`));
        });
      },
    },
    preset: 'githubPages',
    prerender: { autoSubfolderIndex: false, routes: [] },
    ...(baseURL ? { baseURL } : {}),
  },
});
