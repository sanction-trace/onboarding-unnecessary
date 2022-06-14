module.exports = function babel(api) {
  const BABEL_ENV = api.env();
  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
    // '@babel/preset-typescript',
  ];

  const plugins = [];

  if (BABEL_ENV === 'development') {
    plugins.push('react-hot-loader/babel'); // added for hot relading
  }
  return {
    presets,
    plugins,
  };
};
