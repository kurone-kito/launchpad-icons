import type { Component } from 'solid-js';
import Constants from '../../constants.yml';
import { useTranslator } from '../../modules/createI18N';
import { Hero } from '../atoms/Hero.js';
import { MultiShare } from './MultiShare.js';

const npmReact = Constants['npmReact'];
const npmSolid = Constants['npmSolid'];
const npmTw = Constants['npmTw'];
const vccUrl = Constants['vccUrl'];
const vpmUrl = Constants['vpmUrl'];

export const CompositedHero: Component = () => {
  const t = useTranslator();
  return (
    <Hero
      catchPhrase={t('catchPhrase')}
      gettingStarted={t('gettingStarted')}
      subTitle={t('subtitle')}
    >
      <MultiShare
        items={[
          {
            label: 'VCC',
            tooltipAddToVcc: t('addToVcc'),
            tooltipToClipboard: t('urlToClipboard'),
            value: vpmUrl,
            vccSchemeUrl: vccUrl,
          },
          {
            label: 'React',
            tooltipToClipboard: t('commandToClipboard'),
            value: npmReact,
          },
          {
            label: 'Solid',
            tooltipToClipboard: t('commandToClipboard'),
            value: npmSolid,
          },
          {
            label: 'TailwindCSS',
            tooltipToClipboard: t('commandToClipboard'),
            value: npmTw,
          },
        ]}
      />
    </Hero>
  );
};
