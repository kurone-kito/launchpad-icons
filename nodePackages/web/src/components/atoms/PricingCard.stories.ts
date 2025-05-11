import type { ComponentProps } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { PricingCard } from './PricingCard.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof PricingCard>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: PricingCard };

/** The default story for the component. */
export const Default: Story = {
  args: {
    features: ['features 1', 'features 2', 'features 3'],
    heading: 'heading',
    subscribe: 'subscribe',
    plan: 'plan',
    term: 'term',
  },
};

export default meta;
