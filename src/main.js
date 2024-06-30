import { createApp } from "vue";
import "./css/fonts.css";
import "./css/tailwind.css";
import App from "./App.vue";
import createRouter from "./routes";
import { VueHeadMixin, createHead } from "@unhead/vue";
import { StoryblokVue, apiPlugin } from "@storyblok/vue";

import Grid from "./components/Grid.vue";
import Page from "./components/Page.vue";
import Teaser from "./components/Teaser.vue";
import Feature from "./components/Feature.vue";

const app = createApp(App);

app.component("Grid", Grid);
app.component("Page", Page);
app.component("Teaser", Teaser);
app.component("Feature", Feature);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_TOKEN,
  bridge: import.meta.env.NODE_ENV !== "production", // optimizes by excluding the bridge on production
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

app.use(createHead()).use(createRouter()).mixin(VueHeadMixin);

app.mount("#app");
