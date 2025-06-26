import solidPlugin from 'vite-plugin-solid';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    coverage: {
      exclude: ['**/*.config.*', '**/*.stories.*'],
      include: ['src/**/*.{ts,tsx,mts}'],
      provider: 'v8',
    },
    environment: 'jsdom',
    include: ['src/**/*.spec.{ts,tsx,mts}'],
  },
});
