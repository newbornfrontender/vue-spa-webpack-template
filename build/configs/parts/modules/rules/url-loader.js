'use strict';

// =============================================================================
// = MODULES                                                                   =
// =============================================================================

import utils from '../../../../modules/utils';

// =============================================================================
// = URL LOADER                                                                =
// =============================================================================

export const img = ({
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
            name: utils.assetsPath('img/[name].[hash:7].[ext]'), // ?
          },
        },
      },
    ],
  },
});

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
