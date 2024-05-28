import type { Component, JSX, ParentProps } from 'solid-js';

export interface FeatureItemProps {
  /** The heading content */
  readonly heading: JSX.Element;
}

/**
 * A feature item.
 * @param props The component properties.
 * @returns The component.
 */
export const FeatureItem: Component<ParentProps<FeatureItemProps>> = (
  props,
) => {
  const { heading, children } = props;
  return (
    <li class="bg-zinc-50 p-4 rounded shadow text-center text-surface dark:bg-neutral-700 dark:text-white">
      <h4 class="font-bold">{heading}</h4>
      <p class="font-thin">{children}</p>
    </li>
  );
};
