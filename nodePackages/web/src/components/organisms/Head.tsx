import type { Component } from 'solid-js';
import Constants from '../../constants.yml';
import type { HeadProps as InternalHeadProps } from '../molecules/Head.js';
import { Head as InternalHead } from '../molecules/Head.js';
import { useLanguage, useTranslator } from '../../modules/createI18N';

export interface HeadProps
  extends Pick<InternalHeadProps, 'next' | 'prev' | 'title'> {
  /** The path of the page. */
  readonly pagePath: string;
}

/**
 * Creates the web URL.
 * @param path The path from the root.
 * @returns The web URL.
 */
const webUrl = (path: string) => `${Constants['webUrl']}${path}`;

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
      images={[webUrl('images/banner.webp')]}
      imagesAlt="VRC Icons by Kuroné Kito: It's a collection of UNOFFICIAL icons, such as the VRChat icons. It provides icons in SVG vector format."
      keywords="SVG,icons,design,illustration,icon,pack,VRChat"
      language={language()}
      next={props.next}
      prev={props.prev}
      siteName="VRC Icons"
      title={props.title}
      url={webUrl(props.pagePath)}
    />
  );
};
