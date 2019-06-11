import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./helper";
import { i18n } from "./plugins/i18n";
import FlagIcon from "vue-flag-icon";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import "@/assets/fonts/all.css";

library.add(faCoffee, faAddressCard);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(FlagIcon);
mixin;
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
