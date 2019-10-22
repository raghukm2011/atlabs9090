const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.config.base')

const devWebpackConfig = merge(baseWebpackConfig.clientConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})
module.exports = devWebpackConfig;