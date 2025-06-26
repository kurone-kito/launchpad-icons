import { cleanup, render } from '@solidjs/testing-library';
import { afterEach, describe, expect, it, vi } from 'vitest';

vi.mock('../atoms/meta/LinkList.js', () => ({
  LinkList: vi.fn(() => <div data-testid="link-list" />),
}));
vi.mock('../atoms/meta/MetaList.js', () => ({
  MetaList: vi.fn(() => <div data-testid="meta-list" />),
}));
vi.mock('../atoms/meta/Ogp.js', () => ({
  Ogp: vi.fn(() => <div data-testid="ogp" />),
}));
vi.mock('../atoms/meta/Title.js', () => ({
  Title: vi.fn(() => <div data-testid="title" />),
}));
vi.mock('../atoms/meta/TwitterCard.js', () => ({
  TwitterCard: vi.fn(() => <div data-testid="twitter" />),
}));

afterEach(() => {
  cleanup();
  vi.resetModules();
});

describe('Head (molecule)', () => {
  it('passes props to internal meta components', async () => {
    const { Head } = await import('./Head.js');
    const props = {
      author: 'A',
      description: 'Desc',
      images: ['/img.png'],
      imagesAlt: 'Alt',
      keywords: 'k',
      language: 'en',
      next: '/next',
      prev: '/prev',
      siteName: 'Site',
      title: 'Title',
      url: 'https://example.com',
    } as const;
    const { container } = render(() => <Head {...props} />);
    expect(container.querySelectorAll('[data-testid]')).toHaveLength(5);
    const { LinkList } = await import('../atoms/meta/LinkList.js');
    const { MetaList } = await import('../atoms/meta/MetaList.js');
    const { Ogp } = await import('../atoms/meta/Ogp.js');
    const { Title } = await import('../atoms/meta/Title.js');
    const { TwitterCard } = await import('../atoms/meta/TwitterCard.js');
    expect(vi.mocked(LinkList).mock.calls[0]?.[0]).toMatchObject({
      next: '/next',
      prev: '/prev',
    });
    expect(vi.mocked(MetaList).mock.calls[0]?.[0]).toMatchObject({
      author: 'A',
      description: 'Desc',
      keywords: 'k',
    });
    expect(vi.mocked(Ogp).mock.calls[0]?.[0]).toMatchObject({
      images: ['/img.png'],
      url: 'https://example.com',
    });
    expect(vi.mocked(Title).mock.calls[0]?.[0]).toMatchObject({
      siteName: 'Site',
      title: 'Title',
    });
    expect(vi.mocked(TwitterCard).mock.calls[0]?.[0]).toMatchObject({
      author: 'A',
      image: '/img.png',
    });
  });
});
