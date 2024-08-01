import { iconsMapping } from '@kurone-kito/launchpad-icons-solid';
import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { themeChange } from 'theme-change';
import ccByNc from '../../assets/images/by-nc.svg';
import { html as enFree } from '../../assets/texts/free.en.md';
import { html as jaFree } from '../../assets/texts/free.ja.md';
import { html as enIllustrator } from '../../assets/texts/illustrator.en.md';
import { html as jaIllustrator } from '../../assets/texts/illustrator.ja.md';
import { html as enRaw } from '../../assets/texts/rawSvg.en.md';
import { html as jaRaw } from '../../assets/texts/rawSvg.ja.md';
import { FeatureDetail } from '../../components/atoms/FeatureDetail.js';
import { Head } from '../../components/atoms/Head.js';
import { WideAnchorButton } from '../../components/atoms/WideAnchorButton.js';
import { Features } from '../../components/organisms/Features.jsx';
import Constants from '../../constants.yml';
import {
  createI18NText,
  useLanguage,
  useTranslator,
} from '../../modules/createI18N';
import { CompositedHero } from '../../components/organisms/CompositedHero';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate';

/** Free & OSS */
const freeTranslator = createI18NText({ en: enFree, ja: jaFree } as const);

/** N SVG Icons */
const illustratorTranslator = createI18NText({
  en: enIllustrator,
  ja: jaIllustrator,
} as const);

/** Includes raw SVG files */
const rawSvgTranslator = createI18NText({ en: enRaw, ja: jaRaw } as const);

/** The number of icons. */
const icons = Object.keys(iconsMapping).length;

/** The maximum number of icons to do. */
const maxIcons = Constants['iconsToDo'];

/** The base URL. */
const base = import.meta.env.SERVER_BASE_URL;

const Index: Component = () => {
  onMount(() => themeChange(false));
  const t = useTranslator();
  const lang = useLanguage();
  const tFree = freeTranslator(lang);
  const tIllustrator = illustratorTranslator(lang);
  const tSvg = rawSvgTranslator(lang);
  return (
    <DefaultTemplate>
      <Head next="./docs" />
      <CompositedHero />
      <Features iconsLength={icons} iconsToDo={maxIcons} />
      <FeatureDetail
        image={`${base}/images/illustrator.png`}
        innerHTML={tIllustrator('text')
          .replaceAll('{{ icons }}', `${icons}`)
          .replaceAll('{{ maxIcons }}', `${maxIcons}`)}
      />
      <FeatureDetail
        image={`${base}/images/icons-unity.png`}
        innerHTML={tSvg('text')}
      />
      <FeatureDetail image={ccByNc} innerHTML={tFree('text')} />
      <p class="article-container px-4 py-20 sm:px-8 md:px-16">
        <WideAnchorButton url="./docs">{t('gettingStarted')}</WideAnchorButton>
      </p>
    </DefaultTemplate>
  );
};

export default Index;
