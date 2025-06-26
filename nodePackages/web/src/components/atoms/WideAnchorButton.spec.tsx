import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { WideAnchorButton } from './WideAnchorButton';

describe('WideAnchorButton', () => {
  afterEach(() => cleanup());
  it('uses # as default url', () => {
    render(() => <WideAnchorButton>Link</WideAnchorButton>);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('#');
  });

  it('uses given url', () => {
    render(() => <WideAnchorButton url="/next">Next</WideAnchorButton>);
    const link = screen.getByRole('link');
    expect(link.getAttribute('href')).toBe('/next');
  });
});
