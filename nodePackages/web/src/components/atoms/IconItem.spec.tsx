import { cleanup, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it } from 'vitest';
import { IconItem } from './IconItem';

const Child = () => <span data-testid="child" />;

describe('IconItem', () => {
  afterEach(() => cleanup());
  it('renders given name and children', () => {
    render(() => (
      <IconItem name="Sample">
        <Child />
      </IconItem>
    ));
    expect(screen.getByTestId('child')).toBeTruthy();
    expect(screen.getByText('Sample')).toBeTruthy();
  });

  it('marks new icon with border classes', () => {
    render(() => (
      <IconItem name="New" new>
        <Child />
      </IconItem>
    ));
    const figure = screen.getByRole('listitem');
    expect(figure.className).toMatch(/border-accent/);
  });
});
