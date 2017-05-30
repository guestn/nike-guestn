"use strict";

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname, //current folder
  entry: {
    index: './src/index.js' //entry point
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "./dist",
  },
  output: {
    path: path.resolve('./dist'), //save result in 'dist'
    filename: 'app.js'
  },
  module: {
    loaders: [
      { //transpile
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'] // stage-0 is ES7
        }
      }
    ]
  }
};