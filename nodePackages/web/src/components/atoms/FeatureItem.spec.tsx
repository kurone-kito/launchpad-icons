import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { FeatureItem } from './FeatureItem';

describe('FeatureItem', () => {
  afterEach(() => cleanup());

  it('renders heading and description', () => {
    render(() => (
      <FeatureItem heading={<span>Heading</span>}>Description</FeatureItem>
    ));
    expect(screen.getByRole('heading', { level: 4 })).toHaveTextContent(
      'Heading',
    );
    expect(screen.getByText('Description')).toBeTruthy();
  });
});
