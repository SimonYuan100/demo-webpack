var webpack = require('webpack');
module.exports = {
  entry: {
    home: "./b.js",
    about: "./a.js",
    contact: "./c.js"
  },
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   loader: "babel-loader",
      //   options: {
      //     presets: ['es2015']
      //   }
      // }
    ]
  }
}
