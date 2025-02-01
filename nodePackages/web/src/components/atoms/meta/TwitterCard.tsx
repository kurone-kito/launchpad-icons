import { Meta } from '@solidjs/meta';
import type { Component } from 'solid-js';
import { Show } from 'solid-js';

export interface TwitterCardProps {
  readonly author: string;

  /** The card description. */
  readonly description: string;

  /** The card image URL. */
  readonly image: string;

  /** The site name. */
  readonly siteName: string;

  /** The title of the page. */
  readonly title?: string | undefined;
}

/**
 * The Twitter card component.
 * @param props The component properties.
 * @returns The component.
 */
export const TwitterCard: Component<TwitterCardProps> = (props) => (
  <>
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:creator" content={props.author} />
    <Meta name="twitter:description" content={props.description} />
    <Meta name="twitter:image" content={props.image} />
    <Meta name="twitter:site" content={props.author} />
    <Show
      fallback={<Meta name="twitter:title" content={props.siteName} />}
      when={props.title}
    >
      <Meta
        name="twitter:title"
        content={`${props.title} | ${props.siteName}`}
      />
    </Show>
  </>
);
