import defaultConfig from '@kurone-kito/eslint-config-base';
import tailwind from 'eslint-plugin-tailwindcss';

export default [...defaultConfig, ...tailwind.configs['flat/recommended']];
