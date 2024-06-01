/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
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
