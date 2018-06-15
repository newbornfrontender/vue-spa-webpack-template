'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import utils from '../../modules/utils';

// =============================================================================
// = WEBPACK PART CONFIG                                                       =
// =============================================================================

export default ({
  resolve: {
    extensions: [
      '.js', '.vue', '.json',
    ],
    alias: {
      'assets': utils.resolve('assets'), // ?
      'pages': utils.resolve('src/pages'), // ?
      'static': utils.resolve('static'), // ?
      'components': utils.resolve('src/components'), // ?
    },
  },
});
