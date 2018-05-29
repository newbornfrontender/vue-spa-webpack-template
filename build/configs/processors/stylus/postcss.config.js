'use strict';

const development = env === 'development';
const production = env === 'production';

module.exports = ({
  env, file, options,
}) => ({
  parser: false,

  plugins: {
    'postcss-prettify': development ? true : false,

    'autoprefixer': development ? false : {
      cascade: false,
      grid: true,
    },
  },
});
