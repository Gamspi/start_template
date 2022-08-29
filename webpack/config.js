const { merge } = require('webpack-merge')
const { configBase } = require('./config.base')
const { configDev } = require('./config.dev')
const { configProd } = require('./config.prod')
const mode = process.env.NODE_ENV
module.exports = () => {
  if (mode === 'development') {
    console.log('Mode env: '+mode)
    return merge(configBase, configDev)
  } else if (mode === 'production') {
    console.log('Mode env: '+mode)
    return merge(configBase, configProd)
  }
  throw new Error('no matching configuration was found :(((((')
}
