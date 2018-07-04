'use strict';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const env = process.env.NODE_ENV;

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: [
          env === 'production'
            ? MiniCssExtractPlugin.loader
            : 'vue-style-loader',
          'css-loader',
        ],
      },
    ],
  },
});
