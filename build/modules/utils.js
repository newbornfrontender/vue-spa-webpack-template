'use strict';

// +-------------+-------------------------------------------------------------+
// | Title       | Utils                                                       |
// +-------------+-------------------------------------------------------------+
// | Description | Utils for webpack and other build config files              |
// +-------------+-------------------------------------------------------------+

// Dependencies modules
// -----------------------------------------------------------------------------

import path from 'path';

// Environments
// -----------------------------------------------------------------------------

const env = process.env.NODE_ENV;

const envMode = (mode, envValue) => {
  if (env === mode) return envValue;
};

// Hashes
// -----------------------------------------------------------------------------

const hashesLength = '5';

// Export utils configs
// -----------------------------------------------------------------------------

export default {

  // Modes utils
  //----------------------------------------------------------------------------

  devMode: (devValue, otherValue) => env === 'development'
    ? devValue
    : otherValue,

  prodMode: (prodValue, otherValue) => env === 'production'
    ? prodValue
    : otherValue,

  only: {
    devMode: (devValue) => {
      return envMode('development', devValue);
    },

    prodMode: (prodValue) => {
      return envMode('production', prodValue);
    },
  },

  // Hashes utils
  //----------------------------------------------------------------------------

  hash: env === 'production' ? '.[hash:' + hashesLength + ']' : '', // [md5:hash:hex:5]

  contentHash: env === 'production' ? '.[contenthash:' + hashesLength + ']' : '',

  // Paths utils
  //----------------------------------------------------------------------------

  join: (dir) => {
    return path.join(__dirname, '../..', dir); // ?
  },

  resolve: (dir) => {
    return path.resolve(__dirname, '../..', dir); // ?
  },

  assetsPath: (_path) => {
    const assetsSubDirectory = 'static'; // ?

    return path.posix.join(assetsSubDirectory, _path);
  },
};
