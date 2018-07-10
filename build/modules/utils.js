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

const hashOptions = {
  hashType: 'md5',
  digestType: 'hex',
  length: '5',
};

// const hashType = 'md5';
// const digestType = 'hex';
const hashesLength = '5';

// const hash = (name, hashType, digestType, length) => {
//   hashType = hashType || hashOptions.hashType;
//   digestType = digestType || hashOptions.digestType;
//   length = length || hashOptions.length;

//   if (env === 'production') {
//     // return '.[' + hashType + ':' + name + ':' + digestType + ':' + length + ']';
//     return `.[${hashType}:${name}:${digestType}:${length}]`;
//   };
// };

const hash = (name, hashType, digestType, length) => {
  hashType = hashType || hashOptions.hashType;
  digestType = digestType || hashOptions.digestType;
  length = length || hashOptions.length;

  if (env === 'production') {
    // return '.[' + hashType + ':' + name + ':' + digestType + ':' + length + ']';
    return `.[${hashType}:${name}:${digestType}:${length}]`;
  };
};

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

  // contentHash: env === 'production' ? '.[contenthash:' + hashesLength + ']' : '',
  // contentHash: (length) => {
  //   length = length || hashesLength;

  //   if (env === 'production') {
  //     return '.[contenthash:' + length + ']';
  //   };
  // },
  contentHash: (length) => {
    length = length || hashOptions.length;

    if (env === 'production') {
      return `.[contenthash:${length}]`;
    };
  },

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
