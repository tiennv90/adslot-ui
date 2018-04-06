let plugins = ['transform-strict-mode'];

if (process.env.TYPE === 'development') {
  plugins = [...plugins, 'react-hot-loader/babel'];
}

module.exports = {
  presets: [
    [
      'env',
      {
        modules: process.env.NODE_ENV === 'development' || process.env.MODULE === 'es6' ? false : 'commonjs',
      },
    ],
    'react',
  ],
  plugins,
};
