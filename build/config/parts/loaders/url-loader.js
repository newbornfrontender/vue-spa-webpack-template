'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import utils from '../../../modules/utils';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

// Images
// -----------------------------------------------------------------------------

export const img = ({
  test, options,
} = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        // use: {
        //   loader: 'url-loader',
        //   options,
        // },
        use: [
          'file-loader',
          {
            loader: 'url-loader',
            options,
          },
        ],
      },
    ],
  },
});

// Media
// -----------------------------------------------------------------------------

export const media = ({
  test,
} = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]'), // ?
          },
        },
      },
    ],
  },
});

// Fonts
// -----------------------------------------------------------------------------

export const fonts = ({
  test,
} = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]'), // ?
          },
        },
      },
    ],
  },
});
