import type { Component, ParentProps } from 'solid-js';
import type { HeadlessAnchorProps } from '../atoms/HeadlessAnchor.js';
import { HeadlessAnchor } from '../atoms/HeadlessAnchor.js';

export type NavIconMenuProps = Omit<HeadlessAnchorProps, 'class'>;

/**
 * A navigation icon item.
 * @param props The component properties.
 * @returns The component.
 */
export const NavIconItem: Component<ParentProps<NavIconMenuProps>> = (
  props,
) => (
  <li class="p-1 lg:p-2">
    <HeadlessAnchor class="nav-icon-button" {...props} />
  </li>
);
