import type { Component } from 'solid-js';
import { Show } from 'solid-js';
import { PricingCard } from '../components/atoms/PricingCard.js';
import { useMd } from '../modules/useMd.js';

/**
 * The explore page.
 * @returns The component.
 */
const Pricing: Component = () => {
  const md = useMd('pricing');
  return (
    <>
      <section class="article-container">
        <h2 class="heading-root">Pricing</h2>
        <div class="grid gap-8 pb-8 md:grid-cols-2 lg:grid-cols-3">
          <PricingCard
            title="Free"
            subscribe="Already subscribed"
            features={[
              'Unrestricted use under CC BY-NC 4.0 license',
              'Community based support',
            ]}
          />
          <PricingCard
            title="Basic"
            subscribe="It's the thought that counts"
            features={[
              'All features from the Free plan',
              'Willingness to make more use of the Launchpad Icons',
            ]}
          />
          <PricingCard
            title="Pro"
            subscribe="It's the thought that counts"
            features={[
              'All features from the Basic plan',
              'Awareness as a professional user',
            ]}
          />
        </div>
        <Show
          when={md()}
          fallback={<article class="article-container">Loading...</article>}
        >
          <article class="prose-anchor prose-article" innerHTML={md() ?? ''} />
        </Show>
      </section>
    </>
  );
};

export default Pricing;
