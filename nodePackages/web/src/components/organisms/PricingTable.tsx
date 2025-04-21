import type { Component } from 'solid-js';
import { useTranslator } from '../../modules/createI18N.js';
import { PricingCard } from '../atoms/PricingCard.js';

export const PricingTable: Component = () => {
  const t = useTranslator();
  const plan = t('plan');
  const term = t('term');
  return (
    <div class="grid gap-8 pb-8 pt-14 md:grid-cols-2 lg:grid-cols-3">
      <PricingCard
        features={[t('planFree1'), t('planFree2')]}
        heading="Free"
        plan={plan}
        subscribe={t('subscribed')}
        term={term}
      />
      <PricingCard
        features={[t('planBasic1'), t('planBasic2')]}
        heading="Basic"
        plan={plan}
        subscribe={t('subscribe')}
        term={term}
      />
      <PricingCard
        features={[t('planPro1'), t('planPro2')]}
        heading="Pro"
        plan={plan}
        subscribe={t('subscribe')}
        term={term}
      />
    </div>
  );
};
