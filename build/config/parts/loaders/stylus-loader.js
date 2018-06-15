'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import utils from '../../../modules/utils';

// Plugins
// -----------------------------------------------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: [
          utils.devMode('vue-style-loader', MiniCssExtractPlugin.loader),
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2, // ?
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                // path: 'build/processors/postcss.config.js', // ?
                ctx: {
                  autoprefixer: {
                    cascade: false,
                    grid: true,
                  },
                },
              },
            },
          },
          'stylus-loader',
        ],
      },
    ],
  },
});
