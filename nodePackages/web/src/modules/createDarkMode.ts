import { createPrefersDark } from '@solid-primitives/media';
import { makePersisted } from '@solid-primitives/storage';
import type { Accessor, Signal } from 'solid-js';
import { createSignal } from 'solid-js';

export interface CreateDarkModeOptions {
  /** The theme on the dark mode. */
  readonly dark: string;

  /** The theme on the light mode. */
  readonly light: string;
}

/**
 * creates the dark mode state.
 * @param options The options.
 * @returns The accessor for the dark mode state.
 */
export const createDarkMode = (
  options: CreateDarkModeOptions,
): Accessor<boolean> => {
  const prefersDark = createPrefersDark();
  const serialize = (v: string | null) =>
    v ?? (prefersDark() ? options.dark : options.light);
  const [theme] = makePersisted<Signal<string | null>>(
    createSignal<string | null>(null),
    { deserialize: (v) => v, name: 'theme', serialize },
  );
  return () => serialize(theme()) === options.dark;
};
