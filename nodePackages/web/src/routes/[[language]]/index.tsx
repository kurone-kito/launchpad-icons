import { iconNames } from '@kurone-kito/launchpad-icons-solid';
import type { Component } from 'solid-js';
import { onMount } from 'solid-js';
import { themeChange } from 'theme-change';
import thumbnail from '../../assets/images/thumbnail.webp';
import { html as enFree } from '../../assets/texts/free.en.md';
import { html as jaFree } from '../../assets/texts/free.ja.md';
import { html as enIllustrator } from '../../assets/texts/illustrator.en.md';
import { html as jaIllustrator } from '../../assets/texts/illustrator.ja.md';
import { html as enRaw } from '../../assets/texts/rawSvg.en.md';
import { html as jaRaw } from '../../assets/texts/rawSvg.ja.md';
import { FeatureDetail } from '../../components/atoms/FeatureDetail.js';
import { WideAnchorButton } from '../../components/atoms/WideAnchorButton.js';
import { CompositedHero } from '../../components/organisms/CompositedHero';
import { Features } from '../../components/organisms/Features.js';
import { Head } from '../../components/organisms/Head.js';
import { DefaultTemplate } from '../../components/templates/DefaultTemplate';
import Constants from '../../constants.yml';
import {
  createI18NText,
  useLanguage,
  useTranslator,
} from '../../modules/createI18N';

/** Free & Public repo */
const freeTranslator = createI18NText({ en: enFree, ja: jaFree } as const);

/** N SVG Icons */
const illustratorTranslator = createI18NText({
  en: enIllustrator,
  ja: jaIllustrator,
} as const);

/** Includes raw SVG files */
const rawSvgTranslator = createI18NText({ en: enRaw, ja: jaRaw } as const);

/** The number of icons. */
const iconsLength = iconNames.length;

/** The maximum number of icons to do. */
const maxIcons = Constants.iconsToDo;

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
      <Head next="./docs" pagePath="" title="VRC Icons" />
      <CompositedHero />
      <Features iconsLength={iconsLength} iconsToDo={maxIcons} />
      <FeatureDetail
        image={`${base}/images/illustrator.png`}
        innerHTML={tIllustrator('text')
          .replaceAll('{{ icons }}', `${iconsLength}`)
          .replaceAll('{{ maxIcons }}', `${maxIcons}`)}
      />
      <FeatureDetail
        image={`${base}/images/icons-unity.png`}
        innerHTML={tSvg('text')}
      />
      <FeatureDetail image={thumbnail} innerHTML={tFree('text')} />
      <p class="article-container px-4 py-20 sm:px-8 md:px-16">
        <WideAnchorButton url="./docs">{t('gettingStarted')}</WideAnchorButton>
      </p>
    </DefaultTemplate>
  );
};

export default Index;
