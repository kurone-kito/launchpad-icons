import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import Pricing from '../routes/[[language]]/pricing.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof Pricing>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: Pricing };

/** The default story for the component. */
export const Default: Story = {};

export default meta;
