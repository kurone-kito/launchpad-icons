import { cleanup, render } from '@solidjs/testing-library';
import type { JSX } from 'solid-js';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));
vi.mock('@solidjs/router', () => ({
  A: (props: JSX.IntrinsicElements['a']) => <a {...props}>{props.children}</a>,
}));
const useLanguageHref = vi.fn();
vi.mock('../../modules/useLanguageHref', () => ({ useLanguageHref }));

describe('LanguageChanger', () => {
  afterEach(() => {
    useLanguageHref.mockReset();
    cleanup();
  });

  it('generates language links', async () => {
    useLanguageHref
      .mockImplementationOnce(() => () => '/en/path')
      .mockImplementationOnce(() => () => '/ja/path');
    const { LanguageChanger } = await import('./LanguageChanger');
    const { container } = render(() => <LanguageChanger />);
    const anchors = container.querySelectorAll('a');
    expect(anchors[0]?.getAttribute('href')).toBe('/en/path');
    expect(anchors[1]?.getAttribute('href')).toBe('/ja/path');
  });
});
