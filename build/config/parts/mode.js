'use strict';

const env = process.env.NODE_ENV;

export default ({
  // mode: env || 'development',
  mode: env === 'watch' ? 'development' : env || 'development',
});
