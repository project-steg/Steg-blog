require("dotenv").config();
const { API_KEY } = process.env;

const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');


export default {
  mode: "spa",
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#fff" },
  css: ["@/assets/style/reset.css"],
  plugins: ["~/plugins/markdownit"],
  buildModules: [],
  modules: [],
  build: {
    analyze: true,
    minimize:true,
    minimizer: [
      new TerserPlugin(),
    ],
    extend(config, ctx) {}
  },
  modules: [
    "@nuxtjs/axios",
    "bootstrap-vue/nuxt",
  ],
  axios: {},
  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  },
  bootstrapVue: {
    components: [
      'BContainer',
      'BRow',
      'BCol',
    ]
  },
  generate: {
    fallback: true
  },
  env: {
    API_KEY
  }
};
