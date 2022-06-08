const { merge } = require('webpack-merge');

const commonConfig = require(__dirname + '/config/webpack.common.js');
const productionConfig = require(__dirname + '/config/webpack.prod.js');
const developmentConfig = require(__dirname + '/config/webpack.dev.js');

module.exports = (env, args) => {
  switch(args.mode) {
    case 'development':
      return merge(commonConfig, developmentConfig);
    case 'production':
      return merge(commonConfig, productionConfig);
    default:
      throw new Error('No matching configuration was found!');
  }
}