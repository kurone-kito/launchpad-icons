import { FaSolidArrowUpRightFromSquare } from 'solid-icons/fa';
import type { Component, ParentProps } from 'solid-js';
import type { HeadlessAnchorProps } from '../atoms/HeadlessAnchor.js';
import { externalPattern, HeadlessAnchor } from '../atoms/HeadlessAnchor.js';

export type TextAnchorProps = Omit<HeadlessAnchorProps, 'class'>;

/**
 * A text anchor.
 * @param props The component properties.
 * @returns The component.
 */
export const TextAnchor: Component<ParentProps<TextAnchorProps>> = (props) => {
  const { children, url = '#', ...rest } = props;
  const external = externalPattern.test(url);
  return (
    <HeadlessAnchor
      class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
      url={url}
      {...rest}
    >
      {children}
      {external && (
        <sup>
          <FaSolidArrowUpRightFromSquare class="inline ml-0.5" size={12} />
        </sup>
      )}
    </HeadlessAnchor>
  );
};
