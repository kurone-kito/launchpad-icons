import { render } from '@solidjs/testing-library';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));
const createDarkMode = vi.fn();
vi.mock('../../modules/createDarkMode', () => ({ createDarkMode }));

describe('ChangeThemeIcon', () => {
  beforeEach(() => {
    createDarkMode.mockReset();
  });

  it('reflects dark mode state on mount', async () => {
    createDarkMode.mockReturnValue(() => true);
    const { ChangeThemeIcon } = await import('./ChangeThemeIcon');
    const { container } = render(() => <ChangeThemeIcon toggleTooltip="t" />);
    const input = container.querySelector('input')! as HTMLInputElement;
    expect(input.checked).toBe(true);
  });

  it('applies tooltip and toggle attributes', async () => {
    createDarkMode.mockReturnValue(() => false);
    const { ChangeThemeIcon } = await import('./ChangeThemeIcon');
    const { container, getByLabelText } = render(() => (
      <ChangeThemeIcon
        toggleTooltip="Toggle"
        labelToDark="Dark"
        labelToLight="Light"
      />
    ));
    const span = container.querySelector('span.tooltip')!;
    expect(span.getAttribute('data-tip')).toBe('Toggle');
    const input = container.querySelector('input')!;
    expect(input.getAttribute('data-toggle-theme')).toBe('light,dark');
    expect(getByLabelText('Dark')).toBeDefined();
    expect(getByLabelText('Light')).toBeDefined();
  });
});
