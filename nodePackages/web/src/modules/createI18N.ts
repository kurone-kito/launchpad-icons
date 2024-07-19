import type {
  BaseDict,
  Flatten,
  Translator as I18NTranslator,
} from '@solid-primitives/i18n';
import { flatten, resolveTemplate, translator } from '@solid-primitives/i18n';
import { createMemo } from 'solid-js';
import en from '../i18n/en.js';
import ja from '../i18n/ja.js';
import type { Resources } from '../i18n/types.js';

/** The dictionaries. */
const dictionaries = { en, ja } as const;

/** Type definition for the locale. */
export type Language = keyof typeof dictionaries;

/** Type definition for the dictionary. */
export type Dictionary = Flatten<Resources>;

/** Type definition for the translator. */
export type Translator = I18NTranslator<Dictionary>;

/**
 * Creates the i18n accessor.
 * @param language The language.
 * @returns The i18n accessor.
 */
export const createI18N = (language: Language): Translator =>
  translator(
    createMemo(() => flatten(dictionaries[language])),
    resolveTemplate,
  );

/**
 * Creates the i18n accessor from a custom dictionary.
 * @param dict The custom dictionary.
 * @returns The i18n accessor.
 */
export const createI18NFromCustomDict = <T extends BaseDict>(
  dict: T,
): I18NTranslator<Flatten<T, {}>, string> =>
  translator(createMemo(() => flatten(dict)));
