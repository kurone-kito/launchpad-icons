import { useLocation } from '@solidjs/router';
import { createMemo } from 'solid-js';
import type { Language } from './createI18N.js';

/**The regular expression for the language. */
const regexp = /^\/?(en|ja)/;

/**
 * Uses the href with language from dynamic route.
 * @param target The target language.
 * @returns The language href.
 */
export const useLanguageHref = (target: Language) => {
  const location = useLocation();
  return createMemo(() => {
    const realPath = location.pathname
      .replace(import.meta.env.SERVER_BASE_URL, '')
      .replace(regexp, '');
    return `/${target}${realPath}`;
  });
};
