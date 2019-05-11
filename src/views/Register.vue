<template>
  <div class="register">
    <h1>Register</h1>
    <boxRegister v-model="userData.email" label="Email"/>
    <boxRegister v-model="userData.password" label="Password" type="password"/>
    <button @click="sendDataRegister">Register</button>
  </div>
</template>
<script>
import boxRegister from "../components/boxRegister";
import navigationMenu from "../components/navigationMenu";
import axios from "axios";
export default {
  data: () => {
    return {
      username: "",
      items: [
        { whatInput: "Username", type: "text", value: "", ph: false },
        { whatInput: "Address", type: "text", value: "", ph: false },
        { whatInput: "Date Of Birth", type: "text", value: "", ph: false },
        { whatInput: "Password", type: "password", value: "", ph: false },
        {
          whatInput: "Confirm Password",
          type: "password",
          value: "",
          ph: false
        }
      ],
      userData: {
        email: "",
        password: ""
      }
    };
  },

  components: {
    boxRegister
  },
  methods: {
    checkEmit($event) {
      // console.log($event)
    },

    sendDataRegister() {
      let userEmail = this.userData.email;
      let userPassword = this.userData.password;

      if (userEmail.length > 0 && userPassword.length > 0) {
        axios
          .post("https://reqres.in/api/register", this.userData)
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          });
      }
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
      } else {
        this.$router.push("/register");
      }
    }
  },

  mounted() {
    this.checkCookie();
  }
};
</script>