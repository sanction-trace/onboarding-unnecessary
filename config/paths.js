const path = require('path');

const getAbsolutePath = (value) => {
  return path.join(__dirname, value);
};

module.exports = {
  ENTRY: './src/index.js',
  PUBLIC: '/public',
  DIST: getAbsolutePath('../dist'),
  SRC: getAbsolutePath('../src'),
  CONFIGS: {
    BABEL: getAbsolutePath('babel.config.js'),
    TYPESCIPT: getAbsolutePath('tsconfig.json'),
  }
};