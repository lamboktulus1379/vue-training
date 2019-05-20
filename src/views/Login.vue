<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form-wrapper">
      <div class="form-content">
        <boxEmail v-model="userData.email" label="Email"/>
      </div>
      <div class="form-content">
        <boxPassword v-model="userData.password" label="Password" type="password"/>
      </div>
      <div class="form-content">
        <button @click="loginUser">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import boxEmail from "../components/boxEmail";
import boxPassword from "../components/boxPassword";
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
    boxEmail,
    boxPassword
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
            this.$store.dispatch("retEmail", this.userData.email);
            this.$store.dispatch("retPassword", this.userData.password);

            this.$router.push("/");
          })
          .catch(err => {
            console.log("Error: ", err);
          })
          .finally(() => {
            // Finish
          });

        this.$router.push("/");
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
<style lang="scss" scoped>
.form-wrapper {
  width: 500px;

  .form-content {
    margin: 5px;
    padding: 5px;
    box-shadow: 1px 1px 2px #ccc;
  }
}
</style>
