const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const srcPath = resolve(__dirname, '../src');
const docsPath = resolve(__dirname, '../docs');

module.exports = {
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
  context: srcPath,
  module: {
    rules: [
      {
        enforce: 'pre', // Lint before babel transpiles; fail fast on syntax
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /(\.spec)\.(js|jsx)$/],
        include: [srcPath, docsPath],
        use: ['eslint-loader'],
      },

      // "url" loader works like "file" loader except that it embeds assets smaller than specified limit in bytes
      // as data URLs to avoid requests.
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
        },
      },

      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: [/node_modules/, /(\.spec)\.(js|jsx)$/],
        include: [srcPath, docsPath],
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself). It enables caching results
          // in ./node_modules/.cache/babel-loader/ directory for faster rebuilds.
          cacheDirectory: true,
        },
      },

      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // "css-loader" resolves paths in CSS and adds assets as dependencies.

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
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'adslot-ui-[name].css',
    }),
  ],
  performance: false,
};
