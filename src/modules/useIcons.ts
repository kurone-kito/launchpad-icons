import type { Resource } from 'solid-js';
import { createResource } from 'solid-js';

/**
 * gets the icons.
 * @returns The icons.
 */
export const useIcons = (): Resource<readonly string[]> => {
  const [icons] = createResource<readonly string[]>(async () => {
    'use server';
    const { readdir } = await import('node:fs/promises');
    return (await readdir('public/icons', { withFileTypes: true }))
      .filter((file) => file.isFile() && file.name.endsWith('.svg'))
      .map((file) => file.name.replace(/\.svg$/, ''))
      .sort();
  });
  return icons;
};
