<template>
  <div class="form-register">
    <h1>Register</h1>
    <div class="form-wrapper">
      <div class="form-content">
        <boxRegister v-model="userData.email" label="Email"/>
      </div>
      <div class="form-content">
        <boxRegister v-model="userData.password" label="Password" type="password"/>
      </div>

      <div class="form-content">
        <boxRadio v-model="userData.gender" label="Male"/>
        <boxRadio v-model="userData.gender" label="Female"/>
      </div>
      <!-- :value="userData.gender" @input="$event.target.value" -->

      <div class="form-content">
        <boxCheck v-model="userData.hobby[0]" label="Fishing"/>
        <boxCheck v-model="userData.hobby[1]" label="Swimming"/>
        <boxCheck v-model="userData.hobby[2]" label="Football"/>
      </div>

      <div class="form-content">
        <boxSelect v-model="userData.placeOfBirth" :cities="cities"/>
      </div>

      <div class="form-content">
        <boxJob @input="fJobFilter" :val="jobValue" :placeholder="placeholder"/>
        <boxJobArea v-if="jobFilter.length" @click="fJobSend" :jobs="jobFilter"/>
      </div>

      <div class="form-content">
        <button @click="sendDataRegister">Register</button>
      </div>
    </div>
  </div>
</template>
<script>
import boxRegister from "../components/boxRegister";
import navigationMenu from "../components/navigationMenu";
import boxRadio from "../components/boxRadio";
import boxCheck from "../components/boxCheck";
import boxSelect from "../components/boxSelect";
import boxJob from "../components/boxJob";
import boxJobArea from "../components/boxJobArea";

import axios from "axios";
export default {
  data: () => {
    return {
      username: "",
      placeholder: "What Job are you looking for",

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
        placeOfBirth: "",
        job: ""
      },

      cities: ["Medan", "Jakarta", "Surabaya"],

      jobs: [
        "Programmer",
        "UI/UX Designer",
        "Graphic Designer",
        "Software Engineer",
        "Admin"
      ],
      jobExist: false,
      jobFilter: [],
      jobValue: ""
    };
  },

  components: {
    boxRegister,
    boxRadio,
    boxCheck,
    boxSelect,
    boxJob,
    boxJobArea
  },
  methods: {
    fJobFilter($event) {
      let dataInput = $event;
      if (dataInput.length > 0) {
        this.jobFilter = this.jobs.filter(function(dt) {
          if (dt.includes(dataInput)) {
            return dt;
          } else {
            return false;
          }
        });
      } else {
        this.jobFilter = [];
      }
    },

    fJobSend($event) {
      let dataSend = $event;

      this.jobValue = dataSend;
      this.jobFilter = [];
    },
    addHobby() {},
    checkEmit($event) {
      // console.log($event)
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

<style lang="scss" scoped>
.form-wrapper {
  width: 500px;

  .form-content {
    margin: 5px;
    padding: 5px;
    box-shadow: 1px 1px 2px #ccc;

    .showClass {
      visibility: visible;
    }
    .notShowClass {
      visibility: hidden;
    }
  }
}
</style>
