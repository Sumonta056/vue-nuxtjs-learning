import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./App.vue";
import "./style.css";
import router from "./router";
import plugins from "./plugins";

const app = createApp(App);

app.use(router);
app.use(plugins); // Register all plugins
app.mount("#app");

