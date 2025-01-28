import type { StorybookConfig } from 'storybook-solidjs-vite';

/** the configuration for Storybook */
const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  docs: { autodocs: 'tag' },
  framework: { name: 'storybook-solidjs-vite', options: {} },
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
};

export default config;
