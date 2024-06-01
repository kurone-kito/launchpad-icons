import { defineConfig } from '@solidjs/start/config';

export default defineConfig({
  server: {
    baseURL: process.env.BASE_PATH,
    preset: 'githubPages',
    prerender: { autoSubfolderIndex: false },
  },
});
