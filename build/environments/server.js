'use strict';

// IMPORTS
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import webpack from 'webpack';

// Plugins
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config';

// SETTINGS
// =============================================================================

// Webpack development server
// -----------------------------------------------------------------------------

const HOST = 'localhost';
const PORT = 8080;

// CONFIG
// =============================================================================

const config = new WebpackConfig().merge({
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist',
    compress: true,
    host: HOST,
    port: PORT,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: true,
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
        ],
      }, {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
});

// EXPORTS
// =============================================================================

export default config;
