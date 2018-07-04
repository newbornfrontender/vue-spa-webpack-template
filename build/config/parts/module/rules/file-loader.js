'use strict';

const img = ({ test, name } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'file-loader',
          options: {
            name,
          },
        },
      },
    ],
  },
});

const media = ({ test, name } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'file-loader',
          options: {
            name,
          },
        },
      },
    ],
  },
});

const fonts = ({ test, name } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: {
          loader: 'file-loader',
          options: {
            name,
          },
        },
      },
    ],
  },
});

export { img, media, fonts };
