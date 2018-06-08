'use strict';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

// =============================================================================
// = ENVIRONMENTS                                                              =
// =============================================================================

const env = process.env.NODE_ENV;

// =============================================================================
// = STYLUS LOADER                                                             =
// =============================================================================

// const loaders = ( mode ) => {
//   if (mode = 'development') {
//     return [
//       'vue-style-loader',
//       'css-loader',
//       'stylus-loader',
//     ];
//   } else if (mode = 'production') {
//     return [
//       MiniCssExtractPlugin.loader,
//       {
//         loader: 'css-loader',
//         options: {
//           importLoaders: 1,
//         },
//       },
//       'postcss-loader',
//       'stylus-loader',
//     ];
//   };
// };

const loaders = () => {
  if (env === 'development') {
    return [
      'vue-style-loader',
      'css-loader',
      'stylus-loader',
    ];
  };

  if (env === 'production') {
    return [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      'postcss-loader',
      'stylus-loader',
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
