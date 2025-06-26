import { MetaProvider } from '@solidjs/meta';
import { render } from 'solid-js/web';
import { describe, expect, it } from 'vitest';
import { MetaList } from './MetaList.js';

describe('MetaList', () => {
  it('renders meta tags with provided attributes', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <MetaList author="me" description="desc" keywords="k1,k2" />
        </MetaProvider>
      ),
      document.body,
    );
    const author = document.head.querySelector('meta[name="author"]');
    const desc = document.head.querySelector('meta[name="description"]');
    expect(author?.getAttribute('content')).toBe('me');
    expect(desc?.getAttribute('content')).toBe('desc');
    dispose();
  });
});
