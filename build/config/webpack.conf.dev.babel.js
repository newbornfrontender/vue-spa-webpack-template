'use strict';

// +-------+-------------------------------------------------------------------+
// | Title | Imports                                                           |
// +-------+-------------------------------------------------------------------+

// Webpack plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Webpack parts
// -----------------------------------------------------------------------------

// Base config

import commonConfig from './webpack.conf.common';

// Development server

import devServer from './parts/dev-server';

// Plugins

import hotModuleReplacementPlugin from './parts/plugins/hot-module-replacement-plugin';

// +-------+-------------------------------------------------------------------+
// | Title | Server configs                                                    |
// +-------+-------------------------------------------------------------------+

const HOST = process.env.HOST;
const PORT = process.env.PORT;

// +-------+-------------------------------------------------------------------+
// | Title | Development config                                                |
// +-------+-------------------------------------------------------------------+

const devConfig = new WebpackMerge([

  // +-----------+-------------------------------------------------------------+
  // | Title     | Development server                                          |
  // +-----------+-------------------------------------------------------------+
  // | Descr     | The webpack-dev-server provides you with a simple web       |
  // |           | server and the ability to use live reloading                |
  // +-----------+-------------------------------------------------------------+
  // | Structure | devServer                                                   |
  // +-----------+-------------------------------------------------------------+

  devServer({
    host: HOST || 'localhost',
    port: PORT || '8080',
  }),

  // +-------+-----------------------------------------------------------------+
  // | Title | Plugins                                                         |
  // +-------+-----------------------------------------------------------------+

  hotModuleReplacementPlugin,
]);

// +-------+-------------------------------------------------------------------+
// | Title | Webpack config                                                    |
// +-------+-------------------------------------------------------------------+

const config = new WebpackMerge([ commonConfig, devConfig ]);

// +-------+-------------------------------------------------------------------+
// | Title | Exports                                                           |
// +-------+-------------------------------------------------------------------+

export default config;
