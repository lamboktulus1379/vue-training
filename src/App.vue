<template>
  <div id="app">
    <template>
      <div class="container">
        <template>
          <header>
            <div class="container">
              <h1>Header</h1>
            </div>
          </header>
        </template>
        <template>
          <div class="container">
            <nav>
              <ul>
                <navigationMenu
                  :label="menus[0].name"
                  :link="menus[0].link"
                  :display="menus[0].show"
                />
                <navigationMenu
                  :label="menus[1].name"
                  :link="menus[1].link"
                  :display="menus[1].show"
                />
                <navigationMenu
                  :label="menus[2].name"
                  :link="menus[2].link"
                  :display="menus[2].show"
                />
                <navigationMenu
                  :label="menus[3].name"
                  :link="menus[3].link"
                  :display="menus[3].show"
                />
                <navigationMenu
                  :label="menus[4].name"
                  :link="menus[4].link"
                  :display="menus[4].show"
                />
                <navigationMenu
                  :label="menus[5].name"
                  :link="menus[5].link"
                  v-if="!$store.getters.getLog"
                />
                <navigationMenu
                  :label="menus[6].name"
                  :link="menus[6].link"
                  v-if="!$store.getters.getLog"
                />
                <navigationMenu
                  :label="menus[7].name"
                  :link="menus[7].link"
                  :display="menus[7].show"
                />
                <navigationMenu
                  :label="menus[8].name"
                  :link="menus[8].link"
                  :display="menus[8].show"
                />
              </ul>
            </nav>
          </div>
        </template>
        <template>
          <main>
            <template>
              <aside>Aside</aside>
            </template>
            <template>
              <section>
                <template>
                  <router-view/>
                </template>
              </section>
            </template>
          </main>
        </template>
        <template>
          <footer>
            <p>
              &copy; Our Website
              <span ref="footYear"></span>
            </p>
          </footer>
        </template>
      </div>
    </template>
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
          name: "Products",
          link: "/products",
          id: 5,
          show: true
        },
        {
          name: "Login",
          link: "/login",
          id: 6,
          show: true
        },
        {
          name: "Register",
          link: "/register",
          id: 7,
          show: true
        },
        {
          name: "Gallery",
          link: "/gallery",
          id: 8,
          show: true
        },
        {
          name: "Quiz Time",
          link: "/quiz",
          id: 8,
          show: true
        },
        {
          name: "Dashboard",
          link: "/dashboard",
          id: 8,
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
  },

  mounted() {
    this.$refs.footYear.innerHTML = new Date().getFullYear();
  }
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
  flex-flow: column;
  width: 100%;

  header {
    background: black;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    h1 {
      color: white;
      text-align: center;
    }
  }

  nav {
    background: rebeccapurple;
    ul {
      list-style: none;
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50px;
      li {
        font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        font-size: 1.25em;
      }
      a {
        text-decoration: none;
        padding: 5px;
        color: white;
        height: 100%;
        &.router-link-exact-active {
          background: cornflowerblue;
        }
      }
      a:hover {
        background: cornflowerblue;
      }
    }
  }
  main {
    display: flex;
    flex-flow: row;
    width: 100%;
    min-height: 500px;
    background: #ccc;

    aside {
      background: #ccc;
      width: 20%;
      padding: 5px;
    }
    section {
      background: #f5f5f5;
      width: 80%;
      padding: 5px;
    }
  }

  footer {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    background: #171717;
    height: 50px;

    p {
      color: white;
    }
  }
}
</style>
