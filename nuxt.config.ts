// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    routeRules: {
      "api/v1/**": {
        proxy: {
          to: "https://dummy.restapiexample.com/**",
        },
      },
    },
  },

})
