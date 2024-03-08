import { createApp } from "vue";
import "./css/normalize.css";
import "./css/webflow.css";
import "./css/framecore.webflow.css";
// import "./framecore.webflow.css";
import App from "./App.vue";
import createRouter from "./routes";

createApp(App).use(createRouter()).mount("#app");
