'use strict';

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: 'vue-loader',
      },
    ],
  },
});
