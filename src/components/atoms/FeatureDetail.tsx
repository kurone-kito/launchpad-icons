import type { Component, JSX, ParentProps } from 'solid-js';

export interface FeatureDetailProps {
  /** The heading content */
  readonly heading: JSX.Element;

  /** The image URL. */
  readonly image: string;
}

/**
 * A feature detail.
 * @param props The component properties.
 * @returns The component.
 */
export const FeatureDetail: Component<ParentProps<FeatureDetailProps>> = (
  props,
) => {
  const { children, heading, image: Image } = props;
  return (
    <article class="article-container grid grid-cols-12">
      <section class="col-span-12 md:col-span-10 flex flex-col justify-center lg:col-span-6">
        <h3 class="heading-root">{heading}</h3>
        {children}
      </section>
      <aside class="col-span-9 col-end-13 flex items-center md:col-end-13 md:col-span-7 lg:col-end-13 lg:col-span-5">
        <img
          class="mx-auto drop-shadow-lg"
          src={Image}
          alt=""
          width="1024"
          height="600"
        />
      </aside>
    </article>
  );
};
