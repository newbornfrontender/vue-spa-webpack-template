'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// =============================================================================
// = WEBPACK PARTS                                                             =
// =============================================================================

// DevServer
// -----------------------------------------------------------------------------

import devServer from './parts/dev-server';

// Plugins
// -----------------------------------------------------------------------------

import hotModuleReplacementPlugin from './parts/plugins/hot-module-replacement-plugin';

const plugins = (
  WebpackMerge([
    hotModuleReplacementPlugin,
  ])
);

// =============================================================================
// = WEBPACK CONFIG                                                            =
// =============================================================================

export default (
  WebpackMerge([
    devServer({
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || '8080',
    }),
    plugins,
  ])
);
