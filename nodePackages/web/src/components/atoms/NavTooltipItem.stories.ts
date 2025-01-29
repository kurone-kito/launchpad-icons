import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import { NavTooltipItem } from './NavTooltipItem.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof NavTooltipItem>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: NavTooltipItem };

/** The default story for the component. */
export const Default: Story = {
  args: { children: 'children', tooltip: 'Tooltip', top: true },
};

export default meta;
