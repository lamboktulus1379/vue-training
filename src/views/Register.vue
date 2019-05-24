<template>
  <div class="form-register">
    <template>
      <boxModal
        v-if="clickRegister"
        :modalTitle="mTitle"
        :modalBody="mBody"
        :modalFoot="mFoot"
        :hideModal="hModal"
        :registerComplete="rComplete"
      >
        <div>
          <button @click="hModal">Cancel</button>
        </div>
        <div>--=--</div>
        <div>
          <button @click="rComplete">Okay</button>
        </div>
      </boxModal>
    </template>

    <template>
      <h1>Register</h1>
      <div class="form-wrapper">
        <div class="form-content">
          <boxEmail v-model="userData.email" label="Email"/>
        </div>
        <div class="form-content">
          <boxPassword v-model="userData.password" label="Password" type="password"/>
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
          <boxFile @change="fCheckImage" val/>
        </div>

        <div class="form-content">
          <button ref="refRegister" @click="sendDataRegister">Register</button>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import boxRegister from "../components/boxRegister";
import boxEmail from "../components/boxEmail";
import boxPassword from "../components/boxPassword";
import boxRadio from "../components/boxRadio";
import boxCheck from "../components/boxCheck";
import boxSelect from "../components/boxSelect";
import boxJob from "../components/boxJob";
import boxJobArea from "../components/boxJobArea";
import boxFile from "../components/boxFile";
import boxModal from "../components/boxModal";

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
        jobSeek: "",
        image: ""
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
      jobValue: "",
      image: "",

      mTitle: "This is a title",
      mBody: "This is a body",
      mFoot: "This is a footer",

      clickRegister: false
    };
  },

  components: {
    boxEmail,
    boxPassword,
    boxRadio,
    boxCheck,
    boxSelect,
    boxJob,
    boxJobArea,
    boxFile,
    boxModal
  },
  methods: {
    hModal() {
      this.clickRegister = false;
    },
    rComplete() {
      this.clickRegister = false;
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
        this.$store.dispatch("retJobSeek", this.userData.jobSeek);
        this.$store.dispatch("retImage", this.image);
        console.log(this.image);

        this.$router.push("/");
      }
    },
    fCheckImage($event) {
      let file = $event;
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function() {
        this.image = reader.result;

        console.log(this.image);
      };
      reader.onerror = function() {
        console.log(reader.error);
      };
    },
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
      this.userData.jobSeek = this.jobValue;
      this.jobFilter = [];
    },
    addHobby() {},
    checkEmit($event) {
      // console.log($event)
    },

    sendDataRegister() {
      this.clickRegister = true;

      this.mTitle = "Register";
      this.mBody = "Are you sure you have filled in the data correctly?";
      this.mFoot = "<< --- >>";

      this.$refs.refRegister.innerText = "Processing register";
      console.log(this.$refs);
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
    margin-top: 10px;
    border-radius: 0 0 5px 0;
    padding: 5px;
    border: 1px solid #ccc;
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
