<template>
  <div class="navigation">
    <nav id="nav" ref="navMenu" class="nav">
      <div class="toggle-sidebar">
        <button v-if="isToggle" @click="toggleSidebar">>></button>
        <button v-else @click="toggleSidebar">X</button>
      </div>
      <ul>
        <li>
          <tooltip tooltip="This is dashboard!">
            <router-link to="/">{{$t('menu.dashboard')}}</router-link>
          </tooltip>
        </li>
        <li>
          <tooltip tooltip="This is Contact!">
            <router-link to="/contact">
              <font-awesome-icon icon="address-card" size="xs"/>
              {{ $t('menu.contact')}}
            </router-link>
          </tooltip>
        </li>
        <li>
          <router-link to="/about">{{$t('menu.about')}}</router-link>
        </li>
        <li>
          <router-link to="/CV">{{$t('menu.cv')}}</router-link>
        </li>
        <li>
          <router-link to="/employees">{{$t('menu.employees')}}</router-link>
        </li>
        <li>
          <router-link to="/products">{{$t('menu.products')}}</router-link>
        </li>
        <li>
          <router-link to="/login">{{$t('menu.login')}}</router-link>
        </li>
        <li>
          <router-link to="/register">{{$t('menu.register')}}</router-link>
        </li>
        <li>
          <router-link to="/gallery">{{$t('menu.gallery')}}</router-link>
        </li>
        <li>
          <router-link to="/quiz">{{$t('menu.quiz')}}</router-link>
        </li>
        <li>
          <router-link to="/companies">{{$t('menu.companies')}}</router-link>
          <ul>
            <li>
              <router-link to="/companyOne">{{$t('menu.companyOne')}}</router-link>
            </li>
            <li>
              <router-link to="/companyTwo">{{$t('menu.companyTwo')}}</router-link>
            </li>
            <li>
              <router-link to="/companyThree">{{$t('menu.companyThree')}}</router-link>
            </li>
            <li>
              <router-link to="/companyFour">{{$t('menu.companyFour')}}</router-link>
              <ul>
                <li>
                  <router-link to="/companyFour1">{{$t('menu.companyFourOne')}}</router-link>
                </li>
                <li>
                  <router-link to="/companyFour2">{{$t('menu.companyFourTwo')}}</router-link>
                </li>
                <li>
                  <router-link to="/companyFour3">{{$t('menu.companyFourThree')}}</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/tasks">{{$t('menu.tasks')}}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data: () => {
    return {};
  },

  props: ["toggleSidebar", "isToggle"],

  methods: {
    toggleContent() {
      if (this.$refs.btnToggle.innerHTML == "==") {
        this.$refs.bToggle.innerHTML = "X";
      } else {
        this.$refs.btnToggle.innerHTML = "==";
      }
    }
  },

  mounted() {
    document.addEventListener("scroll", function() {
      let nav = document.getElementById("nav");
      let oTop = nav.offsetTop;

      if (window.pageYOffset > oTop) {
        nav.classList.add("sticky");
      } else {
        nav.classList.remove("sticky");
      }
    });
  }
};
</script>
<style lang="scss" >
.icon::before {
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}

.login::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 900;
  content: "\f007";
}

.tps::before {
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  content: "\f1ea";
}

.twitter::before {
  font-family: "Font Awesome 5 Brands";
  content: "\f099";
}
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}

.toggle-sidebar {
  position: absolute;
  z-index: 1000;
  color: white;
  left: 5px;
  top: 5px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 0.5px #ccc;

  &:hover {
    cursor: pointer;
  }
  button {
    text-align: center;
    width: 20px;
    height: 20px;
    text-align: center;
    font-weight: bold;
  }
}
</style>


