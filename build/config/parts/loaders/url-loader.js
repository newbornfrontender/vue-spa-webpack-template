'use strict';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

// Images
// -----------------------------------------------------------------------------

export const img = ({ test, name } = {}) => ({
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
            name,
          },
        },
      },
    ],
  },
});

// Media
// -----------------------------------------------------------------------------

export const media = ({ test, name } = {}) => ({
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
            name,
          },
        },
      },
    ],
  },
});

// Fonts
// -----------------------------------------------------------------------------

export const fonts = ({ test, name } = {}) => ({
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
            name,
          },
        },
      },
    ],
  },
});
