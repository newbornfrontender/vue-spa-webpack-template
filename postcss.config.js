'use strict';

const processor = {
  postcss: false,
  stylus: true,
};

const parts = require('./configs/processors/parts');

const part = {
  autoprefixer: true,
};

module.exports = ({ env, file, options }) => ({
  parser:
    processor.postcss ?
      file.extname === '.less' ? 'postcss-less' :
      file.extname === '.scss' ? 'postcss-scss' :
      file.extname === '.sass' ? 'postcss-sass' :
      file.extname === '.sss' ? 'sugarss' :
      // file.extname === '.js' ? 'postcss-js' : // ?
      false :
    false,
  plugins: {
    'postcss-nested': processor.postcss ? {} : false,
    'postcss-import': processor.postcss ? { root: file.dirname } : false,
    'postcss-strip-inline-comments': processor.postcss ? {} : false,
    'postcss-prettify': processor.postcss ?
      env === 'watch' || 'development' ? {} : false :
      false,
    'autoprefixer': env === 'production' ?
      part.autoprefixer ?
        parts.autoprefixer({
          browsers: [
            'last 25 versions',
          ],
          grid: true,
        }) :
        options.autoprefixer :
        false,
  },
});
