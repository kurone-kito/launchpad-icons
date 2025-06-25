import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { X } from './X.js';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));

afterEach(() => cleanup());

describe('X icon', () => {
  it('passes props to svg element', () => {
    const { container } = render(() => <X class="w-4" data-testid="icon-x" />);
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('class')).toBe('w-4');
    expect(svg.getAttribute('data-testid')).toBe('icon-x');
  });
});
