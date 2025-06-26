import { MetaProvider } from '@solidjs/meta';
import { render } from 'solid-js/web';
import { describe, expect, it } from 'vitest';
import { TwitterCard } from './TwitterCard.js';

describe('TwitterCard', () => {
  it('combines title with site name when title provided', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <TwitterCard
            author="@me"
            description="desc"
            image="/img.png"
            siteName="Site"
            title="Page"
          />
        </MetaProvider>
      ),
      document.body,
    );
    const meta = document.head.querySelector('meta[name="twitter:title"]');
    expect(meta?.getAttribute('content')).toBe('Page | Site');
    dispose();
  });

  it('uses site name when title is absent', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <TwitterCard
            author="@me"
            description="desc"
            image="/img.png"
            siteName="Site"
          />
        </MetaProvider>
      ),
      document.body,
    );
    const meta = document.head.querySelector('meta[name="twitter:title"]');
    expect(meta?.getAttribute('content')).toBe('Site');
    dispose();
  });
});
