import { defineConfig } from '@solidjs/start/config';

const baseURL = process.env?.['BASE_PATH'];

export default defineConfig({
  server: {
    preset: 'githubPages',
    prerender: { autoSubfolderIndex: false },
    ...(baseURL ? { baseURL } : {}),
  },
});
