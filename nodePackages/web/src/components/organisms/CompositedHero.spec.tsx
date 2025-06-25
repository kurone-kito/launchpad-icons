import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../modules/createI18N.js', () => ({
  useTranslator: () => (key: string) => `t-${key}`,
}));
vi.mock('../../constants.yml', () => ({
  default: {
    npmReact: 'react',
    npmSolid: 'solid',
    npmTw: 'tw',
    vccUrl: 'vcc://',
    vpmUrl: 'https://example.com/vpm.json',
  },
}));
const Hero = vi.fn((props: Record<string, Element>) => (
  <div data-testid="hero">{props['children']}</div>
));
vi.mock('../atoms/Hero.js', () => ({ Hero }));
const MultiShare = vi.fn(() => <div data-testid="multi" />);
vi.mock('./MultiShare.js', () => ({ MultiShare }));

afterEach(() => {
  cleanup();
  vi.resetModules();
});

describe('CompositedHero', () => {
  it('renders hero with multishare items', async () => {
    const { CompositedHero } = await import('./CompositedHero');
    render(() => <CompositedHero />);
    expect(Hero).toHaveBeenCalled();
    expect(MultiShare.mock.calls[0]?.[0]?.items).toHaveLength(4);
  });
});
