'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Environments
// -----------------------------------------------------------------------------

const env = process.env.NODE_ENV;

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

export default ({
  test,
} = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: [
          () => {
            if (env === 'development') {
              return 'vue-style-loader';
            };

            if (env === 'production') {
              return MiniCssExtractPlugin.loader;
            };
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // ?
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
      },
    ],
  },
});
