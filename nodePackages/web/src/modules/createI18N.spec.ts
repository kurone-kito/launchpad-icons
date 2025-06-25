import { createRoot } from 'solid-js';
import { describe, expect, it } from 'vitest';
import { createI18N, createI18NText } from './createI18N';

const init = (lang: 'en' | 'ja') => {
  let t: (key: string, ...args: unknown[]) => unknown = () => undefined;
  createRoot(() => {
    t = createI18N(() => lang);
  });
  return t;
};

describe('createI18N', () => {
  it('translates based on language', () => {
    const tEn = init('en');
    const tJa = init('ja');
    expect(tEn('features')).toBe('Features');
    expect(tJa('features')).toBe('特徴');
  });
});

describe('createI18NText', () => {
  it('handles simple dictionary', () => {
    const texts = { en: 'Hello', ja: 'こんにちは' } as const;
    let t: (k: string) => string = () => '';
    createRoot(() => {
      t = createI18NText(texts)(() => 'ja');
    });
    expect(t('text')).toBe('こんにちは');
  });
});
