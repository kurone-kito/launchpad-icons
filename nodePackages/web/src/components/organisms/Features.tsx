import type { Component } from 'solid-js';
import { FeatureItem } from '../atoms/FeatureItem.js';
import { useTranslator } from '../../modules/createI18N.js';

export interface FeaturesProps {
  /** Number of icons currently implemented. */
  readonly iconsLength: number | string;

  /** Number of icons to be implemented. */
  readonly iconsToDo: number | string;
}

/**
 * The feature item properties.
 * @param props The component properties.
 * @returns The component.
 */
export const Features: Component<FeaturesProps> = (props) => {
  const t = useTranslator();
  return (
    <article class="article-container">
      <h3 class="heading-root">{t('features')}</h3>
      <ul class="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
        <FeatureItem
          heading={t('features1Heading', { num: props.iconsLength })}
        >
          {t('features1Body', { num: props.iconsToDo })}
        </FeatureItem>
        <FeatureItem heading={t('features2Heading')}>
          {t('features2Body')}
        </FeatureItem>
        <FeatureItem heading={t('features3Heading')}>
          {t('features3Body')}
        </FeatureItem>
        <FeatureItem heading={t('features4Heading')}>
          {t('features4Body')}
        </FeatureItem>
      </ul>
    </article>
  );
};
