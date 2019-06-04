import Vue from "vue";
import VueI18N from "vue-i18n";
import en from "../langs/en.json";

Vue.use(VueI18N);

export const i18n = new VueI18N({
  locale: "en",
  fallbackLocale: "id",
  messages: {
    en
  }
});
