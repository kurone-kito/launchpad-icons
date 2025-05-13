import type { Component, JSX } from 'solid-js';
import { mergeProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';

export interface HamburgerButtonProps {
  /** The CSS classes. */
  readonly class?: string | undefined;

  /** The click event handler. */
  readonly onClick?:
    | JSX.EventHandlerUnion<HTMLInputElement, MouseEvent>
    | undefined;
}

/**
 * A button that toggles a target element.
 * @param props The component properties.
 * @returns The component.
 */
export const HamburgerButton: Component<HamburgerButtonProps> = (props) => {
  const concProps = mergeProps({ onClick: () => {} } as const, props);
  return (
    <label class={twMerge('btn btn-ghost swap swap-rotate', props.class)}>
      <input
        onClick={concProps.onClick}
        role="button"
        type="checkbox"
        value="expanded"
      />
      <i class="swap-off vrc-icon-Hamburger h-5 w-5" />
      <i class="swap-on vrc-icon-CrossThin h-5 w-5" />
    </label>
  );
};
