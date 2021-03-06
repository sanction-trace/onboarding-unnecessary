const { dirname } = require('path');
const path = require('path');

const getAbsolutePath = (value) => path.join(__dirname, value);

module.exports = {
  ENTRY: './src/index.js',
  PUBLIC: '/public',
  DIST: getAbsolutePath('../dist'),
  SRC: getAbsolutePath('../src'),
  CONFIGS: {
    BABEL: getAbsolutePath('babel.config.js'),
    TYPESCRIPT: getAbsolutePath('tsconfig.json'),
    STYLELINT: getAbsolutePath('.stylelintrc.json'),
    ESLINT: getAbsolutePath('.eslintrc.js'),
  },
};
