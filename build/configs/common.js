'use strict';

// =============================================================================
// = MODULES                                                                   =
// =============================================================================

import utils from '../modules/utils';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import WebpackMerge from 'webpack-merge';

// =============================================================================
// = ENTRY                                                                     =
// =============================================================================

import entry from './parts/entry';

// =============================================================================
// = OUTPUT                                                                    =
// =============================================================================

import output from './parts/output';

// =============================================================================
// = MODE                                                                      =
// =============================================================================

import mode from './parts/mode';

// =============================================================================
// = RESOLVE                                                                   =
// =============================================================================

import resolve from './parts/resolve';

// =============================================================================
// = RULES                                                                     =
// =============================================================================

import eslintLoader from './parts/modules/rules/eslint-loader';
import vueLoader from './parts/modules/rules/vue-loader';
import cssLoader from './parts/modules/rules/css-loader';
import stylusLoader from './parts/modules/rules/stylus-loader';
import babelLoader from './parts/modules/rules/babel-loader';

import * as urlLoader from './parts/modules/rules/url-loader';

const rules = WebpackMerge([
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
  }),
  urlLoader.media({
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  }),
  urlLoader.fonts({
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
  }),
]);

// =============================================================================
// = MODULES                                                                   =
// =============================================================================

const modules = WebpackMerge([
  rules,
]);

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import htmlWebpackPlugin from './parts/plugins/html-webpack-plugin';
import vueLoaderPlugin from './parts/plugins/vue-loader-plugin';
import copyWebpackPlugin from './parts/plugins/copy-webpack-plugin';

const plugins = WebpackMerge([
  vueLoaderPlugin,
  htmlWebpackPlugin({
    filename: 'index.html', // ?
    template: 'index.html', // ?
  }),
  copyWebpackPlugin,
]);

// =============================================================================
// = COMMON                                                                    =
// =============================================================================

export default (
  WebpackMerge([
    entry({
      entry: './src/index.js', // ?
    }),
    output({ // ?
      filename: 'build.js',
      path: utils.resolve('dist'),
    }),
    mode,
    resolve,
    modules,
    plugins,
  ])
);
