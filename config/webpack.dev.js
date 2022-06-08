const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    hot: true,
    static: {
      directory: '/dist',
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
    assetFilter(assetFilename) {
      const excludedFiles = ['hot.bundle.js'];
      if (excludedFiles.includes(assetFilename)) {
        return false;
      }
      return !/\.map$/.test(assetFilename); // skip source maps
    },
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 8888,
      openAnalyzer: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].css',
    }),
  ],
};
