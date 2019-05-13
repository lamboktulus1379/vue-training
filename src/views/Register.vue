<template>
  <div class="register">
    <h1>Register</h1>
    <boxRegister v-model="userData.email" label="Email"/>
    <boxRegister v-model="userData.password" label="Password" type="password"/>

    <boxRadio v-model="userData.gender" label="Male"/>
    <boxRadio v-model="userData.gender" label="Female"/>
    <!-- :value="userData.gender" @input="$event.target.value" -->

    <boxCheck v-model="userData.hobby[0]" label="Fishing"/>
    <boxCheck v-model="userData.hobby[1]" label="Swimming"/>
    <boxCheck v-model="userData.hobby[2]" label="Football"/>

    <boxSelect v-model="userData.placeOfBirth" :cities="cities"/>

    <br>
    <button @click="sendDataRegister">Register</button>
  </div>
</template>
<script>
import boxRegister from "../components/boxRegister";
import navigationMenu from "../components/navigationMenu";
import boxRadio from "../components/boxRadio";
import boxCheck from "../components/boxCheck";
import boxSelect from "../components/boxSelect";

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
      gender: ["Male", "Female"],
      userData: {
        email: "",
        password: "",
        gender: "Female",
        hobby: [],
        placeOfBirth: ""
      },

      cities: ["Medan", "Jakarta", "Surabaya"]
    };
  },

  components: {
    boxRegister,
    boxRadio,
    boxCheck,
    boxSelect
  },
  methods: {
    addHobby() {},
    checkEmit($event) {
      // console.log($event)
    },

    getRadioValue() {
      this.userData.gender = "aaaa";
      alert("AAAA");
    },

    sendDataRegister() {
      let userEmail = this.userData.email;
      let userPassword = this.userData.password;

      if (userEmail.length > 0 && userPassword.length > 0) {
        /* axios
          .post("https://reqres.in/api/register", this.userData)
          .then(data => {
            console.log(data);
          })
          .catch(error => {
            console.log(error);
          }); */

        this.$store.dispatch("login");
        this.$store.dispatch("retEmail", this.userData.email);
        this.$store.dispatch("retPassword", this.userData.password);
        this.$store.dispatch("retGender", this.userData.gender);
        this.$store.dispatch("retHobby", this.userData.hobby);
        this.$store.dispatch("retPlaceOfBirth", this.userData.placeOfBirth);

        console.log(this.userData.placeOfBirth);

        this.$router.push("/");
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