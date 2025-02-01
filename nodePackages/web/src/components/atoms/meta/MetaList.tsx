import { Meta as SolidMeta } from '@solidjs/meta';
import type { Component } from 'solid-js';

export interface MetaListProps {
  /** The author of the meta tag. */
  readonly author: string;

  /** The description of the meta tag. */
  readonly description: string;

  /** The keywords of the meta tag. */
  readonly keywords: string;
}

/**
 * The meta list component.
 * @param props The component properties.
 * @returns The component.
 */
export const MetaList: Component<MetaListProps> = (props) => (
  <>
    <SolidMeta name="author" content={props.author} />
    <SolidMeta name="color-scheme" content="light dark" />
    <SolidMeta name="description" content={props.description} />
    <SolidMeta name="generator" content="SolidStart" />
    <SolidMeta name="keywords" content={props.keywords} />
    <SolidMeta name="referer" content="strict-origin-when-cross-origin" />
    <SolidMeta
      name="theme-color"
      media="(prefers-color-scheme: light)"
      content="#F2F2F2"
    />
    <SolidMeta
      name="theme-color"
      media="(prefers-color-scheme: dark)"
      content="#191E24"
    />
    <SolidMeta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
  </>
);
