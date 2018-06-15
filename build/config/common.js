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
import * as urlLoader from './parts/loaders/url-loader';

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
        name: env === 'production'
          ? utils.assetsPath('img/[name].[hash:5].[ext]')
          : utils.assetsPath('img/[name].[ext]'),
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
  copyWebpackPlugin,
]);

// -----

// const copy = false;

// function copyMode(plugin) {
//   if (copy === true) return plugin;
// };

// const innerPlugins = [
//   vueLoaderPlugin,
//   htmlWebpackPlugin({
//     filename: 'index.html', // ?
//     template: 'index.html', // ?
//   }),
// ];

// innerPlugins.push(
//   // copy === true ? copyWebpackPlugin : copyWebpackPlugin,
//   copyMode(copyWebpackPlugin)
// );

// const plugins = new WebpackMerge(
//   innerPlugins,
// );

// -----

// const plugins = new WebpackMerge([
//   vueLoaderPlugin,
//   htmlWebpackPlugin({
//     filename: 'index.html', // ?
//     template: 'index.html', // ?
//   }),
// ].push(
//   copy === true ? copyWebpackPlugin : copyWebpackPlugin,
// ));

// -----

// const innerPlugins = [
//   vueLoaderPlugin,
//   htmlWebpackPlugin({
//     filename: 'index.html', // ?
//     template: 'index.html', // ?
//   }),
// ];

// if (env === 'production') innerPlugins.push(
//   copyWebpackPlugin,
// );

// const plugins = new WebpackMerge(
//   innerPlugins,
// );

// -----

// const plugins = ([
//   vueLoaderPlugin, htmlWebpackPlugin, copyWebpackPlugin,
// ] = []) => new WebpackMerge([
//   vueLoaderPlugin,
//   htmlWebpackPlugin,
//   copyWebpackPlugin,
// ]);

// const plugins = () => new WebpackMerge([]);
// const plugins = () => new WebpackMerge([]);

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
  // plugins.push([
  //   vueLoaderPlugin,
  //   htmlWebpackPlugin({
  //     filename: 'index.html', // ?
  //     template: 'index.html', // ?
  //   }),
  //   copyWebpackPlugin,
  // ]),
]);
