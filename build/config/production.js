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

const plugins = (
  WebpackMerge([
    // dynamicCdnWebpackPlugin,
    miniCssExtractPlugin({
      // filename: '[name].[contenthash:5].css', // ?
      filename: '[name]' + utils.contentHash + '.css', // ? // '[name].[contenthash:?].css'
    }),
  ])
);

// =============================================================================
// = WEBPACK CONFIG                                                            =
// =============================================================================

export default (
  WebpackMerge([
    output({
      filename: '[name].[contenthash:5].js', // ?
      chunkFilename: '[name].[contenthash:5].js', // ?
      path: utils.resolve('dist'), // ?
    }),
    // optimization({
    //   name: 'vendors',
    //   filename: '[name]~main.[contenthash:5].js', // ?
    // }),
    optimization,
    plugins,
  ])
);
