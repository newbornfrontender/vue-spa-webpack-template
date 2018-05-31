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
  mode: 'production',

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/, // ?
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.min.css',
    }),
  ],
});

// EXPORTS
// =============================================================================

export default config;
