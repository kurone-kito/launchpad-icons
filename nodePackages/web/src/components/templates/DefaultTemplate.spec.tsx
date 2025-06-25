import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('../organisms/Navbar.js', () => ({
  Navbar: () => <nav data-testid="navbar" />,
}));
vi.mock('../organisms/Footer.js', () => ({
  Footer: () => <footer data-testid="footer" />,
}));

afterEach(() => cleanup());

describe('DefaultTemplate', () => {
  it('renders navbar, footer and children', async () => {
    const { DefaultTemplate } = await import('./DefaultTemplate');
    render(() => (
      <DefaultTemplate>
        <span>content</span>
      </DefaultTemplate>
    ));
    expect(screen.getByTestId('navbar')).toBeTruthy();
    expect(screen.getByTestId('footer')).toBeTruthy();
    expect(screen.getByText('content')).toBeTruthy();
  });
});
