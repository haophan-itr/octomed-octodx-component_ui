const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src/index`,
  output: {
    path: `${__dirname}/public/`,
    publicPath: '/',
    chunkFilename: '[name].[chunkhash:4].js',
    filename: '[name].[chunkhash:4].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        // vendor1: {
        //   test: /[\\/]node_modules[\\/](react|react-*|babel)[\\/]/,
        //   name: 'vendor1',
        // },
        // vendor2: {
        //   test: /[\\/]node_modules[\\/](redux*)(reactstrap)(fbemitter)(socket.io-*)[\\/]/,
        //   name: 'vendor2',
        // },
        // vendor3: {
        //   test: /[\\/]node_modules[\\/](lodash|moment|axios|history|bootstrap)[\\/]/,
        //   name: 'vendor3',
        // },
        // vendor: {
        //   test: /[\\/]node_modules[\\/](!lodash)(!moment)(!axios)(!redux*)(!react)(!react-*)(!babel)(!history)(!reactstrap)(!fbemitter)(!socket.io-*)(!bootstrap)[\\/]/,
        //   name: 'vendor',
        // },

        // vendor: {
        //   test: /[\\/]node_modules[\\/]/,
        //   name(module) {
        //     // get the name. E.g. node_modules/packageName/not/this/part.js
        //     // or node_modules/packageName
        //     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

        //     // npm package names are URL-safe, but some servers don't like @ symbols
        //     return `npm.${packageName.replace('@', '')}`;
        //   },
        // },
      },
    },
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
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      }, {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      }, {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
        },
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      publicPath: '/',
      chunkFilename: '[name].[chunkhash:4].css',
      filename: '[name].[chunkhash:4].css',
    }),
    // new CopyWebpackPlugin([
    //   { from: './src/includes/', to: '' },
    // ]),
  ],
};
