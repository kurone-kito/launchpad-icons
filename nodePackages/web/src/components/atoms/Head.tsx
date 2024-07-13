import { Title, Link, Meta } from '@solidjs/meta';
import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { keywords } from '../../../package.json';

export interface HeadProps {
  /** The next page URL. */
  readonly next?: string | undefined;

  /** The previous page URL. */
  readonly prev?: string | undefined;

  /** The title of the page. */
  readonly title?: string | undefined;
}

/** The keywords of the page. */
const strKeywords = keywords.join(',');

/** The author of the page. */
const AUTHOR = 'Kuroné Kito';

/** The description of the page. */
const DESC = 'Icons pack for VRChat/Web, like VRChat LaunchPad';

/** The URL of the license. */
const LICENSE_URL =
  'https://github.com/kurone-kito/launchpad-icons/blob/main/LICENSE';

/** The title of the page. */
const TITLE = 'Launchpad Icons';

/** The URL of the page. */
const URL = 'https://kurone-kito.github.io/launchpad-icons';

/**
 * The head component.
 * @param props The component properties.
 * @returns The component.
 */
export const Head: Component<HeadProps> = (props) => (
  <>
    <Title>
      <Show fallback={TITLE} when={props.title}>
        {props.title} | {TITLE}
      </Show>
    </Title>
    <Meta name="author" content={AUTHOR} />
    <Meta name="color-scheme" content="light dark" />
    <Meta name="description" content={DESC} />
    <Meta name="generator" content="SolidJS" />
    <Meta name="keywords" content={strKeywords} />
    <Meta name="referer" content="strict-origin-when-cross-origin" />
    <Meta
      name="theme-color"
      media="(prefers-color-scheme: light)"
      content="#F2F2F2"
    />
    <Meta
      name="theme-color"
      media="(prefers-color-scheme: dark)"
      content="#191E24"
    />
    <Meta
      name="viewport"
      content="width=device-width, initial-scale=1, viewport-fit=cover"
    />
    <Meta property="og:description" content={DESC} />
    <Meta property="og:image" content={`${URL}/images/illustrator.png`} />
    <Meta property="og:image" content={`${URL}/images/icons-unity.png`} />
    <Meta
      property="og:image:alt"
      content="We redesigned the icons in Adobe Illustrator and exported them to SVG format."
    />
    <Meta property="og:image:height" content="600" />
    <Meta property="og:image:type" content="image/png" />
    <Meta property="og:image:width" content="1024" />
    <Meta property="og:locale" content="en_US" />
    <Meta property="og:site_name" content={TITLE} />
    <Show
      fallback={<Meta property="og:title" content={TITLE} />}
      when={props.title}
    >
      <Meta property="og:title" content={`${props.title} | ${TITLE}`} />
    </Show>
    <Meta property="og:type" content="product" />
    <Meta property="og:url" content={URL} />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:creator" content="@kurone_kito" />
    <Meta name="twitter:site" content="@kurone_kito" />
    <Meta name="twitter:title" content={TITLE} />
    <Meta name="twitter:description" content={DESC} />
    <Meta name="twitter:image" content={`${URL}/images/illustrator.png`} />
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
