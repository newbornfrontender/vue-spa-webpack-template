'use strict';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import WebpackMerge from 'webpack-merge';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import dynamicCdnWebpackPlugin from './parts/plugins/dynamic-cdn-webpack-plugin';
import miniCssExtractPlugin from './parts/plugins/mini-css-extract-plugin';

const plugins = WebpackMerge([
  dynamicCdnWebpackPlugin,
  miniCssExtractPlugin({
    filename: 'main.css', // ?
  }),
]);

// =============================================================================
// = PRODUCTION                                                                =
// =============================================================================

export default (
  WebpackMerge([
    plugins,
  ])
);
