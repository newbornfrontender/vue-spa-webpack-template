'use strict';

// =============================================================================
// = PROCESSOR CONFIG                                                          =
// =============================================================================

module.exports = ({
  env, file, options,
}) => ({
  parser:
    file.extname === '.less' ? 'postcss-less' :
    file.extname === '.scss' ? 'postcss-scss' :
    file.extname === '.sass' ? 'postcss-sass' :
    file.extname === '.sss' ? 'sugarss' :
    false,

  plugins: {
    'postcss-nested': true,

    'postcss-import': {
      root: file.dirname,
    },

    'postcss-strip-inline-comments': env === 'development' ? true : false,

    'postcss-prettify': env === 'development' ? true : false,

    'autoprefixer': env === 'development' ? false : {
      cascade: false,
      grid: true,
    },
  },
});
