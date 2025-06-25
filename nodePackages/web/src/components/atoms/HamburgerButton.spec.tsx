import { cleanup, fireEvent, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HamburgerButton } from './HamburgerButton';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));

afterEach(() => cleanup());

describe('HamburgerButton', () => {
  it('calls click handler', async () => {
    const handler = vi.fn();
    const { getByRole } = render(() => <HamburgerButton onClick={handler} />);
    fireEvent.click(getByRole('button'));
    expect(handler).toHaveBeenCalled();
  });

  it('merges class names', () => {
    const { container } = render(() => <HamburgerButton class="extra" />);
    const label = container.querySelector('label')!;
    expect(label.className).toMatch(/extra/);
  });
});
