import type { Flatten, Translator as I18NTr } from '@solid-primitives/i18n';
import { flatten, resolveTemplate, translator } from '@solid-primitives/i18n';
import type { Params as RouterParams } from '@solidjs/router';
import { useParams } from '@solidjs/router';
import type { Accessor } from 'solid-js';
import { createMemo } from 'solid-js';
import en from '../i18n/en.js';
import ja from '../i18n/ja.js';
import type { Resources } from '../i18n/types.js';

/** The dictionaries. */
const dictionaries = { en, ja } as const;

/** Type definition for the dictionary. */
export type Dictionary = Flatten<Resources>;

/** Type definition for the locale. */
export type Language = keyof typeof dictionaries;

/** Type definition for the parameters. */
export interface Params extends RouterParams {
  /** The language. */
  readonly language?: Language;
}

/**
 * Creates the i18n accessor.
 * @param language The language.
 * @returns The i18n accessor.
 */
export const createI18N = (language: Accessor<Language>): I18NTr<Dictionary> =>
  translator(
    createMemo(() => flatten(dictionaries[language()])),
    resolveTemplate,
  );

/**
 * Creates the i18n accessor from a custom dictionary.
 * @param dict The custom dictionary.
 * @returns The i18n accessor.
 */
export const createI18NText =
  (texts: Record<Language, string>) =>
  (language: Accessor<Language>): I18NTr<Record<'text', string>> =>
    translator(createMemo(() => ({ text: texts[language()] })));

/**
 * Uses the language from dynamic route.
 * @returns The language.
 */
export const useLanguage = (): Accessor<Language> => {
  const params = useParams<Params>();
  return createMemo(() => params.language || 'en');
};

/**
 * Uses the translator.
 * @returns The translator.
 */
export const useTranslator = (): I18NTr<Dictionary> => {
  const language = useLanguage();
  return createI18N(language);
};
