const manifestJSON = require('./public/manifest.json')

module.exports = {
  pwa: {
    assetsVersion: '1',
    themeColor: manifestJSON.theme_color,
    name: manifestJSON.short_name,
    msTileColor: manifestJSON.background_color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
    iconPaths: {
      favicon32: 'img/icons/V2-favicon-32x32.png',
      favicon16: 'img/icons/V2-favicon-16x16.png',
      appleTouchIcon: 'img/icons/V2-apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/V2-safari-pinned-tab.svg',
      msTileImage: 'img/icons/V2-msapplication-icon-144x144.png'
    }
  }
}