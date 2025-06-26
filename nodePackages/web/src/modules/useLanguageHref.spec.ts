import { beforeEach, describe, expect, it, vi } from 'vitest';
vi.mock('@testing-library/jest-dom/vitest', () => ({}));

const useLocation = vi.hoisted(() => vi.fn());
vi.mock('@solidjs/router', () => ({ useLocation }));

import { useLanguageHref } from './useLanguageHref';

beforeEach(() => {
  useLocation.mockReset();
  (import.meta as { env: { SERVER_BASE_URL: string } }).env = {
    SERVER_BASE_URL: '',
  };
});

describe('useLanguageHref', () => {
  it('removes language prefix', () => {
    useLocation.mockReturnValue({ pathname: '/ja/docs' });
    const href = useLanguageHref('en');
    expect(href()).toBe('/en/docs');
  });

  it('handles root path', () => {
    useLocation.mockReturnValue({ pathname: '/ja' });
    const href = useLanguageHref('en');
    expect(href()).toBe('/en');
  });
});
