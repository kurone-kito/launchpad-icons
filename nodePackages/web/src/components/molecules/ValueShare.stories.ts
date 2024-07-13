import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import { ValueShare } from './ValueShare.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof ValueShare>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: ValueShare };

/** The default story for the component. */
export const Default: Story = {
  args: {
    tooltipAddToVcc: 'Add to VCC',
    tooltipToClipboard: 'Copy value',
    value: 'value',
    vccSchemeUrl: 'https://example.com/#',
  },
};

export default meta;
