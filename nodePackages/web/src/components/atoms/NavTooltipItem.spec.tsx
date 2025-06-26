import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { NavTooltipItem } from './NavTooltipItem';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));

afterEach(() => cleanup());

describe('NavTooltipItem', () => {
  it('places tooltip on top when top prop is true', () => {
    const { container } = render(() => (
      <NavTooltipItem tooltip="tip" top>
        <span>child</span>
      </NavTooltipItem>
    ));
    const li = container.querySelector('li')!;
    expect(li.classList.contains('tooltip-top')).toBe(true);
    expect(li.getAttribute('data-tip')).toBe('tip');
  });
});
