import tailwindcss from "@tailwindcss/vite";

const imageBaseUrl = "https://pub-0eb6cf2c07684686b6436a5e5abf1077.r2.dev";
const siteUrl = "https://www.framecore.se";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-03-01",

  devtools: { enabled: true },

  css: ["/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  nitro: {
    preset: "cloudflare_module",
    experimental: {
      tasks: true,
    },
    scheduledTasks: {
      // Runs on the 1st and 27th of each month at 03:00 UTC (≈ every 26 days)
      "0 3 1,27 * *": ["keep-files-alive"],
    },
    prerender: {
      crawlLinks: false,
      ignore: [],
    },
  },

  runtimeConfig: {
    mailgunApiKey: process.env.NUXT_MAILGUN_API_KEY,
    emailFrom: process.env.NUXT_EMAIL_FROM,
    emailTo: process.env.NUXT_EMAIL_TO,
    unsubscribeTo: process.env.NUXT_UNSUBSCRIBE_TO,
    userName: process.env.NUXT_USERNAME,
    userPass: process.env.NUXT_USERPASS,
    torboxApiKey: process.env.NUXT_TORBOX_API_KEY,

    public: {
      userName: process.env.NUXT_PUBLIC_USERNAME,
      userPass: process.env.NUXT_PUBLIC_USERPASS,
      imageBaseUrl,
      publicSiteUrl: siteUrl,
    },
  },

  modules: [
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxt/image",
    "unplugin-icons/nuxt",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],

  image: {
    provider: "weserv",

    weserv: {
      baseURL: imageBaseUrl,
      modifiers: {
        format: "webp",
        quality: 65,
      },
    },

    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },

  robots: {
    rules: () => {
      if (process.env.CF_PAGES_BRANCH !== "main") {
        return [
          {
            userAgent: "*",
            disallow: "/",
          },
        ];
      }

      return [
        {
          userAgent: "*",
          allow: "/",
        },
      ];
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || process.env.CF_PAGES_URL,
  },

  sitemap: {
    gzip: true,
  },

  app: {
    keepalive: true,
    head: {
      htmlAttrs: {
        lang: "sv-SE",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      // meta: [
      //   {
      //     name: "google-site-verification",
      //     content: "",
      //   },
      // ],
    },
  },
});
