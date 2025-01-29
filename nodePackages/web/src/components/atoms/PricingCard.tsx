import type { Component, JSX } from 'solid-js';
import { For } from 'solid-js';

export interface PricingCardProps {
  /** The features. */
  readonly features: JSX.ArrayElement;

  /** The title. */
  readonly heading: JSX.Element;

  /** The label to subscribe. */
  readonly subscribe: JSX.Element;

  /** The plan. */
  readonly plan: JSX.Element;

  /** The term. */
  readonly term: JSX.Element;
}

/**
 * A pricing card.
 * @param props The component properties.
 * @returns The component.
 */
export const PricingCard: Component<PricingCardProps> = (props) => (
  <article class="card bg-base-300 text-base-content max-w-lg shadow-xl">
    <div class="card-body">
      <header class="flex flex-col items-center">
        <h3 class="card-title py-4">
          {props.heading} {props.plan}
        </h3>
        <h4 class="mb-4 flex items-baseline gap-1">
          <span class="text-4xl font-bold">$ 0.00</span>
          <span class="text-base-content/70 text-lg">/{props.term}</span>
        </h4>
        <button
          type="button"
          class="btn btn-block btn-active btn-disabled btn-lg glass rounded-full"
          aria-disabled
        >
          <span class="text-base-content/70">{props.subscribe}</span>
        </button>
      </header>
      <section class="text-base-content/85 p-7">
        <ul class="list-disc">
          <For each={props.features}>
            {(feature) => <li class="py-2">{feature}</li>}
          </For>
        </ul>
      </section>
    </div>
  </article>
);
