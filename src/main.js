import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mixin from "./helper";

Vue.config.productionTip = false;
mixin;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
