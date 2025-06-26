import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('../../modules/createI18N.js', () => ({
  useTranslator: () => (key: string, p?: { num: number }) =>
    p ? `${key}-${p.num}` : key,
}));

afterEach(() => cleanup());

describe('Features', () => {
  it('renders feature items with translation', async () => {
    const { Features } = await import('./Features.js');
    render(() => <Features iconsLength={3} iconsToDo={4} />);
    expect(screen.getByRole('heading', { name: 'features' })).toBeTruthy();
    expect(screen.getByText('features1Heading-3')).toBeTruthy();
    expect(screen.getByText('features1Body-4')).toBeTruthy();
  });
});
