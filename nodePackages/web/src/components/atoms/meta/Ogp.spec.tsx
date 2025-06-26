import { MetaProvider } from '@solidjs/meta';
import { render } from 'solid-js/web';
import { describe, expect, it } from 'vitest';
import { Ogp } from './Ogp.js';

describe('Ogp', () => {
  it('renders meta tags including title and images', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <Ogp
            description="desc"
            images={['/img.png']}
            imagesAlt="alt"
            language="en"
            siteName="Site"
            title="Page"
            url="https://example.com/page"
          />
        </MetaProvider>
      ),
      document.body,
    );
    const metaTitle = document.head.querySelector('meta[property="og:title"]');
    const metaImage = document.head.querySelector('meta[property="og:image"]');
    expect(metaTitle).not.toBeNull();
    expect(metaImage).not.toBeNull();
    expect(metaTitle?.getAttribute('content')).toBe('Page | Site');
    expect(metaImage?.getAttribute('content')).toBe('/img.png');
    dispose();
  });
});
