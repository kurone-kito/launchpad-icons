import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { Logo } from './Logo';

describe('Logo', () => {
  afterEach(() => cleanup());
  it('renders banner with link', () => {
    render(() => <Logo />);
    expect(screen.getByRole('banner')).toBeTruthy();
    const link = screen.getByRole('link', { name: 'VRC Icons' });
    expect(link.getAttribute('href')).toBe('.');
  });
});
