'use strict';

// IMPORTS
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// CONFIG
// =============================================================================

const config = new WebpackConfig().merge({
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      }, {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          'stylus-loader',
        ],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css',
    }),
  ],
});

// EXPORTS
// =============================================================================

export default config;
