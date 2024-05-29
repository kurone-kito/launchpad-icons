import type { Resource } from 'solid-js';
import { createResource } from 'solid-js';

/**
 * gets the parsed markdown.
 * @param file The markdown file.
 * @returns The parsed markdown.
 */
export const useMd = (file: string): Resource<string> => {
  const [md] = createResource(file, async (f) => {
    'use server';
    const { readFile } = await import('node:fs/promises');
    const { parse } = await import('marked');
    return parse(await readFile(`src/assets/texts/${f}.md`, 'utf-8'));
  });
  return md;
};
