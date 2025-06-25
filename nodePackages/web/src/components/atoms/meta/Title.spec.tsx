import { MetaProvider } from '@solidjs/meta';
import { render } from 'solid-js/web';
import { describe, expect, it } from 'vitest';
import { Title } from './Title.js';

describe('Title', () => {
  it('renders combined title when title prop is provided', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <Title siteName="Site" title="Page" />
        </MetaProvider>
      ),
      document.body,
    );
    expect(document.title).toBe('Page | Site');
    dispose();
  });

  it('renders site name when title prop is absent', () => {
    const dispose = render(
      () => (
        <MetaProvider>
          <Title siteName="MySite" />
        </MetaProvider>
      ),
      document.body,
    );
    expect(document.title).toBe('MySite');
    dispose();
  });
});
