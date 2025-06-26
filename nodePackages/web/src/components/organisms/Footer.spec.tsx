import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));
vi.mock('@solid-primitives/date', () => ({
  createDateNow: () => [() => new Date('2024-01-01')],
}));
vi.mock('@solidjs/router', () => ({
  A: (props: Record<string, unknown>) => <a {...props} />,
}));
vi.mock('../../modules/createI18N.js', () => ({
  useTranslator: () => (key: string) => (key === 'author' ? 'Author' : key),
}));

afterEach(() => cleanup());

describe('Footer', () => {
  it('renders current year and links', async () => {
    const { Footer } = await import('./Footer');
    const { container } = render(() => <Footer />);
    expect(container.querySelector('footer')?.textContent).toMatch('2024');
    const links = container.querySelectorAll('a');
    expect(links.length).toBe(4);
  });
});
