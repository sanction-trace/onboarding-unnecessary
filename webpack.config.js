const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (env, argv) => {
  let outputFileName =  '[name].bundle.js'

  const mode = argv.mode; // 'development' or 'production'
  const isDevelopment = mode === 'development';
 
  const config = {
    mode: mode,
	devtool: isDevelopment,
    entry: {
      app: './src/index.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: outputFileName,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: 'babel-loader',
          include: path.join(__dirname, 'src'),
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
          exclude: /\.module\.css$/,
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
            'postcss-loader',
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: { importLoaders: 2 },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
		{
		  test: /\.(png|svg|jpg|jpeg|gif)$/i,
		  type: 'asset/resource',
		},
		{
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
		},
      ],
    },
    plugins: [
      isDevelopment && new ReactRefreshPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin(),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: 'static',
      //   openAnalyzer: false,
      // }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './public/index.html',
      }),
    ].filter(Boolean),
    optimization: {
	  usedExports: true,
      runtimeChunk: 'single',
      splitChunks: {
		minSize: 10000,
        maxSize: 250000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
    resolve: {
      alias: {},
    },
    devServer: {
      hot: true,
      static: {
        directory: './dist',
      },
      client: { overlay: false },
	  open: true,
	  port: 3000,
    },
	 performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
  };

  return config;
};
