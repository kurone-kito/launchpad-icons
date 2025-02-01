import type { Component } from 'solid-js';

export interface FeatureDetailProps {
  /** The inner HTML content. */
  readonly innerHTML: string;

  /** The image URL. */
  readonly image: string;
}

/**
 * A feature detail.
 * @param props The component properties.
 * @returns The component.
 */
export const FeatureDetail: Component<FeatureDetailProps> = (props) => (
  <article class="article-container grid grid-cols-12">
    <section
      class="prose prose-anchor prose-p:my-2 prose-p:font-light prose-h3:heading-root col-span-12 flex flex-col justify-center md:col-span-10 lg:col-span-6"
      innerHTML={props.innerHTML}
    />
    <aside class="col-span-9 col-end-13 flex items-center md:col-span-7 md:col-end-13 lg:col-span-5 lg:col-end-13">
      <img
        class="mx-auto drop-shadow-lg"
        src={props.image}
        alt=""
        fetchpriority="low"
        width="1024"
        height="600"
      />
    </aside>
  </article>
);
