'use strict';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import DynamicCdnWebpackPlugin from 'dynamic-cdn-webpack-plugin';

// =============================================================================
// = DYNAMIC CDN WEBPACK PLUGIN                                                =
// =============================================================================

export default ({
  plugins: [
    new DynamicCdnWebpackPlugin(),
  ],
});
