import type { Component, ParentProps } from 'solid-js';

export interface WideAnchorButtonProps extends Readonly<ParentProps> {
  /**
   * The URL to navigate to.
   * @default '#'
   */
  readonly url?: string | undefined;
}

/**
 * The wide anchor button.
 * @param props The component properties.
 * @returns The component.
 */
export const WideAnchorButton: Component<WideAnchorButtonProps> = (props) => (
  <a
    class="btn btn-block btn-primary btn-lg rounded-full shadow-xs hover:shadow-sm"
    href={props.url ?? '#'}
    rel="next"
  >
    {props.children}
  </a>
);
