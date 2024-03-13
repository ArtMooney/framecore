import { createApp } from "vue";
import "../devlink/global.css";
import App from "./App.vue";
import createRouter from "./routes";

createApp(App).use(createRouter()).mount("#app");
