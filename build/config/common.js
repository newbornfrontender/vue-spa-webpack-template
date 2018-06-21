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

// Environments
// -----------------------------------------------------------------------------

const env = process.env.NODE_ENV;

// Hashes
// -----------------------------------------------------------------------------

const HASH = utils.hash;

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

import eslintLoader from './parts/loaders/eslint-loader';
import vueLoader from './parts/loaders/vue-loader';
import cssLoader from './parts/loaders/css-loader';
import stylusLoader from './parts/loaders/stylus-loader';
import babelLoader from './parts/loaders/babel-loader';
import * as fileLoader from './parts/loaders/file-loader';

const rules = new WebpackMerge([
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
  fileLoader.img({
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    name: utils.assetsPath('img/[name]' + HASH + '.[ext]?[hash]'), // ?
  }),
  fileLoader.media({
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    name: utils.assetsPath('media/[name]' + HASH + '.[ext]'), // ?
  }),
  fileLoader.fonts({
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    name: utils.assetsPath('fonts/[name]' + HASH + '.[ext]'), // ?
  }),
]);

// Modules
// -----------------------------------------------------------------------------

const modules = new WebpackMerge([
  rules,
]);

// Plugins
// -----------------------------------------------------------------------------

import htmlWebpackPlugin from './parts/plugins/html-webpack-plugin';
import vueLoaderPlugin from './parts/plugins/vue-loader-plugin';
import copyWebpackPlugin from './parts/plugins/copy-webpack-plugin';

const plugins = new WebpackMerge([
  vueLoaderPlugin,
  htmlWebpackPlugin({
    filename: 'index.html', // ?
    template: 'index.html', // ?
  }),
  // copyWebpackPlugin,
]);

// =============================================================================
// = WEBPACK CONFIG                                                            =
// =============================================================================

export default new WebpackMerge([
  mode,
  entry({
    entry: './src/index.js', // ?
  }),
  resolve,
  modules,
  plugins,
]);
