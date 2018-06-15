'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// Environments
// -----------------------------------------------------------------------------

const env = process.env.NODE_ENV;

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

const loaders = () => {
  if (env === 'development') {
    return [
      'vue-style-loader',
      'css-loader',
    ];
  };

  if (env === 'production') {
    return [
      MiniCssExtractPlugin.loader,
      'css-loader',
    ];
  };
};

export default ({
  test,
} = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: loaders(),
      },
    ],
  },
});
