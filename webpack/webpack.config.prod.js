const merge = require('webpack-merge')
const baseWebpackConfig = require('../webpack/webpack.config.base')

const devWebpackConfig = merge(baseWebpackConfig.clientConfig, {
  mode: 'production',
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})