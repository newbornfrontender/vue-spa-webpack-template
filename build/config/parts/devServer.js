'use strict';

import utils from '../../modules/utils';

const JOIN = utils.join;

export default ({ host, port } = {}) => ({
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    // https: true,
    contentBase: JOIN('dist'), // './'
    compress: true,
    // stats: "errors-only",
    host,
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    publicPath: '/', // './'
    quiet: true,
    watchOptions: {
      poll: true,
    },
  },
});
