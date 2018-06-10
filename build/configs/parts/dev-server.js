'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import utils from '../../modules/utils';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

export default ({
  host, port,
} = {}) => ({
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    // https: true,
    contentBase: utils.resolve('dist'), // ?
    compress: true,
    // stats: "errors-only",
    host,
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/', // ?
    quiet: true,
    watchOptions: {
      poll: true,
    },
  },
});
