import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { themeChange } from 'theme-change';
import { html as en } from '../../assets/texts/gettingStarted.en.md';
import { html as ja } from '../../assets/texts/gettingStarted.ja.md';
import { Head } from '../../components/organisms/Head.js';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import {
  createI18NText,
  useLanguage,
  useTranslator,
} from '../../modules/createI18N';

const mdTranslator = createI18NText({ en, ja } as const);

/**
 * The documents page.
 * @returns The component.
 */
const Docs: Component = () => {
  onMount(() => themeChange(false));
  const language = useLanguage();
  const md = mdTranslator(language);
  const t = useTranslator();
  return (
    <DefaultTemplate>
      <article class="article-container">
        <Head
          next="./explore"
          pagePath="docs"
          prev="."
          title={t('gettingStartedTitle')}
        />
        <h2 class="article-container heading-root pt-10">
          {t('gettingStartedTitle')}
        </h2>
        <section class="prose-article prose-anchor" innerHTML={md('text')} />
      </article>
    </DefaultTemplate>
  );
};

export default Docs;
