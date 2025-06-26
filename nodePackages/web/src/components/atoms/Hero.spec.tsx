import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { Hero } from './Hero.js';

describe('Hero', () => {
  afterEach(() => cleanup());

  it('renders texts and children correctly', () => {
    render(() => (
      <Hero
        catchPhrase="<strong>Catch</strong>"
        gettingStarted="Start"
        subTitle={<span>Sub</span>}
      >
        <div data-testid="child" />
      </Hero>
    ));
    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading.innerHTML).toContain('<strong>Catch</strong>');
    expect(screen.getByText('Sub')).toBeTruthy();
    const link = screen.getByRole('link', { name: 'Start' });
    expect(link.getAttribute('href')).toBe('./docs');
    expect(screen.getByTestId('child')).toBeTruthy();
  });
});
