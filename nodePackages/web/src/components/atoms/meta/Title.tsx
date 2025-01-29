import { Title as SolidTitle } from '@solidjs/meta';
import type { Component } from 'solid-js';
import { Show } from 'solid-js';

export interface TitleProps {
  /** The site name. */
  readonly siteName: string;

  /** The title of the page. */
  readonly title?: string | undefined;
}

/**
 * The title component.
 * @param props The component properties.
 * @returns The component.
 */
export const Title: Component<TitleProps> = (props) => (
  <SolidTitle>
    <Show fallback={props.siteName} when={props.title}>
      {props.title} | {props.siteName}
    </Show>
  </SolidTitle>
);
