import type { Meta, StoryObj } from 'storybook-solidjs';
import type { ComponentProps } from 'solid-js';

import { Hero } from './Hero.js';

/** Type definition for the props of the component. */
type Props = ComponentProps<typeof Hero>;

/** Type definition for the story. */
type Story = StoryObj<Props>;

/** The metadata for the component. */
const meta: Meta<Props> = { component: Hero };

/** The default story for the component. */
export const Default: Story = {
  args: {
    catchPhrase: 'catchPhrase',
    children: 'children',
    gettingStarted: 'gettingStarted',
    subTitle: 'subTitle',
  },
};

export default meta;
