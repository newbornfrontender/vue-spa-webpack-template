'use strict';

// +-------------+-------------------------------------------------------------+
// | Title       | Main webpack config file                                    |
// +-------------+-------------------------------------------------------------+
// | Description |                                                             |
// +-------------+-------------------------------------------------------------+
// | Notes       | 1.                                                          |
// +-------------+-------------------------------------------------------------+
// | Bugs        | 1.                                                          |
// +-------------+-------------------------------------------------------------+

// Dependencies modules
// -----------------------------------------------------------------------------

import utils from './build/modules/utils';

// Dependencies plugins
// -----------------------------------------------------------------------------

import WebpackMerge from 'webpack-merge';

// Webpack builds
// -----------------------------------------------------------------------------

import commonBuild from './build/config/common';
import devBuild from './build/config/development';
import prodBuild from './build/config/production';

const envBuild = utils.devMode(devBuild, prodBuild);

// Export webpack config
// -----------------------------------------------------------------------------

export default () => new WebpackMerge(commonBuild, envBuild); // function?
