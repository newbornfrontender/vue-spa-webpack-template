'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Environments
// -----------------------------------------------------------------------------

const env = process.env.NODE_ENV;

// =============================================================================
// = WEBPACK BUILDS                                                            =
// =============================================================================

import commonBuild from './build/configs/common';
import developmentBuild from './build/configs/development';
import productionBuild from './build/configs/production';

// =============================================================================
// = WEBPACK CONFIG                                                            =
// =============================================================================

export default () => {
  let environmentBuild = () => {
    if (env === 'development') {
      return developmentBuild;
    };

    if (env === 'production') {
      return productionBuild;
    };
  };

  return (
    WebpackMerge(
      commonBuild, environmentBuild(),
    )
  );
};
