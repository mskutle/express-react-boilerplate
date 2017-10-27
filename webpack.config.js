const path = require('path');

module.exports = {
  entry: {
    home: './src/client/home/home.js',
    layout: './src/client/layout.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}