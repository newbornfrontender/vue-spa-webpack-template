'use strict';

export default ({ test } = {}) => ({
  module: {
    rules: [
      {
        test,
        // include,
        // exclude,
        use: [
          // {
          //   loader: 'underscore-template-loader',
          //   options: {
          //     query: {
          //       interpolate: '\\{\\[(.+?)\\]\\}',
          //       evaluate: '\\{%([\\s\\S]+?)%\\}',
          //       escape: '\\{\\{(.+?)\\}\\}',
          //     },
          //   },
          // },
          {
            loader: 'ejs-loader',
            options: {
              query: {
                variable: 'data',
                interpolate : '\\{\\{(.+?)\\}\\}',
                evaluate : '\\[\\[(.+?)\\]\\]',
              },
            },
          },
        ],
      },
    ],
  },
});
