'use strict';

// export default ({ name, filename } = {}) => ({
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

// export default ({
//   optimization: {
//     splitChunks: {
//       chunks: 'all',
//       automaticNameDelimiter: '~',
//       name: true,
//       cacheGroups: {
//         vendors: {
//           test: /[\\/]node_modules[\\/]/,
//           priority: -10,
//         },
//         default: {
//           priority: -20,
//           reuseExistingChunk: true,
//         },
//       },
//     },
//   },
// });

const key = {
  optimization: {
    preset: true
  }
}

// const opt;



  const presetOpt = ({
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '~',
        name: true,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10
          },
          default: {
            priority: -20,
            reuseExistingChunk: true
          }
        }
      }
    }
  })


const opt = ({ name, filename } = {}) => ({
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name,
            filename,
            chunks: 'all'
          }
        }
      }
    }
  })

export default key.optimization.preset ? presetOpt : opt
