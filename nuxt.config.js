import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["@nuxtjs/prismic"],
  prismic: { endpoint: "your_repository_id" },
});
