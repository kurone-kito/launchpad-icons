import type { Component, JSX, ParentProps } from 'solid-js';

export interface HeadlessAnchorProps {
  /** The CSS class name. */
  readonly class?: string | undefined;

  /** The description. */
  readonly title?: string | undefined;

  /**
   * The URL to navigate to.
   * @default '#'
   */
  readonly url?: string | undefined;

  /** Whether the tooltip is at the top. */
  readonly top?: boolean | undefined;
}

/** The attributes for external anchor. */
const externalAttributes: Readonly<
  JSX.AnchorHTMLAttributes<HTMLAnchorElement>
> = {
  rel: 'noopener noreferrer',
  target: '_blank',
} as const;

/** The pattern to match external URLs. */
export const externalPattern = /^https?:\/\//;

/**
 * Gets the attributes for the tooltip
 * @param props The component properties.
 * @returns The attributes.
 */
const getAttributesWithTitle = (
  props: Pick<HeadlessAnchorProps, 'title' | 'top'>,
) => {
  const { title, top } = props;
  return title
    ? ({
        'data-twe-placement': top ? 'top' : 'bottom',
        'data-twe-toggle': 'tooltip',
        title,
      } as const)
    : ({} as Readonly<JSX.AnchorHTMLAttributes<HTMLAnchorElement>>);
};

/**
 * The styleless anchor.
 * @param props The component properties.
 * @returns The component.
 */
export const HeadlessAnchor: Component<ParentProps<HeadlessAnchorProps>> = (
  props,
) => {
  const { children, class: className, url = '#' } = props;
  const external = externalPattern.test(url) ? externalAttributes : {};
  const tooltip = getAttributesWithTitle(props);
  return (
    <a class={className} href={url} {...external} {...tooltip}>
      {children}
    </a>
  );
};
