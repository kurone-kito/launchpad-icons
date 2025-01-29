import { Link } from '@solidjs/meta';
import type { Component } from 'solid-js';
import { Show } from 'solid-js';

/** The URL of the license. */
const LICENSE_URL =
  'https://github.com/kurone-kito/launchpad-icons/blob/main/LICENSE';

export interface LinkListProps {
  /** The next page URL. */
  readonly next?: string | undefined;

  /** The previous page URL. */
  readonly prev?: string | undefined;
}

/**
 * The link list component.
 * @param props The component properties.
 * @returns The component.
 */
export const LinkList: Component<LinkListProps> = (props) => (
  <>
    <Link rel="author" href="https://x.com/kurone_kito" />
    <Link rel="help" href="./docs" />
    <Link rel="icon" href="./images/favicon.svg" type="image/svg+xml" />
    <Link rel="license" href={LICENSE_URL} />
    <Show keyed when={props.next}>
      {(next) => <Link rel="next" href={next} />}
    </Show>
    <Show keyed when={props.prev}>
      {(prev) => <Link rel="prev" href={prev} />}
    </Show>
    <Link rel="search" href="./explore" />
    <Link rel="terms-of-service" href={LICENSE_URL} />
  </>
);
