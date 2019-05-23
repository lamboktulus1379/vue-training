import Vue from "vue";
import tooltip from "@/components/boxTooltip";

export default Vue.mixin({
  components: {
    tooltip
  },
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
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let date = new Date(timestamp);
      let yearNumber = date.getFullYear();
      let monthNumber = date.getMonth();
      let dayNumber = date.getDate();
      return months[monthNumber] + " " + dayNumber + ", " + yearNumber;
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
    /**
     * @summary Mask middle characthers of email
     * Ex: lambok@mssolution.id to l****k@mssolution.id
     * @param {} text
     */
    maskEmail(text) {
      console.log(this.checkEmail(text));
      if (this.checkEmail(text)) {
        let length = text.indexOf("@") - 1;
        let toReplace = "";
        let replaceMent = "";
        for (let i = 1; i < length; i++) {
          toReplace += text.charAt(i);
          replaceMent += "*";
        }

        return text.replace(toReplace, replaceMent);
      } else {
        return text;
      }
    },

    maskEmail2(text) {
      return text.toString().replace(/(?<=.[3]).(?=[^@]*?.@)/, "*");
    },
    timeDifference(timestamp1, timestamp2) {
      let day =
        (new Date(timestamp2).getTime() - new Date(timestamp1).getTime()) /
        (1000 * 60 * 60 * 24);

      return day;
    },
    getDevice() {
      let nAppName = navigator.appName;
      let nAppVersion = navigator.appVersion;
      let nCookieEnabled = navigator.cookieEnabled;
      let nLanguange = navigator.language;
      let nOnline = navigator.onLine;
      let nProduct = navigator.product;

      return (
        "Platform: " +
        navigator.platform +
        ", Browser: " +
        navigator.appCodeName
      );
    },
    capitalizeInitial(text) {
      if (text.length > 0) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      } else {
        return text;
      }
    },

    capitalizeWord(text) {
      return text.replace(/(\b[a-z](?!\s))/g, function(x) {
        return x.toUpperCase();
      });
    },
    drawGraph() {
      let ctx = document.getElementById("box-graph-canvas");
      ctx.getContext("2d");
      ctx.moveTo(75, 0);
      ctx.lineTo(200, 100);
      ctx.stroke();
    }
  }
});
