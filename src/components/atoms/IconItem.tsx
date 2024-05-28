import type { Component } from 'solid-js';
import { base, newIcons } from '../../constants.json';

export interface IconItemProps {
  /**
   * The icon name.
   */
  readonly name: string;
}

/**
 * An icon item.
 * @param props The properties.
 * @returns The component.
 */
export const IconItem: Component<IconItemProps> = (props) => {
  const { name } = props;
  return (
    <figure
      class={`block rounded-lg bg-neutral-300 p-4 text-center text-surface shadow-sm shadow-gray-500 dark:bg-surface-dark dark:shadow-gray-900 dark:text-white ${newIcons.includes(name) ? 'border-2 border-primary-500 dark:border-primary-400' : ''}`}
    >
      <i class="inline-flex justify-center items-center">
        <img
          src={`/${base}/icons/${name}.svg`}
          alt={name}
          class="drop-shadow-lg w-16 h-16"
        />
      </i>
      <figcaption class="block font-light text-wrap text-xs" translate="no">
        {name}
      </figcaption>
    </figure>
  );
};
