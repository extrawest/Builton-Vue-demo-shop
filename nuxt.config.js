export default {
  mode: 'universal',
  env: {
    baseUrl: process.env.BASE_URL || 'http://10.1.0.76:3000'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.png'}
    ]
  },
  loading: {color: '#fff', height: '4px'},
  css: [{src: '~/assets/main.less', lang: 'less'}],
  plugins: [{src: '~/plugins/builtOn.js', mode: 'server'}],
  modules: ['cookie-universal-nuxt'],
  buildModules: ['@nuxt/typescript-build'],
  serverMiddleware: [
    '~/api/index.js',
  ]
}
