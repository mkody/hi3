module.exports = {
  productionSourceMap: false,

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/valks',
        '/guides'
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
