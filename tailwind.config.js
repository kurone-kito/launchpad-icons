import twElements from 'tw-elements/plugin.cjs';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/tw-elements/js/**/*.js',
  ],
  plugins: [twElements],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Helvetica Neue',
          'Arial',
          'Hiragino Sans',
          'BIZ UDPGothic',
          'Yu Gothic',
          'YuGothic',
          'Meiryo',
          'sans-serif',
        ],
      },
    },
  },
};
