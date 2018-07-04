'use strict';

const img = ({ test, name, limit } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'url-loader',
          options: {
            limit, // 10000
            name,
          },
        },
      },
    ],
  },
});

const media = ({ test, name, limit } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'url-loader',
          options: {
            limit, // 10000
            name,
          },
        },
      },
    ],
  },
});

const fonts = ({ test, name, limit } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'url-loader',
          options: {
            limit, // 10000
            name,
          },
        },
      },
    ],
  },
});

export { img, media, fonts };
