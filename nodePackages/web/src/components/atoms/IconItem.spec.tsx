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

  it('applies border-accent class when new prop is true', () => {
    const { container } = render(() => (
      <IconItem name="Sample" new>
        <Child />
      </IconItem>
    ));
    const figure = container.querySelector('figure');
    expect(figure?.classList.contains('border-accent')).toBe(true);
  });

  it('applies border-base-300 class when new prop is false', () => {
    const { container } = render(() => (
      <IconItem name="Sample" new={false}>
        <Child />
      </IconItem>
    ));
    const figure = container.querySelector('figure');
    expect(figure?.classList.contains('border-base-300')).toBe(true);
  });

  it('does not render Tailwind CSS icon when tw prop is false', () => {
    const { container } = render(() => (
      <IconItem name="Sample" tw={false}>
        <Child />
      </IconItem>
    ));
    const icon = container.querySelector('svg');
    expect(icon).toBeNull();
  });

  it('renders Tailwind CSS icon when tw prop is true', () => {
    const { container } = render(() => (
      <IconItem name="Sample" tw>
        <Child />
      </IconItem>
    ));
    const icon = container.querySelector('svg');
    expect(icon).toBeTruthy();
  });

  it('renders with all props combined', () => {
    const { container } = render(() => (
      <IconItem name="Sample" new tw>
        <Child />
      </IconItem>
    ));
    expect(screen.getByText('Sample')).toBeTruthy();
    expect(screen.getByTestId('child')).toBeTruthy();
    const figure = container.querySelector('figure');
    expect(figure?.classList.contains('border-accent')).toBeTruthy();
    const icon = container.querySelector('svg');
    expect(icon).toBeTruthy();
  });
});
