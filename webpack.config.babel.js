'use strict';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import WebpackMerge from 'webpack-merge';

// =============================================================================
// = BUILDS                                                                    =
// =============================================================================

import commonBuild from './build/configs/common';
import developmentBuild from './build/configs/development';
import productionBuild from './build/configs/production';

// =============================================================================
// = ENVIRONMENTS                                                              =
// =============================================================================

const env = process.env.NODE_ENV;

// =============================================================================
// = CONFIG                                                                    =
// =============================================================================

// export default () => {
//   if (process.env.NODE_ENV === 'development') {
//     return WebpackMerge(
//       common, development,
//     );
//   } else if (process.env.NODE_ENV === 'production') {
//     return WebpackMerge(
//       common, production,
//     );
//   };
// };

export default () => {
  let environmentBuild = () => {
    if (env === 'development') {
      return developmentBuild;
    };

    if (env === 'production') {
      return productionBuild;
    };
  };

  return WebpackMerge(
    commonBuild, environmentBuild(),
  );
};
