// https://nuxt.com/docs/api/configuration/nuxt-config

// fontawesome
export default defineNuxtConfig({
    pages: true,
    runtimeConfig: {
        public: {
            WS_HOST: process.env.WS_HOST,
            MAPBOX_TOKEN: process.env.MAPBOX_TOKEN
        }
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                    integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==',
                    crossorigin: 'anonymous',
                    referrerpolicy: 'no-referrer',
                },
            ],
        },
    },
    modules: [
        '@pinia/nuxt',
        '@nuxtjs/tailwindcss',
    ],
})
