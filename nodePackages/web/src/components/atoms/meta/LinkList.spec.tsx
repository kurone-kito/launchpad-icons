import { MetaProvider } from '@solidjs/meta';
import { render } from 'solid-js/web';
import { describe, expect, it } from 'vitest';
import { LinkList } from './LinkList.js';

describe('LinkList', () => {
  it('renders next and prev links when given', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <LinkList next="/next" prev="/prev" />
        </MetaProvider>
      ),
      document.body,
    );
    const next = document.head.querySelector('link[rel="next"]');
    const prev = document.head.querySelector('link[rel="prev"]');
    expect(next?.getAttribute('href')).toBe('/next');
    expect(prev?.getAttribute('href')).toBe('/prev');
    dispose();
  });

  it('omits next and prev links when not given', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <LinkList />
        </MetaProvider>
      ),
      document.body,
    );
    expect(document.head.querySelector('link[rel="next"]')).toBeNull();
    expect(document.head.querySelector('link[rel="prev"]')).toBeNull();
    dispose();
  });
});
