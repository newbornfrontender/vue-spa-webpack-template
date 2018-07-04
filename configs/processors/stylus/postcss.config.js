'use strict';

module.exports = ({ env, file, options }) => ({
  plugins: {
    'autoprefixer': env === 'production' ? options.autoprefixer : false,
  },
});