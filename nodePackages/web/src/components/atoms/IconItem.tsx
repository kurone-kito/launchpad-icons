import type { Component, ParentProps } from 'solid-js';

export interface IconItemProps extends Readonly<ParentProps> {
  /** The icon name. */
  readonly name: string;

  /** Whether the icon is new. */
  readonly new?: boolean | undefined;
}

/**
 * An icon item.
 * @param props The properties.
 * @returns The component.
 */
export const IconItem: Component<IconItemProps> = (props) => (
  <figure
    class="bg-base-300 block rounded-lg py-4 text-center shadow-md"
    classList={{ 'border-accent border-2': props.new }}
    role="listitem"
  >
    <i class="inline-flex h-16 w-16 items-center justify-center not-italic drop-shadow-lg">
      {props.children}
    </i>
    <figcaption class="block text-wrap text-xs font-light" translate="no">
      {props.name}
    </figcaption>
  </figure>
);
