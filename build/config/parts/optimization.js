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

// const key = {
//   optimization: {
//     preset: true
//   }
// }


//   const presetOpt = ({
//     optimization: {
//       splitChunks: {
//         chunks: 'all',
//         automaticNameDelimiter: '~',
//         name: true,
//         cacheGroups: {
//           vendors: {
//             test: /[\\/]node_modules[\\/]/,
//             priority: -10
//           },
//           default: {
//             priority: -20,
//             reuseExistingChunk: true
//           }
//         }
//       }
//     }
//   })


// const opt = ({ name, filename } = {}) => ({
//     optimization: {
//       splitChunks: {
//         cacheGroups: {
//           commons: {
//             test: /[\\/]node_modules[\\/]/,
//             name,
//             filename,
//             chunks: 'all'
//           }
//         }
//       }
//     }
//   })

// export default key.optimization.preset ? presetOpt : opt


import { getConfigOptions } from '../../modules/keyreader';

const option = getConfigOptions('optimization');
const optimizeOpt = option.method('normal');

const normalOptimizConf = ({ name, filename } = {}) => ({
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name,
          filename,
          chunks: 'all',
        },
      },
    },
  },
});

const presetOptimizConf = ({
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

let optimizeConf;

if (optimizeOpt === 'normal') {
  optimizeConf = normalOptimizConf;
};

if (optimizeOpt === 'preset') {
  optimizeConf = presetOptimizConf;
};

console.log(optimizeOpt);

// const optimizeConf = optimizeOpt === 'preset' ? presetOptimizConf : normalOptimizConf;

export default optimizeConf;
