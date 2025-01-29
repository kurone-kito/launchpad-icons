import daisyui from 'daisyui';
import type { Config } from 'tailwindcss';
// @ts-ignore
import safeArea from 'tailwindcss-safe-area';

/** The font stack for sans-serif text. */
const sans = [
  'Helvetica Neue',
  'Arial',
  'Hiragino Sans',
  'BIZ UDPGothic',
  'Yu Gothic',
  'YuGothic',
  'Meiryo',
  'sans-serif',
];

/** The Tailwind CSS configuration. */
const config: Config = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [daisyui, safeArea],
  theme: { extend: { fontFamily: { sans } } },
};

export default config;
