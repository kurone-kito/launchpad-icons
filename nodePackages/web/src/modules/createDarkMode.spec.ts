import { beforeEach, describe, expect, it, vi } from 'vitest';
vi.mock('@testing-library/jest-dom/vitest', () => ({}));
import type { createSignal } from 'solid-js';

let signal: ReturnType<typeof createSignal<string | null>>;
const prefersDark = vi.fn();

vi.mock('@solid-primitives/media', () => ({
  createPrefersDark: () => prefersDark,
}));

vi.mock('@solid-primitives/storage', () => ({
  makePersisted: (s: ReturnType<typeof createSignal>) => {
    signal = s;
    return [s[0]];
  },
}));

import { createDarkMode } from './createDarkMode';

beforeEach(() => {
  prefersDark.mockReset();
  signal?.[1](null);
});

describe('createDarkMode', () => {
  it('uses prefersDark when theme is null', () => {
    prefersDark.mockReturnValue(true);
    const isDark = createDarkMode({ dark: 'dark', light: 'light' });
    expect(isDark()).toBe(true);

    prefersDark.mockReturnValue(false);
    signal[1](null);
    const isDark2 = createDarkMode({ dark: 'dark', light: 'light' });
    expect(isDark2()).toBe(false);
  });

  it('follows stored theme value', () => {
    prefersDark.mockReturnValue(false);
    const isDark = createDarkMode({ dark: 'dark', light: 'light' });
    signal[1]('dark');
    expect(isDark()).toBe(true);
    signal[1]('light');
    expect(isDark()).toBe(false);
  });
});
