import type { ComponentProps } from 'solid-js';
import type { Meta, StoryObj } from 'storybook-solidjs';

import { WideAnchorButton } from './WideAnchorButton.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof WideAnchorButton>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: WideAnchorButton };

/** The default story for the component. */
export const Default: Story = {
  args: { children: 'children', url: 'https://example.com' },
};

export default meta;
