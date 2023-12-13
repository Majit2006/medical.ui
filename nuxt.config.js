export default {
  env: {
    oidcClientId:
      process.env.NODE_ENV !== "production" ? "MEDICAL.UI" : "MEDICAL.UI-prod",
      // SERVER_URL: "https://192.168.102.175",



    // SERVER_URL: "https://192.168.102.247",
    SERVER_URL: "https://192.168.101.173:1234",
  },
  server: {
    // host: "192.168.101.196",
    // host: "192.168.0.101",
    port: 1080,
  },
  // Global page headers: https://go.nuxtjs.dev/config-headnode_modules\@nuxt\builder\dist\builder.js
  head: {
    title: "medical-ui",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: "devextreme/dist/css/dx.common.css", lang: "css" },
    { src: "devextreme/dist/css/dx.custom-theme.css", lang: "css" },
    { src: "vue-awesome-notifications/dist/styles/style.scss", lang: "css" },
    { src: "~/assets/themes/index.scss", lang: "scss" },
  ],

  styleResources: {
    scss: [
      "~/assets/themes/dx.variables.scss",
      "~/assets/themes/custom-variables.scss",
      "~/assets/themes/dx.globalcomponents.scss",
    ],
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/nuxt-client-init",
    "~/plugins/data-api",
    "~/plugins/awesome-notifications",
    "~/plugins/axios",
    "~/plugins/customStore",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/style-resources",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            name: "Turkmen",
            code: "tk-TM",
            iso: "tk-TM",
            file: "tk-TM.ts",
          },
        ],
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: "locale",
          alwaysRedirect: true,
          fallbackLocale: "tk-TM",
        },
        strategy: "no_prefix",
        lazy: true,
        langDir: "lang/",
        defaultLocale: "tk-TM",
        vuex: {
          moduleName: "i18n",
          syncLocale: true,
          syncMessages: true,
          syncRouteParams: true,
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
