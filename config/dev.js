// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const { resolve } = require('path');

const commonConfig = require('./common');

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || '8888';

const publicPath = '/docs/assets/';

module.exports = merge(commonConfig, {
  entry: [
    'babel-polyfill',
    // activate HMR for React (needs to be before everything except polyfills)
    'react-hot-loader/patch',
    // bundle the client for webpack-dev-server and connect to the provided endpoint
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    // bundle the client for hot reloading, only- means to only hot reload for successful updates
    'webpack/hot/only-dev-server',
    // the entry point of our app
    '../docs/run',
  ],
  output: {
    filename: 'app.js',
    path: resolve(__dirname, '../dist/assets'),
    publicPath, // necessary for HMR to know where to load the hot update chunks
  },
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  devServer: {
    hot: true, // enable HMR on the server
    contentBase: resolve(__dirname, '../docs'),
    publicPath, // match the output `publicPath`
    port: PORT,
    host: HOST,
    disableHostCheck: true,
    noInfo: true,
    historyApiFallback: {
      rewrites: [
        {
          // remove '/docs' from the path, since we only expose to public under /assets
          from: /\/docs\/assets/,
          to: context => context.parsedUrl.pathname.substring(5),
        },
      ],
    },
    stats: {
      assets: false,
      chunks: false,
      children: false,
      colors: true,
      errorDetails: true,
      errors: true,
      timings: false,
      warnings: true,
    },
    open: `http://${HOST}:${PORT}`,
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
    new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
  ],
});
