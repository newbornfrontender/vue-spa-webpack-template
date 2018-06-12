'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import utils from '../modules/utils';

// Plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// =============================================================================
// = WEBPACK PARTS                                                             =
// =============================================================================

// Mode
// -----------------------------------------------------------------------------

import mode from './parts/mode';

// Entry
// -----------------------------------------------------------------------------

import entry from './parts/entry';

// Resolve
// -----------------------------------------------------------------------------

import resolve from './parts/resolve';

// Rules
// -----------------------------------------------------------------------------

import eslintLoader from './parts/modules/rules/eslint-loader';
import vueLoader from './parts/modules/rules/vue-loader';
import cssLoader from './parts/modules/rules/css-loader';
import stylusLoader from './parts/modules/rules/stylus-loader';
import babelLoader from './parts/modules/rules/babel-loader';

import * as urlLoader from './parts/modules/rules/url-loader';

const rules = (
  WebpackMerge([
    eslintLoader({
      test: /\.(js|vue)$/,
    }),
    vueLoader({
      test: /\.vue$/,
    }),
    cssLoader({
      test: /\.css$/,
    }),
    stylusLoader({
      test: /\.styl(us)?$/,
    }),
    babelLoader({
      test: /\.js$/,
    }),

    urlLoader.img({
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      options: {
        limit: 10000,
        // name: utils.assetsPath('img/[name].[hash:5].[ext]'), // ?
        name () {
          if (env === 'development') {
            return utils.assetsPath('img/[name].[ext]');
          };

          if (env === 'production') {
            return utils.assetsPath('img/[name].[hash:5].[ext]');
          };
        },
      },
    }),
    urlLoader.media({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    }),
    urlLoader.fonts({
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    }),
  ])
);

// Modules
// -----------------------------------------------------------------------------

const modules = (
  WebpackMerge([
    rules,
  ])
);

// Plugins
// -----------------------------------------------------------------------------

import htmlWebpackPlugin from './parts/plugins/html-webpack-plugin';
import vueLoaderPlugin from './parts/plugins/vue-loader-plugin';
import copyWebpackPlugin from './parts/plugins/copy-webpack-plugin';

const plugins = (
  WebpackMerge([
    vueLoaderPlugin,
    htmlWebpackPlugin({
      filename: 'index.html', // ?
      template: 'index.html', // ?
    }),
    copyWebpackPlugin,
  ])
);

// =============================================================================
// = WEBPACK CONFIG                                                            =
// =============================================================================

export default (
  WebpackMerge([
    mode,
    entry({
      entry: './src/index.js', // ?
    }),
    resolve,
    modules,
    plugins,
  ])
);
