const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

baseConfig.module.rules[1].options = ''

module.exports = merge(baseConfig, {
  target: 'node',
  devtool: '#source-map',
  entry: './src/entry-server.js',
  output: {
    libraryTarget: 'commonjs2'
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals: nodeExternals({
    // do not externalize CSS files in case we need to import it from a dep
    whitelist: /\.css$/
  }),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    }),
    new VueSSRServerPlugin()
  ]
})