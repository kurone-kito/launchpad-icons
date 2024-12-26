// Node.js v18.20 and later can use import attributes syntax and import
// assertions syntax, but`prettier-vscode` may be under v18.20 and cannot
// use `with` syntax.This tweak will be maintained until April 2025,
// when support for the v18 series will end.
import config from '@kurone-kito/prettier-config' assert { type: 'json' };

/** @type {import('prettier').Config} */
export default {
  ...config,
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
    'prettier-plugin-sort-json',
  ],
};
