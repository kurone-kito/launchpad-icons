import clsx from 'clsx';
import type { Component, JSX } from 'solid-js';
import { Show, mergeProps, splitProps } from 'solid-js';

export type HeadlessAnchorProps = Omit<
  Readonly<JSX.AnchorHTMLAttributes<HTMLAnchorElement>>,
  'target'
>;

/** The pattern to match external URLs. */
export const externalPattern = /^https?:\/\//;

/**
 * The styleless anchor.
 * @param props The component properties.
 * @returns The component.
 */
export const HeadlessAnchor: Component<HeadlessAnchorProps> = (props) => {
  const [local, rest] = splitProps(
    mergeProps({ href: '#', rel: '' } as const, props),
    ['rel'],
  );
  return (
    <Show
      when={externalPattern.test(rest.href)}
      fallback={
        <Show when={local.rel} fallback={<a {...rest}>{rest.children}</a>}>
          <a rel={local.rel} {...rest}>
            {rest.children}
          </a>
        </Show>
      }
    >
      <a rel={clsx(local.rel, 'noopener noreferrer')} target="_blank" {...rest}>
        {rest.children}
      </a>
    </Show>
  );
};
