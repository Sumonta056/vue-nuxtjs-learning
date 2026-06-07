import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router/index.js";
import plugins from "./plugins/index.js";

const app = createApp(App);

app.use(router);
app.use(plugins); // Register all plugins
app.mount("#app");

