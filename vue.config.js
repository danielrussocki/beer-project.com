const { resolve: _resolve } = require('path')
const joinSrc = (/** @type {string} */ s) => _resolve(__dirname, 'src', s)

module.exports = {
  configureWebpack: {
    devtool:
      process.env.NODE_ENV === 'development'
        ? 'source-map'
        : 'inline-source-map',
    resolve: {
      extensions: ['.js', '.ts', '.json', '.vue'],
      alias: {
        // '@': path.resolve(__dirname, 'src'),
        '@app': joinSrc('application'),
        '@mod': joinSrc('modules')
      }
    }
  },
  transpileDependencies: ['vuetify']
}
