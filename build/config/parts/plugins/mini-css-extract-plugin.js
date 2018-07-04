'use strict';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({ filename } = {}) => ({
  plugins: [
    new MiniCssExtractPlugin({
      filename,
    }),
  ],
});
