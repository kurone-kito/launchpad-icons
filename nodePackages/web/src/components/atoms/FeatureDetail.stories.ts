import type { ComponentProps } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { FeatureDetail } from './FeatureDetail.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof FeatureDetail>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: FeatureDetail };

/** The default story for the component. */
export const Default: Story = {
  args: {
    innerHTML: '<h3>FeatureDetail</h3>',
    image: 'https://via.placeholder.com/1024x600',
  },
};

export default meta;
