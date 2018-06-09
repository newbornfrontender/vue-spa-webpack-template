'use strict';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

export default ({
  host, port,
} = {}) => ({
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: 'dist', // ?
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
