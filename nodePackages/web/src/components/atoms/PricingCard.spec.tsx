import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));

import { PricingCard } from './PricingCard.js';

afterEach(() => cleanup());

describe('PricingCard', () => {
  it('renders heading, texts and feature list', () => {
    const { container } = render(() => (
      <PricingCard
        features={['one', 'two']}
        heading="Heading"
        plan="Plan"
        subscribe="Subscribe"
        term="Month"
      />
    ));
    expect(screen.getByRole('heading', { level: 3 }).textContent).toContain(
      'Heading',
    );
    expect(container.textContent).toContain('Plan');
    expect(container.textContent).toContain('Subscribe');
    expect(container.textContent).toContain('Month');
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});
