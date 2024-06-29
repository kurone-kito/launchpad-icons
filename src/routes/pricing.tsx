import type { Component } from 'solid-js';
import { PricingCard } from '../components/atoms/PricingCard.js';
import { texts } from '../dynamic.json';

/**
 * The explore page.
 * @returns The component.
 */
const Pricing: Component = () => (
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
    <article class="prose-anchor prose-article" innerHTML={texts.pricing} />
  </section>
);

export default Pricing;
