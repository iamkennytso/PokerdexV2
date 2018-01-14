var webpack = require('webpack');
module.exports = {
  entry: './client/index.jsx',
  output: './publc/bundle.js',
  module: {
    loaders: [
      { 
        test: /\.jsx$/, 
        loader: 'babel-loader', 
        exclude: /node_modules/,                
        query: {
          presets: ['react']
        }
       }
    ],
  }
}