'use strict';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import WebpackMerge from 'webpack-merge';

// =============================================================================
// = DEVSERVER                                                                 =
// =============================================================================

import devServer from './parts/dev-server';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import hotModuleReplacementPlugin from './parts/plugins/hot-module-replacement-plugin';

const plugins = WebpackMerge([
  hotModuleReplacementPlugin,
]);

// =============================================================================
// = DEVELOPMENT                                                               =
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
