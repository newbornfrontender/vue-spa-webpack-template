'use strict';

const development = process.env.NODE_ENV === 'development';
const production = process.env.NODE_ENV === 'production';

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true,
    mocha: true,
  },
  'globals': {
    'expect': true,
  },
  extends: [
    'plugin:vue/recommended',
    'standard',
  ],
  plugins: [
    'vue',
  ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': production ? 'error' : 'off',
  },
};
