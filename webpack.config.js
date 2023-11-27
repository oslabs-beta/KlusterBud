const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

module.exports = {
  entry: './client/index.jsx',

  devServer: {
    host: 'localhost',
    port: 8080,
    compress: true,
    hot: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    proxy: {
      '/': 'http://localhost:3000',
    },
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './client/index.html',
    }),
  ],

  mode: process.env.NODE_ENV,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: 'eval-source-map',
};
