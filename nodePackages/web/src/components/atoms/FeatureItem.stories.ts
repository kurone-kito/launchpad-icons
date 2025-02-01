import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import { FeatureItem } from './FeatureItem.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof FeatureItem>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: FeatureItem };

/** The default story for the component. */
export const Default: Story = {
  args: { children: 'children', heading: 'FeatureItem' },
};

export default meta;
