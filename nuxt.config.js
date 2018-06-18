module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'app-git-user',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' },
            { name: 'mobile-web-app-capable', content: 'yes' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ]
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    plugins: ['~/plugins/buefy.js'],
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    modules: [
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa',
        // Or if you have custom bootstrap CSS...
        ['bootstrap-vue/nuxt', { css: false }],
    ],
    manifest: {
        icons: [
            {
                "src": "https://sammyspizzawaitepark.com/images/icons/android-chrome-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "https://sammyspizzawaitepark.com/images/icons/android-chrome-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            },
            {
                "src": "https://sammyspizzawaitepark.com/images/icons/android-chrome-144x144.png",
                "sizes": "144x144",
                "type": "image/png"
            }
        ],
        name: 'Git User Search',
        short_name: 'Git User',
        lang: 'en',
        start_url:"/",
        display: "standalone",
        description: 'This application allows you search git users and view there profiles in detail',
        theme_color: '#188269',
        background_color: '#000'
    }
}