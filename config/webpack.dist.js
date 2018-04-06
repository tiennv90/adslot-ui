const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const srcPath = path.resolve(__dirname, '../src');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: false,
  entry: srcPath,
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      'third-party': `${srcPath}/components/third-party`,
      'adslot-ui': `${srcPath}/components/adslot-ui`,
      alexandria: `${srcPath}/components/alexandria`,
      lib: `${srcPath}/lib/`,
      styles: `${srcPath}/styles/`, // When importing from `.scss` files prefix with ~ like `@import ~styles/variables`
    },
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'adslot-ui.min.js',
    libraryTarget: 'umd',
    library: 'AdslotUI',
  },
  externals: {
    lodash: {
      root: '_',
      commonjs2: 'lodash',
      commonjs: 'lodash',
      amd: 'lodash',
    },
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
    moment: 'moment',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('eslint-loader'),
        enforce: 'pre',
        include: srcPath,
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: srcPath,
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve('css-loader'),
            options: {
              minimize: true,
              sourceMap: false,
            },
          },
          {
            loader: 'postcss-loader', // "postcss-loader" applies autoprefixer to our CSS.
            options: {
              config: {
                path: 'config/postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
            },
          },
        ],
      },
    ],
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: false,
        parallel: true,
        uglifyOptions: {
          ecma: 8,
          compress: {
            warnings: false,
            comparisons: false,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
        },
      }),
      new OptimizeCSSAssetsPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'adslot-ui.min.css',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  performance: false,
};
