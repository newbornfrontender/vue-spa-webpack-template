'use strict';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// =============================================================================
// = ENVIRONMENTS                                                              =
// =============================================================================

// const env = process.env.NODE_ENV;

// const development = env === 'development';
// const production = env === 'production';

// =============================================================================
// = CSS LOADER                                                                =
// =============================================================================

// const loaders = ( mode ) => {
//   if (mode = 'development') {
//     [
//       'vue-style-loader',
//       'css-loader',
//     ];
//   } else if (mode = 'production') {
//     [
//       MiniCssExtractPlugin.loader,
//       'css-loader',
//     ];
//   };
// };

const loaders = () => {
  if (process.env.NODE_ENV === 'development') {
    return [
      'vue-style-loader',
      'css-loader',
    ];
  };

  if (process.env.NODE_ENV === 'production') {
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
        use: loaders(), // ?
      },
    ],
  },
});
