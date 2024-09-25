import { createApp } from "vue";
// import "./style.css";
import App from "./App.vue";
import router from "./router"; // 引入路由
import { createPinia } from "pinia"; // 引入pinia
const app = createApp(App);

app.use(router); // 使用路由
app.use(createPinia()); // 使用pinia

app.mount("#app");
