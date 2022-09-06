import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
import Vue from 'vue'
//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

createApp(App).use(router).mount("#app");
Vue.component('vue-sidebar-menu-akahon', VueSidebarMenuAkahon);
//Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)
// Make BootstrapVue available throughout your project
// Optionally install the BootstrapVue icon components plugin