const { resolve } = require('path');
const nodeExternals = require('webpack-node-externals');

// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pkg = require('./package.json');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: pkg.name,
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      }, {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true },
          },
        ],
      },

      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }, {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader', //* : Creates style nodes from JS strings
          },
          {
            loader: 'css-loader', //* : Translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', //* : Compiles Sass to CSS
          },
        ],
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|gif)$/,
        loader: 'url-loader',
      },
      {
        test: /\.(mp3|pdf)$/,
        loader: 'file-loader',
      },
    ],
  },
  target: 'node', // ingore all dependencies
  externals: [nodeExternals()],
};
