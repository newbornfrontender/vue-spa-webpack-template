'use strict';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
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
        use: {
          loader: 'babel-loader',
          options: {
            compact: false, // ?
          },
        },
      },
    ],
  },
});
