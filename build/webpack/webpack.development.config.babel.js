'use strict';

// IMPORTS
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// RULES
// =============================================================================

const LOADER = {
  CSS: {
    test: /\.css$/,
    use: [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ],
  },

  STYLUS: {
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
};

// PLUGINS
// =============================================================================

const MCEP = new MiniCssExtractPlugin({
  filename: 'main.css',
});

// CONFIG
// =============================================================================

const config = new WebpackConfig().extend(
  './build/webpack/webpack.base.config',
).merge({
  mode: 'development',

  module: {
    rules: [
      LOADER.CSS,
      LOADER.STYLUS,
    ],
  },

  plugins: [
    MCEP,
  ],
});

// EXPORTS
// =============================================================================

export default config;
