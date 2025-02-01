import type { Component, JSX, ParentProps } from 'solid-js';

export interface FeatureItemProps extends Readonly<ParentProps> {
  /** The heading content */
  readonly heading: JSX.Element;
}

/**
 * A feature item.
 * @param props The component properties.
 * @returns The component.
 */
export const FeatureItem: Component<FeatureItemProps> = (props) => (
  <li class="bg-base-300 card text-base-content shadow-xl">
    <div class="card-body items-center text-center">
      <h4 class="card-title">{props.heading}</h4>
      <p class="text-lg font-thin">{props.children}</p>
    </div>
  </li>
);
