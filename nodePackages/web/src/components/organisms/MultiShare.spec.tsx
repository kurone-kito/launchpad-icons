import { cleanup, fireEvent, render, screen } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@testing-library/jest-dom/vitest', () => ({}));
vi.mock('../molecules/ValueShare.js', () => ({
  ValueShare: (props: { value: string }) => (
    <div data-testid="value-share">{props.value}</div>
  ),
}));

afterEach(() => cleanup());

describe('MultiShare', () => {
  it('switches share data on tab change', async () => {
    const items = [
      {
        label: 'First',
        value: 'A',
        tooltipAddToVcc: 'add1',
        tooltipToClipboard: 'copy1',
        vccSchemeUrl: 'vcc://',
      },
      {
        label: 'Second',
        value: 'B',
        tooltipAddToVcc: 'add2',
        tooltipToClipboard: 'copy2',
        vccSchemeUrl: 'vcc://',
      },
    ] as const;
    const { MultiShare } = await import('./MultiShare');
    render(() => <MultiShare items={items} />);

    expect(screen.getByTestId('value-share').textContent).toBe('A');
    const second = screen.getByLabelText('Second');
    fireEvent.click(second);
    expect(screen.getByTestId('value-share').textContent).toBe('B');
  });
});
