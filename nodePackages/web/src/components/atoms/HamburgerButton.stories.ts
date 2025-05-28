import type { ComponentProps } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { HamburgerButton } from './HamburgerButton.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof HamburgerButton>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: HamburgerButton };

/** The default story for the component. */
export const Default: Story = { args: { class: '' } };

export default meta;
