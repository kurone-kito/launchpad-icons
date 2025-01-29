import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import { ChangeThemeIcon } from './ChangeThemeIcon.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof ChangeThemeIcon>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: ChangeThemeIcon };

/** The default story for the component. */
export const Default: Story = {
  args: {
    labelToDark: 'Dark mode',
    labelToLight: 'Light mode',
    toggleTooltip: 'Toggle theme',
  },
};

export default meta;
