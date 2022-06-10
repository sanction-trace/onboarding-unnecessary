// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PATHS = require('../paths');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    hot: true,
    static: {
      directory: PATHS.PUBLIC,
    },
    client: { overlay: false },
    open: true,
    port: 3000,
  },
  entry: {
    hot: 'react-hot-loader/patch',
  },
  output: {
    filename: 'static/js/[name].bundle.js',
  },
  performance: {
    hints: false,
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'server',
    //   analyzerPort: 8888,
    //   openAnalyzer: false,
    // }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
  ],
};
