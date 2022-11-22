import { createApp } from "vue";
import App from "./App.vue";
import "@/scripts/fontawsome.js";
import router from "@/scripts/router";

// components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.component("FontAwesomeIcon", FontAwesomeIcon);

app.use(router);
app.mount("#app");
