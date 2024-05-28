import type { Component, JSX } from 'solid-js';
import { For } from 'solid-js';

export interface PricingCardProps {
  /** The features. */
  readonly features: JSX.ArrayElement;

  /** The label to subscribe. */
  readonly subscribe: JSX.Element;

  /** The title. */
  readonly title: JSX.Element;
}

/**
 * A pricing card.
 * @param props The component properties.
 * @returns The component.
 */
export const PricingCard: Component<PricingCardProps> = (props) => {
  const { features, subscribe, title } = props;
  return (
    <article class="block rounded-lg bg-white shadow-lg dark:bg-neutral-700">
      <header class="border-b-2 border-neutral-100 px-7 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
        <h3 class="text-2xl font-bold py-4">{title} plan</h3>
        <h4 class="mb-4">
          <span class="text-3xl font-bold">$ 0.00</span>
          <span class="text-gray-500 dark:text-gray-300">/year</span>
        </h4>
        <button
          type="button"
          class="mb-4 inline-block w-full rounded-full bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700"
          disabled
        >
          {subscribe}
        </button>
      </header>
      <section class="p-7">
        <ul class="list-disc text-gray-700 dark:text-white">
          <For each={features}>
            {(feature) => <li class="py-2">{feature}</li>}
          </For>
        </ul>
      </section>
    </article>
  );
};
