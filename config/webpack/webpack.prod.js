const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  devtool: false,
  output: {
    filename: 'static/js/[name].[contenthash].js',
  },
  performance: {
    hints: 'error',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
    }),
  ],
};
