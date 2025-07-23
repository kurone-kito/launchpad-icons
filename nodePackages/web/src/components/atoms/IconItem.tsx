import { BiLogosTailwindCss } from 'solid-icons/bi';
import type { Component, ParentProps } from 'solid-js';
import { Show } from 'solid-js';

export interface IconItemProps extends Readonly<ParentProps> {
  /** The icon name. */
  readonly name: string;

  /** Whether the icon is new. */
  readonly new?: boolean | undefined;

  /** Whether the icon is TailwindCSS compatible. */
  readonly tw?: boolean | undefined;
}

/**
 * An icon item.
 * @param props The properties.
 * @returns The component.
 */
export const IconItem: Component<IconItemProps> = (props) => (
  <figure
    class="bg-base-300 border-2 relative rounded-lg py-4 text-center shadow-md"
    classList={{ 'border-accent': props.new, 'border-base-300': !props.new }}
  >
    <Show when={props.tw}>
      <div class="absolute -left-0.5 -top-0.5 size-12 overflow-hidden rounded-tl-lg">
        <div class="bg-accent size-full [clip-path:polygon(0_0,100%_0,0_100%)]">
          <BiLogosTailwindCss class="absolute left-1 top-1 size-5 text-base-300" />
        </div>
      </div>
    </Show>
    <i class="inline-flex h-16 w-16 items-center justify-center not-italic drop-shadow-lg">
      {props.children}
    </i>
    <figcaption class="block text-wrap text-xs font-light" translate="no">
      {props.name}
    </figcaption>
  </figure>
);
