import { readdirSync } from 'node:fs';
import { parse } from 'node:path';
import ViteYaml from '@modyfi/vite-plugin-yaml';
import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
import md from 'markdown-it';
import linkAttributes from 'markdown-it-link-attributes';
import { Mode, plugin as mdPlugin } from 'vite-plugin-markdown';

/** The base URL. */
const baseURL = process.env?.['BASE_PATH'];

/**
 * Get the names of the files in a directory.
 * @param dir The directory.
 * @returns The names of the files.
 */
const getNames = (dir: string) =>
  readdirSync(dir, { withFileTypes: true })
    .filter((dirent) => dirent.isFile())
    .map(({ name }) => parse(name).name);

/** The locales. */
const locales = getNames('src/i18n').filter((name) => /^[a-z]{2}$/.test(name));

/** The Markdown parser. */
const markdownIt = md({ html: true }).use(linkAttributes, {
  attrs: { target: '_blank', rel: 'noopener noreferrer' },
  matcher: (href: string) => /^https?:/.test(href),
});

/** The route paths for all pages and their localized versions. */
const pathes = getNames('src/routes/[[language]]').flatMap((page) => [
  `/${page}`,
  ...locales.map((locale) => `/${locale}/${page}`),
]);

/**
 * Adds a collection of paths from the external `pathes` array to an
 * existing Set of routes.
 *
 * @param routes The existing Set of route strings to add paths to
 * @returns The updated Set containing both the original routes and
 * the added paths
 */
const addRoutes = (routes: Set<string>) =>
  pathes.reduce<Set<string>>((acc, path) => acc.add(path), routes);

export default defineConfig({
  server: {
    hooks: { 'prerender:routes': addRoutes },
    preset: 'githubPages',
    prerender: { autoSubfolderIndex: false, routes: [] },
    ...(baseURL ? { baseURL } : {}),
  },
  vite: {
    plugins: [
      mdPlugin({ markdownIt, mode: [Mode.HTML] }),
      tailwindcss(),
      ViteYaml(),
    ],
  },
});
