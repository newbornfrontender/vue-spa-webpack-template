'use strict';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

// export default ({
//   name, filename,
// } = {}) => ({
//   optimization: {
//     splitChunks: {
//       cacheGroups: {
//         commons: {
//           test: /[\\/]node_modules[\\/]/,
//           name,
//           filename,
//           chunks: 'all',
//         },
//       },
//     },
//   },
// });

export default ({
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
