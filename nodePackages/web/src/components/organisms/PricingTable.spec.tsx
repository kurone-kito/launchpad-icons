import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));
vi.mock('../../modules/createI18N.js', () => ({
  useTranslator: () => (key: string) => key,
}));
vi.mock('../atoms/PricingCard.js', () => ({
  PricingCard: (props: Record<string, unknown>) => (
    <div data-testid="card" {...props} />
  ),
}));

afterEach(() => cleanup());

describe('PricingTable', () => {
  it('renders three pricing cards', async () => {
    const { PricingTable } = await import('./PricingTable.js');
    render(() => <PricingTable />);
    expect(screen.getAllByTestId('card')).toHaveLength(3);
  });
});
