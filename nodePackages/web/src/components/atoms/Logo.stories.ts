import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import { Logo } from './Logo.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof Logo>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: Logo };

/** The default story for the component. */
export const Default: Story = {};

export default meta;