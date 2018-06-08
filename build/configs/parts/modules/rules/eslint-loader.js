'use strict';

// =============================================================================
// = ESLINT LOADER                                                             =
// =============================================================================

export default ({
  test,
} = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: 'eslint-loader',
        enforce: 'pre',
      },
    ],
  },
});
