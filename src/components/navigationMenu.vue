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
            <router-link to="/">Dashboard</router-link>
          </tooltip>
        </li>
        <li>
          <tooltip tooltip="This is Contact!">
            <router-link to="/contact">Contact</router-link>
          </tooltip>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/employees">Employees</router-link>
        </li>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link to="/gallery">Gallery</router-link>
        </li>
        <li>
          <router-link to="/quiz">Quiz Time</router-link>
        </li>
        <li>
          <router-link to="/companies">Companies</router-link>
          <ul>
            <li>
              <router-link to="/companyOne">Company1</router-link>
            </li>
            <li>
              <router-link to="/companyTwo">Company2</router-link>
            </li>
            <li>
              <router-link to="/companyThree">Company3</router-link>
            </li>
            <li>
              <router-link to="/companyFour">Company4</router-link>
              <ul>
                <li>
                  <router-link to="/companyFour1">Company41</router-link>
                </li>
                <li>
                  <router-link to="/companyFour2">Company42</router-link>
                </li>
                <li>
                  <router-link to="/companyFour3">Company43</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/tasks">Tasks</router-link>
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


