import { render } from 'solid-js/web';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('@solid-primitives/clipboard', () => ({ writeClipboard: vi.fn() }));
vi.mock('@kurone-kito/launchpad-icons-solid', () => ({ VCC: () => null }));

const cleanup = (container: HTMLElement) => {
  while (container.firstChild) container.removeChild(container.firstChild);
};

describe('ValueShare', () => {
  afterEach(() => {
    vi.resetModules();
  });

  it('copies value on focus and shows VCC link when not mobile', async () => {
    vi.doMock('@solid-primitives/platform', () => ({ isMobile: false }));
    const { ValueShare } = await import('./ValueShare');
    const { writeClipboard } = await import('@solid-primitives/clipboard');
    const container = document.createElement('div');
    render(
      () => (
        <ValueShare
          value="foo"
          tooltipAddToVcc="add"
          tooltipToClipboard="copy"
          vccSchemeUrl="vcc://"
        />
      ),
      container,
    );
    const input = container.querySelector('input')!;
    input.dispatchEvent(new FocusEvent('focus'));
    expect(vi.mocked(writeClipboard).mock.calls[0]?.[0]).toBe('foo');
    const anchor = container.querySelector('a') as HTMLAnchorElement;
    expect(anchor.getAttribute('href')).toBe('vcc://foo');
    cleanup(container);
  });

  it('hides VCC link on mobile', async () => {
    vi.doMock('@solid-primitives/platform', () => ({ isMobile: true }));
    const { ValueShare } = await import('./ValueShare');
    const container = document.createElement('div');
    render(
      () => (
        <ValueShare
          value="foo"
          tooltipAddToVcc="add"
          tooltipToClipboard="copy"
          vccSchemeUrl="vcc://"
        />
      ),
      container,
    );
    expect(container.querySelector('a')).toBeNull();
    cleanup(container);
  });

  it('hides VCC link without url', async () => {
    vi.doMock('@solid-primitives/platform', () => ({ isMobile: false }));
    const { ValueShare } = await import('./ValueShare');
    const container = document.createElement('div');
    render(
      () => (
        <ValueShare
          value="foo"
          tooltipAddToVcc="add"
          tooltipToClipboard="copy"
        />
      ),
      container,
    );
    expect(container.querySelector('a')).toBeNull();
    cleanup(container);
  });
});
