<template>
  <div class="home">
    <p>{{ $store.getters.getLog }}</p>
    <img alt="Vue logo" src="../assets/logo.png">
    <userImage :userEmail="$store.getters.getEmail" :userToken="userToken"/>
    <button @click="logoutUser">Logout</button>
  </div>
</template>

<script>
// @ is an alias to /src
import userImage from "../components/userImage";
export default {
  data: () => {
    return {
      cookieName: "userToken",
      userEmail: "johndoe@dummy.com",
      userToken: "",
      checkToken: false
    };
  },
  name: "home",

  components: {
    userImage
  },

  methods: {
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
        this.userToken = user;
      } else {
        alert("You must login first!");
        this.$router.push("/login");
      }
    },
    clearCookie() {
      document.cookie = this.cookieName + "=" + "";
    },
    logoutUser() {
      this.clearCookie();
      this.$router.push("/login");
    }
  },

  mounted() {
    this.checkCookie();
  }
};
</script>
