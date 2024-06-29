import type { Signal } from 'solid-js';
import { createEffect } from 'solid-js';
import { createStoredSignal } from './createStoredSignal.js';

/**
 * Uses the dark mode state.
 * @returns The dark mode state.
 */
export const useDarkModeState = (): Signal<boolean> => {
  const client = typeof window !== 'undefined';
  const defaultValue =
    client && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [dark, setDark] = createStoredSignal({ defaultValue, key: 'dark' });
  createEffect(() => {
    if (!client) {
      return;
    }
    const body = document.querySelector('body');
    if (!body) {
      return;
    }
    if (dark()) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  });
  return [dark, setDark] as const;
};
