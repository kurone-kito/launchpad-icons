import type { Component, ParentProps } from 'solid-js';

export interface NavTooltipItemProps extends Readonly<ParentProps> {
  /** The tooltip title. */
  readonly tooltip: string;

  /** Whether the tooltip is at the top. */
  readonly top?: boolean | undefined;
}

/**
 * Wrapper component of the navigation icon item.
 * @param props The component properties.
 * @returns The component.
 */
export const NavTooltipItem: Component<NavTooltipItemProps> = (props) => (
  <li
    class="tooltip"
    classList={{
      'tooltip-primary': props.top,
      'tooltip-secondary': !props.top,
    }}
    data-tip={props.tooltip}
  >
    {props.children}
  </li>
);
