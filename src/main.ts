 import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ApiService from "./api/ApiService";
import ContactService from "./api/ContactService";

const API_URL = "http://localhost/laravel/public/api/" ;
const API_CONTACT_ENDPOINT = "contacts" ;

ApiService.initialize(API_URL);
ContactService.initialize(API_CONTACT_ENDPOINT)

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
