import type { Component, ParentProps } from 'solid-js';

export interface WideAnchorButtonProps {
  /**
   * The URL to navigate to.
   * @default '#'
   */
  readonly url?: string;
}

/**
 * The wide anchor button.
 * @param props The component properties.
 * @returns The component.
 */
export const WideAnchorButton: Component<ParentProps<WideAnchorButtonProps>> = (
  props,
) => {
  const { children, url = '#' } = props;
  return (
    <a
      class="bg-primary font-thin mb-2 block rounded-full px-6 pb-2 pt-2.5 shadow-gray-800 shadow-sm text-xl text-white text-center tracking-wider uppercase w-full transition duration-200 ease-in-out hover:bg-primary-accent-300 hover:shadow-md hover:shadow-gray-800 focus:bg-primary-accent-300 focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-none"
      data-twe-ripple-init
      data-twe-ripple-color="primary"
      href={url}
    >
      {children}
    </a>
  );
};
