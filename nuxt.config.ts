// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  css: ["~/assets/styles/main.scss"],
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      wordpressUrl: "http://valhalla-visionaries.local/wp-json/wp/v2/",
    },
  },
});
