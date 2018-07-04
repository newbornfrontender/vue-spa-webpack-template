'use strict';

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default ({ filename, template } = {}) => ({
  plugins: [
    new HtmlWebpackPlugin({
      filename,
      template,
      inject: true, // ?
    }),
  ],
});
