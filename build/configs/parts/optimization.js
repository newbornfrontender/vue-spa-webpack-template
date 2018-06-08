'use strict';

// =============================================================================
// = OPTIMIZATION                                                              =
// =============================================================================

// export default ({
//   name,
// } = {}) => ({
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           test: /[\\/]node_modules[\\/]/, // test: /[\\/\\/]node_modules[\\/]/,
//           name, // name: 'vendor',
//           chunks: 'all',
//         },
//       },
//     },
//   },
// });

export default ({
  optimization: {
    splitChunks: {
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
});
