const path = require('path')

module.exports = {
  productionSourceMap: false,

  chainWebpack: config => {
    config.plugin('copy').tap(([pathConfigs]) => {
      pathConfigs.push({
        from: path.resolve(__dirname, './src/assets/md'),
        to: path.resolve(__dirname, './dist/md'),
        toType: 'dir'
      })
      return [pathConfigs]
    })
    return config
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/valks',
        '/guides',
        '/news'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
      customRendererConfig: {
        inject: {
          donotfetch: true
        }
      }
    }
  }
}
