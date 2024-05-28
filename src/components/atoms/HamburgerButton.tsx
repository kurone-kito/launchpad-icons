import type { Component } from 'solid-js';
// TODO: add the import assertion
import { base } from '../../constants.json';

export interface HamburgerButtonProps {
  /** The target element to toggle. */
  readonly target: string;
}

/**
 * A button that toggles a target element.
 * @param props The component properties.
 * @returns The component.
 */
export const HamburgerButton: Component<HamburgerButtonProps> = (props) => {
  const { target } = props;
  return (
    <button
      class="block border-0 bg-transparent px-2 hover:no-underline hover:shadow-none focus:no-underline focus:outline-none focus:ring-0 focus:shadow-none lg:hidden"
      type="button"
      data-twe-collapse-init
      data-twe-target={`#${target}`}
      aria-controls={target}
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <img
        alt="Hamburger"
        class="invert dark:invert-0"
        src={`/${base}/icons/Hamburger.svg`}
        height="20"
        width="20"
      />
    </button>
  );
};
