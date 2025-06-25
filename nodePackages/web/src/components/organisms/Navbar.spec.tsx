import { cleanup, fireEvent, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));
vi.mock('../../modules/createI18N.js', () => ({
  useTranslator: () => (key: string) => key,
}));
vi.mock('@solidjs/router', () => ({
  A: (props: Record<string, unknown>) => <a {...props} />,
}));
vi.mock('../molecules/LanguageChanger.js', () => ({
  LanguageChanger: () => <div data-testid="lang" />,
}));
vi.mock('../molecules/ChangeThemeIcon.js', () => ({
  ChangeThemeIcon: () => <div data-testid="theme" />,
}));

afterEach(() => cleanup());

describe('Navbar', () => {
  it('toggles menu visibility on button click', async () => {
    const { Navbar } = await import('./Navbar');
    const { container, getByRole } = render(() => <Navbar />);
    const navList = container.querySelectorAll('nav');
    const menu = navList[1] as HTMLElement;
    expect(menu.classList.contains('hidden')).toBe(true);
    fireEvent.click(getByRole('button'));
    expect(menu.classList.contains('hidden')).toBe(false);
  });
});
