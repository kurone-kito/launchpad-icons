import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import { IconItem } from './IconItem.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof IconItem>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: IconItem };

/** The default story for the component. */
export const Default: Story = {
  args: { children: '🐱', name: 'IconItem', new: true },
};

export default meta;
