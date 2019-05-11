<template>
  <div class="login">
    <h1>Login</h1>
    <boxLogin label="Email" v-model="userData.email"></boxLogin>
    <boxLogin label="Password" type="password" v-model="userData.password"></boxLogin>

    <button @click="loginUser">Login</button>
  </div>
</template>

<script>
import boxLogin from "../components/boxRegister";
import axios from "axios";

export default {
  data: () => {
    return {
      cookieName: "userToken",
      cookieValue: "",
      exdays: 1,
      userData: {
        email: "",
        password: ""
      }
    };
  },
  components: {
    boxLogin
  },

  methods: {
    loginUser() {
      if (this.validateData(this.userData)) {
        axios
          .post("https://reqres.in/api/login", this.userData)
          .then(res => {
            this.cookieValue = res.data.token;
            this.setCookie(this.cookieName, this.cookieValue, this.exdays);

            this.$store.dispatch("login");
            this.$store.dispatch("retEmail");

            this.$router.push("/");
          })
          .catch(err => {
            console.log("Error: ", err);
          })
          .finally(() => {
            // Finish
          });
      } else {
        alert("Field cannot be empty");
      }
    },

    validateData(vUserData) {
      const userDataEntries = Object.entries(vUserData);

      for (const [inputName, inputValue] of userDataEntries) {
        if (inputValue.length <= 0) {
          return false;
        }
      }
      return true;
    },

    setCookie(cookieName, cookieValue, exdays) {
      let d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      let expires = "expires=" + d.toUTCString();
      document.cookie =
        cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    },

    getCookie(cookieName) {
      let name = cookieName + "=";
      let ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }

        if (c.indexOf(name) == 0) {
          this.userToken = c.substring(name.length, c.length);

          return c.substring(name.length, c.length);
        }
      }
      return "";
    },

    checkCookie() {
      let user = this.getCookie(this.cookieName);
      if (user != "") {
        this.$router.push("/");
        this.checkCookie();
      }
    }
  }
};
</script>