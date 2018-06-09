'use strict';

// =============================================================================
// = DEPENDENCIES                                                              =
// =============================================================================

// Modules
// -----------------------------------------------------------------------------

import path from 'path';

// =============================================================================
// = WEBPACK MODULE CONFIG                                                     =
// =============================================================================

export default {
  resolve: function (dir) {
    return path.join(__dirname, '../..', dir); // ?
  },

  assetsPath: function (_path) {
    const assetsSubDirectory = 'static'; // ?

    return path.posix.join(assetsSubDirectory, _path);
  },
};
