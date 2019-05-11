<template>
  <div id="app">
    <navigationMenu :label="menus[0].name" :link="menus[0].link" :display="menus[0].show"/>
    <navigationMenu :label="menus[1].name" :link="menus[1].link" :display="menus[1].show"/>
    <navigationMenu :label="menus[2].name" :link="menus[2].link" :display="menus[2].show"/>
    <navigationMenu :label="menus[3].name" :link="menus[3].link" :display="menus[3].show"/>
    <navigationMenu :label="menus[4].name" :link="menus[4].link" v-if="!$store.getters.getLog"/>
    <navigationMenu :label="menus[5].name" :link="menus[5].link" v-if="!$store.getters.getLog"/>
    <br>
    <router-view/>
  </div>
</template>
<script>
import navigationMenu from "@/components/navigationMenu";
export default {
  data: function() {
    return {
      cookieName: "userToken",
      menus: [
        { name: "Home", link: "/", id: 1, show: true },
        { name: "Contact", link: "/contact", id: 2, show: true },
        { name: "About", link: "/about", id: 3, show: true },
        {
          name: "Employees",
          link: "/employees",
          id: 4,
          show: true
        },
        {
          name: "Login",
          link: "/login",
          id: 5,
          show: true
        },
        {
          name: "Register",
          link: "/register",
          id: 6,
          show: true
        }
      ],
      loadAPI: false
    };
  },
  components: {
    navigationMenu
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
    }
  },

  updated() {
    this.menus[4].show = !this.$store.getters.getLog;
    this.menus[5].show = !this.$store.getters.getLog;
  }
};
</script>


<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#ul-users {
  li {
    list-style-type: none;
    text-align: left;
    border-bottom: 1px solid #ccc;
    padding: 5px;
  }
}

.active {
  height: 100px;
  width: 100px;
  border: 1px solid #ccc;
  background: blue;
  p {
    color: white;
  }
}

.container {
  width: 800px;
  flex-direction: row;
  display: flex;
}
.content {
  margin: 10px;
}

.isActive {
  height: 100px;
  float: left;
  width: 100px;
  border: 1px solid #ccc;
  background: white;
  p {
    color: blue;
  }
}
</style>
