import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { FeatureDetail } from './FeatureDetail';

describe('FeatureDetail', () => {
  afterEach(() => cleanup());

  it('renders provided HTML and image', () => {
    const { container } = render(() => (
      <FeatureDetail innerHTML="<h3>Title</h3>" image="/img.png" />
    ));
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Title',
    );
    const img = container.querySelector('img')!;
    expect(img.getAttribute('src')).toBe('/img.png');
  });
});
