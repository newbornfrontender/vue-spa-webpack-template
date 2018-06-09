'use strict';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

export default ({
  name,
} = {}) => ({
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name,
          chunks: 'all',
        },
      },
    },
  },
});
