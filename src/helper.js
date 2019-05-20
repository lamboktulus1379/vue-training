import Vue from "vue";

export default Vue.mixin({
  methods: {
    parseThousand(number) {
      // 1.000.000
      if (number.toString().length > 0) {
        return number
          .toString()
          .replace(/[.]/g, "")
          .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      } else {
        return number;
      }
    },
    checkEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    convertTimeFormat(timestamp) {
      let date = new Date(timestamp);
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDay();
      return timestamp;
    },
    getCookieByKey(cookieKey) {
      if (cookieKey.length > 0) {
        let name = cookieKey + "=";
        let ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == " ") {
            c = c.substring(1);
          }

          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
      } else {
        return cookieKey;
      }
    },
    removeCookieByKey(cookieKey) {
      document.cookie = cookieKey + "=" + "";
    },
    hideText(text, length) {
      if (text.length > 0) {
        return text.substring(0, length);
      } else {
        return text;
      }
    },
    maskEmail(text) {
      if (this.checkEmail(text)) {
        return substring(text.indexOf("@"), text.indexOf("."));
      } else {
        return text;
      }
    },
    timeDifference(timestamp1, timestamp2) {
      let day =
        (new Date(timestamp2).getTime() - new Date(timestamp1).getTime()) /
        (1000 * 60 * 60 * 24);

      return day;
    },
    getDevice() {
      console.log(navigator);
    },
    capitalizeInitial(text) {
      if (text.length > 0) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      } else {
        return text;
      }
    }
  }
});
