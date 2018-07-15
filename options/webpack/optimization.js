'use strict';

// export default {
module.exports = {
  cdn: false,
  // method: (val) => val || 'preset', // normal / preset
  method: (value) => {
    value = value || 'preset';
    return value;
  },
  // method: 'preset',
};


// contentHash: (length) => {
//   length = length || hashOptions.length;

//   if (env === 'production') {
//     return `.[contenthash:${length}]`;
//   };
// },