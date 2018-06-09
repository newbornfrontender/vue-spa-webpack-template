'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Server
// -----------------------------------------------------------------------------

const HOST = process.env.HOST;
const PORT = process.env.PORT;

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
      host: HOST || 'localhost',
      port: PORT || '8080',
    }),
    plugins,
  ])
);
