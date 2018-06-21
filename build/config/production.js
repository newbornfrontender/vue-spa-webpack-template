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

// Hashes
// -----------------------------------------------------------------------------

const CONTENTHASH = utils.contentHash;

// =============================================================================
// = WEBPACK PARTS                                                             =
// =============================================================================

// Output
// -----------------------------------------------------------------------------

import output from './parts/output';

// Optimization
// -----------------------------------------------------------------------------

import optimization from './parts/optimization';

// Plugins
// -----------------------------------------------------------------------------

// import dynamicCdnWebpackPlugin from './parts/plugins/dynamic-cdn-webpack-plugin';
import miniCssExtractPlugin from './parts/plugins/mini-css-extract-plugin';

const plugins = new WebpackMerge([
  // dynamicCdnWebpackPlugin,
  miniCssExtractPlugin({
    filename: '[name]' + CONTENTHASH + '.css', // ? // '[name].[contenthash:?].css'
  }),
]);

// =============================================================================
// = WEBPACK CONFIG                                                            =
// =============================================================================

// const RESOLVE = (pathName) => {
//   utils.resolve(pathName);
// };

export default new WebpackMerge([
  output({
    filename: '[name]' + CONTENTHASH + '.js', // ?
    chunkFilename: '[name]' + CONTENTHASH + '.js', // ?
    path: utils.resolve('dist'), // ?
    // path: RESOLVE('dist'), // ?
  }),
  // optimization({
  //   name: 'vendors',
  //   filename: '[name]~main.[contenthash:5].js', // ?
  // }),
  optimization,
  plugins,
]);
