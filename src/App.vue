<!DOCTYPE html>
<template>
<div id="app">
  <html>
    <head>
      <meta charset="UTF-8">
    </head>
    <body>
      <template>
        <div class="container">
          <template>
            <header>
              <div class="container">
                <h1>Our Company</h1>
              </div>
            </header>
          </template>
          <template>
            <div class="container">
              <template>
                <div class="toggle-sidebar">
                  <a @click="toogleSidebar">==</a>
                </div>
                <navigationMenu></navigationMenu>
              </template>
            </div>
          </template>
          <template>
            <main>
              <template>
                <aside :style="{width: tSidebarAside? '20%':'5%'}" id="sidebar">Aside</aside>
              </template>
              <template>
                <section :style="{width: tSidebarSection? '95%':'80%'}" id="section">
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
    </body>
  </html>
</div>
</template>
 
<script>
import navigationMenu from "@/components/navigationMenu";
export default {
  data: function() {
    return {
      cookieName: "userToken",
      tSidebarSection: true,
      tSidebarAside: false,

      loadAPI: false
    };
  },
  components: {
    navigationMenu
  },

  methods: {
    toogleSidebar() {
      this.tSidebar = !this.tSidebar;
      this.tSidebarAside = !this.tSidebarAside;
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
    }
  },

  mounted() {
    this.$refs.footYear.innerHTML = new Date().getFullYear();
    this.getDevice;
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
    background: cornflowerblue;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    h1 {
      color: white;
      text-align: center;
    }
  }
  .navigation {
    position: relative;
  }

  .nav {
    background: rebeccapurple;
    position: relative;

    ul {
      list-style: none;
      z-index: 1111;
      box-shadow: 2px 2px 2px #171717;

      li {
        position: relative;
        justify-content: center;
        align-items: center;
        width: 100px;
        text-align: center;
        a {
          display: block;
          width: 100px;
          text-decoration: none;
          background: rebeccapurple;
          color: white;
          width: 100%;
          font-weight: bold;
          position: relative;
          font-size: 17px;
          padding: 5px;
          box-sizing: border-box;
          &.router-link-exact-active {
            background: cornflowerblue;
            transform: 10;
          }
        }
        a:hover {
          background: cornflowerblue;
        }
      }
    }

    & > ul {
      list-style: none;
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
      width: 100%;

      & > li {
        & > ul {
          list-style: none;
          position: absolute;
          top: 30px;
          left: 0;
          display: none;
          flex-flow: column;
          & > li {
            & > ul {
              position: absolute;
              top: 0px;
              left: 100px;
              display: none;
              flex-flow: column;
            }
          }
          & > li:hover > ul {
            display: flex;
          }
        }
      }
      & > li:hover > ul {
        display: flex;
      }
    }
  }

  .sticky {
    top: 0;
    width: 100%;
    position: fixed;
  }
  main {
    display: flex;
    flex-flow: row;
    width: 100%;
    margin-top: 3px;
    min-height: 500px;
    background: #ccc;

    aside {
      background: #ccc;
      padding: 5px;
      transition: width ease 1s;
    }
    section {
      background: #f5f5f5;
      padding: 5px;
      box-sizing: border-box;
      transition: width ease 2s;
    }

    .isSectionFull {
      width: 80% auto;
    }
    .isSidebarFull {
      width: 20% auto;
    }

    .isnSectionFull {
      width: calc(100% - 20px);
    }
    .isnSidebarFull {
      width: 20px;
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
