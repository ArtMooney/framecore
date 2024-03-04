import { createApp } from "vue";
import "./normalize.css";
import "./webflow.css";
// import "./framecore.webflow.css";
import App from "./App.vue";
import createRouter from "./routes";

createApp(App).use(createRouter()).mount("#app");
