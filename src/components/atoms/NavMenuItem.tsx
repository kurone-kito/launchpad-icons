import type { Component, ParentProps } from 'solid-js';

export interface NavMenuItemProps {
  /** The CSS class. */
  readonly class?: string | undefined;

  /**
   * The URL to navigate to.
   * @default '#'
   */
  readonly url?: string | undefined;
}

/**
 * A navigation menu item.
 * @param props The component properties.
 * @returns The component.
 */
export const NavMenuItem: Component<ParentProps<NavMenuItemProps>> = (
  props,
) => {
  const { class: className = '', children, url = '#' } = props;
  return (
    <li
      class={`my-2 ps-2 lg:my-0 lg:pe-1 lg:ps-0 ${className}`}
      data-twe-nav-item-ref
    >
      <a
        class="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
        href={url}
        data-twe-nav-link-ref
      >
        {children}
      </a>
    </li>
  );
};
