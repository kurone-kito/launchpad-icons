import { cleanup, render } from '@solidjs/testing-library';
import type { JSX } from 'solid-js';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@solidjs/router', () => ({
  A: (props: JSX.IntrinsicElements['a']) => <a {...props}>{props.children}</a>,
}));
import { NavIconItem } from './NavIconItem';

describe('NavIconItem', () => {
  afterEach(() => cleanup());

  it('renders anchor with attributes and tooltip', () => {
    const { container } = render(() => (
      <NavIconItem href="https://example.com" tooltip="tip" rel="author">
        <span data-testid="child" />
      </NavIconItem>
    ));
    const anchor = container.querySelector('a');
    expect(anchor).not.toBeNull();
    expect(anchor?.getAttribute('href')).toBe('https://example.com');
    expect(anchor?.getAttribute('target')).toBe('_blank');
    expect(anchor?.getAttribute('rel')).toContain('author');
    expect(anchor?.getAttribute('rel')).toContain('noopener');
    const li = container.querySelector('li');
    expect(li).not.toBeNull();
    expect(li?.getAttribute('data-tip')).toBe('tip');
  });
});
