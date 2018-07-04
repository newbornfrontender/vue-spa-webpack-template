'use strict';

import utils from '../../../modules/utils';

import CopyWebpackPlugin from 'copy-webpack-plugin';

export default ({
  plugins: [
    new CopyWebpackPlugin([
      {
        from: utils.resolve('static/img/'), // './'
        to: utils.resolve('dist/static/img/'), // './'
        toType: 'dir',
      },
    ]),
  ],
});
