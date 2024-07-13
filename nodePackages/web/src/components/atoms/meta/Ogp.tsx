import { Meta } from '@solidjs/meta';
import type { Component } from 'solid-js';
import { For, Show } from 'solid-js';

export interface OgpProps {
  /** The description of the page. */
  readonly description: string;

  /** The image URLs of the page. */
  readonly images: readonly string[];

  /** The alt text of the images. */
  readonly imagesAlt: string;

  /** The language of the page. */
  readonly language: string;

  /** The site name. */
  readonly siteName: string;

  /** The title of the page. */
  readonly title?: string | undefined;

  /** The URL of the page. */
  readonly url: string;
}

/**
 * The OGP component.
 * @param props The component properties.
 * @returns The component.
 */
export const Ogp: Component<OgpProps> = (props) => (
  <>
    <Meta property="og:description" content={props.description} />
    <For each={props.images}>
      {(image) => <Meta property="og:image" content={image} />}
    </For>
    <Meta property="og:image:alt" content={props.imagesAlt} />
    <Meta property="og:image:height" content="600" />
    <Meta property="og:image:type" content="image/png" />
    <Meta property="og:image:width" content="1024" />
    <Meta property="og:locale" content={props.language} />
    <Meta property="og:site_name" content={props.siteName} />
    <Show
      fallback={<Meta property="og:title" content={props.siteName} />}
      when={props.title}
    >
      <Meta
        property="og:title"
        content={`${props.title} | ${props.siteName}`}
      />
    </Show>
    <Meta property="og:type" content="product" />
    <Meta property="og:url" content={props.url} />
  </>
);
