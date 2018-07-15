'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Imports                                                           |
// +-------+-------------------------------------------------------------------+

// Webpack plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Webpack parts
// -----------------------------------------------------------------------------

// Mode

import mode from './parts/mode';

// Entry

import entry from './parts/entry';

// Resolve

import resolve from './parts/resolve';

// Loaders

import eslintLoader from './parts/module/rules/eslint-loader';
import vueLoader from './parts/module/rules/vue-loader';
import htmlLoader from './parts/module/rules/html-loader';
import ejsLoader from './parts/module/rules/ejs-loader';
import cssLoader from './parts/module/rules/css-loader';
import stylusLoader from './parts/module/rules/stylus-loader';
import babelLoader from './parts/module/rules/babel-loader';
import * as fileLoader from './parts/module/rules/file-loader';

// Plugins

import htmlWebpackPlugin from './parts/plugins/html-webpack-plugin';
import vueLoaderPlugin from './parts/plugins/vue-loader-plugin';
import copyWebpackPlugin from './parts/plugins/copy-webpack-plugin';

// Webpack utils
// -----------------------------------------------------------------------------

import utils from '../modules/utils';

// +-------+-------------------------------------------------------------------+
// | Title | Utils configs                                                     |
// +-------+-------------------------------------------------------------------+

const ASSETS = utils.assetsPath;
const HASH = utils.hash;

// +-------+-------------------------------------------------------------------+
// | Title |                                                                   |
// +-------+-------------------------------------------------------------------+

const ext = {
  ejs: true,
};

// +-------+-------------------------------------------------------------------+
// | Title | Webpack config                                                    |
// +-------+-------------------------------------------------------------------+

const config = new WebpackMerge([

  // +-----------+-------------------------------------------------------------+
  // | Title     | Mode                                                        |
  // +-----------+-------------------------------------------------------------+
  // | Descr     | Providing the mode configuration option tells webpack to    |
  // |           | use its built-in optimizations accordingly                  |
  // +-----------+-------------------------------------------------------------+
  // | Structure | mode                                                        |
  // +-----------+-------------------------------------------------------------+

  mode,

  // +-----------+-------------------------------------------------------------+
  // | Title     | Entry point(s)                                              |
  // +-----------+-------------------------------------------------------------+
  // | Descr     | An entry point indicates which module webpack should use to |
  // |           | begin building out its internal dependency graph, webpack   |
  // |           | will figure out which other modules and libraries that      |
  // |           | entry point depends on (directly and indirectly)            |
  // +-----------+-------------------------------------------------------------+
  // | Structure | entry                                                       |
  // +-----------+-------------------------------------------------------------+

  entry({
    entry: './src/index.js', // './'
  }),

  // +-----------+-------------------------------------------------------------+
  // | Title     | Resolve                                                     |
  // +-----------+-------------------------------------------------------------+
  // | Descr     | These options change how modules are resolved. Webpack      |
  // |           | provides reasonable defaults, but it is possible to change  |
  // |           | the resolving in detail                                     |
  // +-----------+-------------------------------------------------------------+
  // | Structure | resolve                                                     |
  // +-----------+-------------------------------------------------------------+

  resolve,

  // +-----------+-------------------------------------------------------------+
  // | Title     | Loaders                                                     |
  // +-----------+-------------------------------------------------------------+
  // | Descr     | Out of the box, webpack only understands JavaScript files.  |
  // |           | Loaders allow webpack to process other types of files and   |
  // |           | converting them into valid modules that can be consumed by  |
  // |           | your application and added to the dependency graph          |
  // +-----------+-------------------------------------------------------------+
  // | Structure | module > rules                                              |
  // +-----------+-------------------------------------------------------------+

  eslintLoader({
    test: /\.(js|vue)$/,
  }),
  vueLoader({
    test: /\.vue$/,
  }),
  htmlLoader({
    test: /\.html$/,
  }),

  // function() {
  //   if (ext.ejs) {
  //     return ejsLoader({
  //       test: /\.ejs$/,
  //     })
  //   };
  // },
  // ejsLoader({
  //   test: /\.ejs$/,
  // }),

  cssLoader({
    test: /\.css$/,
  }),
  stylusLoader(),
  // stylusLoader({
  //   test: /\.styl(us)?$/,
  // }),
  babelLoader({
    test: /\.js$/,
  }),
  fileLoader.img({
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
    name: ASSETS('img/[name]' + HASH + '.[ext]?[hash]'), // './'
  }),
  fileLoader.media({
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    name: ASSETS('media/[name]' + HASH + '.[ext]?[hash]'), // './'
  }),
  fileLoader.fonts({
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
    name: ASSETS('fonts/[name]' + HASH + '.[ext]?[hash]'), // './'
  }),

  // +-----------+-------------------------------------------------------------+
  // | Title     | Plugins                                                     |
  // +-----------+-------------------------------------------------------------+
  // | Descr     | ...                                                         |
  // +-----------+-------------------------------------------------------------+
  // | Structure | plugins                                                     |
  // +-----------+-------------------------------------------------------------+

  vueLoaderPlugin,
  htmlWebpackPlugin({
    template: './templates/index.html', // './'
    filename: './index.html', // './'
    title: 'VueJs + Webpack 4 template',
    meta: {
      viewport: 'width=device-width, initial-scale=1.0',
    },
  }),
  // copyWebpackPlugin,
]);

// +-------+-------------------------------------------------------------------+
// | Title | Exports                                                           |
// +-------+-------------------------------------------------------------------+

export default config;
