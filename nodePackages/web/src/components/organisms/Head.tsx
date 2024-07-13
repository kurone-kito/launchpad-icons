import type { Component } from 'solid-js';
import type { HeadProps as InternalHeadProps } from '../molecules/Head.js';
import { Head as InternalHead } from '../molecules/Head.js';
import { useLanguage, useTranslator } from '../../modules/createI18N';

export interface HeadProps
  extends Pick<InternalHeadProps, 'next' | 'prev' | 'title'> {
  /** The path of the page. */
  readonly pagePath: string;
}

/**
 * The head component.
 * @param props The component properties.
 * @returns The component.
 */
export const Head: Component<HeadProps> = (props) => {
  const language = useLanguage();
  const t = useTranslator();
  return (
    <InternalHead
      author={t('author')}
      description={t('description')}
      images={['./images/illustrator.png', './images/icons-unity.png']}
      imagesAlt="Illustrator and Unity icons"
      keywords="SVG,icons,design,illustration,icon,pack,VRChat"
      language={language()}
      next={props.next}
      prev={props.prev}
      siteName="Launchpad Icons"
      title={props.title}
      url={`https://kurone-kito.github.io/launchpad-icons/${props.pagePath}`}
    />
  );
};
