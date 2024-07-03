import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import Docs from '../routes/[[language]]/docs.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof Docs>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: Docs };

/** The default story for the component. */
export const Default: Story = {};

export default meta;
