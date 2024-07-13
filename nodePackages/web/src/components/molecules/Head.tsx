import type { Component } from 'solid-js';
import type { LinkListProps } from '../atoms/meta/LinkList.js';
import { LinkList } from '../atoms/meta/LinkList.js';
import type { MetaListProps } from '../atoms/meta/MetaList.js';
import { MetaList } from '../atoms/meta/MetaList.js';
import type { OgpProps } from '../atoms/meta/Ogp.js';
import { Ogp } from '../atoms/meta/Ogp.js';
import type { TitleProps } from '../atoms/meta/Title.js';
import { Title } from '../atoms/meta/Title.js';
import type { TwitterCardProps } from '../atoms/meta/TwitterCard.js';
import { TwitterCard } from '../atoms/meta/TwitterCard.js';

export interface HeadProps
  extends LinkListProps,
    MetaListProps,
    OgpProps,
    TitleProps,
    Omit<TwitterCardProps, 'image'> {}

/**
 * The head component.
 * @param props The component properties.
 * @returns The component.
 */
export const Head: Component<HeadProps> = (props) => (
  <>
    <LinkList {...props} />
    <MetaList {...props} />
    <Ogp {...props} />
    <Title {...props} />
    <TwitterCard image={`${props.images[0]}`} {...props} />
  </>
);
