'use strict';

const env = process.env.NODE_ENV;

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
  plugins: [ 'vue' ],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': env === 'production' ? 'error' : 'off',
  },
};
