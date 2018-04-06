const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const srcPath = path.resolve(__dirname, '../src');
const docPath = path.resolve(__dirname, '../docs');

module.exports = {
  mode: 'production',
  bail: true,
  devtool: false,
  entry: path.resolve(docPath, 'run'),
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
    filename: 'adslot-ui.doc.js',
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: require.resolve('eslint-loader'),
        enforce: 'pre',
        include: [docPath, srcPath],
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [docPath, srcPath],
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
      filename: 'adslot-ui.doc.css',
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  ],
  performance: false,
};
