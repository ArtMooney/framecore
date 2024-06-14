import { createApp } from "vue";
// import "./css/global.css";
import "./css/fonts.css";
import "./css/tailwind.css";
import App from "./App.vue";
import createRouter from "./routes";

createApp(App).use(createRouter()).mount("#app");
