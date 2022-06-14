const path = require('path');
const Dotenv = require('dotenv-webpack');
const ESLintPlugin = require('eslint-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PATHS = require('../paths');

module.exports = {
  entry: {
    app: PATHS.ENTRY,
  },
  output: {
    path: PATHS.DIST,
    clean: true,
  },
  resolve: {
    modules: [path.join(PATHS.SRC), 'node_modules'],
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  performance: {
    maxEntrypointSize: 1000000, // 1MB
    maxAssetSize: 512000, // 512KB
  },
  optimization: {
    usedExports: true,
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 10000, // 10KB
      maxSize: 250000, // 250KB
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          configFile: PATHS.CONFIGS.TYPESCRIPT,
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          configFile: PATHS.CONFIGS.BABEL,
        },
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
    new Dotenv(), // Load .env file
    new ESLintPlugin({
      extensions: ['tsx', 'ts', 'jsx', 'js'],
      exclude: ['node_modules'],
      overrideConfigFile: PATHS.CONFIGS.ESLINT,
    }), // Lint JS files
    new StylelintPlugin({
      configFile: PATHS.CONFIGS.STYLELINT,
    }),
    new HtmlWebpackPlugin({
      // Create HTML file that includes references to bundled CSS and JS.
      filename: 'index.html',
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
};
