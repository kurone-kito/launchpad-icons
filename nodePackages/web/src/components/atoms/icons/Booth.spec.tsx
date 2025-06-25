import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Booth } from './Booth.js';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));

afterEach(() => cleanup());

describe('Booth icon', () => {
  it('passes props to svg element', () => {
    const { container } = render(() => (
      <Booth class="h-5" data-testid="icon" />
    ));
    const svg = container.querySelector('svg')!;
    expect(svg.getAttribute('class')).toBe('h-5');
    expect(svg.getAttribute('data-testid')).toBe('icon');
  });
});
