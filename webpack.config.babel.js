'use strict';

// =============================================================================
// IMPORTS
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import { argv } from 'yargs';

import utils from './build/modules/utils';

// Plugins
// -----------------------------------------------------------------------------

import WebpackConfig from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

import { VueLoaderPlugin } from 'vue-loader';

// =============================================================================
// ENVIRONMENTS
// =============================================================================

const env = argv.env || 'development';

const server = env === 'server';
const development = env === 'development';
const production = env === 'production';

// =============================================================================
// CONFIG
// =============================================================================

// server ? (
//   './build/environments/server', {
//   './build/environments/development': config => {
//     delete config.module; // delete config.module.rules[RULE1, RULE2];
//     delete config.plugins;
//     return config;
//   }}
// ) : production ? (
//   './build/environments/production', {
//   './build/environments/development': config => {
//     delete config.mode;
//     delete config.plugins;
//     return config;
//   }}
// ) : (
//   './build/environments/development'
// )

function extendConfig () {
  if ( server ) {
    './build/environments/server', {
    './build/environments/development': config => {
      delete config.module; // delete config.module.rules[RULE1, RULE2];
      delete config.plugins;
      return config;
    }}
  } else if ( production ) {
    './build/environments/production', {
    './build/environments/development': config => {
      delete config.mode;
      delete config.plugins;
      return config;
    }}
  } else if ( development ) {
    './build/environments/development'
  }
}

const EXT = extendConfig ();

// if ( server ) {
//   './build/environments/server', {
//   './build/environments/development': config => {
//     delete config.module; // delete config.module.rules[RULE1, RULE2];
//     delete config.plugins;
//     return config;
//   }}
// } else if ( production ) {
//   './build/environments/production', {
//   './build/environments/development': config => {
//     delete config.mode;
//     delete config.plugins;
//     return config;
//   }}
// } else if ( development ) {
//   './build/environments/development'
// }

const config = new WebpackConfig().extend(
  ('./build/environments/production', {
    './build/environments/development': config => {
      delete config.mode;
      delete config.plugins;
      return config;
    }})
).merge({
  resolve: {
    extensions: [
      '.js', '.vue', '.json',
    ],
    alias: {
      'assets': utils.resolve('./assets'),
      'pages': utils.resolve('./src/pages'),
      'static': utils.resolve('./static'),
      'components': utils.resolve('./src/components'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
      }, {
        test: /\.vue$/,
        use: 'vue-loader',
      }, {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: false,
          },
        },
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('./img/[name].[hash:7].[ext]'),
          },
        },
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('./media/[name].[hash:7].[ext]'),
          },
        },
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('./fonts/[name].[hash:7].[ext]'),
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './index.html',
      inject: true,
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([{
      from: utils.resolve('./static/img'),
      to: utils.resolve('./dist/static/img'),
      toType: 'dir',
    }]),
  ],
});

// =============================================================================
// EXPORTS
// =============================================================================

export default config;
