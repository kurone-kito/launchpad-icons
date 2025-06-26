import { render } from 'solid-js/web';
import { describe, expect, it } from 'vitest';
import { HeadlessAnchor } from './HeadlessAnchor.js';

describe('HeadlessAnchor', () => {
  it('renders external links with target and rel', () => {
    const div = document.createElement('div');
    render(
      () => (
        <HeadlessAnchor href="https://example.com">external</HeadlessAnchor>
      ),
      div,
    );
    const anchor = div.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('target')).toBe('_blank');
    expect(anchor?.getAttribute('rel')).toContain('noopener');
  });

  it('renders internal links without target', () => {
    const div = document.createElement('div');
    render(() => <HeadlessAnchor href="/foo">internal</HeadlessAnchor>, div);
    const anchor = div.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('target')).toBeNull();
    expect(anchor?.getAttribute('rel')).toBeNull();
  });

  it('renders internal links with rel attribute', () => {
    const div = document.createElement('div');
    render(
      () => (
        <HeadlessAnchor href="/bar" rel="next">
          next page
        </HeadlessAnchor>
      ),
      div,
    );
    const anchor = div.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('target')).toBeNull();
    expect(anchor?.getAttribute('rel')).toBe('next');
  });
});
