'use strict';

// =============================================================================
// = PLUGINS                                                                   =
// =============================================================================

import HtmlWebpackPlugin from 'html-webpack-plugin';

// =============================================================================
// = HTML WEBPACK PLUGIN                                                       =
// =============================================================================

export default ({
  filename, template,
} = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      filename,
      template,
      inject: true,
    }),
  ],
});
