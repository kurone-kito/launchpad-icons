import defaultConfig from '@kurone-kito/eslint-config-base';
import solid from 'eslint-plugin-solid/configs/typescript';
import tailwind from 'eslint-plugin-tailwindcss';

export default [
  ...defaultConfig,
  solid,
  ...tailwind.configs['flat/recommended'],
];
