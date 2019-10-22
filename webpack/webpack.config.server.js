const merge = require('webpack-merge')
const baseWebpackConfig = require('../webpack/webpack.config.base')

console.log('serverproductions....');
const serverWebpackConfig = merge(baseWebpackConfig.serverConfig, {
  mode: 'production',
  
})
module.exports = new Promise((resolve, reject)=>{
  resolve(serverWebpackConfig)
});
