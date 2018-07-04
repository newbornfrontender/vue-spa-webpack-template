'use strict';

import utils from '../../modules/utils';

const JOIN = utils.join;

export default ({
  resolve: {
    extensions: [ '.js', '.vue', '.json' ],
    alias: {
      'assets': JOIN('assets'), // './'
      'pages': JOIN('src/pages'), // './'
      'static': JOIN('static'), // './'
      'components': JOIN('src/components'), // './'
    },
  },
});
