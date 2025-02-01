import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { themeChange } from 'theme-change';
import { html as en } from '../../assets/texts/pricing.en.md';
import { html as ja } from '../../assets/texts/pricing.ja.md';
import { Head } from '../../components/organisms/Head.js';
import { PricingTable } from '../../components/organisms/PricingTable';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import {
  createI18NText,
  useLanguage,
  useTranslator,
} from '../../modules/createI18N';

const mdTranslator = createI18NText({ en, ja } as const);

/**
 * The pricing page.
 * @returns The component.
 */
const Pricing: Component = () => {
  onMount(() => themeChange(false));
  const md = mdTranslator(useLanguage());
  const t = useTranslator();
  return (
    <DefaultTemplate>
      <article class="article-container">
        <Head prev="./explore" pagePath="pricing" title={t('pricingTitle')} />
        <h2 class="heading-root pt-10">{t('pricingTitle')}</h2>
        <PricingTable />
        <section class="prose-article prose-anchor" innerHTML={md('text')} />
      </article>
    </DefaultTemplate>
  );
};

export default Pricing;
