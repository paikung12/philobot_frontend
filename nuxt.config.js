import colors from 'vuetify/es5/util/colors'
export default {
    // Global page headers: https://go.nuxtjs.dev/config-head


    ssr: false,
    generate: {
        fallback: true
    },
    target: "static",

    router: {

        base: "/Duplicatephilobot/"
    },
    // Glob


    head: {
        titleTemplate: '%s - philobot_frontend',
        title: 'philobot_frontend',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css' },
            { rel: 'stylesheet', href: 'https://emoji-css.afeld.me/emoji.css' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap' },
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },


        ],
        script: [
            { src: 'https://cdn.tailwindcss.com' },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@assets/main.css',
        '@assets/components.css',
        '@assets/styles.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/varibles.ts',
        '~/plugins/vuesax.js',
        '~/plugins/city.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],


    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                light: {
                    primary: '#4ade80',
                    accent: '#0d6efd',
                    secondary: '#8A8D93',
                    success: '#56CA00',
                    info: '#16B1FF',
                    warning: '#FFB400',
                    error: '#FF4C51',
                },
                dark: {
                    primary: '#1698f9',
                    accent: '#0d6efd',
                    secondary: '#8A8D93',
                    success: '#56CA00',
                    info: '#16B1FF',
                    warning: '#FFB400',
                    error: '#FF4C51',
                },
            },
        }
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    // "routes": [
    //     { "src": "/_nuxt/.+", "headers": { "cache-control": "s-maxage=31536000" } },
    //     { "src": "/(.*)", "dest": "/" }
    // ]
}