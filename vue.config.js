const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://github.com/OleinikovaPolina/portfolio/dist/'
    : '/',
  transpileDependencies: true,
  pluginOptions: {
    vuetify: {
      treeShake: true,
      optionsPath: './vuetify.config.js'
    },
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
})
